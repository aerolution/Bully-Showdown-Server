'use strict';

/**@type {{[k: string]: ModdedAbilityData}} */
let BattleAbilities = {
	/*
	// Example
	"abilityid": {
		desc: "", // long description
		shortDesc: "", // short description, shows up in /dt
		id: "abilityid",
		name: "Ability Name",
		// The bulk of an ability is not easily shown in an example since it varies
		// For more examples, see https://github.com/Zarel/Pokemon-Showdown/blob/master/data/abilities.js
	},
	*/
	// Brettibus
	toxicity: {
		shortDesc: "Badly poison a Pokemon making contact with this Pokemon.",
		id: "toxicity",
		name: "Toxicity",
		onAfterDamage(damage, target, source, move) {
			if (move && move.flags['contact']) {
				source.trySetStatus('tox', target);
			}
		},
	},
	// cembep
	garbageheal: {
		shortDesc: "Toxics the user on switch-in. At the end of each turn, if the user is poisoned, it heals by 1/8th of its HP and a random stat is raised.",
		id: "garbageheal",
		name: "Garbage Heal",
		onStart(pokemon) {
			if (!pokemon.status && !pokemon.side.getSideCondition('safeguard')) {
				let status = this.getEffect('tox');
				pokemon.status = status.id;
				pokemon.statusData = {id: status.id, target: pokemon, source: pokemon, stage: 0};
				this.add('-status', pokemon, pokemon.status);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, pokemon, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(pokemon.maxhp / 8);
				let stats = [];
				let boost = {};
				for (let statPlus in pokemon.boosts) {
					if (pokemon.boosts[statPlus] < 6) {
						stats.push(statPlus);
					}
				}
				let randomStat = stats.length ? this.sample(stats) : "";
				if (randomStat) boost[randomStat] = 1;
				this.boost(boost, pokemon);
				return false;
			}
		},
	},
	// Doesnt
	midnightfighter: {
		shortDesc: "Increases this Pokemon's Special Attack, Special Defense and Speed by 50% if it's the only non-fainted Pokemon on the team.",
		id: "midnightfighter",
		name: "Midnight Fighter",
		onStart(pokemon) {
			pokemon.m.aTrigger = 1;
			for (const ally of pokemon.side.pokemon) {
				if (ally !== pokemon && (!ally.fainted || ally.hp)) pokemon.m.aTrigger = 0;
			}
			if (pokemon.m.aTrigger === 1) {
				this.add('-ability', pokemon, 'Midnight Fighter');
				this.add('-message', `Doesnt is ready to avenge his fallen team!`);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.m.aTrigger === 1) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 5,
		onModifySpD(def, pokemon) {
			if (pokemon.m.aTrigger === 1) {
				return this.chainModify(1.5);
			}
		},
		onModifySpePriority: 5,
		onModifySpe(spe, pokemon) {
			if (pokemon.m.aTrigger === 1) {
				return this.chainModify(1.5);
			}
		},
	},
	// Inaria
	digitizer: {
		shortDesc: "Transforms into Porygon-Z while using an attack.",
		id: "digitizer",
		name: "Digitizer",
		onBeforeMovePriority: 0.5,
		onBeforeMove(attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Porygon2' || attacker.transformed) return;
			if (move.category === 'Status') return;
			attacker.formeChange('Porygon-Z');
		},
		onModifyMove(move) {
			move.stab = 2;
		},
		onAfterMovePriority: 0.5,
		onAfterMove(attacker, defender, move) {
			if (attacker.template.species === 'Porygon-Z') attacker.formeChange('Porygon2');
		},
	},
	// inversify
	inversify: {
		shortDesc: "Inverts the opponent's stat changes on switch-in.",
		id: "inversify",
		name: "Inversify",
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Inversify');
					this.add('-invertboost', target, '[from] ability: Inversify');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					for (let i in target.boosts) {
						if (target.boosts[i] === 0) continue;
						target.boosts[i] = -target.boosts[i];
					}
				}
			}
		},
	},
	// Jackinev
	rngmanipulation: {
		shortDesc: "Reverses the effects of Hax Room for the user.",
		id: "rngmanipulation",
		name: "RNG Manipulation",
	},
	// JL
	versatility: {
		shortDesc: "Boosts this Pokemon's weaker offensive stat by 20%.",
		id: "versatility",
		name: "Versatility",
		onModifyAtkPriority: 6,
		onModifyAtk(atk, pokemon) {
			if (pokemon.getStat('atk', false, true) < pokemon.getStat('spa', false, true)) {
				this.debug('Versatility boost');
				return this.chainModify(1.2);
			}
		},
		onModifySpAPriority: 6,
		onModifySpA(atk, pokemon) {
			if (pokemon.getStat('spa', false, true) < pokemon.getStat('atk', false, true)) {
				this.debug('Versatility boost');
				return this.chainModify(1.2);
			}
		},
	},
	// Kesha
	musclemilk: {
		shortDesc: "All attacks used by this Pokemon heal it for 33% of the damage dealt.",
		id: "musclemilk",
		name: "Muscle Milk",
		onModifyMove(move) {
			if (move.category !== 'Status' && !move.drain) {
				move.drain = [1, 3];
			}
		},
	},
	// Matt
	staticboost: {
		shortDesc: "If paralyzed, user's Attack and Speed are doubled. Ignores Paralysis speed reduction.",
		id: "staticboost",
		name: "Static Boost",
		onModifyAtk(atk, pokemon) {
			if (pokemon.status === 'par') {
				return this.chainModify(2);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.status === 'par') {
				return this.chainModify(2);
			}
		},
	},
	// Mio
	omegastream: {
		shortDesc: "Sets strong winds while this Pokemon is active. Tailwinds set up by the user last one more turn.",
		id: "omegastream",
		name: "Omega Stream",
		onStart(pokemon) {
			this.field.setWeather('deltastream');
		},
		onAnySetWeather(target, source, weather) {
			if (this.field.getWeather().id === 'deltastream' && !['desolateland', 'primordialsea', 'deltastream'].includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherData.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('omegastream')) {
					this.field.weatherData.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
	},
	// Nacho
	oldaf: {
		shortDesc: "This Pokemon's moves have their accuracy lowered by 0.6x.",
		id: "oldaf",
		name: "Old AF",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Old AF');
			this.add('-message', `Nacho is too old to get it going!`);
		},
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			return accuracy * 0.6;
		},
	},
	dougsghosting: {
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage halved.",
		id: "dougsghosting",
		name: "Doug's Ghosting",
		onPrepareHit(source, target, move) {
			if (['iceball', 'rollout'].includes(move.id)) return;
			if (move.category !== 'Status' && !move.selfdestruct && !move.multihit && !move.flags['charge'] && !move.spreadHit && !move.isZ) {
				move.multihit = 2;
				move.multihitType = 'parentalbond';
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'parentalbond' && move.hit > 1) return this.chainModify(0.5);
		},
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'parentalbond' && move.id === 'secretpower' && move.hit < 2) {
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
	},
	// nathan
	groundcontrol: {
		shortDesc: "If this Pokemon uses a Ground or Rock type move, it then sets a layer of Spikes or Stealth Rock respectively.",
		id: "groundcontrol",
		name: "Ground Control",
		onAfterMove(source, target, move) {
			if (move.type === "Ground" && move.category !== "Status") {
				this.add('-activate', source, 'ability: Ground Control');
				this.add('-anim', source, 'Spikes', target);
				target.side.addSideCondition('spikes', source, move);
			}
			if (move.type === "Rock" && move.category !== "Status") {
				this.add('-activate', source, 'ability: Ground Control');
				this.add('-anim', source, 'Stealth Rock', target);
				target.side.addSideCondition('stealthrock', source, move);
			}
		},
	},
	// Princess Furfrou
	afrocoat: {
		shortDesc: "Doubles Defense. If a Pokemon makes contact with the user, lowers its Speed by 1. At the end of each turn, user changes to a random Furfrou forme and gains a new type to match it.",
		id: "afrocoat",
		name: "Afro Coat",
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		onAfterDamage(damage, target, source, effect) {
			if (effect && effect.flags['contact']) {
				this.add('-activate', target, 'ability: Afro Coat');
				this.boost({spe: -1}, source, target, target.ability);
			}
		},
		onResidualOrder: 5,
		onResidualSubOrder: -1,
		onResidual(pokemon) {
			if (pokemon.name !== "Princess Furfrou") return;
			let formes = {
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
			let forme = Object.keys(formes)[this.random(9)];
			while (forme === pokemon.template.speciesid) forme = Object.keys(formes)[this.random(9)];
			pokemon.formeChange(forme, this.getAbility('afrocoat'), false, '', 0);
			let type = ["Normal", formes[forme]];
			if (!pokemon.setType(type)) return;
			this.add('-start', pokemon, 'typechange', type.join('/'), '[silent]');
			this.add('-message', `Furfrou changed his hair style!`);
		},
	},
	// rhetco
	masterbaiter: {
		shortDesc: "Can Attract opponents regardless of gender. Ground type moves can hit Pokemon in the air.",
		id: "masterbaiter",
		name: "Master Baiter",
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Ground'] = true;
			}
		},
	},
	// Samur
	swordworker: {
		shortDesc: "Fighting type attacks are boosted by x1.5.",
		id: "swordworker",
		name: "Swordworker",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Swordworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Swordworker boost');
				return this.chainModify(1.5);
			}
		},
	},
	// Spiderpig
	bulkybubble: {
		shortDesc: "Can only be damaged by direct attacks. Can't be burned. User's Defense is doubled.",
		id: "bulkybubble",
		name: "Bulky Bubble",
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				return false;
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Bulky Bubble');
				pokemon.cureStatus();
			}
		},
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
	},
	// Vent
	freezeburn: {
		shortDesc: "30% chance to burn the target when using an Ice type move.",
		id: "freezeburn",
		name: "Freeze Burn",
		onModifyMove(move) {
			if (!move || move.type !== "Ice" || move.category === "Status") return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				status: 'brn',
				ability: this.getAbility('freezeburn'),
			});
		},
	},
	// woodlandapple
	wasntlistening: {
		shortDesc: "Ignores other Pokemon's stat changes. Can only be damaged by direct attacks. Unaffacted by secondary effects of the opponent's moves.",
		id: "wasntlistening",
		name: "Wasn't Listening",
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				return false;
			}
		},
		onAnyModifyBoost(boosts, target) {
			let source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		onFoeModifyMovePriority: -1,
		onFoeModifyMove(move) {
			if (move.secondaries) {
				for (const secondary of move.secondaries) {
					if (!secondary.self) secondary.chance = 0;
				}
			}
		},
	},
	// X-Naut
	yuxbarrier: {
		shortDesc: "Sets up Reflect, Light Screen, and Safeguard on switch-in. Removes screens when this Pokemon leaves the field.",
		id: "yuxbarrier",
		name: "Yux Barrier",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Yux Barrier');
			pokemon.side.addSideCondition('lightscreen', pokemon);
			pokemon.side.addSideCondition('reflect', pokemon);
			pokemon.side.addSideCondition('safeguard', pokemon);
		},
		onSwitchOut(pokemon) {
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('safeguard');
		},
		onFaint(pokemon) {
			pokemon.side.removeSideCondition('lightscreen');
			pokemon.side.removeSideCondition('reflect');
			pokemon.side.removeSideCondition('safeguard');
		},
	},
	
	// Bonus:
	// CUBA
	nextgenfighter: {
		shortDesc: "Dynamaxes the Pokemon the first time it uses an attack.",
		id: "nextgenfighter",
		name: "Next Gen Fighter",
		onModifyPriority(priority, pokemon) {
			if (!pokemon.m.aCount && pokemon.name === "CUBA") {
				pokemon.m.aCount = 1;
				pokemon.addVolatile('dynamax', pokemon);
			}
		},
	},
	// GoodMorningCrono
	brbfixingsports: {
		shortDesc: "Every other turn, sets up a Substitute instead of using a move. Substitute is consumed at the end of the turn.",
		id: "brbfixingsports",
		name: "brb fixing sports",
		onStart(pokemon) {
			if (!pokemon.m.aCount) pokemon.m.aCount = 0;
			pokemon.removeVolatile('truant');
			if (pokemon.activeTurns && (pokemon.moveThisTurnResult !== undefined || !this.willMove(pokemon))) {
				pokemon.addVolatile('truant');
			}
		},
		onModifyPriorityPriority: 9,
		onModifyPriority(priority, pokemon) {
			if (pokemon.volatiles['truant']) return 5;
		},
		onBeforeMovePriority: 9,
		onBeforeMove(source, target, move) {
			if (source.removeVolatile('truant')) {
				this.add('-activate', source, 'ability: brb fixing sports');
				this.useMove('substitute', source, target);
				this.add('-message', `Crono is loafing around!`);
				return false;
			}
			source.addVolatile('truant');
		},
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.volatiles['substitute']) {
				this.heal(pokemon.volatiles['substitute'].hp);
				pokemon.removeVolatile('substitute');
			}
		},
		onDamage(damage, pokemon) {
			if (pokemon.m.aCount === 0 && damage >= pokemon.hp) {
				pokemon.m.aCount++;
				return pokemon.hp - 1;
			}
		},
		onAfterDamage(damage, pokemon) {
			if (pokemon.m.aCount === 1) {
				pokemon.m.aCount++;
				this.add('-message', `GoodMorningCrono faint-`);
				this.add(`raw|<div class="broadcast-red"><b>Pokemon Showdown crashed!</b><br />Don't worry, we're working on fixing it.</div>`);
				this.add('-message', `Restarting...`);
				this.add('-anim', pokemon, 'Aqua Ring');
				pokemon.cureStatus(true);
				this.add('-message', `Crono fixed the server! Everything's back to normal!`);
			}
		},
	},
	// NBL
	dragondancemanifesto: {
		shortDesc: "Raises Attack and Speed by 1 at the end of each full turn on the field.",
		id: "dragondancemanifesto",
		name: "Dragon Dance Manifesto",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.add('-anim', pokemon, "Dragon Dance", pokemon);
				this.boost({atk: 1, spe: 1});
			}
		},
	},
	// pig lad
	pigmad: {
		shortDesc: "Evolves on faint and recovers all HP.",
		id: "pigmad",
		name: "Pig Mad",
		onStart(pokemon) {
			if (!pokemon.m.aCount) pokemon.m.aCount = 0;
			if (!pokemon.m.aTrigger) pokemon.m.aTrigger = 0;
		},
		onDamagePriority: -1,
		onDamage(damage, pokemon) {
			if (pokemon.name === "pig lad" && pokemon.m.aCount < 2 && damage >= pokemon.hp) {
				pokemon.m.aTrigger = 1;
				this.add('-ability', pokemon, 'Pig Mad');
				return pokemon.hp - 1;
			}
		},
		onAfterDamage(damage, pokemon) {
			if (pokemon.m.aTrigger === 1) {
				pokemon.m.aTrigger = 0;
				pokemon.m.aCount++;
				let template = null;
				if (pokemon.m.aCount === 1) template = this.getTemplate('piloswine');
				if (pokemon.m.aCount === 2) template = this.getTemplate('mamoswine');
				pokemon.hp = pokemon.maxhp;
				if (Object.values(pokemon.boosts).find(boost => boost !== 0)) {
					pokemon.clearBoosts();
					this.add('-clearboost', pokemon);
				}
				pokemon.formeChange(template, pokemon.ability, true, '', 0);
				this.add('-message', `pig lad evolved!`);
				pokemon.setAbility('pigmad');
				pokemon.cureStatus(true);
				let newHP = Math.floor(Math.floor(2 * pokemon.template.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100) * pokemon.level / 100 + 10);
				pokemon.maxhp = pokemon.hp = newHP;
				this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
			}
		},
	},
};

exports.BattleAbilities = BattleAbilities;
