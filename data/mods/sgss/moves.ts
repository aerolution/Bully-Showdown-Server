export const Moves: {[k: string]: ModdedMoveData} = {
	// SGSS changes
	cut: {
		inherit: true,
		basePower: 60,
		type: "Grass",
	},
	strength: {
		inherit: true,
		basePower: 60,
		type: "Rock",
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
	},
	rocksmash: {
		inherit: true,
		basePower: 60,
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
	},
	
	// Fairy retypings
	charm: {
		inherit: true,
		type: "Fairy",
	},
	moonlight: {
		inherit: true,
		type: "Fairy",
	},
	sweetkiss: {
		inherit: true,
		type: "Fairy",
	},
	
	// BW updates
	bind: {
		inherit: true,
		accuracy: 85,
	},
	jumpkick: {
		inherit: true,
		basePower: 100,
		pp: 10,
	},
	tackle: {
		inherit: true,
		accuracy: 100,
		basePower: 50,
	},
	wrap: {
		inherit: true,
		accuracy: 90,
	},
	thrash: {
		inherit: true,
		basePower: 120,
		pp: 10,
	},
	disable: {
		inherit: true,
		accuracy: 100,
	},
	petaldance: {
		inherit: true,
		basePower: 120,
		pp: 10,
	},
	firespin: {
		inherit: true,
		accuracy: 85,
		basePower: 35,
	},
	toxic: {
		inherit: true,
		accuracy: 90,
	},
	hypnosis: {
		inherit: true,
		accuracy: 60,
	},
	clamp: {
		inherit: true,
		accuracy: 85,
		pp: 15,
	},
	highjumpkick: {
		inherit: true,
		basePower: 130,
		pp: 10,
	},
	glare: {
		inherit: true,
		accuracy: 90,
	},
	poisongas: {
		inherit: true,
		accuracy: 80,
	},
	crabhammer: {
		inherit: true,
		accuracy: 90,
	},
	cottonspore: {
		inherit: true,
		accuracy: 100,
	},
	scaryface: {
		inherit: true,
		accuracy: 100,
	},
	bonerush: {
		inherit: true,
		accuracy: 90,
	},
	gigadrain: {
		inherit: true,
		basePower: 75,
	},
	furycutter: {
		inherit: true,
		basePower: 20,
	},
	futuresight: {
		inherit: true,
		accuracy: 100,
		basePower: 100,
		pp: 10,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			const moveData = {
				name: "Future Sight",
				basePower: 100,
				category: "Special",
				flags: {},
				willCrit: false,
				type: '???',
			} as unknown as ActiveMove;
			const damage = this.actions.getDamage(source, target, moveData, true);
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'futuresight',
				source: source,
				moveData: {
					id: 'futuresight',
					name: "Future Sight",
					accuracy: 100,
					basePower: 0,
					damage: damage,
					category: "Special",
					flags: {},
					effectType: 'Move',
					isFutureMove: true,
					type: '???',
				},
			});
			this.add('-start', source, 'Future Sight');
			return null;
		},
	},
	whirlpool: {
		inherit: true,
		accuracy: 85,
		basePower: 35,
	},
	uproar: {
		inherit: true,
		basePower: 90,
	},
	sandtomb: {
		inherit: true,
		accuracy: 85,
		basePower: 35,
	},
	bulletseed: {
		inherit: true,
		basePower: 25,
	},
	iciclespear: {
		inherit: true,
		basePower: 25,
	},
	covet: {
		inherit: true,
		basePower: 60,
	},
	rockblast: {
		inherit: true,
		accuracy: 90,
	},
	doomdesire: {
		inherit: true,
		accuracy: 100,
		basePower: 140,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			const moveData = {
				name: "Doom Desire",
				basePower: 140,
				category: "Special",
				flags: {},
				willCrit: false,
				type: '???',
			} as unknown as ActiveMove;
			const damage = this.actions.getDamage(source, target, moveData, true);
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'doomdesire',
				source: source,
				moveData: {
					id: 'doomdesire',
					name: "Doom Desire",
					accuracy: 100,
					basePower: 0,
					damage: damage,
					category: "Special",
					flags: {},
					effectType: 'Move',
					isFutureMove: true,
					type: '???',
				},
			});
			this.add('-start', source, 'Doom Desire');
			return null;
		},
	},
	feint: {
		inherit: true,
		basePower: 30,
	},
	lastresort: {
		inherit: true,
		basePower: 140,
	},
	drainpunch: {
		inherit: true,
		basePower: 75,
		pp: 10,
	},
	magmastorm: {
		inherit: true,
		accuracy: 75,
	},
};
