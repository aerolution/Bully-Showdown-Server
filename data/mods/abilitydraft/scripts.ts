export const Scripts: ModdedBattleScriptsData = {
	actions: {
		runMegaEvo(pokemon) {
			const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
			if (!speciesid) return false;

			// Pokémon affected by Sky Drop cannot mega evolve. Enforce it here for now.
			for (const foeActive of pokemon.foes()) {
				if (foeActive.volatiles['skydrop']?.source === pokemon) {
					return false;
				}
			}
			
			const megaSpecies = this.dex.species.get(speciesid);
			megaSpecies.abilities = {'0': pokemon.ability};
			pokemon.formeChange(megaSpecies, pokemon.getItem(), true);

			// Limit one mega evolution
			const wasMega = pokemon.canMegaEvo;
			for (const ally of pokemon.side.pokemon) {
				if (wasMega) {
					ally.canMegaEvo = null;
				} else {
					ally.canUltraBurst = null;
				}
			}

			this.battle.runEvent('AfterMega', pokemon);
			return true;
		}
	},
};
