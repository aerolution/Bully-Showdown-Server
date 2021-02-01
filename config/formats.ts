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
		maxForcedLevel: 50,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview'],
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
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] LC Galar Dex Draft",

		mod: 'gen8',
		maxLevel: 5,
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
		maxForcedLevel: 50,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
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
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] LC National Dex Draft",

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] LC National Dex Legacy",

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] National Dex CAP",

		mod: 'gen8',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+CAP', 'Team Preview', 'Dynamax Clause'],
	},



	// National DLC Draft Tiers
	///////////////////////////////////////////////////////////////////
	{
		section: "National DLC Draft Tiers",
	},
	{
		name: "[Gen 8] National Dex DLC Draft",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex DLC Dynamax",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex DLC Legacy",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] National Dex DLC Wifi",

		mod: 'gen8leaks',
		maxForcedLevel: 50,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview'],
	},
	{
		name: "[Gen 8] National Dex DLC Doubles",

		mod: 'gen8leaks',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex DLC VGC",

		mod: 'gen8leaks',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', '!Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] LC National Dex DLC Draft",

		mod: 'gen8leaks',
		maxLevel: 5,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] LC National Dex DLC Legacy",

		mod: 'gen8leaks',
		maxLevel: 5,
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', '+PastMove', 'Team Preview', 'Double Item Clause', 'Little Cup', 'Dynamax Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] National Dex DLC CAP",

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
			'Darkrai + Calm Mind', 'Kyurem-Black + Dragon Dance', 'Genesect + Flame Charge', 'Genesect + Rock Polish', 'Genesect + Shift Gear', 'Cinderace + U-Turn',
			// Item restrictions
			'Kyurem-Black + Heavy-Duty Boots', 'Cinderace + Heavy-Duty Boots',
		],
	},
	{
		name: "[Gen 8] (National Dex) OLT",

		mod: 'gen8leaks',
		ruleset: ['Obtainable', 'Draft', '+Unreleased', '+Past', 'Team Preview', 'Dynamax Clause'],
		banlist: [
			'Dragapult', 'Shadow Tag', 'Landorus + Sheer Force',
		],
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
		maxForcedLevel: 50,
		ruleset: ['Obtainable', '+Unreleased', '+LGPE', 'Draft', 'Team Preview'],
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
		maxLevel: 5,
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
	
	
	
	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
        name: "[Gen 8] (National Dex) Astrea Cup",

        mod: 'gen8',
        gameType: 'doubles',
        forcedLevel: 50,
        teamLength: {
            validate: [4, 6],
            battle: 4,
        },
        ruleset: ['Obtainable', 'Draft', '+Unreleased', 'Team Preview', '+Past', '+PastMove', 'Dynamax Clause', '!Sleep Clause Mod', '!OHKO Clause', 'Item Clause'],
        banlist: [
			// Mons
			'Mewtwo', 'Mew', 'Lugia', 'Ho-oh', 'Celebi', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Dialga', 'Palkia', 'Giratina',
			'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect',
			'Floette-Eternal', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala',
			'Necrozma', 'Magearna', 'Marshadow', 'Zeraora', 'Meltan', 'Melmetal', 'Zacian', 'Zamazenta', 'Eternatus', 'Zarude', 'Calyrex',
			'Calyrex-Ice', 'Calyrex-Shadow',
			// Forms
			'Battle Bond', 'Mega',
			// Moves + Abilities
			'Ally Switch', 'Guard Split', 'Fishious Rend', 'Bolt Beak', 'Wicked Blow', 'Surging Strikes',
			// Z-Moves
			'Buginium Z', 'Darkinium Z', 'Dragonium Z', 'Electrium Z', 'Fairium Z', 'Fightinium Z', 'Firium Z', 'Flyinium Z', 
			'Ghostium Z', 'Grassium Z', 'Groundium Z', 'Icium Z', 'Normalium Z', 'Poisonium Z', 'Psychium Z', 'Rockium Z', 
			'Steelium Z', 'Waterium Z', 'Aloraichium Z', 'Decidium Z', 'Eevium Z', 'Incinium Z', 'Kommonium Z', 'Lunalium Z', 
			'Lycanium Z', 'Marshadium Z', 'Mewnium Z', 'Mimikium Z', 'Pikanium Z', 'Pikashunium Z', 'Primarium Z', 'Snorlium Z', 
			'Solganium Z', 'Tapunium Z', 'Ultranecrozium Z',
			// Illegal moves
			'Smeargle + Grassy Glide', 'Smeargle + Dynamax Cannon', 'Smeargle + Snipe Shot', 'Smeargle + Jaw Lock', 'Smeargle + Stuff Cheeks', 
			'Smeargle + No Retreat', 'Smeargle + Tar Shot', 'Smeargle + Magic Powder', 'Smeargle + Dragon Darts', 'Smeargle + Teatime', 
			'Smeargle + Octolock', 'Smeargle + Court Change', 'Smeargle + Clangorous Soul', 'Smeargle + Body Press', 'Smeargle + Decorate', 
			'Smeargle + Drum Beating', 'Smeargle + Snap Trap', 'Smeargle + Pyro Ball', 'Smeargle + Behemoth Blade', 'Smeargle + Behemoth Bash', 
			'Smeargle + Aura Wheel', 'Smeargle + Breaking Swipe', 'Smeargle + Branch Poke', 'Smeargle + Overdrive', 'Smeargle + Apple Acid', 
			'Smeargle + Grav Apple', 'Smeargle + Spirit Break', 'Smeargle + Strange Steam', 'Smeargle + Life Dew', 'Smeargle + Obstruct', 
			'Smeargle + False Surrender', 'Smeargle + Meteor Assault', 'Smeargle + Eternabeam', 'Smeargle + Steel Beam', 'Smeargle + Expanding Force', 
			'Smeargle + Steel Roller', 'Smeargle + Scale Shot', 'Smeargle + Meteor Beam', 'Smeargle + Misty Explosion', 'Smeargle + Rising Voltage', 
			'Smeargle + Terrain Pulse', 'Smeargle + Skitter Smack', 'Smeargle + Burning Jealousy', 'Smeargle + Lash Out', 'Smeargle + Poltergeist', 
			'Smeargle + Corrosive Gas', 'Smeargle + Coaching', 'Smeargle + Flip Turn', 'Smeargle + Triple Axel', 'Smeargle + Dual Wingbeat', 
			'Smeargle + Scorching Sands', 'Clefairy + Teleport', 'Clefable + Teleport', 'Arcanine + Teleport',
		],
        minSourceGen: 7,
    },
	{
		name: "[Gen 8] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656414/">Almost Any Ability</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', '!Obtainable Abilities', 'Species Clause', 'Nickname Clause', '2 Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Buzzwole', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Dragapult', 'Dragonite', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kartana', 'Keldeo', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shedinja', 'Solgaleo', 'Spectrier', 'Urshifu-Base',
			'Urshifu-Rapid-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zeraora', 'Zygarde-Base',
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword', 'Libero',
			'Moody', 'Neutralizing Gas', 'Parental Bond', 'Power Construct', 'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost', 'Water Bubble', 'Wonder Guard',
			'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Alphabet Cup",
		desc: `Pok&eacute;mon gain access to moves that share the same starting letter as their name or the name of a pre-evolution.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672756/">Alphabet Cup</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Alphabet Cup Move Legality', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala',
			'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza',
			'Reshiram', 'Solgaleo', 'Spectrier', 'Weavile', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Acupressure', 'Baton Pass',
		],
		restricted: [
			'Astral Barrage', 'Bolt Beak', 'Double Iron Bash', 'Electrify', 'Geomancy', 'Glacial Lance',
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
			'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Shedinja',
			'Arena Trap', 'Contrary', 'Gorilla Tactics', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Magnet Pull', 'Moody',
			'Neutralizing Gas', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard',
			'Comatose + Sleep Talk', 'Double Iron Bash', 'Octolock', 'Shell Smash',
		],
		restricted: ['Zacian-Crowned'],
		onValidateSet(set) {
			const ability = this.dex.getAbility(set.ability);
			if (set.species === 'Zacian-Crowned') {
				if (this.dex.toID(set.item) !== 'rustedsword' || ability.id !== 'intrepidsword') {
					return [`${set.species} is banned.`];
				}
			} else if (ability.id === 'intrepidsword') {
				return [`${set.name}'s ability ${ability.name} is banned.`];
			}
		},
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
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragonite', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.getMove(move.id).type))];
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
		name: "[Gen 8] Flipped",
		desc: `Every Pok&eacute;mon's stats are reversed. HP becomes Spe, Atk becomes Sp. Def, Def becomes Sp. Atk, and vice versa. To see a Pok&eacute;mon's stats outside of battle, type <code>/dt [pokemon], flipped</code>.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3662020/">Flipped</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', 'Flipped Mod'],
		banlist: ['Psychic Surge', 'Psychic Terrain', 'Shell Smash'],
		unbanlist: ['Darmanitan-Galar'],
	},
	{
		name: "[Gen 8] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Uber Pok&eacute;mon) depending on its position in the team. If there is no Uber Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660461/">Godly Gift</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Blissey', 'Chansey', 'Toxapex', 'Uber > 1', 'AG + Uber > 1', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Baton Pass'],
		onModifySpecies(species, target, source) {
			if (source || !target || !target.side) return;
			const god = target.side.team.find(set => {
				let godSpecies = this.dex.getSpecies(set.species);
				const validator = this.dex.getRuleTable(this.dex.getFormat(`gen${this.gen}ou`));
				if (this.toID(set.ability) === 'powerconstruct' && this.gen === 7) {
					return true;
				}
				if (set.item) {
					const item = this.dex.getItem(set.item);
					if (item.megaEvolves === set.species) godSpecies = this.dex.getSpecies(item.megaStone);
				}
				const isBanned = validator.isBannedSpecies(godSpecies);
				return isBanned;
			}) || target.side.team[0];
			const stat = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'][target.side.team.indexOf(target.set)];
			const newSpecies = this.dex.deepClone(species);
			let godSpecies = this.dex.getSpecies(god.species);
			if (godSpecies.forme === 'Crowned') {
				godSpecies = this.dex.getSpecies(godSpecies.changesFrom || godSpecies.baseSpecies);
			}
			newSpecies.bst -= newSpecies.baseStats[stat];
			newSpecies.baseStats[stat] = godSpecies.baseStats[stat as StatName];
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
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Regieleki', 'Regigigas',
			'Reshiram', 'Shedinja', 'Solgaleo', 'Spectrier', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Huge Power', 'Imposter', 'Innards Out', 'Libero', 'Moody', 'Pure Power', 'Shadow Tag', 'Simple', 'Water Bubble',
			'Baton Pass', 'Bolt Beak', 'Fishious Rend', 'Shell Smash',
		],
		restricted: ['Blaziken', 'Butterfree', 'Torkoal', 'Toxtricity'],
		getEvoFamily(speciesid) {
			let species = Dex.getSpecies(speciesid);
			while (species.prevo) {
				species = Dex.getSpecies(species.prevo);
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			const unreleased = (pokemon: Species) => pokemon.tier === "Unreleased" && pokemon.isNonstandard === "Unobtainable";
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const speciesid in Dex.data.Pokedex) {
					const pokemon = this.dex.getSpecies(speciesid);
					if (pokemon.isNonstandard || unreleased(pokemon)) continue;
					if (pokemon.requiredAbility || pokemon.requiredItem || pokemon.requiredMove) continue;
					if (this.ruleTable.isRestrictedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](speciesid);
						} else {
							teamHas.abilityMap[abilityId] = [speciesid];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.getSpecies(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];
			if (species.isNonstandard || unreleased(species)) {
				return [`${species.name} is not obtainable in Generation ${this.dex.gen}.`];
			}

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.getAbility(set.ability);
			if (!ability.exists || ability.isNonstandard) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${this.dex.getAbility(set.ability).name} is not available on a legal Pok\u00e9mon.`];

			// @ts-ignore
			this.format.debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.dex.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.getSpecies(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.getFormat('gen8inheritance');
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
			// @ts-ignore
			this.format.debug = false;

			set.name = name;
			set.species = species.name;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.getSpecies(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `ability` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.ability = `${set.ability}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.dex.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.getFormat('gen8inheritance');
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
						`(You inherit more than twice from ${this.dex.getSpecies(familyId).name}).`,
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
			const donorTemplate = this.dex.getSpecies(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
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
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Overflow Stat Mod', 'Dynamax Clause', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Calyrex-Shadow', 'Kyogre', 'Zacian-Crowned',
			'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite',
			'Moody', 'Shadow Tag', 'Baton Pass', 'Electrify',
		],
		restricted: [
			'Calyrex-Ice', 'Dialga', 'Eternatus', 'Gengar', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Rayquaza', 'Regigigas', 'Reshiram', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zekrom', 'Zygarde-Complete',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.getItem(set.item);
				if (!item || !item.megaStone) continue;
				const species = this.dex.getSpecies(set.species);
				if (species.isNonstandard) return [`${species.baseSpecies} does not exist in gen 8.`];
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
			const oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.getSpecies(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
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
		// searchShow: false,
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Urshifu-Base', 'Urshifu-Rapid-Strike',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Contrary', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Electric Surge ++ Surge Surfer',
			'Fur Coat', 'Guts', 'Harvest', 'Huge Power', 'Imposter', 'Innards Out', 'Libero', 'Magic Bounce', 'Magic Guard',
			'Magnet Pull', 'Mold Breaker', 'Moody', 'Neutralizing Gas', 'Power Construct', 'Queenly Majesty', 'Quick Draw',
			'Regenerator', 'Sand Rush', 'Sand Veil', 'Shadow Tag', 'Simple', 'Snow Cloak', 'Snow Warning ++ Slush Rush', 'Speed Boost',
			'Stakeout', 'Steelworker ++ Steely Spirit', 'Tinted Lens', 'Triage', 'Unaware', 'Unburden', 'Water Bubble',
			'Baton Pass',
		],
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					if (['mirrorarmor', 'trace'].includes(ally.baseAbility)) continue;
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.getFormat('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.getFormat('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
		field: {
			suppressingWeather() {
				for (const side of this.battle.sides) {
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
				if (Array.isArray(ability)) return ability.some(abil => this.hasAbility(abil));
				const abilityid = this.battle.toID(ability);
				return this.ability === abilityid || !!this.volatiles['ability:' + abilityid];
			},
		},
	},
	{
		name: "[Gen 8] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656429/">STABmons</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'STABmons Move Legality', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Mamoswine', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa',
			'Porygon-Z', 'Rayquaza', 'Reshiram', 'Silvally', 'Solgaleo', 'Thundurus-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Baton Pass',
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
		ruleset: ['[Gen 8] OU', 'Overflow Stat Mod'],
		banlist: ['Damp Rock', 'Eviolite', 'Heat Rock'],
		unbanlist: ['Zamazenta-Crowned'],
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
				if (target.set.moves.includes('auroraveil')) tier = 'nubl';
			}
			const pokemon = this.dex.deepClone(species);
			pokemon.bst = 0;
			const boost = boosts[tier];
			let statName: StatName;
			for (statName in pokemon.baseStats as StatsTable) {
				if (statName === 'hp') continue;
				pokemon.baseStats[statName] = this.clampIntRange(pokemon.baseStats[statName] + boost, 1, 255);
				pokemon.bst += pokemon.baseStats[statName];
			}
			return pokemon;
		},
	},
	{
		name: "[Gen 8] Trademarked",
		desc: `Sacrifice your Pok&eacute;mon's ability for a status move that activates on switch-in.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656980/">Trademarked</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Kyurem-Black', 'Kyurem-White',
			'Giratina', 'Giratina-Origin', 'Genesect', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Lugia', 'Lunala', 'Magearna', 'Marshadow',
			'Melmetal', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
			'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
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
			const ability = dex.getMove(set.ability);
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
				const move = this.battle.dex.getMove(this.battle.toID(this.ability));
				if (!move.exists) return Object.getPrototypeOf(this).getAbility.call(this);
				return {
					id: move.id,
					name: move.name,
					onStart(this: Battle, pokemon: Pokemon) {
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
		searchShow: false,
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
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Obtainable', '!Obtainable Moves', '+Unreleased', '+Unobtainable', '+Past', '+PastMove', '+Custom', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Dynamax Clause'],
		onValidateSet(set) {
			if (set.moves.length !== 1 || this.dex.getMove(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
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
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.getMove(move.id).type))];
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
		name: "[Gen 8] Random Chimera",
		desc: `Bring 6 Pok&eacute;mon and choose their order at Team Preview. The lead Pok&eacute;mon then receives the item, ability, stats, and moves of the other five Pok&eacute;mon, who play no further part in the battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3607451/">Chimera</a>`,
		],

		mod: 'gen8',
		team: 'random',
		teamLength: {
			validate: [6, 6],
			battle: 6,
		},
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Team Preview', 'Dynamax Clause'],
		randomBanlist: ['Arceus', 'Zoroark', 'Shedinja', 'Darmanitan-Galar', 'Huge Power', 'Pure Power'],
		level100: true,
		onBegin() {
			this.add('html', `<div style="margin: 5px 0 0 0 ; padding: 3px ; border: 1px solid #ccc">Your 6 Pok&eacute;mon are combined into one according to team order, passing off respectively:<br>* Slot 1: Species and typing<br>* Slot 2: Item<br>* Slot 3: Ability<br>* Slot 4: Stats<br>* Slot 5: Moves 1+2<br>* Slot 6: Moves 3+4</div>`);
		},
		onBeforeSwitchIn(pokemon) {
			const allies = pokemon.side.pokemon.splice(1);
			pokemon.side.pokemonLeft = 1;
			const species = this.dex.deepClone(pokemon.baseSpecies);
			pokemon.item = allies[0].item;
			species.abilities = allies[1].baseSpecies.abilities;
			pokemon.ability = pokemon.baseAbility = allies[1].ability;

			// Stats
			species.baseStats = allies[2].baseSpecies.baseStats;
			pokemon.hp = pokemon.maxhp = species.maxHP = allies[2].maxhp;
			pokemon.set.evs = allies[2].set.evs;
			pokemon.set.nature = allies[2].getNature().name;
			// @ts-ignore
			pokemon.set.ivs = pokemon.baseIvs = allies[2].set.ivs;
			// @ts-ignore
			pokemon.hpType = pokemon.baseHpType = allies[2].baseHpType;

			// @ts-ignore
			pokemon.moveSlots = pokemon.baseMoveSlots = allies[3].baseMoveSlots.slice(0, 2).concat(allies[4].baseMoveSlots.slice(2)).filter((move, index, moveSlots) => moveSlots.find(othermove => othermove.id === move.id) === move);
			pokemon.setSpecies(species);
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
			const oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.getSpecies(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
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

		mod: 'gen8',
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
					if (['mirrorarmor', 'trace'].includes(ally.baseAbility)) continue;
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.getFormat('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.getFormat('gen8sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
		field: {
			suppressingWeather() {
				for (const side of this.battle.sides) {
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
				if (Array.isArray(ability)) return ability.some(abil => this.hasAbility(abil));
				const abilityid = this.battle.toID(ability);
				return this.ability === abilityid || !!this.volatiles['ability:' + abilityid];
			},
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
				if (target.set.moves.includes('auroraveil')) tier = 'nubl';
			}
			const pokemon = this.dex.deepClone(species);
			pokemon.bst = 0;
			const boost = boosts[tier];
			let statName: StatName;
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
			let i;
			for (i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				if (!pokemon.side.pokemon[i]) continue;
				if (!pokemon.side.pokemon[i].fainted) break;
			}
			if (!pokemon.side.pokemon[i]) return;
			if (pokemon === pokemon.side.pokemon[i]) return;
			pokemon.illusion = pokemon.side.pokemon[i];
		},
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.singleEvent('End', this.dex.getAbility('Illusion'), target.abilityData, target, source, move);
			}
		},
		onEnd(pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
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
	
	
	
	// Other Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Other Metagames",
		column: 3,
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
			const problems = [];
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
	
	
	
	// Past Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Randomized Metas",
		column: 4,
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
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
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
		banlist: ['AG', 'Baton Pass'],
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
		maxLevel: 5,
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix-Alola',
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
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658514/">CAP Viability Rankings</a>`,
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
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
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
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
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
		name: "[Gen 8] VGC 2021",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672129/">VGC 2021 Metagame Discussion & Resources</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Single Restricted GBU', 'VGC Timer'],
		minSourceGen: 8,
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
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
		name: "[Gen 7 Let's Go] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658931/">LGPE OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656868/">LGPE OU Viability Rankings</a>`,
		],

		mod: 'letsgo',
		searchShow: false,
		forcedLevel: 50,
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		banlist: ['Uber'],
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
		maxLevel: 5,
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
		],
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
		maxLevel: 9999,
		trunc(n) { return Math.trunc(n); },
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
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
		name: "[Gen 5] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3485860/">BW2 LC Viability Ranking</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
		],

		mod: 'gen5',
		searchShow: false,
		maxLevel: 5,
		ruleset: ['Standard', 'Little Cup', 'Sleep Moves Clause'],
		banlist: [
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scraggy', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma',
			'Sand Rush', 'Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom',
		],
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
		banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Sky Drop'],
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
