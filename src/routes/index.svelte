<script>
	import { pokemons } from '../stores/pokestore';
	console.log($pokemons);
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

{#each $pokemons as pokemon}
	<p>{pokemon.name}</p>
{/each}

<style>
	h1 {
		color: red;
	}
</style>
