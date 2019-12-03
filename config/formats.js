'use strict';
'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

/**@type {(FormatsData | {section: string, column?: number})[]} */
let Formats = [

	// Custom Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "Draft League Tiers",
	},
	{
		name: "[Gen 8] Galar Dex",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', '+Unreleased', 'Draft', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', '+Unreleased', '+Past', 'Draft', 'Team Preview'],
	},
	{
		name: "[Gen 8] Legacy National Dex",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', '+Unreleased', '+Past', '+PastMove', 'Draft', 'Team Preview', 'NatDex Rule'],
	},
	{
		name: "[Gen 8] LC National Dex",

		mod: 'gen8',
		maxLevel: 5,
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', '+Unreleased', '+Past', '+PastMove', 'Draft', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] Unrestricted National Dex",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+PastMove', 'Draft', 'Team Preview'],
	},
	{
		name: "[Gen 7] Draft League",

		mod: 'gen7',
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview'],
	},
	{
		name: "[Gen 7] WiFi Draft League",

		mod: 'gen7',
		maxForcedLevel: 50,
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview', 'VGC Timer'],
	},
	{
		name: "[Gen 7] DS Timer Draft League",

		mod: 'gen7',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['[Gen 7] Draft League'],
	},
	{
		name: "[Gen 7] LC Draft League",

		mod: 'gen7',
		maxLevel: 5,
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview', 'Double Item Clause', 'Little Cup'],
		banlist: ['Eevium Z', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 7] Unrestricted Draft League",

		mod: 'gen7',
		ruleset: ['-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', 'Draft', 'Team Preview'],
	},
	
	
	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Unrated Random Battle",

		mod: 'gen8',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656245/">OU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Shadow Tag', 'Baton Pass'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] OU (Blitz)",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656245/">OU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', 'Blitz'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] OU National Dex (beta)",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Standard', 'Team Preview', '+Past', 'NatDex Rule'],
		banlist: [
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Dialga', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon',
			'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza',
			'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] AG National Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656779/">National Dex AG</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', '+Past', 'NatDex Rule'],
	},
	{
		name: "[Gen 8] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656638/">Ubers Metagame Discussion</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3623296/">Ubers Viability Rankings</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3639330/">Ubers Sample Teams</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Standard', 'Team Preview'],
		banlist: [],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] UU",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Obtainable', 'Little Cup', 'Standard', 'Team Preview', 'Dynamax Clause'],
		banlist: ['Corsola-Galar', 'Gastly', 'Gothita', 'Sneasel', 'Swirlix', 'Moody', 'Baton Pass'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656253/">Monotype Metagame Discussion</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3622349">Monotype Viability Rankings</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3599682/">Monotype Sample Teams</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Same Type Clause', 'Standard', 'Team Preview'],
		banlist: ['Eternatus', 'Zacian', 'Zamazenta', 'Damp Rock', 'Smooth Rock', 'Shadow Tag', 'Baton Pass'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656317/">AG Metagame Discussion</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656332/">NFE Metagame Discussion</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] OU', 'NFE Clause'],
		banlist: ['Doublade', 'Rhydon', 'Type: Null', 'Shadow Tag'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656364/">1v1 Metagame Discussion</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3646758/">1v1 Viability Rankings</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3646826/">1v1 Sample Teams</a>`,
		],

		mod: 'gen8',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause'],
		banlist: ['Eternatus', 'Zacian', 'Zamazenta', 'Focus Sash', 'Perish Song'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] CAP",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', '+CAP'],
		banlist: ['Crucibelle-Mega', 'Aurumoth + Quiver Dance', 'Crucibelle + Head Smash', 'Crucibelle + Low Kick', 'Tomohawk + Earth Power', 'Tomohawk + Reflect'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656336/">BSS Discussion</a>`,
		],

		mod: 'gen8',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		unbanlist: ['Snorlax-Gmax'],
		minSourceGen: 8,
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.canGigantamax = null;
			}
		},
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656244/">Doubles OU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Standard Doubles', 'Team Preview'],
		banlist: ['DUber', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] Battle Stadium Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		minSourceGen: 8,
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.canGigantamax = null;
			}
		},
	},
	{
		name: "[Gen 8] 2v2 Doubles",
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656321/">2v2 Doubles</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Obtainable', 'Standard Doubles', 'Accuracy Moves Clause', 'Team Preview', 'Sleep Clause Mod'],
		banlist: ['DUber', 'Focus Sash', 'Perish Song', 'Swagger'],
		minSourceGen: 8,
	},
	{
		name: '[Gen 8] Metronome Battle',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		rated: false,
		teamLength: {
			validate: [2, 2],
			battle: 2,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'Pokestar Spirit', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Desolate Land', 'Dry Skin', 'Fluffy', 'Fur Coat', 'Grassy Surge',
			'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Parental Bond', 'Perish Body', 'Poison Heal', 'Power Construct', 'Pressure',
			'Primordial Sea', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina', 'Volt Absorb',
			'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene', 'Black Sludge',
			'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite', 'Oran Berry',
			'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Shedinja + Sturdy', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
		],
		onValidateSet(set) {
			let template = this.dex.getTemplate(set.species);
			if (template.types.includes('Steel')) return [`${template.species} is a Steel-type, which is banned from Metronome Battle.`];
			let bst = 0;
			for (let stat in template.baseStats) {
				// @ts-ignore
				bst += template.baseStats[stat];
			}
			if (bst > 625) return [`${template.species} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			let item = this.dex.getItem(set.item);
			if (set.item && item.megaStone) {
				let bstMega = 0;
				let megaTemplate = this.dex.getTemplate(item.megaStone);
				for (let stat in megaTemplate.baseStats) {
					// @ts-ignore
					bstMega += megaTemplate.baseStats[stat];
				}
				if (template.baseSpecies === item.megaEvolves && bstMega > 625) return [`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			if (set.moves.length !== 1 || this.dex.getMove(set.moves[0]).id !== 'metronome') return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
		},
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 8] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656414/">Almost Any Ability</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3595753/">AAA Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', '!Obtainable Abilities', 'Species Clause', 'Nickname Clause', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Eternatus', 'Shedinja', 'Zacian', 'Zamazenta',
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Libero', 'Moody', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost', 'Water Bubble', 'Wonder Guard',
		],
	},
	{
		name: "[Gen 8] Balanced Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587475/">Balanced Hackmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Comatose + Sleep Talk',
		],
	},
	{
		name: "[Gen 8] Camomons",
		desc: `Pok&eacute;mon change type to match their first two moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656413/">Camomons</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Darmanitan-Galar', 'Eternatus', 'Shedinja', 'Zacian', 'Zamazenta',
			'Arena Trap', 'Shadow Tag', 'Baton Pass',
		],
		onModifyTemplate(template, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			let types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.getMove(move.id).type))];
			return Object.assign({}, template, {types: types});
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 8] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656469/">Mix and Mega</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3591580/">Mix and Mega Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite',
			'AG', 'Gothitelle', 'Gothorita', 'Zacian-Crowned', 'Baton Pass', 'Electrify',
		],
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let itemTable = {};
			for (const set of team) {
				let item = this.dex.getItem(set.item);
				if (!item || !item.megaStone) continue;
				let template = this.dex.getTemplate(set.name || set.species);
				if (format.banlist.includes('AG') && ['Eternatus', 'Zacian', 'Zamazenta'].includes(template.baseSpecies)) {
					return [`${template.species} is not allowed to hold ${item.name}.`];
				}
				if (itemTable[item.id]) return ["You are limited to one of each mega stone.", "(You have more than one " + item.name + ")"];
				itemTable[item.id] = true;
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			let oMegaTemplate = this.dex.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.m.originalSpecies !== oMegaTemplate.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
				let oTemplate = this.dex.getTemplate(pokemon.m.originalSpecies);
				if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			let oMegaTemplate = this.dex.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.m.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 8] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656429/">STABmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', 'STABmons Move Legality'],
		banlist: ['Silvally', 'King\'s Rock', 'Razor Fang'],
		restrictedMoves: ['Acupressure', 'Belly Drum', 'Fishious Rend', 'Shell Smash', 'Shift Gear', 'Spore'],
	},


	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 8] Monotype Random Battle",

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Challenge Cup 1v1",

		mod: 'gen8',
		team: 'randomCC',
		teamLength: {
			battle: 1,
		},
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Challenge Cup 2v2",

		mod: 'gen8',
		team: 'randomCC',
		gameType: 'doubles',
		teamLength: {
			battle: 2,
		},
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen8',
		team: 'randomHC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Doubles Hackmons Cup",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Random Doubles Battle",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3601525/">Sets and Suggestions</a>`],

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen7',
		team: 'randomFactory',
		searchShow: false,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Spot Singles.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3604845/">Information and Suggestions Thread</a>`,
		],

		mod: 'gen7',
		team: 'randomBSSFactory',
		searchShow: false,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
	},
	{
		name: "[Gen 6] Random Battle",

		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen6',
		team: 'randomFactory',
		searchShow: false,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 5] Random Battle",

		mod: 'gen5',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Random Battle",

		mod: 'gen4',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Random Battle",

		mod: 'gen3',
		team: 'random',
		ruleset: ['Obtainable', 'Standard'],
	},
	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		team: 'random',
		ruleset: ['Obtainable', 'Standard'],
	},
	{
		name: "[Gen 1] Random Battle",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Obtainable', 'Standard'],
	},
	{
		name: "[Gen 1] Challenge Cup",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	
	
	// Let's Go!
	///////////////////////////////////////////////////////////////////

	{
		section: "Let's Go!",
		column: 3,
	},
	{
		name: "[Gen 7 Let's Go] Random Battle",

		mod: 'letsgo',
		team: 'random',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow AVs', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 7 Let's Go] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3644015/">LGPE OverUsed</a>`,
		],

		mod: 'letsgo',
		forcedLevel: 50,
		searchShow: false,
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 7 Let's Go] Singles No Restrictions",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3643931/">Let's Go! Discussion</a>`,
		],

		mod: 'letsgo',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow AVs', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7 Let's Go] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645303/">LGPE DOU</a>`,
		],

		mod: 'letsgo',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		banlist: ['Mewtwo'],
	},
	{
		name: "[Gen 7 Let's Go] Doubles No Restrictions",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3643931/">Let's Go! Discussion</a>`,
		],

		mod: 'letsgo',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow AVs', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 3,
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646999/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621329/">OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3638845/">OU Sample Teams</a>`,
		],

		mod: 'gen7',
		ruleset: ['Obtainable', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ou/">ORAS OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133793">ORAS OU Sample Teams</a>`,
		],

		mod: 'gen6',
		ruleset: ['Obtainable', 'Standard', 'Team Preview', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 5] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3599678/">BW2 OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133791">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		ruleset: ['Obtainable', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'Soul Dew'],
	},
	{
		name: "[Gen 4] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3506147/">DPP OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3551992/">DPP OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133790">DPP Sample Teams</a>`,
		],

		mod: 'gen4',
		ruleset: ['Obtainable', 'Standard', 'Baton Pass Clause'],
		banlist: ['Uber', 'Sand Veil', 'Soul Dew'],
	},
	{
		name: "[Gen 3] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133789">ADV Sample Teams</a>`,
		],

		mod: 'gen3',
		ruleset: ['Obtainable', 'Standard', '3 Baton Pass Clause'],
		banlist: ['Uber', 'Smeargle + Baton Pass'],
	},
	{
		name: "[Gen 2] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3556533/">GSC OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133788">GSC Sample Teams</a>`,
		],

		mod: 'gen2',
		ruleset: ['Obtainable', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3572352/">RBY OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133786">RBY Sample Teams</a>`,
		],

		mod: 'gen1',
		ruleset: ['Obtainable', 'Standard'],
		banlist: ['Uber'],
	},

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
		column: 3,
	},
	{
		name: "[Gen 7] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286276/">USM Ubers</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 7] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3652404/">UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641346/">UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621217/">UU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought', 'Kommonium Z', 'Mewnium Z'],
	},
	{
		name: "[Gen 7] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646905/">RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645873/">RU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645338/">RU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'RUBL', 'Mimikyu', 'Aurora Veil'],
		unbanlist: ['Drought'],
	},
	{
		name: "[Gen 7] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650934/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645166/">NU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632667/">NU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'NUBL', 'Drought'],
	},
	{
		name: "[Gen 7] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3652157/">PU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3614892/">PU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3611496/">PU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587196/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">LC Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">LC Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Obtainable', 'Little Cup', 'Standard', 'Swagger Clause', 'Team Preview'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621036/">Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3622349">Monotype Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3599682/">Monotype Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Obtainable', 'Same Type Clause', 'Standard', 'Swagger Clause', 'Team Preview'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 7] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646757/">1v1 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646758/">1v1 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646826/">1v1 Sample Teams</a>`,
		],

		mod: 'gen7',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		searchShow: false,
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo',
			'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
			'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom', 'Focus Sash', 'Moody', 'Perish Song', 'Detect + Fightinium Z',
		],
	},
	{
		name: "[Gen 7] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646743/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3643412/">ZU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646739/">ZU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] PU'],
		banlist: [
			'PU', 'Carracosta', 'Crabominable', 'Gorebyss', 'Jynx', 'Raticate-Alola',
			'Shiftry', 'Throh', 'Turtonator', 'Type: Null', 'Ursaring', 'Victreebel',
		],
	},
	{
		name: "[Gen 7] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621207/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3626018/">CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3648521/">CAP Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', '+CAP'],
		banlist: [
			'Aurumoth + Quiver Dance', 'Crucibelle + Head Smash', 'Crucibelle + Low Kick',
			'Tomohawk + Earth Power', 'Tomohawk + Reflect',
		],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Roles Compendium</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3619162/">Battle Spot Singles Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
		column: 3,
	},
	{
		name: "[Gen 7] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3648227/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623347/">Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3645990/">Doubles OU Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder'],
	},
	{
		name: "[Gen 7] VGC 2019 Ultra Series",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Minimal GBU', 'VGC Timer'],
		banlist: ['Unown'],
		minSourceGen: 7,
		onValidateTeam(team) {
			const legends = ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma'];
			let n = 0;
			for (const set of team) {
				const baseSpecies = this.dex.getTemplate(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return [`You can only use up to two legendary Pok\u00E9mon.`];
			}
		},
	},
	{
		name: "[Gen 7] VGC 2018",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3631800/">VGC 2018 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3622041/">VGC 2018 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3628885/">VGC 2018 Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {starting: 5 * 60, addPerTurn: 0, maxPerTurn: 55, maxFirstTurn: 90, grace: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Standard GBU'],
		banlist: ['Unown', 'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry'],
		minSourceGen: 7,
	},
	{
		name: "[Gen 7] VGC 2017",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3583926/">VGC 2017 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591794/">VGC 2017 Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3590391/">VGC 2017 Sample Teams</a>`,
		],

		mod: 'vgc17',
		gameType: 'doubles',
		searchShow: false,
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		timer: {starting: 15 * 60, addPerTurn: 0, maxPerTurn: 55, maxFirstTurn: 90, grace: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Alola Pokedex', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega',
			'Custap Berry', 'Enigma Berry', 'Jaboca Berry', 'Micle Berry', 'Rowap Berry',
		],
		minSourceGen: 7,
	},
	{
		name: "[Gen 7] Battle Spot Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595001/">Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3593890/">Battle Spot Doubles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595859/">Battle Spot Doubles Sample Teams</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// OR/AS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Singles",
		column: 4,
	},
	{
		name: "[Gen 6] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286277/">ORAS Ubers</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/uu/">ORAS UU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3598164/">ORAS UU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought'],
	},
	{
		name: "[Gen 6] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ru/">ORAS RU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3574583/">ORAS RU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 6] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/nu/">ORAS NU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3555650/">ORAS NU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 6] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/pu/">ORAS PU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3528743/">ORAS PU Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'PUBL', 'Chatter'],
	},
	{
		name: "[Gen 6] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Obtainable', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger'],
	},
	{
		name: "[Gen 6] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7421332/">ORAS Monotype</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Charizard-Mega-X', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga',
			'Genesect', 'Gengar-Mega', 'Giratina', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kyogre',
			'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Palkia', 'Rayquaza',
			'Reshiram', 'Sableye-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Soul Dew', 'Baton Pass',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3523229/">ORAS Anything Goes</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548945/">ORAS AG Resources</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031456/">ORAS 1v1</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Nickname Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: [
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense',
			'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Focus Sash', 'Soul Dew', 'Perish Song',
		],
	},
	{
		name: "[Gen 6] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3537407/">ORAS CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3545628/">ORAS CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/5594694/">ORAS CAP Sample Teams</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['[Gen 6] OU', '+CAP'],
	},
	{
		name: "[Gen 6] Battle Spot Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3527960/">ORAS Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3554616/">ORAS BSS Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// OR/AS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "OR/AS Doubles/Triples",
		column: 4,
	},
	{
		name: "[Gen 6] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3498688/">ORAS Doubles OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3535930/">ORAS Doubles OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder'],
	},
	{
		name: "[Gen 6] VGC 2016",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Phione', 'Manaphy', 'Darkrai',
			'Shaymin', 'Shaymin-Sky', 'Arceus', 'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Hoopa-Unbound', 'Volcanion', 'Soul Dew',
		],
		minSourceGen: 6,
		onValidateTeam(team) {
			const legends = ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde'];
			let n = 0;
			for (const set of team) {
				let baseSpecies = this.dex.getTemplate(set.species).baseSpecies;
				if (legends.includes(baseSpecies)) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "[Gen 6] Battle Spot Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560820/">ORAS Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3560824/">ORAS BSD Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] Battle Spot Triples",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3533914/">ORAS Battle Spot Triples Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3549201/">ORAS BST Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		minSourceGen: 6,
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// B2/W2 Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "B2/W2 Singles",
		column: 4,
	},
	{
		name: "[Gen 5] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286278/">BW2 Ubers</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'Standard Ubers'],
	},
	{
		name: "[Gen 5] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3474024/">BW2 UU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'OU', 'UUBL', 'Arena Trap', 'Drought', 'Sand Stream', 'Snow Warning'],
	},
	{
		name: "[Gen 5] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3473124/">BW2 RU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'RUBL', 'Shell Smash + Baton Pass'],
	},
	{
		name: "[Gen 5] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3484121/">BW2 NU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'NUBL', 'Prankster + Assist'],
	},
	{
		name: "[Gen 5] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7326932/">BW2 PU Information & Resources</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] NU'],
		banlist: [
			'Alomomola', 'Ampharos', 'Armaldo', 'Basculin', 'Braviary', 'Cacturne', 'Camerupt', 'Carracosta', 'Charizard',
			'Combusken', 'Eelektross', 'Electabuzz', 'Exeggutor', 'Garbodor', 'Gardevoir', 'Gigalith', 'Golem', 'Golurk',
			'Gorebyss', 'Gurdurr', 'Haunter', 'Jynx', 'Kadabra', 'Kangaskhan', 'Lapras', 'Lickilicky', 'Liepard', 'Linoone',
			'Ludicolo', 'Mandibuzz', 'Metang', 'Miltank', 'Misdreavus', 'Musharna', 'Piloswine', 'Pinsir', 'Primeape',
			'Probopass', 'Regirock', 'Roselia', 'Rotom-Fan', 'Rotom-Frost', 'Samurott', 'Sawk', 'Sawsbuck', 'Scolipede',
			'Seismitoad', 'Serperior', 'Skuntank', 'Swellow', 'Tangela', 'Tauros', 'Torkoal', 'Wartortle', 'Weezing', 'Zangoose',
		],
	},
	{
		name: "[Gen 5] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3485860/">BW2 LC Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Obtainable', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Sand Rush', 'Gligar', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela'],
	},
	{
		name: "[Gen 5] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7421333/">BW Monotype</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['[Gen 5] OU', 'Same Type Clause'],
	},
	{
		name: "[Gen 5] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031457/">BW 1v1</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Whimsicott', 'Focus Sash', 'Soul Dew', 'Perish Song'],
		unbanlist: ['Genesect', 'Landorus', 'Manaphy', 'Thundurus', 'Tornadus-Therian'],
	},
	{
		name: "[Gen 5] GBU Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Custom Game",

		mod: 'gen5',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// B2/W2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: 'B2/W2 Doubles',
		column: 4,
	},
	{
		name: "[Gen 5] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3533424/">BW2 Doubles Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3533421/">BW2 Doubles Viability Ranking</a>`,
		],

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] GBU Doubles",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Standard GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// DPP Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Singles",
		column: 5,
	},
	{
		name: "[Gen 4] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286279/">DPP Ubers</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard'],
		banlist: ['Arceus'],
	},
	{
		name: "[Gen 4] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3532624/">DPP UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503638/">DPP UU Viability Ranking</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] OU'],
		banlist: ['OU', 'UUBL'],
		unbanlist: ['Sand Veil'],
	},
	{
		name: "[Gen 4] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3583742/">DPP NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/dpp-nu-viability-ranking.3512254/">DPP NU Viability Ranking</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] UU'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 4] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7260264/">DPP PU Information & Resources</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['[Gen 4] NU'],
		banlist: [
			'Articuno', 'Cacturne', 'Charizard', 'Cradily', 'Dodrio', 'Drifblim', 'Dusclops', 'Electrode',
			'Gardevoir', 'Gligar', 'Golem', 'Grumpig', 'Haunter', 'Hitmonchan', 'Hypno', 'Jumpluff', 'Jynx',
			'Lickilicky', 'Linoone', 'Magmortar', 'Magneton', 'Manectric', 'Medicham', 'Meganium', 'Nidoqueen',
			'Ninetales', 'Piloswine', 'Poliwrath', 'Porygon2', 'Regice', 'Regirock', 'Roselia', 'Sandslash',
			'Sharpedo', 'Shiftry', 'Skuntank', 'Slowking', 'Tauros', 'Typhlosion', 'Venomoth', 'Vileplume',
		],
	},
	{
		name: "[Gen 4] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dp/articles/little_cup_guide">DPP LC Guide</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7336500/">DPP LC Viability Ranking</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Obtainable', 'Standard', 'Little Cup'],
		banlist: [
			'LC Uber', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma',
			'Berry Juice', 'Deep Sea Tooth', 'Dragon Rage', 'Hypnosis', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 4] Anything Goes",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Obtainable', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031458/">DPP 1v1</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['[Gen 4] OU', 'Accuracy Moves Clause', 'Team Preview'],
		banlist: [
			'Latias', 'Porygon-Z', 'Focus Sash', 'Soul Dew', 'Destiny Bond', 'Explosion', 'Perish Song', 'Self-Destruct',
			'Dark Void', 'Grass Whistle', 'Hypnosis', 'Lovely Kiss', 'Sing', 'Sleep Powder', 'Spore', 'Yawn',
		],
		unbanlist: ['Wobbuffet', 'Wynaut', 'Sand Veil'],
	},
	{
		name: "[Gen 4] Custom Game",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// DPP Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "DPP Doubles",
		column: 5,
	},
	{
		name: "[Gen 4] Doubles OU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3618411/">DPP Doubles</a>`],

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 4] OU'],
		banlist: ['Explosion', 'Soul Dew'],
		unbanlist: ['Garchomp', 'Latias', 'Latios', 'Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
	},
	{
		name: "[Gen 4] Doubles Custom Game",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
		column: 5,
	},
	{
		name: "[Gen 3] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286280/">ADV Ubers</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3585923/">ADV UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548578/">ADV UU Viability Rankings</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard'],
		banlist: ['Uber', 'OU', 'UUBL', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503540/">ADV NU Viability Rankings</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['[Gen 3] UU'],
		banlist: ['UU'],
	},
	{
		name: "[Gen 3] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031458/">ADV 1v1</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['[Gen 3] OU', 'Accuracy Moves Clause', 'Team Preview'],
		banlist: ['Slaking', 'Snorlax', 'Suicune', 'Destiny Bond', 'Explosion', 'Ingrain', 'Perish Song', 'Self-Destruct'],
	},
	{
		name: "[Gen 3] Custom Game",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",

		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286282/">GSC Ubers</a>`,
		],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard'],
	},
	{
		name: "[Gen 2] UU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3576710/">GSC UU</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 2] NU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3642565/">GSC NU</a>`],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['[Gen 2] UU'],
		banlist: ['UU'],
	},
	{
		name: "[Gen 2] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7792280/">GSC 1v1</a>`,
		],

		mod: 'gen2',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['[Gen 2] OU', 'Accuracy Moves Clause', 'Team Preview'],
		banlist: ['Snorlax', 'Hypnosis', 'Lovely Kiss', 'Sing', 'Sleep Powder', 'Spore', 'Swagger'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286283/">RBY Ubers</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard'],
	},
	{
		name: "[Gen 1] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3573896/">RBY UU General Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3647713/">RBY UU Viability Ranking</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 1] OU (Tradeback)",
		desc: `RBY OU with movepool additions from the Time Capsule.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/articles/rby-tradebacks-ou">Information</a>`,
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow Tradeback', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Stadium OU",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Obtainable', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Custom Game",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
	},
];

exports.Formats = Formats;
