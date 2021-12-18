<script context="module">
	export async function load() {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
		const data = await res.json();
		const loadedPokemon = data.results.map((data, idx) => {
			return {
				name: data.name,
				id: idx + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					idx + 1
				}.png`
			};
		});

		return {
			props: {
				pokemons: loadedPokemon
			}
		};
	}
</script>

<script>
	// import { pokemons } from '../stores/pokestore';
	export let pokemons;
	import PokemonCard from '../components/pokemonCard.svelte';

	let filteredPokemon = '';

	$: searchTerm = '';

	$: {
		if (searchTerm.length) {
			filteredPokemon = pokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemons];
		}
	}
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
