'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe("Hunger Switch", function () {
	afterEach(function () {
		battle.destroy();
	});

	it("should alternate forms every turn", function () {
		battle = common.createBattle();
		battle.setPlayer('p1', {team: [
			{species: 'Morpeko', ability: 'hungerswitch', moves: ['rest']},
		]});
		battle.setPlayer('p2', {team: [
			{species: 'Magikarp', ability: 'Swift Swim', moves: ['splash']},
		]});
		const peko = battle.p1.active[0];
		assert.species(peko, 'Morpeko');
		battle.makeChoices();
		assert.species(peko, 'Morpeko-Hangry');
		battle.makeChoices();
		assert.species(peko, 'Morpeko');
	});
});
