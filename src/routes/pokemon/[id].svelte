<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
		const res = await fetch(url);
		const pokemon = await res.json();

		return { props: { pokemon } };
	}
</script>

<script>
	export let pokemon;

	let pokemonType;

	pokemon.types.forEach((type, idx) => {
		if (idx === 0) {
			pokemonType = type.type.name;
		} else {
			pokemonType += ` / ${type.type.name}`;
		}
	});
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
	<p>
		Type: <strong>{pokemonType}</strong> | Height: <strong>{pokemon.height}</strong> | Weight:
		<strong>{pokemon.weight}</strong>
	</p>
	<img class="card-image" src={pokemon.sprites['front_default']} alt={pokemon.name} />
</div>
