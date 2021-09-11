// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js
import {Utils} from './../lib/utils';

export const Formats: (FormatsData | {section: string, column?: number})[] = [

	// Galar Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "Galar Draft Tiers",
	},
	{
		name: "[Gen 8] Galar Dex Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Galar Dex Dynamax",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview'],
	},
	{
		name: "[Gen 8] Galar Dex Wifi",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', 'Adjust Level Down = 50'],
	},
	{
		name: "[Gen 8] Galar Dex Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Galar Dex VGC",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', '!Sleep Clause Mod', 'Adjust Level = 50', 'Picked Team Size = 4'],
	},
	{
		name: "[Gen 8] LC Galar Dex Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	
	
	
	// National Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "National Draft Tiers",
	},
	{
		name: "[Gen 8] National Dex Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Dynamax",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex Legacy",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Unrestricted",

		mod: 'gen8',
		ruleset: ['Draft', '+Unreleased', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+PastMove', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex Wifi",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Adjust Level Down = 50'],
	},
	{
		name: "[Gen 8] National Dex Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex Doubles Unrestricted",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Draft', '+Unreleased', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+PastMove', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex VGC",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod', 'Adjust Level = 50', 'Picked Team Size = 4'],
	},
	{
		name: "[Gen 8] LC National Dex Draft",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] LC National Dex Legacy",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] National Dex CAP",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+CAP', 'Team Preview', 'Dynamax Clause'],
	},



	// National Leaks Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "National Leaks Draft Tiers",
	},
	{
		name: "[Gen 8] National Dex Leaks Draft",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Leaks Dynamax",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex Leaks Legacy",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Leaks Wifi",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Adjust Level Down = 50'],
	},
	{
		name: "[Gen 8] National Dex Leaks Doubles",

		mod: 'gen8leaks',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex Leaks VGC",

		mod: 'gen8leaks',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod', 'Adjust Level = 50', 'Picked Team Size = 4'],
	},
	{
		name: "[Gen 8] LC National Dex Leaks Draft",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] LC National Dex Leaks Legacy",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] National Dex Leaks CAP",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+CAP', 'Team Preview', 'Dynamax Clause'],
	},
	
	
	
	// Custom Partner Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "Custom Partner Tiers",
		column: 2,
	},
	{
		name: "[Gen 8] (National Dex) DGBA Aspire",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
		banlist: [
			// Move restrictions
			'Deoxys-Speed + Nasty Plot', 'Latios-Mega + Aura Sphere', 'Latios-Mega + Mystical Fire', 'Shaymin-Sky + Seed Flare', 'Shaymin-Sky + Air Slash',
			'Naganadel + Nasty Plot', 'Greninja + Protean + Gunk Shot', 'Greninja + Protean + U-Turn', 'Greninja + Battle Bond', 'Darkrai + Nasty Plot',
			'Darkrai + Calm Mind', 'Kyurem-Black + Dragon Dance', 'Genesect + Flame Charge', 'Genesect + Rock Polish', 'Genesect + Shift Gear', 'Cinderace + Libero + U-Turn',
			// Item restrictions
			'Kyurem-Black + Heavy-Duty Boots', 'Cinderace + Libero + Heavy-Duty Boots',
		],
	},
	{
		name: "[Gen 8] (National Dex) SPS Ability Draft",

		mod: 'abilitydraft',
		ruleset: ['[Gen 8] National Dex Draft', '!Obtainable Abilities'],
		
	},
	{
		name: "[Gen 8] National Dex OLT",

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			'Heavy-Duty Boots', 'Shadow Tag',
		],
	},
	{
		name: "[Gen 8] Galar Dex OLT",

		mod: 'gen8',
		ruleset: ['[Gen 8] Galar Dex Draft'],
		banlist: [
			'Heavy-Duty Boots', 'Shadow Tag',
		],
	},
	{
		name: "[Gen 4] Trick House Elimlocke",

		mod: 'sgss',
		ruleset: ['Standard', '!Species Clause', '!Obtainable Moves', '!Obtainable Abilities'],
		newTypes: [
			'Venomoth', 'Farfetch\u2019d', 'Masquerain', 'Volbeat', 'Illumise', 'Glalie', 'Luxio', 'Luxray', 'Carnivine', 'Electivire', 'Rotom-Heat', 
			'Rotom-Wash', 'Rotom-Frost', 'Rotom-Fan', 'Rotom-Mow', 'Clefairy', 'Clefable', 'Jigglypuff', 'Wigglytuff', 'Mr. Mime', 'Cleffa', 'Igglybuff', 
			'Togepi', 'Togetic', 'Marill', 'Azumarill', 'Snubbull', 'Granbull', 'Ralts', 'Kirlia', 'Gardevoir', 'Azurill', 'Mawile', 'Mime Jr.', 'Togekiss'
		],
		onSwitchIn(pokemon) {
			if (this.format.newTypes.includes(pokemon.species.name)) {
				this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			}
		},
	},
	
	
	
	// Multi Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "Multi Draft Tiers",
		column: 2,
	},
	{
		name: "[Gen 8] Galar Dex Multi Draft",

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', 'Dynamax Clause', 'Max Team Size = 3'],
	},
	{
		name: "[Gen 8] Galar Dex Multi Dynamax",

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', 'Max Team Size = 3'],
	},
	{
		name: "[Gen 8] National Dex Multi Draft",

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause', 'Max Team Size = 3'],
	},
	{
		name: "[Gen 8] National Dex Multi Legacy",

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause', 'Max Team Size = 3'],
	},
	{
		name: "[Gen 8] National Dex Multi Dynamax",

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Max Team Size = 3'],
	},
	{
		name: "[Gen 8] National Dex Leaks Multi Draft",

		mod: 'gen8leaks',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause', 'Max Team Size = 3'],
	},
	{
		name: "[Gen 8] National Dex Leaks Multi Dynamax",

		mod: 'gen8leaks',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Max Team Size = 3'],
	},
	{
		name: "[Gen 8] National Dex Leaks Multi Legacy",

		mod: 'gen8leaks',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause', 'Max Team Size = 3'],
	},
	{
		name: "[Gen 8] National Dex Multi Unrestricted",

		mod: 'gen8',
		gameType: 'multi',
		tournamentShow: false,
		ruleset: ['Draft', '+Unreleased', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+PastMove', 'Team Preview', 'Max Team Size = 3'],
	},
	
	
	
	// FFA Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "FFA Draft Tiers",
		column: 2,
	},
	{
		name: "[Gen 8] Galar Dex FFA Draft",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Galar Dex FFA Dynamax",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex FFA Draft",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex FFA Legacy",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex FFA Dynamax",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex Leaks FFA Draft",

		mod: 'gen8leaks',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex Leaks FFA Dynamax",

		mod: 'gen8leaks',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex Leaks FFA Legacy",

		mod: 'gen8leaks',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex FFA Unrestricted",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		ruleset: ['Draft', '+Unreleased', '-Nonexistent', 'Obtainable Formes', 'Obtainable Misc', '+CAP', '+Past', '+PastMove', 'Team Preview'],
	},
	
	
	
	// Past Gens Draft League
	///////////////////////////////////////////////////////////////////
	{
		section: "Past Gens Draft League",
		column: 2,
	},
	{
		name: "[Gen 7] Draft League",

		mod: 'gen7',
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview'],
	},
	{
		name: "[Gen 7] Wifi Draft League",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview', 'Adjust Level Down = 50'],
	},
	{
		name: "[Gen 7] DS Timer Draft League",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] Draft League'],
	},
	{
		name: "[Gen 7] LC Draft League",

		mod: 'gen7',
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
	{
		name: "[Gen 6] Draft League",

		mod: 'gen6',
		ruleset: ['Obtainable', '+Unreleased', 'Draft', 'Team Preview'],
	},
	
	
	
	// Sports Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Sports Randomized Metas",
		column: 3,
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
	{
		name: "[Gen 8] Random Battle (Blitz)",

		mod: 'gen8',
		team: 'random',
		forcedTimer: true,
		timer: {starting: 7, addPerTurn: 0, maxPerTurn: 7, maxFirstTurn: 10, timeoutAutoChoose: true},
		ruleset: ['[Gen 8] Random Battle'],
	},
	{
		name: "[Gen 8] Random Camomons",
		desc: `Pok&eacute;mon change type to match their first two moves.`,

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		randomBanlist: ['Arceus', 'Shedinja', 'Zoroark', 'Ditto'],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">Pok&eacute;mon change type to match their first two moves.</div>`);
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.moves.get(move.id).type))];
			return {...species, types: types};
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 8] Random Chimera 1v1",
		desc: `Bring 6 Pok&eacute;mon and choose their order at Team Preview. The lead Pok&eacute;mon then receives the item, ability, stats, and moves of the other five Pok&eacute;mon, which play no further part in the battle.`,

		mod: 'gen8',
		team: 'random',
		ruleset: ['Chimera 1v1 Rule', 'Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		randomBanlist: ['Arceus', 'Zoroark', 'Shedinja', 'Darmanitan-Galar', 'Huge Power', 'Pure Power'],
		level100: true,
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">Your 6 Pok&eacute;mon are combined into one according to team order, passing off respectively:<br>* Slot 1: Species and typing<br>* Slot 2: Item<br>* Slot 3: Ability<br>* Slot 4: Stats<br>* Slot 5: Moves 1+2<br>* Slot 6: Moves 3+4</div>`);
		},
	},
	{
		name: "[Gen 8] Random First Blood",
		desc: `The first team to have a Pok&eacute;mon faint loses.`,

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">The first team to have a Pok&eacute;mon faint loses.</div>`);
		},
		onFaint(target) {
			this.lose(target.side);
		},
	},
	{
		name: "[Gen 8] Random Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution from gen 7.`,

		mod: 'mixandmega',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		randomBanlist: [
			'Arceus', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kyogre', 
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Slaking', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Eternatus', 'Zacian', 'Zamazenta',
		],
		forceItem: [
			'Abomasite', 'Absolite', 'Aerodactylite', 'Aggronite', 'Alakazite', 'Altarianite', 'Ampharosite', 'Audinite', 'Banettite', 'Blastoisinite', 
			'Cameruptite', 'Charizardite X', 'Charizardite Y', 'Diancite', 'Galladite', 'Garchompite', 'Gardevoirite', 'Glalitite', 'Gyaradosite', 
			'Heracronite', 'Houndoominite', 'Latiasite', 'Latiosite', 'Lopunnite', 'Lucarionite', 'Manectite', 'Metagrossite', 'Mewtwonite X', 'Mewtwonite Y', 
			'Pinsirite', 'Sablenite', 'Salamencite', 'Sceptilite', 'Scizorite', 'Sharpedonite', 'Slowbronite', 'Steelixite', 'Swampertite', 'Tyranitarite', 
			'Venusaurite', 
		],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution stat boosts from gen 7.</div>`);
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 8] Random Partners in Crime",
		desc: `Doubles-based metagame where both active ally Pok&eacute;mon share abilities and moves.`,

		mod: 'partnersincrime',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		randomBanlist: [
			'Arctovish', 'Arctozolt', 'Dracovish', 'Dracozolt', 'Golisopod', 'Wimpod',
			'Huge Power', 'Imposter', 'Moody', 'Normalize', 'Pure Power', 'Trace', 'Wonder Guard',
		],
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			for (const side of this.sides) {
				if (side.allies().every(ally => ally && !ally.fainted)) {
					const a = side.active[0];
					const b = side.active[1];
					const aInnate = 'ability:' + b.ability;
					a.volatiles[aInnate] = {id: aInnate, target: a};
					const bInnate = 'ability:' + a.ability;
					b.volatiles[bInnate] = {id: bInnate, target: b};
				}
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.ability !== pokemon.ability) {
				if (!pokemon.m.innate) {
					pokemon.m.innate = 'ability:' + ally.ability;
					delete pokemon.volatiles[pokemon.m.innate];
					pokemon.addVolatile(pokemon.m.innate);
				}
				if (!ally.m.innate) {
					ally.m.innate = 'ability:' + pokemon.ability;
					delete ally.volatiles[ally.m.innate];
					ally.addVolatile(ally.m.innate);
				}
			}
		},
		onSwitchOut(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
		onFaint(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
	},
	{
		name: "[Gen 8] Random Scalemons",
		desc: `Every Pok&eacute;mon's stats, barring HP, are scaled to give them a BST as close to 600 as possible.`,

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause', 'Scalemons Mod'],
		randomBanlist: [
			'Abra', 'Carvanha', 'Gastly', 'Darmanitan-Galar', 'Glalie',
			'Huge Power', 'Pure Power', 'Moody',
		],
		allowUnevolved: true,
		level100: true,
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">Every Pok&eacute;mon's stats, barring HP, are scaled to give them a BST as close to 600 as possible.</div>`);
		},
	},
	{
		name: "[Gen 8] Random Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,

		mod: 'sharedpower',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		randomBanlist: [
			'Darmanitan-Galar', 'Zoroark', 'Ditto', 'Shedinja', 'Furfrou', 'Golisopod', 'Tornadus-Therian', 'Bibarel', 
			'Swoobat', 'Gardevoir', 'Porygon2', 'Glalie',
			'Arena Trap', 'Fur Coat', 'Huge Power', 'Moody', 'Neutralizing Gas', 'Pure Power', 'Regenerator',
			'Shadow Tag', 'Simple', 'Speed Boost', 'Trace', 'Ice Scales',
		],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.</div>`);
		},
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 8] Random Tier Shift",
		desc: `Pok&eacute;mon below OU get all their base stats boosted, except HP. UU/RUBL get +10, RU/NUBL get +20, NU/PUBL get +30, PU and NFE get +40, LC get +50. Ubers get -10.`,
		
		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		allowUnevolved: true,
		level100: true,
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">Pok&eacute;mon below OU get all their base stats boosted, except HP:<br>* UU/RUBL: +10<br>* RU/NUBL: +20<br>* NU/PUBL: +30<br>* PU/NFE: +40<br>* LC: +50<br>* Uber: -10</div>`);
		},
		onModifySpecies(species, target, source, effect) {
			if (!species.baseStats) return;
			const boosts: {[tier: string]: number} = {
				uber: -10,
				uu: 10,
				rubl: 10,
				ru: 20,
				nubl: 20,
				nu: 30,
				publ: 30,
				pu: 40,
				nfe: 40,
				lc: 50,
			};
			let tier = this.toID(species.tier) || 'ou';
			if (!(tier in boosts)) return;
			// Non-Pokemon bans in lower tiers
			if (target && boosts[tier] > 20) {
				if (target.set.ability === 'drizzle') tier = 'nubl';
				if (target.set.ability === 'drought') tier = 'nubl';
				if (target.set.ability === 'snowwarning') tier = 'nubl';
			}
			const pokemon = this.dex.deepClone(species);
			pokemon.bst = pokemon.baseStats['hp'];
			const boost = boosts[tier];
			let statName: StatID;
			for (statName in pokemon.baseStats as StatsTable) {
				if (statName === 'hp') continue;
				pokemon.baseStats[statName] = this.clampIntRange(pokemon.baseStats[statName] + boost, 1, 255);
				pokemon.bst += pokemon.baseStats[statName];
			}
			return pokemon;
		},
	},
	{
		name: "[Gen 8] Dynamax Frenzy",
		desc: `All Pok&eacute;mon are always Dynamaxed.`,

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">All Pok&eacute;mon are always Dynamaxed.</div>`);
		},
		onSwitchIn(pokemon) {
			pokemon.canDynamax = true;
			pokemon.addVolatile('dynamax');
			pokemon.volatiles['dynamax'].duration = 0;
			pokemon.canDynamax = false;
		},
	},
	{
		name: "[Gen 8] Inverse Random Battle",
		desc: `The type effectiveness chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses.`,
		
		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Inverse Mod'],
		randomBanlist: ['Arceus', 'Linoone'],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">The type effectiveness chart is inverted: weaknesses become resistances, while resistances and immunities become weaknesses.</div>`);
		},
	},
	{
		name: "[Gen 8] Protean Palace",
		desc: `All Pok&eacute;mon have the Protean effect on top of their regular ability.`,
		
		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		randomBanlist: ['Arceus', 'Greninja', 'Kecleon', 'Shedinja'],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">All Pok&eacute;mon have the Protean effect on top of their regular ability.</div>`);
		},
		onPrepareHitPriority: -1,
		onPrepareHit(source, target, move) {
			if (move.hasBounced) return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type);
			}
		},
	},
	{
		name: "[Gen 8] Shifting Illusions",
		desc: `All Pok&eacute;mon have the Illusion effect on top of their regular ability.`,
		
		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		randomBanlist: ['Ditto', 'Zoroark'],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">All Pok&eacute;mon have the Illusion effect on top of their regular ability.</div>`);
		},
		onBeforeSwitchIn(pokemon) {
			pokemon.illusion = null;
			// yes, you can Illusion an active pokemon but only if it's to your right
			for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				const possibleTarget = pokemon.side.pokemon[i];
				if (!possibleTarget.fainted) {
					pokemon.illusion = possibleTarget;
					break;
				}
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, source, move);
			}
		},
		onEnd(pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
					(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
	},
	{
		name: "[Gen 8] VoltTurn Mayhem",
		desc: `All Pok&eacute;mon automatically switch out upon using a move that affects the opponent.`,
		
		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
		randomBanlist: ['fakeout'],
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">All Pok&eacute;mon automatically switch out upon using a move that affects the opponent.</div>`);
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			switch (move.target) {
			case 'normal':
			case 'randomNormal':
			case 'allAdjacent':
			case 'allAdjacentFoes':
			case 'any':
			case 'scripted':
				move.selfSwitch = true;
			}
		},
	},
	
	
	
	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 3,
	},
	{
		name: "[Gen 8] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656414/">Almost Any Ability</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex Draft', '!Obtainable Abilities', '2 Ability Clause'],
		banlist: [
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword', 'Libero',
			'Moody', 'Neutralizing Gas', 'Parental Bond', 'Power Construct', 'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost', 'Water Bubble', 'Wonder Guard',
			'Baton Pass',
		],
		onValidateSet(set) {
			// Temporary fix until battle-only is implemented properly
			if (this.toID(set.species) === 'zamazentacrowned' && this.toID(set.ability) !== 'dauntlessshield') {
				return [`Zamazenta-Crowned can only use Dauntless Shield because it is a battle-only forme.`];
			}
			if (this.toID(set.species) === 'zaciancrowned' && this.toID(set.ability) !== 'intrepidsword') {
				return [`Zacian-Crowned can only use Intrepid Sword because it is a battle-only forme.`];
			}
		},
	},
	{
		name: "[Gen 8] Alphabet Cup",
		desc: `Pok&eacute;mon gain access to moves that share the same starting letter as their name or the name of a pre-evolution.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672756/">Alphabet Cup</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft', 'Alphabet Cup Move Legality'],
		banlist: [
			'Acupressure', 'Baton Pass',
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Geomancy', 'Glacial Lance',
			'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Sleep Powder', 'Spore', 'Surging Strikes', 'Thousand Arrows',
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
		ruleset: ['-Nonexistent', 'OHKO Clause', 'Evasion Moves Clause', 'Forme Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Comatose + Sleep Talk', 'Double Iron Bash', 'Octolock', 'Shell Smash',
		],
		onChangeSet(set) {
			const item = this.dex.toID(set.item);
			if (set.species === 'Zacian' && item === 'rustedsword') {
				set.species = 'Zacian-Crowned';
				set.ability = 'Intrepid Sword';
				const ironHead = set.moves.indexOf('ironhead');
				if (ironHead >= 0) {
					set.moves[ironHead] = 'behemothblade';
				}
			}
			if (set.species === 'Zamazenta' && item === 'rustedshield') {
				set.species = 'Zamazenta-Crowned';
				set.ability = 'Dauntless Shield';
				const ironHead = set.moves.indexOf('ironhead');
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
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			//
		],
		onModifySpeciesPriority: 2,
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.moves.get(move.id).type))];
			return {...species, types: types};
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
		},
	},
	{
		name: "[Gen 8] Chimera 1v1",
		desc: `Bring 6 Pok&eacute;mon and choose their order at Team Preview. The lead Pok&eacute;mon then receives the item, ability, stats, and moves of the other five Pok&eacute;mon, which play no further part in the battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661215/">Chimera 1v1</a>`,
		],

		mod: 'gen8',
		ruleset: ['Chimera 1v1 Rule', 'Standard', 'Dynamax Clause', 'Sleep Moves Clause'],
		banlist: ['Shedinja', 'Huge Power', 'Moody', 'Neutralizing Gas', 'Perish Body', 'Truant', 'Eviolite', 'Focus Sash', 'Perish Song', 'Transform', 'Trick', 'Fishious Rend', 'Bolt Beak', 'Disable', 'Double Iron Bash', 'Switcheroo'],
	},
	{
		name: "[Gen 8] Cross Evolution",
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and up to 2 moves from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657562/">Cross Evolution</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft', 'Overflow Stat Mod'],
		banlist: [
			'Arena Trap', 'Ice Scales', 'Moody', 'King\'s Rock',
		],
		restricted: [
			'Chansey', 'Lunala', 'Shedinja', 'Solgaleo', 'Gorilla Tactics', 'Huge Power', 'Pure Power', 'Shadow Tag'
		],
		onValidateTeam(team) {
			const names = new Set<ID>();
			for (const set of team) {
				const name = set.name;
				if (names.has(this.dex.toID(name))) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named '${name}')`,
					];
				}
				names.add(this.dex.toID(name));
			}
			if (!names.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkCanLearn(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp?.exists || !set.crossSpecies?.exists) {
				return this.checkCanLearn(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkCanLearn(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (!set.crossMovesLeft) return problem;
			// @ts-ignore
			if (this.checkCanLearn(move, set.crossSpecies)) return problem;
			// @ts-ignore
			set.crossMovesLeft--;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.species.get(set.name);
			const onChangeSet = this.dex.formats.get('Pokemon').onChangeSet;
			let problems = onChangeSet?.call(this, set, this.format) || null;
			if (Array.isArray(problems) && problems.length) return problems;
			const crossIsCap = !this.ruleTable.has('+pokemontag:cap') && crossSpecies.isNonstandard === 'CAP';
			if (!crossSpecies.exists || crossIsCap) return this.validateSet(set, teamHas);
			const species = this.dex.species.get(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			const isCap = !this.ruleTable.has('+pokemontag:cap') && species.isNonstandard === 'CAP';
			if (!species.exists || isCap || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable");
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const ability = this.dex.abilities.get(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			// @ts-ignore
			set.crossMovesLeft = 2;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.species.get(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			const crossIsUnreleased = (crossSpecies.tier === "Unreleased" && crossSpecies.isNonstandard === "Unobtainable");
			if (crossSpecies.battleOnly || crossIsUnreleased || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.species.get(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.baseSpecies = mixedSpecies.name = `${species.name}-${crossSpecies.name}`;
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			mixedSpecies.bst = 0;
			let i: StatID;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
				mixedSpecies.bst += mixedSpecies.baseStats[i];
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "[Gen 8] First Blood",
		desc: `The first team to have a Pok&eacute;mon faint loses.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3682954/">First Blood</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Heatran', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Landorus-Base',
			'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Porygon-Z',
			'Rayquaza', 'Reshiram', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta',
			'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Arena Trap', 'Magnet Pull', 'Moody', 'Power Construct', 'Shadow Tag', 'Eject Button',
			'Baton Pass', 'Swagger',
		],
		onFaint(target) {
			this.lose(target.side);
		},
	},
	{
		name: "[Gen 8] Flipped",
		desc: `Every Pok&eacute;mon's stats are reversed. HP becomes Spe, Atk becomes Sp. Def, Def becomes Sp. Atk, and vice versa. To see a Pok&eacute;mon's stats outside of battle, type <code>/dt [pokemon], flipped</code>.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662020/">Flipped</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft', 'Flipped Mod'],
	},
	{
		name: "[Gen 8] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Uber Pok&eacute;mon) depending on its position in the team. If there is no Uber Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660461/">Godly Gift</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			'Uber > 1', 'AG + Uber > 1', 'Huge Power', 'Pure Power',
		],
		onModifySpeciesPriority: 3,
		onModifySpecies(species, target, source) {
			if (source || !target?.side) return;
			const god = target.side.team.find(set => {
				let godSpecies = this.dex.species.get(set.species);
				const validator = this.dex.formats.getRuleTable(this.dex.formats.get(`gen${this.gen}ou`));
				if (this.toID(set.ability) === 'powerconstruct') {
					return true;
				}
				if (set.item) {
					const item = this.dex.items.get(set.item);
					if (item.megaEvolves === set.species) godSpecies = this.dex.species.get(item.megaStone);
				}
				const isBanned = validator.isBannedSpecies(godSpecies);
				return isBanned;
			}) || target.side.team[0];
			const stat = Dex.stats.ids()[target.side.team.indexOf(target.set)];
			const newSpecies = this.dex.deepClone(species);
			let godSpecies = this.dex.species.get(god.species);
			if (godSpecies.forme === 'Crowned') {
				godSpecies = this.dex.species.get(godSpecies.changesFrom || godSpecies.baseSpecies);
			}
			newSpecies.bst -= newSpecies.baseStats[stat];
			newSpecies.baseStats[stat] = godSpecies.baseStats[stat];
			newSpecies.bst += newSpecies.baseStats[stat];
			return newSpecies;
		},
	},
	{
		name: "[Gen 8] Inheritance",
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656811/">Inheritance</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft', '2 Ability Clause'],
		banlist: [
			'Blacephalon', 'Blaziken', 'Butterfree', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chansey', 'Combusken', 'Cresselia', 'Darmanitan-Galar', 'Dialga', 'Dracovish',
			'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala',
			'Marshadow', 'Melmetal', 'Mewtwo', 'Natu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regieleki', 'Regigigas',
			'Reshiram', 'Sableye', 'Shedinja', 'Solgaleo', 'Spectrier', 'Tapu Koko', 'Toxtricity', 'Torkoal', 'Urshifu-Base', 'Xatu', 'Xerneas', 'Yveltal', 'Zacian',
			'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zeraora', 'Zekrom', 'Arena Trap', 'Contrary', 'Drizzle', 'Huge Power', 'Imposter', 'Innards Out',
			'Libero', 'Moody', 'Power Construct', 'Pure Power', 'Shadow Tag', 'Simple', 'Unaware', 'Unburden', 'Water Bubble', 'Baton Pass', 'Bolt Beak', 'Fishious Rend',
			'Shell Smash',
		],
		getEvoFamily(speciesid) {
			let species = Dex.species.get(speciesid);
			while (species.prevo) {
				species = Dex.species.get(species.prevo);
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			const unreleased = (pokemon: Species) => pokemon.tier === "Unreleased" && pokemon.isNonstandard === "Unobtainable";
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const pokemon of Dex.species.all()) {
					if ((pokemon.isNonstandard && pokemon.isNonstandard !== 'Past') || unreleased(pokemon)) continue;
					if (pokemon.requiredAbility || pokemon.requiredItem || pokemon.requiredMove) continue;
					if (this.ruleTable.isBannedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](pokemon.id);
						} else {
							teamHas.abilityMap[abilityId] = [pokemon.id];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.species.get(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if ((species.isNonstandard && species.isNonstandard !== 'Past') || unreleased(species)) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.abilities.get(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${ability.name} is not available on a legal Pok\u00e9mon.`];

			(this.format as any).debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.dex.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.species.get(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen8inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				const problems = this.validateSet(set, teamHas) || [];
				if (!problems.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			(this.format as any).debug = false;

			set.name = name;
			set.species = species.name;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.species.get(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `ability` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.ability = `${set.ability}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			if (this.format.ruleTable?.has('2abilityclause')) {
				const abilityTable = new Map<string, number>();
				const base: {[k: string]: string} = {
					airlock: 'cloudnine',
					battlearmor: 'shellarmor',
					clearbody: 'whitesmoke',
					dazzling: 'queenlymajesty',
					emergencyexit: 'wimpout',
					filter: 'solidrock',
					gooey: 'tanglinghair',
					insomnia: 'vitalspirit',
					ironbarbs: 'roughskin',
					libero: 'protean',
					minus: 'plus',
					moxie: 'chillingneigh',
					powerofalchemy: 'receiver',
					propellertail: 'stalwart',
					teravolt: 'moldbreaker',
					turboblaze: 'moldbreaker',
				};
				for (const set of team) {
					let ability = this.toID(set.ability.split('0')[0]);
					if (!ability) continue;
					if (ability in base) ability = base[ability] as ID;
					if ((abilityTable.get(ability) || 0) >= 2) {
						return [
							`You are limited to two of each ability by 2 Ability Clause.`,
							`(You have more than two ${this.dex.abilities.get(ability).name} variants)`,
						];
					}
					abilityTable.set(ability, (abilityTable.get(ability) || 0) + 1);
				}
			}

			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.dex.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.formats.get('gen8inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) requiredFamilies[familyId] = 1;
				requiredFamilies[familyId]++;
				if (requiredFamilies[familyId] > 2) {
					return [
						`You are limited to up to two inheritances from each evolution family by the Donor Clause.`,
						`(You inherit more than twice from ${this.dex.species.get(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.baseAbility.includes('0')) {
					const donor = pokemon.baseAbility.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					pokemon.baseAbility = this.toID(pokemon.baseAbility.split('0')[0]);
					pokemon.ability = pokemon.baseAbility;
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.species.get(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},
	{
		name: "[Gen 8] Inverse",
		desc: `The type chart is inverted. Normal is super effective against Ghost, and vice versa, etc.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666858/">Inverse</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft', 'Inverse Mod'],
	},
	{
		name: "[Gen 8] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution from gen 7.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656469/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659028/">M&amp;M Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['[Gen 8] National Dex Draft', 'Overflow Stat Mod'],
		banlist: [
			'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Electrify',
		],
		restricted: [
			//
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item?.megaStone) continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && species.isNonstandard !== 'Past') return [`${species.baseSpecies} does not exist in Gen 8.`];
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [`You are limited to one of each mega stone.`, `(You have more than one ${item.name})`];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 8] Nature Swap",
		desc: `Pok&eacute;mon have their base stats swapped depending on their nature.`,
		threads: [
			`&bullet; <a href="http://www.smogon.com/forums/threads/3673622/">Nature Swap</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			//
		],
		battle: {
			spreadModify(baseStats, set) {
				const modStats: SparseStatsTable = {atk: 10, def: 10, spa: 10, spd: 10, spe: 10};
				const tr = this.trunc;
				const nature = this.dex.natures.get(set.nature);
				let statName: keyof StatsTable;
				for (statName in modStats) {
					const stat = baseStats[statName];
					let usedStat = statName;
					if (nature.plus) {
						if (statName === nature.minus) {
							usedStat = nature.plus;
						} else if (statName === nature.plus) {
							usedStat = nature.minus!;
						}
					}
					modStats[statName] = tr(tr(2 * stat + set.ivs[usedStat] + tr(set.evs[usedStat] / 4)) * set.level / 100 + 5);
				}
				if ('hp' in baseStats) {
					const stat = baseStats['hp'];
					modStats['hp'] = tr(tr(2 * stat + set.ivs['hp'] + tr(set.evs['hp'] / 4) + 100) * set.level / 100 + 10);
				}
				return this.natureModify(modStats as StatsTable, set);
			},
			natureModify(stats, set) {
				const tr = this.trunc;
				const nature = this.dex.natures.get(set.nature);
				let s: StatIDExceptHP;
				if (nature.plus) {
					s = nature.minus!;
					const stat = this.ruleTable.has('overflowstatmod') ? Math.min(stats[s], 595) : stats[s];
					stats[s] = this.ruleTable.has('overflowstatmod') ? Math.min(stats[nature.plus], 728) : stats[nature.plus];
					stats[nature.plus] = tr(tr(stat * 110, 16) / 100);
				}
				return stats;
			},
		},
	},
	{
		name: "[Gen 8] Partners in Crime",
		desc: `Doubles-based metagame where both active ally Pok&eacute;mon share abilities and moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3664347/">Partners in Crime</a>`,
		],

		mod: 'partnersincrime',
		gameType: 'doubles',
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			'Arctovish', 'Arctozolt', 'Dracovish', 'Dracozolt', 'Golisopod', 'Wimpod',
			'Huge Power', 'Imposter', 'Moody', 'Normalize', 'Pure Power', 'Trace', 'Wonder Guard',
		],
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			for (const side of this.sides) {
				if (side.allies().every(ally => ally && !ally.fainted)) {
					const a = side.active[0];
					const b = side.active[1];
					const aInnate = 'ability:' + b.ability;
					a.volatiles[aInnate] = {id: aInnate, target: a};
					const bInnate = 'ability:' + a.ability;
					b.volatiles[bInnate] = {id: bInnate, target: b};
				}
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.ability !== pokemon.ability) {
				if (!pokemon.m.innate) {
					pokemon.m.innate = 'ability:' + ally.ability;
					delete pokemon.volatiles[pokemon.m.innate];
					pokemon.addVolatile(pokemon.m.innate);
				}
				if (!ally.m.innate) {
					ally.m.innate = 'ability:' + pokemon.ability;
					delete ally.volatiles[ally.m.innate];
					ally.addVolatile(ally.m.innate);
				}
			}
		},
		onSwitchOut(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
		},
		onFaint(pokemon) {
			if (pokemon.m.innate) {
				pokemon.removeVolatile(pokemon.m.innate);
				delete pokemon.m.innate;
			}
			const ally = pokemon.side.active.find(mon => mon && mon !== pokemon && !mon.fainted);
			if (ally && ally.m.innate) {
				ally.removeVolatile(ally.m.innate);
				delete ally.m.innate;
			}
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
		ruleset: ['[Gen 8] National Dex Draft', 'Scalemons Mod'],
		banlist: [
			'Drizzle', 'Drought', 'Huge Power', 'Rain Dance', 'Sunny Day', 'Eviolite', 'Light Ball'
		],
	},
	{
		name: "[Gen 8] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660877/">Shared Power</a>`,
		],

		mod: 'sharedpower',
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			'Arena Trap', 'Contrary', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Electric Surge ++ Surge Surfer',
			'Fur Coat', 'Guts', 'Harvest', 'Huge Power', 'Imposter', 'Innards Out', 'Libero', 'Magic Bounce', 'Magic Guard',
			'Magnet Pull', 'Mold Breaker', 'Moody', 'Neutralizing Gas', 'Power Construct', 'Queenly Majesty', 'Quick Draw',
			'Regenerator', 'Sand Rush', 'Sand Veil', 'Shadow Tag', 'Simple', 'Snow Cloak', 'Snow Warning ++ Slush Rush', 'Speed Boost',
			'Stakeout', 'Steelworker ++ Steely Spirit', 'Tinted Lens', 'Triage', 'Unaware', 'Unburden', 'Water Bubble',
		],
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				if (ability === 'noability') {
					this.hint(`Mirror Armor and Trace break in Shared Power formats that don't use Shared Power as a base, so they get removed from non-base users.`);
				}
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
	},
	{
		name: "[Gen 8] Sketchmons",
		desc: `Pok&eacute;mon can learn one of any move they don't normally learn, barring the few that are banned.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3680298/">Sketchmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			'King\'s Rock', 'Baton Pass',
		],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Clangorous Soul', 'Double Iron Bash', 'Electrify', 'Extreme Speed',
			'Fishious Rend', 'Geomancy', 'Glacial Lance', 'Lovely Kiss', 'Octolock', 'Quiver Dance', 'Secret Sword', 'Shell Smash', 'Shift Gear',
			'Sleep Powder', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
		],
		checkCanLearn(move, species, lsetData, set) {
			const problem = this.checkCanLearn(move, species, lsetData, set);
			if (!problem) return null;
			if (move.isZ || move.isMax || this.ruleTable.isRestricted(`move:${move.id}`)) return problem;
			if ((set as any).sketchMove) {
				return ` already has ${(set as any).sketchMove} as a sketched move.\n(${species.name} doesn't learn ${move.name}.)`;
			}
			(set as any).sketchMove = move.name;
			return null;
		},
		onValidateTeam(team) {
			const sketches = new Utils.Multiset<string>();
			for (const set of team) {
				if ((set as any).sketchMove) {
					sketches.add((set as any).sketchMove);
				}
			}
			const overSketched = [...sketches.entries()].filter(([moveName, count]) => count > 1);
			if (overSketched.length) {
				return overSketched.map(([moveName, count]) => (
					`You are limited to 1 of ${moveName} by Sketch Clause.\n(You have sketched ${moveName} ${count} times.)`
				));
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
		ruleset: ['[Gen 8] National Dex Draft', 'STABmons Move Legality'],
		banlist: [
			'King\'s Rock', 'Baton Pass',
		],
		restricted: [
			'Acupressure', 'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Extreme Speed', 'Fishious Rend',
			'Geomancy', 'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
		],
	},
	{
		name: "[Gen 8] Tier Shift",
		desc: `Pok&eacute;mon below OU get their stats, excluding HP, boosted. UU/RUBL get +10, RU/NUBL get +20, NU/PUBL get +30, and PU or lower get +40.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662165/">Tier Shift</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft', 'Overflow Stat Mod'],
		banlist: ['Damp Rock', 'Eviolite', 'Heat Rock'],
		onModifySpecies(species, target, source, effect) {
			if (!species.baseStats) return;
			const boosts: {[tier: string]: number} = {
				uu: 10,
				rubl: 10,
				ru: 20,
				nubl: 20,
				nu: 30,
				publ: 30,
				pu: 40,
				nfe: 40,
				lc: 40,
			};
			let tier = this.toID(species.tier) || 'ou';
			if (!(tier in boosts)) return;
			// Non-Pokemon bans in lower tiers
			if (target && boosts[tier] > 20) {
				if (target.set.ability === 'drizzle') tier = 'nubl';
				if (target.set.ability === 'drought') tier = 'nubl';
				if (target.set.ability === 'snowwarning') tier = 'nubl';
			}
			const pokemon = this.dex.deepClone(species);
			pokemon.bst = pokemon.baseStats['hp'];
			const boost = boosts[tier];
			let statName: StatID;
			for (statName in pokemon.baseStats as StatsTable) {
				if (statName === 'hp') continue;
				pokemon.baseStats[statName] = this.clampIntRange(pokemon.baseStats[statName] + boost, 1, 255);
				pokemon.bst += pokemon.baseStats[statName];
			}
			return pokemon;
		},
	},
	{
		name: "[Gen 8] The Loser's Game",
		desc: `The first player to lose all of their Pok&eacute;mon wins.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657270/">The Loser's Game</a>`,
		],

		ruleset: ['[Gen 8] National Dex Draft', '!OHKO Clause', 'Picked Team Size = 6', 'Adjust Level = 100'],
		banlist: [
			'Sandshrew-Alola', 'Shedinja', 'Infiltrator', 'Magic Guard', 'Choice Scarf',
			'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Magic Room', 'Memento', 'Misty Explosion', 'Self-Destruct',
		],
		onValidateTeam(team) {
			const familyTable = new Set<ID>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				while (species.prevo) {
					species = this.dex.species.get(species.prevo);
				}
				if (familyTable.has(species.id)) {
					return [
						`You are limited to one Pok&eacute;mon from each family by the Family Clause.`,
						`(You have more than one evolution of ${species.name}.)`,
					];
				}
				familyTable.add(species.id);
			}
		},
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpTotal = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp).reduce((a, b) => a + b)
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpTotal[i])} total HP left`
				)).join('; '));
				const maxTotal = Math.max(...hpTotal);
				tiedSides = tiedSides.filter((side, i) => hpTotal[i] === maxTotal);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}
				return this.tie();
			},
			faintMessages(lastFirst) {
				if (this.ended) return;
				const length = this.faintQueue.length;
				if (!length) return false;
				if (lastFirst) {
					this.faintQueue.unshift(this.faintQueue[this.faintQueue.length - 1]);
					this.faintQueue.pop();
				}
				let faintData;
				while (this.faintQueue.length) {
					faintData = this.faintQueue.shift()!;
					const pokemon: Pokemon = faintData.target;
					if (!pokemon.fainted &&
						this.runEvent('BeforeFaint', pokemon, faintData.source, faintData.effect)) {
						this.add('faint', pokemon);
						pokemon.side.pokemonLeft--;
						this.runEvent('Faint', pokemon, faintData.source, faintData.effect);
						this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon);
						pokemon.clearVolatile(false);
						pokemon.fainted = true;
						pokemon.isActive = false;
						pokemon.isStarted = false;
						pokemon.side.faintedThisTurn = pokemon;
					}
				}

				if (this.gen <= 1) {
					// in gen 1, fainting skips the rest of the turn
					// residuals don't exist in gen 1
					this.queue.clear();
				} else if (this.gen <= 3 && this.gameType === 'singles') {
					// in gen 3 or earlier, fainting in singles skips to residuals
					for (const pokemon of this.getAllActive()) {
						if (this.gen <= 2) {
							// in gen 2, fainting skips moves only
							this.queue.cancelMove(pokemon);
						} else {
							// in gen 3, fainting skips all moves and switches
							this.queue.cancelAction(pokemon);
						}
					}
				}

				if (!this.p1.pokemonLeft && !this.p2.pokemonLeft) {
					this.win(faintData ? faintData.target.side.foe : null);
					return true;
				}
				if (!this.p1.pokemonLeft) {
					this.win(this.p1);
					return true;
				}
				if (!this.p2.pokemonLeft) {
					this.win(this.p2);
					return true;
				}
				if (faintData) {
					this.runEvent('AfterFaint', faintData.target, faintData.source, faintData.effect, length);
				}
				return false;
			},
		},
	},
	{
		name: "[Gen 8] Trademarked",
		desc: `Sacrifice your Pok&eacute;mon's ability for a status move that activates on switch-in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656980/">Trademarked</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] National Dex Draft'],
		banlist: [
			'Baton Pass',
		],
		restricted: [
			'Baneful Bunker', 'Block', 'Copycat', 'Corrosive Gas', 'Detect', 'Destiny Bond', 'Disable', 'Encore', 'Fairy Lock', 'Ingrain', 'Instruct',
			'King\'s Shield', 'Mat Block', 'Mean Look', 'move:Metronome', 'Obstruct', 'Octolock', 'Nature Power', 'Parting Shot', 'Psycho Shift',
			'Protect', 'Roar', 'Skill Swap', 'Sleep Talk', 'Spiky Shield', 'Substitute', 'Teleport', 'Whirlwind', 'Wish', 'Yawn',
		],
		onValidateTeam(team, format, teamHas) {
			const problems = [];
			for (const trademark in teamHas.trademarks) {
				if (teamHas.trademarks[trademark] > 1) {
					problems.push(`You are limited to 1 of each Trademark.`, `(You have ${teamHas.trademarks[trademark]} Pok\u00e9mon with ${trademark} as a Trademark.)`);
				}
			}
			return problems;
		},
		validateSet(set, teamHas) {
			const dex = this.dex;
			const ability = dex.moves.get(set.ability);
			if (ability.category !== 'Status' || ability.status === 'slp' ||
				this.ruleTable.isRestricted(`move:${ability.id}`) || set.moves.map(this.dex.toID).includes(ability.id)) {
				return this.validateSet(set, teamHas);
			}
			if (ability.forceSwitch || ability.selfSwitch) {
				return [
					`Force-switching and self-switching moves are banned from being used as trademarks.`,
					`(${ability.name} is a ${ability.forceSwitch ? 'force' : 'self'}-switching move.)`,
				];
			}
			const customRules = this.format.customRules || [];
			if (!customRules.includes('!obtainableabilities')) customRules.push('!obtainableabilities');

			const TeamValidator: typeof import('../sim/team-validator').TeamValidator =
				require('../sim/team-validator').TeamValidator;

			const validator = new TeamValidator(dex.formats.get(`${this.format.id}@@@${customRules.join(',')}`));
			const moves = set.moves;
			set.moves = [ability.id];
			set.ability = dex.species.get(set.species).abilities['0'];
			let problems = validator.validateSet(set, {}) || [];
			if (problems.length) return problems;
			set.moves = moves;
			set.ability = dex.species.get(set.species).abilities['0'];
			problems = problems.concat(validator.validateSet(set, teamHas) || []);
			set.ability = ability.id;
			if (!teamHas.trademarks) teamHas.trademarks = {};
			teamHas.trademarks[ability.name] = (teamHas.trademarks[ability.name] || 0) + 1;
			return problems.length ? problems : null;
		},
		pokemon: {
			getAbility() {
				const move = this.battle.dex.moves.get(this.battle.toID(this.ability));
				if (!move.exists) return Object.getPrototypeOf(this).getAbility.call(this);
				return {
					id: move.id,
					name: move.name,
					onStart(this: Battle, pokemon: Pokemon) {
						this.add('-activate', pokemon, 'ability: ' + move.name);
						this.actions.useMove(move, pokemon);
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
		searchShow: false,
		ruleset: ['Obtainable', '!Obtainable Moves', '+Unreleased', '+Unobtainable', '+Past', '+PastMove', '+Custom', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
		onValidateSet(set) {
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	{
		name: '[Gen 8] Metronome Doubles 6v6',

		mod: 'gen8',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Obtainable', '!Obtainable Moves', '+Unreleased', '+Unobtainable', '+Past', '+PastMove', '+Custom', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
		onValidateSet(set) {
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	
	
	
	// Other Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Randomized Metas",
		column: 4,
	},
	{
		name: "[Gen 8] Free-For-All Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Multi Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'multi',
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod',
		],
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Monotype Random Battle",

		mod: 'gen8',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Challenge Cup",

		mod: 'gen8',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Challenge Cup 1v1",

		mod: 'gen8',
		team: 'randomCC',
		ruleset: ['[Gen 8] Challenge Cup', 'Team Preview', 'Dynamax Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 8] Challenge Cup 2v2",

		mod: 'gen8',
		team: 'randomCC',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 8] Challenge Cup 1v1', '!! Picked Team Size = 2'],
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
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 7 Let's Go] Random Battle",

		mod: 'gen7letsgo',
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
	
	
	
	// Other Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Other Metagames",
		column: 4,
	},
	{
		name: "[Gen 8] Rock Paper Scissors",

		mod: 'rps',
		team: 'randomRPS',
		searchShow: false,
		ruleset: ['Dynamax Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 8] Rhet Clause 2.0",
		desc: `Effectively removes stall as a playstyle and other unfair game mechanics.`,
		threads: [
			`&bullet; <a href="https://pastebin.com/YFcDiy8x">Full rules</a>`,
		],
		mod: 'gen8',
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
			const problems = [];
			const stallMons = [];
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
				let item = this.dex.items.get(set.item);
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
			const problems = [];
			const species = this.dex.species.get(set.species);
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
			if (this.dex.items.get(pokemon.item).zMove) {
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
	
	
	
	// Sw/Sh
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh",
		column: 4,
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672210/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672556/">OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674058/">OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676539/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675564/">Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675194/">Ubers Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['AG', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Alola', 'Woobat',
			'Chlorophyll', 'Moody', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672172/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675040/">AG Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672899/">AG Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656824/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671157/">CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674024/">CAP Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] National Dex OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">National Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">National Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">National Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian',
			'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] National Dex AG",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672423/">National Dex AG</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 8] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661142/">Doubles Ubers</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] VGC 2021 Series 9",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'VGC Timer'],
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	


	// Past Gens
	///////////////////////////////////////////////////////////////////
	
	{
		section: "Past Gens",
		column: 5,
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
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">USM LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">USM LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">USM LC Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
		banlist: [
			'Dragon Rage', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 7] Doubles Ubers",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: [],
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 7 Let's Go] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667865/">LGPE OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656868/">LGPE OU Viability Rankings</a>`,
		],

		mod: 'gen7letsgo',
		searchShow: false,
		ruleset: ['Adjust Level = 50', 'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 7 Let's Go] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667865/">LGPE OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656868/">LGPE OU Viability Rankings</a>`,
		],

		mod: 'gen7letsgo',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Adjust Level = 50', 'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		banlist: ['Uber'],
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
		name: "[Gen 6] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Baton Pass', 'Dragon Rage', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 6] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3606255/">ORAS Doubles OU Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7387213/">ORAS Doubles OU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7387215/">ORAS Doubles OU Sample Teams</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Swagger Clause'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void'],
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 5] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286278/">BW2 Ubers</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 5] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3485860/">BW2 LC Viability Rankings</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Baton Pass', 'Dragon Rage', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 5] Custom Game",

		mod: 'gen5',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 5] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3606719/">BW2 Doubles Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7393048/">BW2 Doubles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7393081/">BW2 Doubles Sample Teams</a>`,
		],

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Swagger Clause', 'Sleep Clause Mod'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Gravity'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 5] Triples Custom Game",

		mod: 'gen5',
		gameType: 'triples',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "[Gen 4] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286279/">DPP Ubers</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['AG'],
	},
	{
		name: "[Gen 4] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dp/articles/little_cup_guide">DPP LC Guide</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/7336500/">DPP LC Viability Rankings</a>`,
		],

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Dragon Rage', 'Sonic Boom',
		],
	},
	{
		name: "[Gen 4] Custom Game",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions
		ruleset: ['Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 4] Doubles OU",
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3618411/">DPP Doubles</a>`],

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['[Gen 4] Ubers'],
		banlist: ['Explosion'],
		unbanlist: ['Garchomp', 'Latias', 'Latios', 'Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
	},
	{
		name: "[Gen 4] Doubles Custom Game",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions
		ruleset: ['Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286280/">ADV Ubers</a>`,
		],

		mod: 'gen3',
		searchShow: false,
		ruleset: ['Standard', 'Deoxys Camouflage Clause'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] Custom Game",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 3] Doubles Custom Game",

		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
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
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
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
		name: "[Gen 1] Custom Game",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	
];
