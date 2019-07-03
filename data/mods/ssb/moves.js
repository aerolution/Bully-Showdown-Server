'use strict';

// Used for bumbadadabum and Snaquaza's move
const RandomStaffBrosTeams = require('./random-teams');
/** @type {typeof import('../../../sim/pokemon').Pokemon} */
const Pokemon = require(/** @type {any} */ ('../../../.sim-dist/pokemon')).Pokemon;

/** @type {{[k: string]: ModdedMoveData}} */
let BattleMovedex = {
	/*
	// Example
	"moveid": {
		accuracy: 100, // a number or true for always hits
		basePower: 100, // Not used for Status moves, base power of the move, number
		category: "Physical", // "Physical", "Special", or "Status"
		desc: "", // long description
		shortDesc: "", // short description, shows up in /dt
		id: "moveid",
		name: "Move Name",
		pp: 10, // unboosted PP count
		priority: 0, // move priority, -6 -> 6
		flags: {}, // Move flags https://github.com/Zarel/Pokemon-Showdown/blob/master/data/moves.js#L1-L27
		secondary: {
			status: "tox",
			chance: 20,
		}, // secondary, set to null to not use one. Exact usage varies, check data/moves.js for examples
		target: "normal", // What does this move hit?
		// normal = the targeted foe, self = the user, allySide = your side (eg light screen), foeSide = the foe's side (eg spikes), all = the field (eg raindance). More can be found in data/moves.js
		type: "Water", // The move's type
		// Other useful things
		noPPBoosts: true, // add this to not boost the PP of a move, not needed for Z moves, dont include it otherwise
		isZ: "crystalname", // marks a move as a z move, list the crystal name inside
		zMoveEffect: '', // for status moves, what happens when this is used as a Z move? check data/moves.js for examples
		zMoveBoost: {atk: 2}, // for status moves, stat boost given when used as a z move
		critRatio: 2, // The higher the number (above 1) the higher the ratio, lowering it lowers the crit ratio
		drain: [1, 2], // recover first num / second num % of the damage dealt
		heal: [1, 2], // recover first num / second num % of the target's HP
	},
	*/
	// Brettibus
	rant: {
		accuracy: 95,
		basePower: 95,
		category: "Special",
		shortDesc: "Badly poisons all Pokemon on the field, traps target for 3 turns. Not very effective on Steel types.",
		id: "rant",
		name: "Rant",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		ignoreImmunity: true,
		volatileStatus: 'rant',
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Chatter', target);
			this.add('-anim', source, 'Swagger', target);
		},
		onHit(target, source, move) {
			if (!target.trySetStatus('tox', source)) {
				if (!target.volatiles['substitute'] && !target.status && !target.side.getSideCondition('safeguard') && (target.hasType('Steel') || target.hasType('Poison'))) {
					let status = this.getEffect('tox');
					target.status = status.id;
					target.statusData = {id: status.id, target: target, source: source, stage: 0};
					this.add('-status', target, target.status);
				}
			}
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return -1;
		},
		effect: {
			duration: 3,
			onStart() {
				this.add('-message', 'It became stuck in the rant!');
			},
			onResidualOrder: 11,
			onEnd(pokemon) {
				this.add('-message', 'The rant ended.');
			},
			onTrapPokemon(pokemon) {
				if (this.effectData.source && this.effectData.source.isActive) pokemon.tryTrap();
			},
		},
		secondary: {
			chance: 100,
			self: {
				status: 'tox',
			},
		},
		target: "normal",
		type: "Poison",
	},
	// Doesnt
	delay: {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		shortDesc: "Flinches the target and lowers its Speed by 1. The user switches out. Fails if the user has no replacement.",
		id: "delay",
		name: "Delay",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryMove(pokemon) {
			this.attrLastMove('[still]');
			if (pokemon.m.aTrigger === 1) {
				this.add('-fail', pokemon, 'move: Delay');
				return false;
			}
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Focus Energy', target);
			this.add('-anim', source, 'Beat Up', target);
		},
		selfSwitch: true,
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Dark",
	},
	// Inaria
	deltaeraser: {
		accuracy: true,
		basePower: 90,
		category: "Special",
		shortDesc: "Resets target's stat changes.",
		id: "deltaeraser",
		name: "Delta Eraser",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Conversion', target);
			this.add('-anim', source, 'Hyper Beam', target);
		},
		onHit(target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	// Jackinev
	mejackmehack: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Sets Hax Room for 5 turns: inaccurate moves always miss, moves never crit, secondary effects never trigger.",
		id: "mejackmehack",
		name: "me jack me hack",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {mirror: 1},
		pseudoWeather: 'mejackmehack',
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Nasty Plot', source);
			this.add('-anim', source, 'Trick Room', source);
		},
		effect: {
			duration: 5,
			onStart(target, source) {
				this.add('-fieldstart', 'move: Hax Room', '[of] ' + source);
				this.add('-message', `Looks like Jackinev is ready to outskill his opponents!`);
			},
			onRestart(target, source) {
				this.field.removePseudoWeather('mejackmehack');
			},
			onModifyMove(move, pokemon) {
				if (pokemon.hasAbility('rngmanipulation')) {
					move.accuracy = true;
					move.willCrit = true;
					if (move.secondaries) {
						for (var i = 0; i < move.secondaries.length; i++) {
							move.secondaries[i].chance = 100;
						}
					}
				}
				else {
					// accuracy modifier handled in scripts
					if (move.secondaries) {
						for (var i = 0; i < move.secondaries.length; i++) {
							if (move.secondaries[i].chance !== 100) move.secondaries[i].chance = 0;
						}
					}
				}
			},
			onCriticalHit(pokemon, source, move) {
				if (!move.willCrit) return false;
			},
			onResidualOrder: 25,
			onEnd() {
				this.add('-fieldend', 'move: Hax Room', '[of] ' + this.effectData.source);
			},
		},
		secondary: null,
		target: "all",
		type: "???",
	},
	// Kalt
	sandswrath: {
		accuracy: true,
		basePower: 55,
		category: "Physical",
		shortDesc: "Hits 3 times. First hit hits Pokemon in the air and knocks them down, second hit changes user's typing to Normal/Ground, third hit sets Sandstorm.",
		id: "sandswrath",
		name: "Sand's Wrath",
		isNonstandard: "Custom",
		pp: 1,
		priority: 0,
		flags: {},
		multihit: [3, 3],
		volatileStatus: 'smackdown',
		onTryMove(pokemon) {
			this.attrLastMove('[still]');
			if (!pokemon.m.SWcount) pokemon.m.SWcount = 0;
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, "Precipice Blades", target);
		},
		onEffectiveness(typeMod, target, type, move) {
			if (move.type !== 'Ground') return;
			if (!target) return; // avoid crashing when called from a chat plugin
			// ignore effectiveness if the target is Flying type and immune to Ground
			if (!target.runImmunity('Ground')) {
				if (target.hasType('Flying')) return 0;
			}
		},
		onAfterHit(target, source, move) {
			source.m.SWcount++;
			if (source.m.SWcount == 2) {
				let type = ["Normal", "Ground"];
				if (source.getTypes() !== type) {
					if (!source.setType(type)) return;
					this.add('-start', source, 'typechange', type.join('/'), "[from] move: Sand's Wrath");
				}
			}
			if (source.m.SWcount == 3) {
				this.field.setWeather('sandstorm');
			}
		},
		onAfterMove(pokemon) {
			if (pokemon.m.SWcount == 1) {
				let type = ["Normal", "Ground"];
				if (pokemon.getTypes() !== type) {
					if (!pokemon.setType(type)) return;
					this.add('-start', pokemon, 'typechange', type.join('/'), "[from] move: Sand's Wrath");
				}
				pokemon.m.SWcount++;
			}
			if (pokemon.m.SWcount == 2) {
				this.field.setWeather('sandstorm');
				pokemon.m.SWcount++;
			}
			if (pokemon.m.SWcount == 3) {
				pokemon.m.SWcount = 0;
			}
		},
		ignoreImmunity: {'Ground': true},
		secondary: null,
		isZ: "dogiumz",
		target: "normal",
		type: "Ground",
	},
	// Kesha
	gainsgoblin: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		shortDesc: "Raises the user's Attack and Defense by 1.",
		id: "gainsgoblin",
		name: "Gains Goblin",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Bulk Up', target);
			this.add('-anim', source, 'Close Combat', target);
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
	},
	// lapis
	starlightcompression: {
		accuracy: 100,
		basePower: 95,
		category: "Special",
		shortDesc: "Resets all stat stages. Target can't use status moves its next 3 turns.",
		id: "starlightcompression",
		name: "Starlight Compression",
		isNonstandard: "Custom",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'taunt',
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Moonblast', target);
			this.add('-anim', source, 'Swift', target);
		},
		onAfterHit(target, source) {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
	},
	// Matt
	mopearound: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Cures user's status, then paralyzes all Pokemon on the field.",
		id: "mopearound",
		name: "Mope Around",
		isNonstandard: "Custom",
		pp: 15,
		priority: 0,
		flags: {authentic: 1, protect: 1, reflectable: 1, mirror: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Slack Off', target);
			this.add('-anim', target, 'Slack Off', source);
		},
		onTryHit(target, source, move) {
			source.cureStatus();
			source.setStatus('par', source, null, true);
		},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	// Mio
	fuzzybounce: {
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		shortDesc: "Charges on the first turn and executes on the second. Has a 60% chance to put the target to sleep. Has no charge turn if Tailwind is active.",
		id: "fuzzybounce",
		name: "Fuzzy Bounce",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {charge: 1, gravity: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			this.attrLastMove('[still]');
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			if (attacker.side.getSideCondition('tailwind')) {
				this.addMove('-anim', attacker, 'Cotton Guard', defender);
				this.add('-message', `Mio gets caught by the wind!`);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			this.add('-anim', attacker, 'Cotton Guard', defender);
			return null;
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Bounce', target);
		},
		secondary: {
			chance: 60,
			status: 'slp',
		},
		target: "normal",
		type: "Flying",
	},
	// rhetco
	eroticroleplay: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Attracts, Torments and Confuses opponent, then copies the opponent's ability onto the user.",
		id: "eroticroleplay",
		name: "Erotic Role Play",
		isNonstandard: "Custom",
		pp: 10,
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, "Attract", target);
			this.add('-anim', source, "Entrainment", target);
		},
		onHit(target, source) {
			target.addVolatile('attract', source);
			target.addVolatile('torment', source);
			target.addVolatile('confusion', source);
			let bannedTargetAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'wonderguard', 'zenmode'];
			let bannedSourceAbilities = ['battlebond', 'comatose', 'disguise', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange'];
			if (bannedTargetAbilities.includes(target.ability) || bannedSourceAbilities.includes(source.ability)) {
				return false;
			}
			let oldAbility = source.setAbility(target.ability);
			if (oldAbility) {
				this.add('-ability', source, this.getAbility(source.ability).name, '[from] move: Erotic Role Play', '[of] ' + target);
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	// Samur
	hireasamurai: {
		accuracy: true,
		basePower: 160,
		category: "Special",
		shortDesc: "Raises the user's Special Attack and Speed by 1. Sets up a Substitute without losing HP.",
		id: "hireasamurai",
		name: "Hire a Samurai",
		isNonstandard: "Custom",
		pp: 1,
		priority: 0,
		flags: {},
		onTryMove(pokemon) {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, "Swords Dance", source);
			this.add('-anim', source, "Secret Sword", target);
		},
		onAfterHit(source, target, move) {
			if (target.volatiles['substitute']) {
				this.add('-fail', target, 'move: Substitute');
				return null;
			}
			target.addVolatile('substitute', move);
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
					spe: 1,
				},
			},
		},
		isZ: "samuraiumz",
		target: "normal",
		type: "Fighting",
	},
	// Spiderpig
	galaxybrainplay: {
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		shortDesc: "Hits two turns after being used and confuses the target.",
		id: "galaxybrainplay",
		name: "Galaxy Brain Play",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {},
		isFutureMove: true,
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Nasty Plot', target);
			this.add('-anim', source, 'Doom Desire', target);
		},
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				move: 'galaxybrainplay',
				source: source,
				moveData: {
					id: 'galaxybrainplay',
					name: "Galaxy Brain Play",
					accuracy: 100,
					basePower: 140,
					category: "Physical",
					priority: 0,
					flags: {},
					effectType: 'Move',
					isFutureMove: true,
					secondary: {
						chance: 100,
						volatileStatus: 'confusion',
					},
					type: 'Dark',
				},
			});
			this.add('-message', `Spiderpig is coming up with a high IQ play!`);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	// Vent
	blizzardfocus: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Raises the user's Def, Sp. Atk and Sp. Def by 1.",
		id: "blizzardfocus",
		name: "Blizzard Focus",
		isNonstandard: "Custom",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Aqua Ring', target);
		},
		boosts: {
			def: 1,
			spa: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Ice",
	},
	// woodlandapple
	careerender: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['careerender']) return 0;
			return pokemon.volatiles['careerender'].damage || 1;
		},
		category: "Physical",
		shortDesc: "If hit by an attack, returns 2x damage. Fails if used in succession.",
		id: "careerender",
		name: "Career Ender",
		isNonstandard: "Custom",
		pp: 20,
		priority: -5,
		flags: {contact: 1, protect: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Counter', target);
		},
		beforeTurnCallback(pokemon) {
			if (pokemon.removeVolatile('careerender')) return false;
			pokemon.addVolatile('careerender');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['careerender']) return false;
			if (source.volatiles['careerender'].position === null) return false;
		},
		effect: {
			noCopy: true,
			onStart(target, source, move) {
				this.effectData.position = null;
				this.effectData.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectData.target) return;
				return source.side.foe.active[this.effectData.position];
			},
			onAfterDamage(damage, target, source, effect) {
				if (effect && effect.effectType === 'Move' && source.side !== target.side) {
					this.effectData.position = source.position;
					this.effectData.damage = 2 * damage;
				}
			},
			onBeforeMovePriority: -1,
			onBeforeMove(pokemon, target, move) {
				if (move.id === 'careerender') return;
				pokemon.removeVolatile('careerender');
			},
			onMoveAborted(pokemon, target, move) {
				pokemon.removeVolatile('careerender');
			},
			onBeforeSwitchOutPriority: 1,
			onBeforeSwitchOut(pokemon) {
				pokemon.removeVolatile('careerender');
			},
		},
		secondary: null,
		target: "scripted",
		type: "Steel",
	},
	// X-Naut
	ddoswavecannon: {
		accuracy: 90,
		basePower: 25,
		category: "Special",
		shortDesc: "Hits 2-5 times, 15% flinch on each hit. Sets up Substitute.",
		id: "ddoswavecannon",
		name: "DDoS Wave Cannon",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, pulse: 1},
		multihit: [2, 5],
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Mirror Shot', target);
		},
		onAfterMove(source, target) {
			this.useMove('substitute', source, target);
		},
		secondary: {
			chance: 15,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Steel",
	},
	// Xrn
	paralyzeu: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		shortDesc: "Paralyzes the target and raises the user's speed by 1.",
		id: "paralyzeu",
		name: "paralyze u",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'par',
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Double Team', source);
			this.add('-anim', source, 'Thunder Wave', target);
		},
		onTryHit(target, source, move) {
			this.boost({spe: 1}, source, source, move);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	
	// Bonus:
	// GoodMorningCrono
	cronoluck: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		shortDesc: "High critical hit chance. Freezes the user if it crits.",
		id: "cronoluck",
		name: "Crono Luck",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Giga Impact', target);
		},
		onHit(target, source, move) {
			if (target.getMoveHitData(move).crit) {
				source.cureStatus();
				source.setStatus('frz', source, null, true);
				this.add(`c|~GoodMorningCrono|of course`);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	// pig lad
	eatlettuce: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		shortDesc: "Super Effective on Grass types",
		id: "eatlettuce",
		name: "Eat Lettuce",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nonsky: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Earthquake', target);
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Grass') return 1;
		},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
	},
	
	// modified Attract for Master Baiter
	attract: {
		inherit: true,
		volatileStatus: 'attract',
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!source.hasAbility('masterbaiter') && !(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
					this.debug('incompatible gender');
					return false;
				}
				if (!this.runEvent('Attract', pokemon, source)) {
					this.debug('Attract event failed');
					return false;
				}

				if (effect.id === 'cutecharm') {
					this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
				} else if (effect.id === 'destinyknot') {
					this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Attract');
				}
			},
			onUpdate(pokemon) {
				if (this.effectData.source && !this.effectData.source.isActive && pokemon.volatiles['attract']) {
					this.debug('Removing Attract volatile on ' + pokemon);
					pokemon.removeVolatile('attract');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectData.source);
				if (this.randomChance(1, 2)) {
					this.add('cant', pokemon, 'Attract');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Attract', '[silent]');
			},
		},
	},
	// modified Frustration because why can't I use Frustration in random sets Zarel
	"frustration": {
		inherit: true,
		basePowerCallback(pokemon) {
			return Math.floor(((256 - pokemon.happiness) * 10) / 25) || 1;
		},
	},
};

exports.BattleMovedex = BattleMovedex;
