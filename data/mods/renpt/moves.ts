export const Moves: {[k: string]: ModdedMoveData} = {
	// RenPt changes
	aurorabeam: {
		inherit: true,
		basePower: 75,
		pp: 15,
	},
	blazekick: {
		inherit: true,
		basePower: 75,
		pp: 15,
	},
	
	
	
	// Retypings
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
	curse: {
		inherit: true,
		type: "Ghost",
	},
	
	
	
	// BW updates
	bind: {
		inherit: true,
		accuracy: 85,
	},
	bonerush: {
		inherit: true,
		accuracy: 90,
	},
	bulletseed: {
		inherit: true,
		basePower: 25,
	},
	covet: {
		inherit: true,
		basePower: 60,
	},
	clamp: {
		inherit: true,
		accuracy: 85,
		pp: 15,
	},
	cottonspore: {
		inherit: true,
		accuracy: 100,
	},
	crabhammer: {
		inherit: true,
		accuracy: 90,
		basePower: 100,
	},
	disable: {
		inherit: true,
		accuracy: 100,
	},
	firespin: {
		inherit: true,
		accuracy: 85,
		basePower: 35,
	},
	glare: {
		inherit: true,
		accuracy: 90,
	},
	highjumpkick: {
		inherit: true,
		basePower: 130,
		pp: 10,
	},
	hypnosis: {
		inherit: true,
		accuracy: 60,
	},
	jumpkick: {
		inherit: true,
		basePower: 100,
		pp: 10,
	},
	petaldance: {
		inherit: true,
		basePower: 120,
		pp: 10,
	},
	poisongas: {
		inherit: true,
		accuracy: 80,
	},
	scaryface: {
		inherit: true,
		accuracy: 100,
	},
	tackle: {
		inherit: true,
		accuracy: 100,
		basePower: 50,
	},
	thrash: {
		inherit: true,
		basePower: 120,
		pp: 10,
	},
	toxic: {
		inherit: true,
		accuracy: 90,
	},
	wrap: {
		inherit: true,
		accuracy: 90,
	},
	gigadrain: {
		inherit: true,
		basePower: 75,
	},
	furycutter: {
		inherit: true,
		basePower: 40,
	},
	futuresight: {
		inherit: true,
		accuracy: 100,
		basePower: 120,
		pp: 10,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			const moveData = {
				name: "Future Sight",
				basePower: 120,
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
	iciclespear: {
		inherit: true,
		basePower: 25,
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
	aircutter: {
		inherit: true,
		basePower: 60,
	},
	assurance: {
		inherit: true,
		basePower: 60,
	},
	aurasphere: {
		inherit: true,
		basePower: 80,
	},
	blizzard: {
		inherit: true,
		basePower: 110,
	},
	bubble: {
		inherit: true,
		basePower: 40,
	},
	chatter: {
		inherit: true,
		basePower: 65,
	},
	dracometeor: {
		inherit: true,
		basePower: 130,
	},
	dragonpulse: {
		inherit: true,
		basePower: 85,
	},
	energyball: {
		inherit: true,
		basePower: 90,
	},
	fireblast: {
		inherit: true,
		basePower: 110,
	},
	flamethrower: {
		inherit: true,
		basePower: 90,
	},
	dragonpulse: {
		inherit: true,
		basePower: 85,
	},
};
