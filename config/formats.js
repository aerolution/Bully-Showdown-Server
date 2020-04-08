'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

/**@type {(FormatsData | {section: string, column?: number})[]} */
let Formats = [

	// Galar Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "Galar Draft Tiers",
	},
	{
		name: "[Gen 8] Galar Dex Draft",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview'],
	},
	{
		name: "[Gen 8] Galar Dex Wifi",

		mod: 'gen8',
		maxForcedLevel: 50,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', 'VGC Timer'],
	},
	{
		name: "[Gen 8] Galar Dex Pre-Home",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', 'Team Preview'],
		banlist: [
			// Unreleased Hidden Abilities
			'Grookey + Grassy Surge', 'Thwackey + Grassy Surge', 'Rillaboom + Grassy Surge', 'Scorbunny + Libero', 'Raboot + Libero', 'Cinderace + Libero', 'Sobble + Sniper', 
			'Drizzile + Sniper', 'Inteleon + Sniper', 'Hoothoot + Tinted Lens', 'Noctowl + Tinted Lens', 'Skwovet + Gluttony', 'Greedent + Gluttony', 'Pidove + Rivalry', 
			'Tranquill + Rivalry', 'Unfezant + Rivalry', 'Nickit + Stakeout', 'Thievul + Stakeout', 'Wooloo + Bulletproof', 'Dubwool + Bulletproof', 'Yamper + Rattled', 
			'Boltund + Competitive', 'Wingull + Rain Dish', 'Pelipper + Rain Dish', 'Electrike + Minus', 'Manectric + Minus', 'Delibird + Insomnia', 'Munna + Telepathy', 
			'Musharna + Telepathy', 'Snorunt + Soundproof', 'Abomasnow + Soundproof', 'Bronzor + Heavy Metal', 'Bronzong + Heavy Metal', 'Goldeen + Lightning Rod', 
			'Seaking + Lightning Rod', 'Basculin + Mold Breaker', 'Woobat + Simple', 'Swoobat + Simple', 'Noibat + Telepathy', 'Noivern + Telepathy', 'Persian + Unnerve', 
			'Espurr + Own Tempo', 'Meowstic + Prankster', 'Chinchou + Water Absorb', 'Lanturn + Water Absorb', 'Croagunk + Poison Touch', 'Toxicroak + Poison Touch', 
			'Barboach + Hydration', 'Whiscash + Hydration', 'Binacle + Pickpocket', 'Barbaracle + Pickpocket', 'Throh + Mold Breaker', 'Sawk + Mold Breaker', 'Bonsly + Rattled', 
			'Sudowoodo + Rattled', 'Cleffa + Friend Guard', 'Clefairy + Friend Guard', 'Clefable + Unaware', 'Elgyem + Analytic', 'Beheeyem + Analytic', 'Cubchoo + Rattled', 
			'Beartic + Swift Swim', 'Skorupi + Keen Eye', 'Drapion + Keen Eye', 'Maractus + Storm Drain', 'Bergmite + Sturdy', 'Avalugg + Sturdy', 'Dracozolt + Sand Rush', 
			'Arctozolt + Slush Rush', 'Dracovish + Sand Rush', 'Arctovish + Slush Rush'
		],
		minSourceGen: 8,
	},
	
	
	// National Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "National Draft Tiers",
	},
	{
		name: "[Gen 8] National Dex Draft",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Dynamax",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex Legacy",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Unrestricted",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Draft', '+Unreleased', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+PastMove', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex Wifi",

		mod: 'gen8',
		maxForcedLevel: 50,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'VGC Timer'],
	},
	{
		name: "[Gen 8] National Dex Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] LC National Dex",

		mod: 'gen8',
		maxLevel: 5,
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	
	
	// National DLC Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "National DLC Draft Tiers",
	},
	{
		name: "[Gen 8] National Dex DLC Draft",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Allow Tradeback', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex DLC Dynamax",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Allow Tradeback', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex DLC Legacy",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Allow Tradeback', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] LC National Dex DLC",

		mod: 'gen8',
		maxLevel: 5,
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Allow Tradeback', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	
	
	// Custom League Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "Custom League Tiers",
	},
	{
		name: "[Gen 8] (National Dex) CAPtyLtd",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Allow Tradeback', '+CAP', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] (National Dex) EBL",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
		unbanlist: [
			'Buginium Z', 'Darkinium Z', 'Dragonium Z', 'Electrium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 'Ghostium Z', 
			'Grassium Z', 'Groundium Z', 'Icium Z', 'Normalium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 'Steelium Z', 'Waterium Z',
			'Pikanium Z', 'Pikashunium Z',
		],
		
		onValidateSet(set) {
			let species = this.dex.getSpecies(set.species);
			let bst = 0;
			for (let stat in species.baseStats) {
				// @ts-ignore
				bst += species.baseStats[stat];
			}
			if (bst > 435) {
				return [`${set.species} is banned.`, `(Pok\u00e9mon with a BST higher than 435 are banned)`];
			}
			if (set.item === "Eviolite" && bst > 350) {
				return [`${set.species} cannot hold Eviolite.`, `(Eviolite is banned on Pok\u00e9mon with a BST higher than 350)`];
			}				
		},
	},
	{
		name: "[Gen 8] (National Dex) The Hive",

		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
		banlist: [
			'Bright Powder', "King's Rock", 'Razor Fang', 'Focus Band', 'Quick Claw', 'Moody', 'Stench', 'Baton Pass > 1',
			// Unreleased HAs
			'Grookey + Grassy Surge', 'Thwackey + Grassy Surge', 'Rillaboom + Grassy Surge', 'Scorbunny + Libero', 'Raboot + Libero', 
			'Cinderace + Libero', 'Sobble + Sniper', 'Drizzile + Sniper', 'Inteleon + Sniper', 'Skwovet + Gluttony', 'Greedent + Gluttony',
			'Nickit + Stakeout', 'Thievul + Stakeout', 'Wooloo + Bulletproof', 'Dubwool + Bulletproof', 'Yamper + Rattled', 
			'Boltund + Competitive', 'Dracozolt + Sand Rush', 'Arctozolt + Slush Rush', 'Dracovish + Sand Rush', 'Arctovish + Slush Rush',
			// Complex bans
			'Landorus + Sheer Force', 'Greninja + Protean', 'Greninja + Battle Bond', 'Blaziken + Speed Boost', 'Kangaskhan-Mega + Seismic Toss',
			'Blastoise-Mega + Shell Smash',
		],
	},
	{
		name: "[Gen 8] (National Dex) PICA",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
		banlist: [
			// Items
			'Bright Powder', 'Lax Incense', "King's Rock", 'Razor Fang', 'Focus Band', 'Quick Claw', 'Starf Berry',
			// Abilities
			'Moody', 'Stench', 'Sand Veil', 'Snow Cloak',
			// Moves
			'Confuse Ray', 'Flatter', 'Supersonic', 'Swagger', 'Sweet Kiss', 'Teeter Dance', 'Attract', 'Cute Charm', 'Acupressure', 'Flash', 
			'Leaf Tornado', 'Mirror Shot', 'Mud Bomb', 'Mud Slap', 'Muddy Water', 'Night Daze', 'Octazooka', 'Sand Attack', 'Smokescreen',
			'Clangorous Soul', 'No Retreat',
			// Illegal Forms
			'Pikachu-Cosplay', 'Pikachu-Rock-Star', 'Pikachu-Belle', 'Pikachu-Pop-Star', 'Pikachu-PhD', 'Pikachu-Libre', 
			'Pikachu-Starter', 'Eevee-Starter', 'Pichu-Spiky-eared', 'Floette-Eternal', 'Magearna-Original',
			// Unreleased HAs
			'Grookey + Grassy Surge', 'Thwackey + Grassy Surge', 'Rillaboom + Grassy Surge', 'Scorbunny + Libero', 'Raboot + Libero', 
			'Cinderace + Libero', 'Sobble + Sniper', 'Drizzile + Sniper', 'Inteleon + Sniper', 'Skwovet + Gluttony', 'Greedent + Gluttony',
			'Nickit + Stakeout', 'Thievul + Stakeout', 'Wooloo + Bulletproof', 'Dubwool + Bulletproof', 'Yamper + Rattled', 
			'Boltund + Competitive', 'Dracozolt + Sand Rush', 'Arctozolt + Slush Rush', 'Dracovish + Sand Rush', 'Arctovish + Slush Rush',
		],
	},
	
	
	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
	},
	{
		name: "[Gen 8] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656414/">Almost Any Ability</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659124/">AAA Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', '!Obtainable Abilities', 'Species Clause', 'Nickname Clause', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Dracovish', 'Eternatus', 'Keldeo', 'Kyurem-Black', 'Kyurem-White', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Reshiram', 'Shedinja', 'Solgaleo', 'Zacian', 'Zamazenta', 'Zekrom',
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword',
			'Libero', 'Moody', 'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost', 'Water Bubble', 'Wonder Guard',
			'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Balanced Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656408/">Balanced Hackmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659817/">BH Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Eternatus-Eternamax', 'Shedinja', 'Comatose + Sleep Talk', 'Double Iron Bash', 'Octolock',
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Psychic Surge', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
		],
		onValidateSet(set) {
			if (set.species === 'Zacian-Crowned' && (toID(set.item) !== 'rustedsword' || toID(set.ability) !== 'intrepidsword')) {
				return [set.species + " is banned."];
			}
		},
		onChangeSet(set) {
			const item = toID(set.item);
			if (set.species === 'Zacian' && item === 'rustedsword') {
				set.species = 'Zacian-Crowned';
				set.ability = 'Intrepid Sword';
				let ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothblade';
				}
			}
			if (set.species === 'Zamazenta' && item === 'rustedshield') {
				set.species = 'Zamazenta-Crowned';
				set.ability = 'Dauntless Shield';
				let ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothbash';
				}
			}
		},
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
			'Darmanitan-Galar', 'Eternatus', 'Hydreigon', 'Kyurem-Black', 'Kyurem-White', 'Lunala', 'Marshadow', 'Mewtwo',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Reshiram', 'Shedinja', 'Solgaleo', 'Zacian', 'Zamazenta', 'Zekrom',
			'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			let types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.getMove(move.id).type))];
			return Object.assign({}, species, {types: types});
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
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659028/">M&amp;M Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Eternatus', 'Zacian', 'Moody', 'Shadow Tag', 'Baton Pass', 'Electrify',
			'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite',
		],
		restricted: ['Gengar', 'Kyurem-Black', 'Kyurem-White', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Reshiram', 'Solgaleo', 'Zamazenta', 'Zekrom'],
		onValidateTeam(team, format) {
			const restrictedPokemon = format.restricted || [];
			/**@type {{[k: string]: true}} */
			let itemTable = {};
			for (const set of team) {
				let item = this.dex.getItem(set.item);
				if (!item || !item.megaStone) continue;
				let species = this.dex.getSpecies(set.species);
				if (species.isNonstandard) return [`${species.baseSpecies} does not exist in gen 8.`];
				if (restrictedPokemon.includes(species.name)) {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable[item.id]) return ["You are limited to one of each mega stone.", "(You have more than one " + item.name + ")"];
				itemTable[item.id] = true;
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			let oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				let oSpecies = this.dex.getSpecies(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			let oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 8] Pacifistmons",
		desc: `Pok&eacute;mon can only use status moves. Recovery moves are banned.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658719/">Pacifistmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] Ubers'],
		banlist: [
			'Magic Bounce', 'Magic Guard', 'Neutralizing Gas', 'Regenerator', 'Assault Vest',
			'Ingrain', 'Life Dew', 'move:Metronome', 'Moonlight', 'Morning Sun', 'Nature Power', 'Purify', 'Recover',
			'Rest', 'Roost', 'Slack Off', 'Soft-Boiled', 'Strength Sap', 'Swallow', 'Synthesis', 'Taunt', 'Wish',
		],
		onValidateSet(set) {
			if (set.moves) {
				for (const moveid of set.moves) {
					const move = this.dex.getMove(moveid);
					if (move.category !== "Status") {
						return [`${set.species}'s move ${move.name} is banned.`, `(Non-Status moves are banned.)`];
					}
				}
			}
			if (set.level !== 100) return [`${set.species} must be Level 100.`];
		},
	},
	{
		name: "[Gen 8] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656851/">Pure Hackmons</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] Scalemons",
		desc: `Every Pok&eacute;mon's stats, barring HP, are scaled to give them a BST as close to 600 as possible.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658482/">Scalemons</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] Ubers', 'Dynamax Clause', 'Scalemons Mod'],
		banlist: ['Darmanitan-Galar', 'Gastly', 'Arena Trap', 'Drizzle', 'Drought', 'Huge Power', 'Moody', 'Shadow Tag', 'Baton Pass', 'Rain Dance', 'Sunny Day', 'Eviolite', 'Light Ball'],
	},
	{
		name: "[Gen 8] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660877/">Shared Power</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Darmanitan-Galar', 'Eternatus', 'Kyurem-Black', 'Kyurem-White', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Reshiram', 'Shedinja', 'Solgaleo', 'Zacian', 'Zamazenta', 'Zekrom',
			'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Electric Surge ++ Surge Surfer', 'Harvest',
			'Huge Power', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magic Guard', 'Mold Breaker', 'Moody', 'Neutralizing Gas',
			'Regenerator + Emergency Exit', 'Regenerator ++ Wimp Out', 'Sand Stream ++ Sand Rush', 'Sand Veil', 'Shadow Tag',
			'Simple', 'Snow Cloak', 'Snow Warning ++ Slush Rush', 'Speed Boost', 'Steelworker ++ Steely Spirit', 'Tinted Lens',
			'Trace', 'Unaware', 'Water Bubble', 'Baton Pass',
		],
		/** @param {Pokemon} pokemon */
		// @ts-ignore
		getSharedPower(pokemon) {
			/** @type {Set<string>} */
			let sharedPower = new Set();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			// @ts-ignore
			if (!this.format.getSharedPower) return;
			// @ts-ignore
			for (const ability of this.format.getSharedPower(pokemon)) {
				let effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: toID(effect), target: pokemon};
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			// @ts-ignore
			if (!this.format.getSharedPower) return;
			// @ts-ignore
			for (const ability of this.format.getSharedPower(pokemon)) {
				let effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
		battle: {
			suppressingWeather() {
				for (const side of this.sides) {
					for (const pokemon of side.active) {
						if (pokemon && !pokemon.ignoringAbility() && pokemon.hasAbility('Cloud Nine')) {
							return true;
						}
					}
				}
				return false;
			},
		},
		pokemon: {
			hasAbility(ability) {
				if (this.ignoringAbility()) return false;
				if (Array.isArray(ability)) return ability.some(ability => this.hasAbility(ability));
				let abilityid = toID(ability);
				return this.ability === abilityid || !!this.volatiles['ability:' + abilityid];
			},
		},
	},
	{
		name: "[Gen 8] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656429/">STABmons</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658578/">STABmons Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'STABmons Move Legality', 'Dynamax Clause'],
		banlist: [
			'Darmanitan', 'Darmanitan-Galar', 'Eternatus', 'Kyurem-Black', 'Kyurem-White', 'Lunala', 'Marshadow', 'Mewtwo',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Reshiram', 'Silvally', 'Solgaleo', 'Zacian', 'Zamazenta', 'Zekrom',
			'King\'s Rock', 'Razor Fang', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
		restricted: ['Acupressure', 'Belly Drum', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Fishious Rend', 'Shell Smash', 'Shift Gear', 'Spore'],
	},
	{
		name: "[Gen 8] Trademarked",
		desc: `Sacrifice your Pok&eacute;mon's ability for a status move that activates on switch-in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656980/">Trademarked</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: ['Arena Trap'],
		restricted: [
			'Baneful Bunker', 'Block', 'Copycat', 'Detect', 'Destiny Bond', 'Ingrain', 'King\'s Shield', 'Mean Look', 'Metronome', 'Obstruct',
			'Octolock', 'Nature Power', 'Parting Shot', 'Protect', 'Roar', 'Skill Swap', 'Sleep Talk', 'Spiky Shield', 'Teleport', 'Whirlwind', 'Wish',
		],
		onValidateTeam(team, format, teamHas) {
			for (const trademark in teamHas.trademarks) {
				if (teamHas.trademarks[trademark] > 1) return [`You are limited to 1 of each Trademark.`, `(You have ${teamHas.trademarks[trademark]} of ${trademark}).`];
			}
		},
		validateSet(set, teamHas) {
			const restrictedMoves = (this.format.restricted || []).concat('Yawn');
			const dex = this.dex;
			let ability = dex.getMove(set.ability);
			if (ability.category !== 'Status' || ability.status === 'slp' || restrictedMoves.includes(ability.name) || set.moves.map(toID).includes(ability.id)) return this.validateSet(set, teamHas);
			let customRules = this.format.customRules || [];
			if (!customRules.includes('!obtainableabilities')) customRules.push('!obtainableabilities');
			const TeamValidator = /** @type {new(format: string | Format) => TeamValidator} */ (this.constructor);
			const validator = new TeamValidator(dex.getFormat(`${this.format.id}@@@${customRules.join(',')}`));
			const moves = set.moves;
			set.moves = [ability.id];
			set.ability = dex.getSpecies(set.species).abilities['0'];
			let problems = validator.validateSet(set, {}) || [];
			if (problems.length) return problems;
			set.moves = moves;
			set.ability = dex.getSpecies(set.species).abilities['0'];
			problems = problems.concat(validator.validateSet(set, teamHas) || []);
			set.ability = ability.id;
			if (!teamHas.trademarks) teamHas.trademarks = {};
			teamHas.trademarks[ability.name] = (teamHas.trademarks[ability.name] || 0) + 1;
			return problems.length ? problems : null;
		},
		pokemon: {
			getAbility() {
				const move = this.battle.dex.getMove(toID(this.ability));
				if (!move.exists) return Object.getPrototypeOf(this).getAbility.call(this);
				return {
					id: move.id,
					name: move.name,
					onStart(pokemon) {
						this.add('-activate', pokemon, 'ability: ' + move.name);
						this.useMove(move, pokemon);
					},
					toString() {
						return "";
					},
				};
			},
		},
	},
	{
		name: '[Gen 8] Metronome Singles 6v6',

		mod: 'gen8',
		ruleset: ['Obtainable', '!Obtainable Moves', '+Unreleased', '+Unobtainable', '+Past', '+PastMove', '+Custom', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
		onValidateSet(set) {
			if (set.moves.length !== 1 || this.dex.getMove(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	{
		name: '[Gen 8] Metronome Doubles 6v6',

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', '!Obtainable Moves', '+Unreleased', '+Unobtainable', '+Past', '+PastMove', '+Custom', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
		onValidateSet(set) {
			if (set.moves.length !== 1 || this.dex.getMove(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	
	
	// Past Gens Draft League
	///////////////////////////////////////////////////////////////////
	{
		section: "Past Gens Draft League",
	},
	{
		name: "[Gen 7] Draft League",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview'],
	},
	{
		name: "[Gen 7] Wifi Draft League",

		mod: 'gen7',
		maxForcedLevel: 50,
		searchShow: false,
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview', 'VGC Timer'],
	},
	{
		name: "[Gen 7] DS Timer Draft League",

		mod: 'gen7',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 100, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		searchShow: false,
		ruleset: ['[Gen 7] Draft League'],
	},
	{
		name: "[Gen 7] LC Draft League",

		mod: 'gen7',
		maxLevel: 5,
		searchShow: false,
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview', 'Double Item Clause', 'Little Cup'],
		banlist: ['Eevium Z', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 7] Unrestricted Draft League",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', 'Draft', 'Team Preview'],
	},
	
	
	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
		name: "[Gen 8] Random Battle (Blitz)",

		mod: 'gen8',
		team: 'random',
		forcedTimer: true,
		timer: {starting: 5, addPerTurn: 0, maxPerTurn: 5, maxFirstTurn: 10, timeoutAutoChoose: true},
		ruleset: ['[Gen 8] Random Battle',],
	},
	{
		name: "[Gen 8] Dynamax Frenzy",

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onSwitchIn(pokemon) {
			pokemon.canDynamax = true;
			pokemon.addVolatile('dynamax');
			pokemon.volatiles['dynamax'].duration = 0;
			pokemon.canDynamax = false;
		},
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
		ruleset: ['Obtainable Formes', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Doubles Hackmons Cup",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
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
		ruleset: ['Standard GBU'],
	},
	{
		name: "[Gen 7 Let's Go] Random Battle",

		mod: 'letsgo',
		team: 'random',
		searchShow: false,
		ruleset: ['Obtainable', 'Allow AVs', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
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
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] Random Battle",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] Challenge Cup",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	
	
	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
		column: 2,
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661910/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657382/">OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658351/">OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] OU (Blitz)",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', 'Blitz'],
	},
	{
		name: "[Gen 8] National Dex OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656899/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658849/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659038/">National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Eternatus', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza',
			'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656638/">Ubers Metagame Discussion</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3623296/">Ubers Viability Rankings</a>`,
			//`&bullet; <a href="https://www.smogon.com/forums/threads/3639330/">Ubers Sample Teams</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard'],
		banlist: [],
	},
	{
		name: "[Gen 8] UU",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 8] RU",

		mod: 'gen8',
		ruleset: ['[Gen 8] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] NU",

		mod: 'gen8',
		ruleset: ['[Gen 8] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 8] PU",

		mod: 'gen8',
		ruleset: ['[Gen 8] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: ['Corsola-Galar', 'Drifloon', 'Gastly', 'Gothita', 'Sneasel', 'Swirlix', 'Vulpix', 'Vulpix-Alola', 'Moody', 'Baton Pass'],
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
		ruleset: ['Same Type Clause', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Eternatus', 'Kyurem-White', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Reshiram', 'Solgaleo', 'Zacian', 'Zamazenta', 'Zekrom',
			'Damp Rock', 'Smooth Rock', 'Moody', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656317/">AG Metagame Discussion</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656779/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658581/">AG Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] NFE",
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656332/">NFE Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657558/">NFE Resources</a>`,
		],

		mod: 'gen8',
		ruleset: ['Not Fully Evolved', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Doublade', 'Gurdurr', 'Ivysaur', 'Mr. Mime-Galar', 'Pawniard', 'Rhydon', 'Rufflet', 'Sneasel', 'Type: Null',
			'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656364/">1v1 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657779/">1v1 Viability Rankings</a>`,
		],

		mod: 'gen8',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause'],
		banlist: [
			'Eternatus', 'Kyurem-Black', 'Kyurem-White', 'Lunala', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Necrozma',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Reshiram', 'Sableye', 'Solgaleo', 'Zacian', 'Zamazenta', 'Zekrom',
			'Focus Sash', 'Moody', 'Perish Song',
		],
	},
	{
		name: "[Gen 8] CAP",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', '+CAP'],
		banlist: ['Crucibelle-Mega', 'Arena Trap'],
		onValidateSet(set) {
			if (Dex.getSpecies(set.species).isUnreleased === 'Past') {
				return [`${set.species} is unreleased.`];
			}
		},
	},
	{
		name: "[Gen 8] Battle Stadium Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656336/">BSS Discussion</a>`,
		],

		mod: 'gen8',
		forcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Standard GBU'],
		banlist: ['Copperajah-Gmax', 'Duraludon-Gmax', 'Garbodor-Gmax', 'Gengar-Gmax', 'Machamp-Gmax'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] Extreme Speed Single Battles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661123/">Extreme Speed Single Battles Discussion</a>`,
		],

		mod: 'gen8',
		forcedLevel: 50,
		teamLength: {
			validate: [1, 6],
			battle: 1,
		},
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Cancel Mod', 'Dynamax Clause'],
		banlist: [
			'Mewtwo', 'Mew', 'Celebi', 'Jirachi', 'Reshiram', 'Zekrom', 'Kyurem', 'Keldeo', 'Cosmog', 'Cosmoem', 'Solgaleo',
			'Lunala', 'Necrozma', 'Marshadow', 'Zeraora', 'Meltan', 'Melmetal', 'Zacian', 'Zamazenta', 'Eternatus',
		],
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
		column: 3,
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656244/">Doubles OU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Beat Up'],
	},
	{
		name: "[Gen 8] Doubles Ubers",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] Doubles UU",
		threads: [
			// `&bullet; <a href="https://www.smogon.com/forums/threads/3656244/">Doubles UU Metagame Discussion</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['[Gen 8] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] VGC 2020",
		threads: [
			`&bullet; <a href="https://www.pokemon.com/us/pokemon-news/2020-pokemon-video-game-championships-vgc-format-rules/">VGC 2020 Rules</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer'],
		banlist: [
			// Gigantamax Pokemon
			'Copperajah-Gmax', 'Duraludon-Gmax', 'Garbodor-Gmax', 'Gengar-Gmax', 'Machamp-Gmax',
			// Can't obtain in Galar without transferring
			'Cobalion', 'Raichu-Alola', 'Terrakion', 'Virizion', 'Weezing-Base',
		],
		minSourceGen: 8,
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
		ruleset: ['Standard Doubles', 'Accuracy Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: ['DUber', 'Dracovish', 'Melmetal', 'Focus Sash', 'Perish Song', 'Swagger'],
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
			'Pokestar Spirit', 'Battle Bond', 'Cheek Pouch', 'Cursed Body', 'Desolate Land', 'Dry Skin', 'Fluffy', 'Fur Coat', 'Gorilla Tactics',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Moody', 'Parental Bond', 'Perish Body', 'Poison Heal', 'Power Construct',
			'Pressure', 'Primordial Sea', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Snow Warning', 'Stamina',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Shedinja + Sturdy', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
		],
		onValidateSet(set) {
			let species = this.dex.getSpecies(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			let bst = 0;
			for (let stat in species.baseStats) {
				// @ts-ignore
				bst += species.baseStats[stat];
			}
			if (bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			let item = this.dex.getItem(set.item);
			if (set.item && item.megaStone) {
				let bstMega = 0;
				let megaSpecies = this.dex.getSpecies(item.megaStone);
				for (let stat in megaSpecies.baseStats) {
					// @ts-ignore
					bstMega += megaSpecies.baseStats[stat];
				}
				if (species.baseSpecies === item.megaEvolves && bstMega > 625) {
					return [`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
				}
			}
			if (set.moves.length !== 1 || this.dex.getMove(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
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
		ruleset: ['Standard'],
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
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 5] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3599678/">BW2 OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133791">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Sleep Moves Clause', 'Swagger Clause'],
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
		ruleset: ['Standard', 'Baton Pass Clause'],
		banlist: ['Uber', 'Sand Veil', 'Soul Dew', 'Swinub ++ Snow Cloak', 'Piloswine ++ Snow Cloak', 'Mamoswine ++ Snow Cloak'],
	},
	{
		name: "[Gen 3] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133789">ADV Sample Teams</a>`,
		],

		mod: 'gen3',
		ruleset: ['Standard', '3 Baton Pass Clause'],
		banlist: ['Uber', 'Smeargle + Baton Pass'],
	},
	{
		name: "[Gen 2] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3556533/">GSC OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133788">GSC Sample Teams</a>`,
		],

		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3572352/">RBY OU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3650478/#post-8133786">RBY Sample Teams</a>`,
		],

		mod: 'gen1',
		ruleset: ['Standard'],
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
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
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
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
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
		ruleset: ['Same Type Clause', 'Standard', 'Swagger Clause'],
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
		ruleset: ['Standard GBU'],
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
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void'],
	},
	{
		name: "[Gen 7] VGC 2019",
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
		ruleset: ['Minimal GBU', 'VGC Timer'],
		banlist: ['Unown'],
		minSourceGen: 7,
		onValidateTeam(team) {
			const legends = ['Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Reshiram', 'Zekrom', 'Kyurem', 'Xerneas', 'Yveltal', 'Zygarde', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma'];
			let n = 0;
			for (const set of team) {
				const baseSpecies = this.dex.getSpecies(set.species).baseSpecies;
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
		ruleset: ['Standard GBU'],
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
		ruleset: ['Standard GBU'],
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
		ruleset: ['Standard', 'Swagger Clause', 'Mega Rayquaza Clause'],
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
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
	},
	{
		name: "[Gen 6] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7421332/">ORAS Monotype</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Swagger Clause', 'Same Type Clause'],
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
		ruleset: ['Standard GBU'],
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
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void'],
		unbanlist: ['Shaymin-Sky'],
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
				let baseSpecies = this.dex.getSpecies(set.species).baseSpecies;
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
		ruleset: ['Standard GBU'],
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
		ruleset: ['Standard GBU'],
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
		ruleset: ['Standard', '!Evasion Moves Clause', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 5] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3474024/">BW2 UU Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Sleep Clause Mod'],
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
		banlist: ['NU'],
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
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Gligar', 'Meditite', 'Murkrow', 'Scraggy', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma',
			'Sand Rush', 'Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom',
		],
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
		ruleset: ['Standard', 'Baton Pass Clause', 'Swagger Clause'],
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
		ruleset: ['Standard GBU'],
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
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Sleep Clause Mod'],
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
		ruleset: ['Standard GBU'],
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
	{
		name: "[Gen 5] Triples Custom Game",

		mod: 'gen5',
		gameType: 'triples',
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
		ruleset: ['Standard', 'Arceus EV Limit'],
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
			'Floatzel', 'Gardevoir', 'Gligar', 'Golem', 'Grumpig', 'Haunter', 'Hitmonchan', 'Hypno', 'Jumpluff',
			'Jynx', 'Lickilicky', 'Linoone', 'Magmortar', 'Magneton', 'Manectric', 'Medicham', 'Meganium', 'Nidoqueen',
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
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma',
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
		ruleset: ['[Gen 4] OU', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview'],
		banlist: ['Latias', 'Porygon-Z', 'Focus Sash', 'Destiny Bond', 'Explosion', 'Perish Song', 'Self-Destruct'],
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
		banlist: ['Explosion'],
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
		ruleset: ['Standard'],
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
		ruleset: ['Standard', 'UU NFE Clause'],
		banlist: ['Uber', 'OU', 'UUBL', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3503540/">ADV NU Viability Rankings</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['[Gen 3] UU', '!UU NFE Clause'],
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
		ruleset: ['[Gen 3] OU', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview'],
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
		ruleset: ['Standard'],
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
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 2] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/7792280/">GSC 1v1</a>`,
		],

		mod: 'gen2',
		searchShow: false,
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['[Gen 2] OU', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview'],
		banlist: ['Snorlax', 'Swagger'],
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
		ruleset: ['Standard'],
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
		ruleset: ['Standard'],
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
	
	
	// Other Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Other Metagames",
		column: 5,
	},
	{
		name: "[Gen 8] Rock Paper Scissors",

		mod: 'rps',
		team: 'randomRPS',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		searchShow: false,
		ruleset: ['Dynamax Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Rhet Clause 2.0",
		desc: `Effectively removes stall as a playstyle and other unfair game mechanics.`,
		threads: [
			`&bullet; <a href="https://pastebin.com/YFcDiy8x">Full rules</a>`,
		],
		mod: 'gen8',
		timer: {starting: 600*60, addPerTurn: 0, maxPerTurn: 60, maxFirstTurn: 90, timeoutAutoChoose: true, dcTimerBank: false},
		searchShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview'],
		banlist: [
			// OU Banlist
			'Dialga', 'Eternatus', 'Giratina', 'Groudon', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia',
			'Lunala', 'Mewtwo', 'Naganadel', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega',
			'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'Moody', 'Power Construct', 'Baton Pass',
			// Unbanlist
			// Ho-oh, Kyurem-Black, Landorus, Gengar-Mega, Blaziken, Aegislash, Necrozma-Dawn-Wings
			// Extra bans
			'Charizard-Gmax', 'Snorlax-Gmax', 'Darmanitan-Galar', 'Beedrill-Mega', 'Incineroar', 'Entei', 'Goodra', 'Ditto',
			// Unfair Item Clause
			'Shed Shell', 'Leftovers', 'Choice Specs', 'Damp Rock', 'Adrenaline Orb', 'King\'s Rock', 'Blunder Policy', 'Heavy Duty Boots', 'Utility Umbrella',
			// Stall Encouraging Clause
			'Amnesia', 'Barrier', 'Teatime', 'Haze', 'Endure', 'Psywave', 'Seismic Toss', 'Frustration', 'Bide', 'Heal Block', 'Detect',
			'Rest', 'Whirlwind', 'Life Dew', 'Breaking Swipe', 'Body Press', 'Obstruct', 'Strength Sap',
			// Accessibility Clause
			'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Manaphy', 'Phione', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Keldeo', 'Meloetta',
			'Genesect', 'Diancie', 'Hoopa', 'Hoopa-Unbound', 'Volcanion', 'Magearna', 'Marshadow', 'Zeraora', 'Melmetal', 'Meltan',
			// Pokemon + Move bans
			'Ho-oh + Sacred Fire', 'Kyurem-Black + Icicle Spear', 'Kyurem-Black + Freeze Shock', 'Kyurem-Black + Icicle Spear',
			'Kyurem-Black + Breaking Swipe', 'Kyurem-Black + Dragon Claw', 'Kyurem-Black + Dragon Tail', 'Kyurem-Black + Outrage',
			'Bisharp + Pursuit',
			// Knock Off Clause
			'Scizor + Knock Off', 'Muk-Alola + Knock Off', 'Conkeldurr + Knock Off', 'Machamp + Knock Off', 'Bisharp + Knock Off',
			'Tyranitar + Knock Off', 'Weavile + Knock Off', 'Gliscor + Knock Off', 'Sableye-Mega + Knock Off',
			// Ability bans
			'Intimidate', 'Natural Cure', 'Immunity', 'Pastel Veil', 'Sand Veil', 'Ripen', 'Regenerator', 'Serene Grace', 'Ice Scales', 'Gulp Missile',
			// Hidden Power Clause
			'Hidden Power > 1',
		],

		onValidateTeam(team) {
			let problems = [];
			let stallMons = [];
			const stallList = [
				'Slowbro-Mega', 'Audino-Mega', 'Snorlax', 'Blissey', 'Tangrowth', 'Pelipper', 'Amoonguss', 'Corviknight', 'Quagsire',
				'Clefable', 'Dugtrio', 'Gothitelle', 'Toxapex', 'Slowking', 'Gliscor', 'Gligar', 'Cresselia', 'Mandibuzz', 'Shedinja',
				'Pyukumuku', 'Haxorus', 'Sylveon', 'Umbreon', 'Vaporeon', 'Leafeon', 'Mr. Rime', 'Hippowdon', 'Porygon2', 'Ferrothorn',
				'Tangela', 'Tapu Fini', 'Pincurchin', 'Bronzong', 'Forretress', 'Hatterene', 'Barraskewda', 'Cofagrigus', 'Runerigus',
				'Corsola-Galar',
			];
			let hasMega = false;
			let hasGmax = false;
			let GmaxCount = 0;
			for (const set of team) {
				let species = set.species;
				let item = this.dex.getItem(set.item);
				if (set.item && item.megaStone && species === item.megaEvolves) {
					species = item.megaStone;
					hasMega = true;
				}
				if (stallList.includes(species)) stallMons.push(species);
				if (species.includes("-Gmax")) {
					hasGmax = true;
					GmaxCount++;
				}
			}
			if (stallMons.length > 1) {
				problems.push(`You can only have one of the following stall Pok\u00E9mon on your team: ${stallMons.join(', ')}.`);
			}
			if (hasMega && hasGmax) {
				problems.push(`You cannot have both a Mega and a Gigantamax Pok\u00E9mon.`);
			}
			if (GmaxCount > 1) {
				problems.push(`You can only have one Gigantamax Pok\u00E9mon.`);
			}
			return problems;
		},
		onValidateSet(set) {
			let problems = [];
			const species = this.dex.getSpecies(set.species);
			if (species.abilities) for (const abilitySlot in species.abilities) {
				const abilityName = species.abilities[abilitySlot];
				if (abilityName === set.ability && abilitySlot === 'H') {
					problems.push(`${set.name || set.species} cannot have ${abilityName} as Hidden Abilities are banned.`);
				}
			}
			if (set.moves) for (const move of set.moves) {
				if (move === "hiddenpowerice") {
					problems.push(`${set.name || set.species}\'s move Hidden Power Ice is banned.`);
				}
				if (move === "hiddenpowerfire") {
					problems.push(`${set.name || set.species}\'s move Hidden Power Fire is banned.`);
				}
				if (move === "hiddenpowerground") {
					problems.push(`${set.name || set.species}\'s move Hidden Power Ground is banned.`);
				}
			}
			return problems;
		},

		onBegin() {
			for (let pokemon of this.getAllPokemon()) {
				if (!pokemon.canGigantamax) pokemon.canDynamax = false;
			}
		},
		onBeforeTurn(pokemon) {
			if (pokemon) pokemon.m.justSwitched = false;
		},
		onSwitchIn(pokemon) {
			pokemon.m.justSwitched = true;
			if (this.dex.getItem(pokemon.item).zMove) {
				this.add('-message', `${pokemon.name || pokemon.species} is holding a Z-Crystal!`);
				this.add('-message', `(Please announce if you're going to use a Z-Move.)`);
			}
			if (pokemon.canGigantamax && !pokemon.m.mustGmax) {
				pokemon.m.mustGmax = true;
			}
		},
		onBeforeMove(pokemon, target, move) {
			if (pokemon.m.mustGmax && !pokemon.volatiles['dynamax']) {
				this.add(`raw|<div class="broadcast-red"><b>WARNING</b>: ${pokemon.name || pokemon.species} didn't Gigantamax on the first turn it was out.<br>Please <b>forfeit this battle immediately</b>.`);
			}
			else if (move.isZ) {
				if (target.m.justSwitched) {
					this.add(`raw|<div class="broadcast-red"><b>WARNING</b>: You can't switch out when your opponent is using a Z-Move.<br>Please <b>forfeit this battle immediately</b>.`);
				}
				else if (target.volatiles['protect']) {
					this.add(`raw|<div class="broadcast-red"><b>WARNING</b>: You can't use Protect when your opponent is using a Z-Move.<br>Please <b>forfeit this battle immediately</b>.`);
				}
			}
		},
		onModifyMove(move, pokemon) {
			if (move.id === "maxguard" || move.id === "gmaxstonesurge" || move.id ===  "gmaxsteelsurge") {
				this.add('-message', `(${move.name} is banned.)`);
				this.add('-fail', pokemon);
				return false;
			}
		},
	},
];

exports.Formats = Formats;
