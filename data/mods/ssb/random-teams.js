'use strict';

/** @typedef {{[name: string]: SSBSet}} SSBSets */
/**
 * @typedef {Object} SSBSet
 * @property {string} species
 * @property {string | string[]} ability
 * @property {string | string[]} item
 * @property {GenderName} gender
 * @property {(string | string[])[]} moves
 * @property {string} signatureMove
 * @property {{hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number}=} evs
 * @property {{hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number}=} ivs
 * @property {string | string[]} nature
 * @property {number=} level
 * @property {boolean=} shiny
 */

const RandomTeams = require('../../random-teams');

class RandomStaffBrosTeams extends RandomTeams {
	randomStaffBrosTeam() {
		/** @type {PokemonSet[]} */
		let team = [];
		/** @type {SSBSets} */
		let sets = {
			/*
			// Example:
			'Username': {
				species: 'Species', ability: 'Ability', item: 'Item', gender: '',
				moves: ['Move Name', ['Move Name', 'Move Name']],
				signatureMove: 'Move Name',
				evs: {stat: number}, ivs: {stat: number}, nature: 'Nature', level: 100, shiny: false,
			},
			// Species, ability, and item need to be captialized properly ex: Ludicolo, Swift Swim, Life Orb
			// Gender can be M, F, N, or left as an empty string
			// each slot in moves needs to be a string (the move name, captialized properly ex: Hydro Pump), or an array of strings (also move names)
			// signatureMove also needs to be capitalized properly ex: Scripting
			// You can skip Evs (defaults to 82 all) and/or Ivs (defaults to 31 all), or just skip part of the Evs (skipped evs are 0) and/or Ivs (skipped Ivs are 31)
			// You can also skip shiny, defaults to false. Level can be skipped (defaults to 100).
			// Nature needs to be a valid nature with the first letter capitalized ex: Modest
			*/
			'Brettibus': {
				species: 'Latios', ability: 'Toxicity', item: 'Dragon Gem', 
				moves: ['Draco Meteor', 'Psyshock', 'Earthquake'],
				signatureMove: 'Rant',
				evs: {hp: 80, spa: 252, spe: 176}, nature: 'Timid',
			},
			'Doesnt': {
				species: 'Lilligant', ability: 'Midnight Fighter', item: 'Miracle Seed', 
				moves: ['Taunt', 'Seed Flare', 'Moonlight'],
				signatureMove: 'Delay',
				evs: {hp: 252, spa: 4, spe: 252}, nature: 'Timid',
			},
			'Inaria': {
				species: 'Porygon2', ability: 'Digitizer', item: 'Eviolite', 
				moves: ['Discharge', 'Toxic', 'Recover'],
				signatureMove: 'Delta Eraser',
				evs: {hp: 252, def: 100, spd: 156}, ivs: {atk: 0}, nature: 'Bold',
			},
			'inversify': {
				species: 'Simisear', ability: 'Inversify', item: 'Charcoal', 
				moves: ['Searing Shot', 'Leaf Storm', 'Swagger'],
				signatureMove: 'Reverse Uno Card',
				evs: {spa: 252, spd: 4, spe: 252}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Jackinev': {
				species: 'Charizard', ability: 'Victory Star', item: 'Charizardite X', 
				moves: ['Flare Blitz', 'Meteor Mash', 'Roost'],
				signatureMove: 'me jack me hack',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			'JL_muserwolves': {
				species: 'Meloetta', ability: 'Versatility', item: 'Expert Belt', 
				moves: ['Close Combat', 'Psychic', 'U-Turn'],
				signatureMove: 'Dazzling Recital',
				evs: {atk: 128, spa: 128, spe: 252}, nature: 'Hasty',
			},
			'Juicy': {
				species: 'Buizel', ability: 'Huge Power', item: 'Eviolite', 
				moves: ['Waterfall', 'Icicle Crash', 'Earthquake'],
				signatureMove: 'Eat Ramen',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Adamant',
			},
			'Kalt': {
				species: 'Buzzwole', ability: 'Sand Rush', item: 'Dogium Z', 
				moves: ['Frustration', 'Close Combat', 'Howl'],
				signatureMove: "Land's Wrath",
				evs: {atk: 252, spd: 4, spe: 252}, happiness: 1, nature: 'Adamant',
			},
			'Kesha': {
				species: 'Machamp', ability: 'Muscle Milk', item: 'Assault Vest', 
				moves: ['Knock Off', 'Bullet Punch', 'Close Combat'],
				signatureMove: 'Gains Goblin',
				evs: {hp: 252, atk: 252, spd: 4}, nature: 'Adamant',
			},
			'lapis': {
				species: 'Tapu Fini', ability: 'Comatose', item: 'Choice Specs', 
				moves: ['Sleep Talk', 'Scald', 'Earth Power'],
				signatureMove: 'Starlight Compression',
				evs: {hp: 120, spa: 252, spe: 136}, ivs: {atk: 0}, nature: 'Modest',
			},
			'Matt': {
				species: 'Vigoroth', ability: 'Static Boost', item: 'Eviolite', 
				moves: ['Smelling Salts', 'Darkest Lariat', 'Slack Off'],
				signatureMove: 'Mope Around',
				evs: {hp: 252, atk: 252, def: 4}, nature: 'Adamant',
			},
			'Mio': {
				species: 'Jumpluff', ability: 'Omega Stream', item: 'Sky Plate', 
				moves: ['Tailwind', 'Swords Dance', 'Strength Sap'],
				signatureMove: 'Fuzzy Bounce',
				evs: {hp: 248, atk: 8, spe: 252}, nature: 'Jolly',
			},
			'Princess Furfrou': {
				species: 'Furfrou', ability: 'Afro Coat', item: 'Iapapa Berry', 
				moves: ['Head Charge', 'Aromatherapy', 'U-Turn'],
				signatureMove: 'rainbowgasm',
				evs: {hp: 120, atk: 56, def: 56, spd: 24, spe: 252}, nature: 'Jolly',
			},
			'rhetco': {
				species: 'Whiscash', ability: 'Master Baiter', item: 'Leftovers', 
				moves: ['Fissure', 'Block', 'Rest'],
				signatureMove: 'Erotic Role Play',
				evs: {hp: 220, def: 232, spd: 56}, ivs: {atk: 0}, nature: 'Bold',
			},
			'Samur': {
				species: 'Samurott', ability: 'Swordworker', item: 'Samuraium Z', 
				moves: ['Scald', 'Ice Beam', 'Air Slash'],
				signatureMove: 'Secret Sword',
				evs: {hp: 40, spa: 252, spe: 208}, nature: 'Timid',
			},
			'Spiderpig': {
				species: 'Araquanid', ability: 'Bulky Bubble', item: 'Assault Vest', 
				moves: ['Liquidation', 'Leech Life', 'Power-Up Punch'],
				signatureMove: 'Galaxy Brain Play',
				evs: {hp: 252, atk: 252, def: 4}, nature: 'Careful',
			},
			'Vent': {
				species: 'Walrein', ability: "Freeze Burn", item: 'Leftovers', 
				moves: ['Ice Beam', 'Thunderbolt', 'Slack Off'],
				signatureMove: 'Blizzard Focus',
				evs: {hp: 248, def: 8, spd: 252}, ivs: {atk: 0}, nature: 'Calm',
			},
			'woodlandapple': {
				species: 'Quagsire', ability: "Wasn't Listening", item: 'Assault Vest', 
				moves: ['Scald', 'Earthquake', 'Infestation'],
				signatureMove: 'Career Ender',
				evs: {hp: 248, def: 8, spd: 252}, nature: 'Sassy',
			},
			'X-Naut': {
				species: 'Magneton', ability: 'Yux Barrier', item: 'Electric Gem', 
				moves: ['Thunder', 'Ice Beam', 'Recycle'],
				signatureMove: 'DDoS Wave Cannon',
				evs: {hp: 64, spa: 248, spe: 196}, ivs: {atk: 0}, nature: 'Timid',
			},
			'Xrn': {
				species: 'Probopass', ability: 'Serene Grace', item: 'Leftovers', 
				moves: ['Iron Head', 'Rock Slide', 'Substitute'],
				signatureMove: 'paralyze u',
				evs: {hp: 248, atk: 4, spe: 252}, nature: 'Jolly',
			},
			
			// Bonus:
			'GoodMorningCrono': {
				species: 'Slaking', ability: 'brb fixing sports', item: 'Choice Band', 
				moves: ['Baton Pass', 'Submission', 'Sucker Punch'],
				signatureMove: 'Crono Luck',
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			'pig lad': {
				species: 'Swinub', ability: 'Pig Mad', item: 'Metronome', 
				moves: ['Stealth Rock', 'Knock Off', 'Ice Shard'],
				signatureMove: 'Eat Lettuce',
				evs: {hp: 252, atk: 252, spe: 4}, nature: 'Adamant',
			},
		};
		let pool = Object.keys(sets);
		/** @type {{[type: string]: number}} */
		let typePool = {};
		while (pool.length && team.length < 6) {
			let name = this.sampleNoReplace(pool);
			let ssbSet = sets[name];
			// Enforce typing limits
			let types = this.getTemplate(ssbSet.species).types;
			let rejected = false;
			for (let type of types) {
				if (typePool[type] === undefined) typePool[type] = 0;
				if (typePool[type] >= 2) {
					// Reject
					rejected = true;
					break;
				}
			}
			if (rejected) continue;
			// Update type counts
			for (let type of types) {
				typePool[type]++;
			}
			/** @type {PokemonSet} */
			let set = {
				name: name,
				species: ssbSet.species,
				item: Array.isArray(ssbSet.item) ? this.sampleNoReplace(ssbSet.item) : ssbSet.item,
				ability: Array.isArray(ssbSet.ability) ? this.sampleNoReplace(ssbSet.ability) : ssbSet.ability,
				moves: [],
				nature: Array.isArray(ssbSet.nature) ? this.sampleNoReplace(ssbSet.nature) : ssbSet.nature,
				gender: ssbSet.gender,
				evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
				level: ssbSet.level || 100,
				happiness: ssbSet.happiness || 255,
				shiny: ssbSet.shiny,
			};
			if (ssbSet.ivs) {
				for (let iv in ssbSet.ivs) {
					// IVs from the set override the default of 31, assume the hardcoded IVs are legal
					// @ts-ignore StatsTable has no index signature
					set.ivs[iv] = ssbSet.ivs[iv];
				}
			}
			if (ssbSet.evs) {
				for (let ev in ssbSet.evs) {
					// EVs from the set override the default of 0, assume the hardcoded EVs are legal
					// @ts-ignore StatsTable has no index signature
					set.evs[ev] = ssbSet.evs[ev];
				}
			} else {
				set.evs = {hp: 84, atk: 84, def: 84, spa: 84, spd: 84, spe: 84};
			}
			while (set.moves.length < 3 && ssbSet.moves.length > 0) {
				let move = this.sampleNoReplace(ssbSet.moves);
				if (Array.isArray(move)) move = this.sampleNoReplace(move);
				set.moves.push(move);
			}
			set.moves.push(ssbSet.signatureMove);
			team.push(set);
		}
		return team;
	}
}

module.exports = RandomStaffBrosTeams;
