'use strict';

/**@type {{[k: string]: ModdedPureEffectData}} */
let BattleStatuses = {
	/*
	// Example:
	userid: {
		noCopy: true,
		onStart() {
			this.add(`c|+Username|Switch In Message`);
		},
		onSwitchOut() {
			this.add(`c|+Username|Switch Out Message`);
		},
		onFaint() {
			this.add(`c|+Username|Faint Message`);
		},
		// Innate effects go here
	},
	*/
	brettibus: {
		noCopy: true,
		onStart() {
			this.add(`c|Brettibus|Brettibus? Big fan!`);
		},
		onFaint() {
			this.add(`c|Brettibus|FeelsBrettMan`);
		},
	},
	doesnt: {
		noCopy: true,
		onStart() {
			this.add(`c|Doesnt|yo`);
		},
		onFaint() {
			this.add(`c|Doesnt|this space for rent`);
		},
	},
	inaria: {
		noCopy: true,
		onStart() {
			this.add(`c|Inaria|What kind of Digimon are you?`);
		},
		onFaint() {
			this.add(`c|Inaria|Hax`);
		},
	},
	jackinev: {
		noCopy: true,
		onStart() {
			this.add(`c|~Jackinev|me jack me no hack`);
		},
		onFaint() {
			this.add(`c|~Jackinev|mammamia`);
		},
	},
	kalt: {
		noCopy: true,
		onStart() {
			this.add(`c|@Kalt|awoooooo`);
		},
		onFaint() {
			this.add(`c|@Kalt|sleep tight pupper`);
		},
	},
	kesha: {
		noCopy: true,
		onStart() {
			this.add(`c|Kesha|This is the ideal male body. You may not like it, but this is what peak performance looks like.`);
		},
		onFaint() {
			this.add(`c|Kesha|I shouldn't have skipped leg day.`);
		},
	},
	lapis: {
		noCopy: true,
		onStart() {
			this.add(`c|lapis|hiii ^-^`);
		},
		onFaint() {
			this.add(`c|lapis|grrr :c`);
		},
	},
	matt: {
		noCopy: true,
		onStart() {
			this.add(`c|Matt|x button looks spicy`);
		},
		onFaint() {
			this.add(`c|Matt|i only lose to hive or hax`);
		},
	},
	mio: {
		noCopy: true,
		onStart() {
			this.add(`c|&Mio|Hi I'm Mio!`);
		},
		onFaint() {
			this.add(`c|&Mio|i came out here to have a good time and i'm honestly feeling so attacked right now.`);
		},
	},
	rhetco: {
		noCopy: true,
		onStart() {
			this.add(`c|rhetco|whis whis`);
		},
		onFaint() {
			this.add(`c|rhetco|haha im a fish`);
		},
	},
	samur: {
		noCopy: true,
		onStart() {
			this.add(`c|Samur|How you gonna protect your shit from criminals?`);
		},
		onFaint() {
			this.add(`c|Samur|Not this apparently.`);
		},
	},
	spiderpig: {
		noCopy: true,
		onStart() {
			this.add(`c|Spiderpig|Ah hell, here we go again.`);
		},
		onFaint() {
			this.add(`c|Spiderpig|oof.mp4`);
		},
	},
	vent: {
		noCopy: true,
		onStart() {
			this.add(`c|Vent|FUCK CHOICE SCARF`);
		},
		onFaint() {
			this.add(`c|Vent|reeeeeee`);
		},
	},
	woodlandapple: {
		noCopy: true,
		onStart() {
			this.add(`c|@woodlandapple|who the fuck pinged me i was asleep `);
		},
		onFaint() {
			this.add(`c|@woodlandapple|i blame jack`);
		},
	},
	xnaut: {
		noCopy: true,
		onStart() {
			this.add(`c|X-Naut|Like, sup dude`);
		},
		onFaint() {
			this.add(`c|X-Naut|Not cool man x_x`);
		},
	},
	xnaut: {
		noCopy: true,
		onStart() {
			this.add(`c|Xrn|Hi`);
		},
		onFaint() {
			this.add(`c|Xrn|never lucky`);
		},
	},
	
	// Bonus:
	goodmorningcrono: {
		noCopy: true,
		onStart() {
			this.add(`c|~GoodMorningCrono|Okay I'm in sports`);
		},
		onFaint() {
			this.add(`c|~GoodMorningCrono|Screw this, I'm going to fuck my wife.`);
		},
	},
	piglad: {
		noCopy: true,
		onStart() {
			this.add(`c|pig lad|HECC`);
		},
		onFaint() {
			this.add(`c|pig lad|HECC`);
		},
	},
	
	// modified paralysis for Static Boost
	par: {
		inherit: true,
		onModifySpe(spe, pokemon) {
			if (!pokemon.hasAbility('quickfeet') && !pokemon.hasAbility('staticboost')) {
				return this.chainModify(0.5);
			}
		},
	},
	// modified futuremove for Galaxy Brain Play
	futuremove: {
		inherit: true,
		onEnd(target) {
			const data = this.effectData;
			// time's up; time to hit! :D
			const move = this.getMove(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(data.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			if (move.name === "Galaxy Brain Play") this.add('-message', `Spiderpig's galaxy brain play is revealed!`);
			else this.add('-end', target, 'move: ' + move.name);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			const hitMove = new this.Data.Move(data.moveData);

			this.trySpreadMoveHit([target], data.source, /** @type {ActiveMove} */(/** @type {unknown} */(hitMove)));
		},
	},
};

exports.BattleStatuses = BattleStatuses;
