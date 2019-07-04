'use strict';

/**@type {{[k: string]: ModdedTemplateData}} */
let BattlePokedex = {
	/*
	// Example
	speciesid: {
		inherit: true, // Always use this, makes the pokemon inherit its default values from the parent mod (gen7)
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100}, // the base stats for the pokemon
	},
	*/
	// Jackinev
	charizardmegax: {
		inherit: true,
		abilities: {0: "RNG Manipulation"},
	},
	// JL
	meloetta: {
		inherit: true,
		abilities: {0: "Versatility"},
	},
	meloettapirouette: {
		inherit: true,
		abilities: {0: "Versatility"},
	},
	// pig lad
	piloswine: {
		inherit: true,
		abilities: {0: "Pig Mad"},
	},
	mamoswine: {
		inherit: true,
		abilities: {0: "Pig Mad"},
	},
};

exports.BattlePokedex = BattlePokedex;
