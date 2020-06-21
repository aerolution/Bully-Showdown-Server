export const BattleFormats: {[k: string]: ModdedFormatsData} = {
	draft: {
		effectType: 'ValidatorRule',
		name: 'Draft',
		desc: "The custom Draft League ruleset",
		ruleset: [
			'Sleep Clause Mod', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'
		],
		timer: {starting: 60 * 60, grace: 0, addPerTurn: 10, maxPerTurn: 100, timeoutAutoChoose: true},
		banlist: [
			'Slowbro-Galar', 'Kubfu', 'Urshifu', 'Zarude',
			'Venusaur-Gmax', 'Blastoise-Gmax', 'Rillaboom-Gmax', 'Cinderace-Gmax', 'Inteleon-Gmax',
		],
	},
};
