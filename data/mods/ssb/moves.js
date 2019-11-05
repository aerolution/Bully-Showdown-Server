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
	// angryairair
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
		beforeTurnCallback(pokemon) {
			if (pokemon.removeVolatile('careerender')) return false;
			pokemon.addVolatile('careerender');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['careerender']) {
				this.add('-message', `(Career Ender can't be used twice in a row.)`);
				return false;
			}
			if (source.volatiles['careerender'].position === null) return false;
			this.add('-anim', source, 'Detect', target);
			this.add('-anim', source, 'Counter', target);
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
		type: "Water",
	},
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
		flags: {authentic: 1, protect: 1, mirror: 1, sound: 1},
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
					let status = this.dex.getEffect('tox');
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
				this.add('-message', `It became stuck in the rant!`);
			},
			onResidualOrder: 11,
			onEnd(pokemon) {
				this.add('-message', `The rant ended.`);
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
	// cembep
	bitch: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			return 40 * pokemon.positiveBoosts();
		},
		category: "Physical",
		shortDesc: "Deals 40 HP of damage for each positive stat boost on this Pokemon.",
		id: "bitch",
		name: "bitch",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryMove(pokemon) {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Torment', source);
			this.add('-anim', source, 'Beat Up', target);
		},
		onTryHit(target, source) {
			if (!source.positiveBoosts()) {
				this.add('-message', `(bitch can't be used if you don't have any stat boosts.)`);
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
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
	// Inaria
	reverseunocard: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Raises all target's stats by 1, then inverts all its stat changes.",
		id: "reverseunocard",
		name: "Reverse Uno Card",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {authentic: 1, protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Nasty Plot', source);
			this.add('-anim', source, 'Topsy-Turvy', target);
		},
		onHit(target, source, move) {
			this.boost({atk: 1, def: 1, spa: 1, spd: 1, spe: 1, accuracy: 1, evasion: 1}, target, source, move);
			let success = false;
			for (let i in target.boosts) {
				if (target.boosts[i] === 0) continue;
				target.boosts[i] = -target.boosts[i];
				success = true;
			}
			if (!success) return false;
			this.add('-invertboost', target, '[from] move: Reverse Uno Card');
		},
		secondary: null,
		target: "normal",
		type: "Fire",
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
				this.add('-message', `${source.name} is ready to outskill his opponents!`);
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
	// JL
	dazzlingrecital: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Protects from attacks. If this move blocks a physical or special attack, lowers the opponent's Attack or Special Attack respectively by 1. Meloetta changes between Aria and Pirouette forme.",
		id: "dazzlingrecital",
		name: "Dazzling Recital",
		isNonstandard: "Custom",
		pp: 10,
		priority: 4,
		flags: {},
		volatileStatus: 'dazzlingrecital',
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source, move) {
			this.add('-anim', source, 'Quiver Dance', source);
			let targetSpecies = (source.template.species === 'Meloetta' ? 'Meloetta-Pirouette' : 'Meloetta');
			if (source.template.species !== targetSpecies) source.formeChange(targetSpecies);
		},
		onTryHit(pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.category === "Physical") {
					this.boost({atk: -1}, source, target, this.dex.getActiveMove("Dazzling Recital"));
				}
				if (move.category === "Special") {
					this.boost({spa: -1}, source, target, this.dex.getActiveMove("Dazzling Recital"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZPowered && move.category === "Physical") {
					this.boost({atk: -1}, source, target, this.dex.getActiveMove("Dazzling Recital"));
				}
				if (move.isZPowered && move.category === "Special") {
					this.boost({spa: -1}, source, target, this.dex.getActiveMove("Dazzling Recital"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
	},
	// Juicy
	eatramen: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Raises the user's Defense, Special Defense and Speed by 1. Heals all damage already taken this turn.",
		id: "eatramen",
		name: "Eat Ramen",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Bulk Up', target);
			this.add('-anim', source, 'Refresh', target);
		},
		onHit(pokemon) {
			pokemon.hp += pokemon.m.damageTaken;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
			pokemon.m.damageTaken = 0;
		},
		boosts: {
			def: 1,
			spd: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Water",
	},
	// Kalt
	sandswrath: {
		accuracy: true,
		basePower: 50,
		category: "Physical",
		shortDesc: "Hits 3 times. First hit hits Pokemon in the air and knocks them down, second hit changes user's typing to Normal/Ground, third hit sets Sandstorm.",
		id: "sandswrath",
		name: "Sand's Wrath",
		isNonstandard: "Custom",
		pp: 1,
		priority: 0,
		flags: {},
		multihit: 3,
		volatileStatus: 'smackdown',
		onTryMove(pokemon) {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, "Precipice Blades", target);
		},
		onEffectiveness(typeMod, target, type, move) {
			if (move.type !== 'Ground') return;
			if (!target) return;
			if (!target.runImmunity('Ground')) {
				if (target.hasType('Flying')) return 0;
			}
		},
		onAfterHit(target, source, move) {
			if (move.hit == 2) {
				let type = ["Normal", "Ground"];
				if (source.getTypes() !== type) {
					if (!source.setType(type)) return;
					this.add('-start', source, 'typechange', type.join('/'), "[from] move: Sand's Wrath");
				}
			}
			if (move.hit == 3) {
				this.field.setWeather('sandstorm');
			}
		},
		onAfterMove(pokemon, target, move) {
			if (move.hit == 1) {
				let type = ["Normal", "Ground"];
				if (pokemon.getTypes() !== type) {
					if (!pokemon.setType(type)) return;
					this.add('-start', pokemon, 'typechange', type.join('/'), "[from] move: Sand's Wrath");
				}
				this.field.setWeather('sandstorm');
			}
			if (move.hit == 2) {
				this.field.setWeather('sandstorm');
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
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		shortDesc: "Charges on the first turn and executes on the second. Has a 60% chance to put the target to sleep. Has no charge turn if Tailwind is active.",
		id: "fuzzybounce",
		name: "Fuzzy Bounce",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {charge: 1, contact: 1, gravity: 1, protect: 1, mirror: 1},
		onTryMove(attacker, defender, move) {
			this.attrLastMove('[still]');
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			if (attacker.side.getSideCondition('tailwind')) {
				this.addMove('-anim', attacker, 'Cotton Guard', defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			this.add('-anim', attacker, 'Cotton Guard', defender);
			this.add('-message', `Mio gets caught by the wind!`);
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
	// Nacho
	calldoug: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "Upon landing, the user transforms into Aerodactyl-Mega with the ability Doug's Ghosting.",
		id: "calldoug",
		name: "Call Doug",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryMove(pokemon) {
			if (pokemon.template.speciesid !== 'aerodactyl') return false;
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Helping Hand', source);
			this.add('-anim', source, 'Rock Slide', target);
		},
		onAfterHit(target, source, move) {
			source.formeChange('aerodactylmega', this.dex.getAbility('dougsghosting'), false);
			this.add('-message', `Nacho called Doug for help!`);
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	// nathan
	groundshaker: {
		accuracy: 100,
		basePower: 80,
		basePowerCallback(source, target, move) {
			const hazards = {'spikes': 1, 'toxicspikes': 1, 'stealthrock': 1, 'stickyweb': 1};
			let layers = 0;
			for (let curr in hazards) {
				if (source.side.sideConditions[curr]) layers += (source.side.sideConditions[curr].layers || 1);
				if (target.side.sideConditions[curr]) layers += (target.side.sideConditions[curr].layers || 1);
			}
			return move.basePower + 10 * layers;
		},
		category: "Physical",
		shortDesc: "+ 10 power for every hazard layer on the field. If Stealth Rocks are on the field, hits Pokemon in the air and grounds them.",
		id: "groundshaker",
		name: "Groundshaker",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, nosky: 1},
		onTryMove(pokemon) {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Celebrate', target);
			this.add('-anim', source, 'Earthquake', target);
		},
		onModifyMove(move, source, target) {
			if (source.side.getSideCondition('stealthrock') || target.side.getSideCondition('stealthrock')) {
				move.ignoreImmunity = {'Ground': true};
				move.volatileStatus = 'smackdown';
			}
		},
		secondary: null,
		target: "normal",
		type: "Ground",
	},
	// Furfrou
	rainbowgasm: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "Type and effect change to match the user's current forme.",
		id: "rainbowgasm",
		name: "rainbowgasm",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1},
		onTryMove(pokemon) {
			if (pokemon.name !== "Princess Furfrou") return false;
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, "Geomancy", source);
			this.add('-anim', source, "Punishment", target);
		},
		onModifyMove(move, pokemon) {
			let formes = {
				furfrou: 'Normal',
				furfroudandy: 'Dark',
				furfroudebutante: 'Electric',
				furfroudiamond: 'Rock',
				furfrouheart: 'Fairy',
				furfroukabuki: 'Fire',
				furfroulareine: 'Water',
				furfroumatron: 'Psychic',
				furfroupharaoh: 'Ghost',
				furfroustar: 'Ice',
			}; 
			move.type = formes[pokemon.template.speciesid];
			move.secondaries = [];
			if (pokemon.template.speciesid === "furfroudandy") {
				move.secondaries.push({
					chance: 100,
					volatileStatus: 'taunt',
				});
				move.secondaries.push({
					chance: 100,
					volatileStatus: 'torment',
				});
			} else if (pokemon.template.speciesid === "furfroudebutante") {
				move.secondaries.push({
					chance: 100,
					self: {
						boosts: {
							spe: 2,
						},
					},
				});
			} else if (pokemon.template.speciesid === "furfroudiamond") {
				move.secondaries.push({
					chance: 100,
					self: {
						boosts: {
							def: 2,
						},
					},
				});
			} else if (pokemon.template.speciesid === "furfrouheart") {
				move.secondaries.push({
					chance: 100,
					volatileStatus: 'attract',
				});
			} else if (pokemon.template.speciesid === "furfroukabuki") {
				move.secondaries.push({
					chance: 100,
					self: {
						boosts: {
							atk: 2,
						},
					},
				});
			} else if (pokemon.template.speciesid === "furfroulareine") {
				move.secondaries.push({
					chance: 100,
					volatileStatus: 'partiallytrapped',
				});
			}
		},
		onHit(target, source, move) {
			if (source.template.speciesid === "furfrou") {
				if (source.hp && source.removeVolatile('leechseed')) {
					this.add('-end', source, 'Leech Seed', '[from] move: rainbowgasm', '[of] ' + source);
				}
				let sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
				for (const condition of sideConditions) {
					if (source.hp && source.side.removeSideCondition(condition)) {
						this.add('-sideend', source.side, this.dex.getEffect(condition).name, '[from] move: rainbowgasm', '[of] ' + source);
					}
				}
				if (source.hp && source.volatiles['partiallytrapped']) {
					source.removeVolatile('partiallytrapped');
				}
			} else if (source.template.speciesid === "furfroustar") {
				target.clearBoosts();
				this.add('-clearboost', target);
				source.side.addSideCondition('mist', source);
			} else if (source.template.speciesid === "furfroupharaoh") {
				if (target.ability !== 'mummy') {
					target.setAbility('mummy', source);
					this.add('-ability', target, this.dex.getAbility(target.ability).name, '[from] move: rainbowgasm', '[of] ' + source);
				}
			} else if (source.template.speciesid === "furfroumatron") {
				source.side.addSlotCondition(source, 'wish', source);
				this.add('-anim', source, "Wish", source);
				this.add('-message', `${source.name} made a wish!`);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
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
			let bannedTargetAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'wonderguard', 'zenmode', 'pigmad', 'brbfixingsports', 'digitizer', 'nextgenfighter', 'dougsghosting'];
			if (bannedTargetAbilities.includes(target.ability)) {
				return false;
			}
			let oldAbility = source.setAbility(target.ability);
			if (oldAbility) {
				this.add('-ability', source, this.dex.getAbility(source.ability).name, '[from] move: Erotic Role Play', '[of] ' + target);
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
		shortDesc: "Raises the user's Special Attack by 1. Sets up a Substitute without losing HP.",
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
		onAfterHit(target, source, move) {
			source.addVolatile('substitute', source);
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
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
			this.add('-message', `${source.name} is coming up with a high IQ play!`);
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
		shortDesc: "Raises the user's Defense, Special Attack and Special Defense by 1.",
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
	// X-Naut
	ddoswavecannon: {
		accuracy: 90,
		basePower: 25,
		category: "Special",
		shortDesc: "Hits 2-5 times, 15% flinch on each hit. Torments the target.",
		id: "ddoswavecannon",
		name: "DDoS Wave Cannon",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {authentic: 1, protect: 1, mirror: 1, sound: 1},
		multihit: [2, 5],
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Mirror Shot', target);
		},
		secondaries: [
			{
				chance: 15,
				volatileStatus: 'flinch',
			}, {
				chance: 100,
				volatileStatus: 'torment',
			},
		],
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
	// BIGGO BOY
	birddetected: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Changes the target's type to Flying.",
		id: "birddetected",
		name: "BIRD DETECTED",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Lock-On', target);
			this.add('-anim', source, 'Torment', source);
		},
		onHit(target, source) {
			let type = "Flying";
			if (!target.setType(type)) return false;
			this.add('-start', target, 'typechange', type, "[from] move: BIRD DETECTED");
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	biggoboom: {
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		shortDesc: "BIGGO BOOM",
		id: "biggoboom",
		name: "BIGGO BOOM",
		isNonstandard: "Custom",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Gigavolt Havoc', source);
			this.add('-anim', source, 'Explosion', source);
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
	},
	// CUBA
	maxdrake: {
		accuracy: true,
		basePower: 150,
		category: "Special",
		shortDesc: "Raises the user's Special Attack by 1.",
		id: "maxdrake",
		name: "Max Drake",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Devastating Drake', target);
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Dragon",
	},
	maxdarkness: {
		accuracy: true,
		basePower: 130,
		category: "Special",
		shortDesc: "Lowers the target's Special Defense by 1.",
		id: "maxdarkness",
		name: "Max Darkness",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Black Hole Eclipse', target);
		},
		secondary: {
			chance: 100,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Dark",
	},
	maxflare: {
		accuracy: true,
		basePower: 140,
		category: "Special",
		shortDesc: "Activates harsh sunlight.",
		id: "maxflare",
		name: "Max Flare",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Inferno Overdrive', target);
		},
		onAfterMoveSecondarySelf() {
			this.field.setWeather('sunnyday');
		},
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	maxtoxin: {
		accuracy: true,
		basePower: 130,
		category: "Special",
		shortDesc: "Lowers the target's Special Attack by 1.",
		id: "maxtoxin",
		name: "Max Toxin",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Acid Downpour', target);
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Poison",
	},
	// GoodMorningCrono
	cronoluck: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		shortDesc: "High critical hit chance. Inherits Crono's luck.",
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
	// NBL
	sweep: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		shortDesc: "Forces the target to switch to a random ally, then hits.",
		id: "sweep",
		name: "Sweep",
		isNonstandard: "Custom",
		pp: 15,
		priority: -6,
		flags: {mirror: 1, authentic: 1},
		ignoreImmunity: true,
		isFutureMove: true,
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Whirlwind', target);
		},
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 1,
				move: 'sweep',
				source: source,
				moveData: {
					id: 'sweep',
					name: "Sweep",
					accuracy: 100,
					basePower: 90,
					category: "Special",
					priority: 0,
					flags: {},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Psychic',
					onPrepareHit(target, source) {
						this.add('-anim', source, 'Psystrike', target);
					},
				},
			});
			target.forceSwitchFlag = true;
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	midseasondropout: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Uses Z-Defog. For the next 3 turns, Sweep has normal priority.",
		id: "midseasondropout",
		name: "Mid Season Dropout",
		isNonstandard: "Custom",
		pp: 1,
		priority: 0,
		flags: {},
		onTryMove(pokemon) {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source, move) {
			this.boost({accuracy: 1}, source, source, move);
			this.add('-anim', source, "Defog", source);
		},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			let removeTarget = ['reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
			let removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.getEffect(targetCondition).name, '[from] move: Mid Season Dropout', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.getEffect(sideCondition).name, '[from] move: Mid Season Dropout', '[of] ' + source);
					success = true;
				}
			}
			return success;
		},
		terrain: 'midseasondropout',
		effect: {
			duration: 4,
			onModifyPriority(priority, source, target, move) {
				if (move.id === "sweep") return 0;
			},
			onStart(side) {
				this.add('-fieldstart', 'Mid Season Dropout');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onResidual() {
				this.eachEvent('Terrain');
			},
			onEnd(side) {
				this.add('-fieldend', 'Mid Season Dropout');
			},
		},
		secondary: null,
		isZ: "defogiumz",
		target: "normal",
		type: "Flying",
	},
	// Optimus Prime
	tillallareone: {
		accuracy: true,
		basePower: 300,
		category: "Physical",
		shortDesc: "Protect only prevents 50% of the damage from this attack. The user faints.",
		id: "tillallareone",
		name: "Till All Are One",
		isNonstandard: "Custom",
		pp: 1,
		priority: 0,
		flags: {},
		onTryMove(pokemon) {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source, move) {
			this.add('-anim', source, "Never-Ending Nightmare", source);
			this.add('-anim', source, "Explosion", source);
		},
		onModifyMove(move, source, target) {
			if (target.getVolatile('stall')) move.basePower *= 2;
		},
		selfdestruct: "always",
		secondary: null,
		isZ: "optimusiumz",
		target: "normal",
		type: "Ghost",
	},
	// pig lad
	eatlettuce: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		shortDesc: "Super Effective on Grass types.",
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
	// PRAISE!
	thesunisadeadlylaser: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		shortDesc: "Lowers target's Speed by 1. If the weather is extreme sunlight, the user gains the Fire type.",
		id: "thesunisadeadlylaser",
		name: "The Sun is a Deadly Laser",
		isNonstandard: "Custom",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add('-anim', source, 'Charge', target);
			this.add('-anim', source, 'Oblivion Wing', target);
		},
		onHit(target, source, move) {
			if (this.field.isWeather('desolateland')) {
				if (source.hasType('Fire')) return;
				if (source.hasType('???')) {
					source.setType(source.getTypes(true).map(type => type === "???" ? "Fire" : type));
					this.add('-start', source, 'typechange', source.types.join('/'), '[from] move: The Sun is a Deadly Laser');
				}
				else {
					if (!source.addType('Fire')) return;
					this.add('-start', source, 'typeadd', 'Fire', '[from] move: The Sun is a Deadly Laser');
				}
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Flying",
	},
	
	// modified Attract for Master Baiter
	attract: {
		inherit: true,
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!source.hasAbility('masterbaiter') && !source.hasAbility('afrocoat') && !(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
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
	// modified Tailwind for Omega Stream
	"tailwind": {
		inherit: true,
		effect: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source && source.hasAbility('omegastream')) {
					this.add('-activate', source, 'ability: Omega Stream');
					this.add('-message', `(Tailwind lasts one extra turn.)`);
					return 5;
				}
				return 4;
			},
			onStart(side) {
				this.add('-sidestart', side, 'move: Tailwind');
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(2);
			},
			onResidualOrder: 21,
			onResidualSubOrder: 4,
			onEnd(side) {
				this.add('-sideend', side, 'move: Tailwind');
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
	// modified moves for Dynamax
	"dracometeor": {
		inherit: true,
		beforeMoveCallback(source, target, move) {
			if (source.getVolatile('dynamax')) {
				this.useMove('maxdrake', source, target);
				return true;
			}
		}
	},
	"darkpulse": {
		inherit: true,
		beforeMoveCallback(source, target, move) {
			if (source.getVolatile('dynamax')) {
				this.useMove('maxdarkness', source, target);
				return true;
			}
		}
	},
	"fireblast": {
		inherit: true,
		beforeMoveCallback(source, target, move) {
			if (source.getVolatile('dynamax')) {
				this.useMove('maxflare', source, target);
				return true;
			}
		}
	},
	"sludgewave": {
		inherit: true,
		beforeMoveCallback(source, target, move) {
			if (source.getVolatile('dynamax')) {
				this.useMove('maxtoxin', source, target);
				return true;
			}
		}
	},
};

exports.BattleMovedex = BattleMovedex;
