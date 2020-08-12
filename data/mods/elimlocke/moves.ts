export const Moves: {[k: string]: ModdedMoveData} = {
	aurorabeam: {
		inherit: true,
		basePower: 75,
		pp: 15,
	},
	blazekick: {
		inherit: true,
		accuracy: 100,
		basePower: 90,
	},
	bubblebeam: {
		inherit: true,
		basePower: 75,
		pp: 15,
	},
	chatter: {
		inherit: true,
		basePower: 90,
		pp: 15,
	},
	crosspoison: {
		inherit: true,
		basePower: 90,
		pp: 15,
	},
	cut: {
		inherit: true,
		accuracy: 100,
		basePower: 60,
		pp: 25,
		critRatio: 2,
		type: "Grass",
	},
	disarmingvoice: {
		inherit: true,
		basePower: 50,
	},
	flamewheel: {
		inherit: true,
		basePower: 75,
		pp: 15,
	},
	blazekick: {
		inherit: true,
		accuracy: 100,
		basePower: 100,
	},
	needlearm: {
		inherit: true,
		basePower: 90,
	},
	poisonfang: {
		inherit: true,
		accuracy: 95,
		basePower: 65,
	},
	poisontail: {
		inherit: true,
		basePower: 90,
		pp: 15,
	},
	rockclimb: {
		inherit: true,
		accuracy: 95,
		basePower: 80,
		pp: 10,
		type: "Rock",
	},
	rocksmash: {
		inherit: true,
		basePower: 60,
	},
	shadowclaw: {
		inherit: true,
		basePower: 80,
	},
	shadowpunch: {
		inherit: true,
		basePower: 80,
		pp: 15,
	},
	sludge: {
		inherit: true,
		basePower: 75,
		pp: 15,
	},
	strength: {
		inherit: true,
		basePower: 100,
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
	},
	wildcharge: {
		inherit: true,
		basePower: 100,
	},
};
