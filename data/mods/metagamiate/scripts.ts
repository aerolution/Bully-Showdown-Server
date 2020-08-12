export const Statuses: {[k: string]: ModdedPureEffectData} = {
	init: function () {
		for (let pokemon in this.data.FormatsData) {
			let pokeData = this.modData('FormatsData', pokemon);
			if (pokeData.eventPokemon) {
				for (const event of pokeData.eventPokemon) {
					event.shiny = 1;
				}
			}
		}
	},
};
