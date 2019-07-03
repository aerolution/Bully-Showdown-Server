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
	// Jackinev
	rngmanipulation: {
		shortDesc: "Reverses the effects of Hax Room for the user.",
		id: "rngmanipulation",
		name: "RNG Manipulation",
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
		shortDesc: "Ignores other Pokemon's stat changes and can only be damaged by direct attacks.",
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
	},
	// X-Naut
	yuxbarrier: {
		shortDesc: "Sets up Reflect, Light Screen, and Safeguard on switch in. Removes screens on switch out.",
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
		onModifyMovePriority: 9,
		onModifyMove(move, pokemon) {
			if (pokemon.volatiles['truant']) move.priority = 4;
		},
		onBeforeMovePriority: 9,
		onBeforeMove(source, target) {
			if (source.removeVolatile('truant')) {
				this.add('-ability', source, 'brb fixing sports');
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
			if (pokemon.m.aCount < 2 && damage >= pokemon.hp) {
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
				if (template.speciesid === 'piloswine') pokemon.setItem('Eviolite');
				if (template.speciesid === 'mamoswine') pokemon.setItem('Life Orb');
			}
		},
	},
};

exports.BattleAbilities = BattleAbilities;
