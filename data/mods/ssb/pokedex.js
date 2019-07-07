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
	// Nacho
	aerodactylmega: {
		inherit: true,
		abilities: {0: "Doug's Ghosting"},
	},
	// Princess Furfrou
	furfrou: {
		inherit: true,
		abilities: {0: "Afro Coat"},
	},
	furfroudandy: {
		inherit: true,
		num: 676,
		species: "Furfrou-Dandy",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
	},
	furfroudebutante: {
		inherit: true,
		num: 676,
		species: "Furfrou-Debutante",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
	},
	furfroudiamond: {
		inherit: true,
		num: 676,
		species: "Furfrou-Diamond",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
	},
	furfrouheart: {
		inherit: true,
		num: 676,
		species: "Furfrou-Heart",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
	},
	furfroukabuki: {
		inherit: true,
		num: 676,
		species: "Furfrou-Kabuki",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
	},
	furfroulareine: {
		inherit: true,
		num: 676,
		species: "Furfrou-Lareine",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
	},
	furfroumatron: {
		inherit: true,
		num: 676,
		species: "Furfrou-Matron",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
	},
	furfroupharaoh: {
		inherit: true,
		num: 676,
		species: "Furfrou-Pharaoh",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
	},
	furfroustar: {
		inherit: true,
		num: 676,
		species: "Furfrou-Star",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102},
		abilities: {0: "Afro Coat"},
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
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
