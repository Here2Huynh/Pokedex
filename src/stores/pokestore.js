import { writable } from 'svelte/store';

export const pokemons = writable([]);

const fetchPokemon = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
	const data = await res.json();
	const loadedPokemon = data.results.map((data, idx) => {
		return {
			name: data.name,
			id: idx + 1,
			image: `https://raw.githubusercontent.com/PokemonAPI/sprites/master/sprites/pokemon/${
				idx + 1
			}.png`
		};
	});

	pokemons.set(loadedPokemon);
};

fetchPokemon();
