'use strict';

/**@type {{[k: string]: ModdedItemData}} */
let BattleItems = {
	// Kalt
	dogiumz: {
		id: "dogiumz",
		name: "Dogium Z",
		isNonstandard: "Custom",
		onTakeItem: false,
		zMove: "Sand's Wrath",
		zMoveFrom: "Land's Wrath",
		zMoveUser: ["Buzzwole"],
		gen: 7,
		desc: "If held by a Buzzwole with Land's Wrath, it can use Sand's Wrath.",
	},
	// Samur
	samuraiumz: {
		id: "samuraiumz",
		name: "Samuraium Z",
		isNonstandard: "Custom",
		onTakeItem: false,
		zMove: "Hire a Samurai",
		zMoveFrom: "Secret Sword",
		zMoveUser: ["Samurott"],
		gen: 7,
		desc: "If held by a Samurott with Secret Sword, it can use Hire a Samurai.",
	},
	// woodlandapple
	jankiumz: {
		id: "jankiumz",
		name: "Jankium Z",
		isNonstandard: "Custom",
		onTakeItem: false,
		zMove: "JANK TIME",
		zMoveFrom: "Apple Jank",
		zMoveUser: ["Chimecho"],
		gen: 7,
		desc: "If held by a Chimecho with Apple Jank, it can use JANK TIME.",
	},
	
	// Bonus:
	// CUBA
	defogiumz: {
		id: "defogiumz",
		name: "Defogium Z",
		isNonstandard: "Custom",
		onTakeItem: false,
		zMove: "Mid Season Dropout",
		zMoveFrom: "Defog",
		zMoveUser: ["Mew"],
		gen: 7,
		desc: "If held by a Mew with Defog, it can use Mid Season Dropout.",
	},
	// Optimus Prime
	optimusiumz: {
		id: "optimusiumz",
		name: "Optimusium Z",
		isNonstandard: "Custom",
		onTakeItem: false,
		zMove: "Till All Are One",
		zMoveFrom: "Phantom Force",
		zMoveUser: ["Golurk"],
		gen: 7,
		desc: "If held by a Golurk with Phantom Force, it can use Till All Are One.",
	},
};

exports.BattleItems = BattleItems;
