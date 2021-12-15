<script>
	import { pokemons } from '../stores/pokestore';
	console.log($pokemons);
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>
{#each $pokemons as pokemon}
	<p>{pokemon.name}</p>
{/each}
