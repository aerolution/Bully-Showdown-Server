/* eslint max-len: ["error", 240] */

import {RandomTeams, TeamData} from '../../random-teams';
import {PRNG, PRNGSeed} from '../../../sim/prng';

export class RPSTeam extends RandomTeams {
	/**
	 * @param {Format | string} format
	 * @param {?PRNG | [number, number, number, number]} [prng]
	 */
	constructor(format, prng) {
		super(format, prng);
		this.allXfix = (this.random(500) === 360);
	}

	/**
	 * @param {{inBattle?: boolean}} options
	 */
	randomRPSTeam(options = {}) {
		/** @type {PokemonSet[]} */
		let team = [
			{
				name: 'Rock',
				species: 'Rhyperior',
				item: 'Firium Z',
				ability: 'Reckless',
				moves: ['Fire Punch',],
				nature: 'Lonely',
				gender: 'M',
				evs: {hp: 0, atk: 252, def: 0, spa: 0, spd: 252, spe: 4},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
				level: 100,
				happiness: 255,
				shiny: false,
			},
			{
				name: 'Paper',
				species: 'Kartana',
				item: 'Grassium Z',
				ability: 'Beast Boost',
				moves: ['Leaf Blade',],
				nature: 'Naughty',
				gender: 'N',
				evs: {hp: 0, atk: 252, def: 4, spa: 0, spd: 0, spe: 252},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 0, spe: 31},
				level: 100,
				happiness: 255,
				shiny: false,
			},
			{
				name: 'Scissors',
				species: 'Scizor',
				item: 'Assault Vest',
				ability: 'Technician',
				moves: ['Hidden Power Fire',],
				nature: 'Calm',
				gender: 'F',
				evs: {hp: 0, atk: 0, def: 0, spa: 0, spd: 252, spe: 252},
				ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
				level: 100,
				happiness: 255,
				shiny: false,
			},
		];
		return team;
	}
}

export default RPSTeam;
