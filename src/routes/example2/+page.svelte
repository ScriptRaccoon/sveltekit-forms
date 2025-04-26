<script lang="ts">
	import { page } from "$app/state"
	import President from "./President.svelte"
	import presidents from "./presidents.json"

	let sorting = $derived(page.url.searchParams.get("sorting") ?? "chronological")

	let sortedPresidents = $derived(
		sorting === "chronological"
			? presidents.toSorted((p, q) => p.start_year - q.start_year)
			: presidents.toSorted((p, q) => q.popularity - p.popularity),
	)
</script>

<svelte:head>
	<title>Example 2</title>
</svelte:head>

<h1>Example 2</h1>

<p class="subtitle">Save Form State in the URL</p>

<section>
	<h2>Sorting</h2>
	<form method="GET">
		<label>
			<input
				type="radio"
				name="sorting"
				value="chronological"
				checked={sorting === "chronological"}
			/> chronological
		</label>
		<label>
			<input
				type="radio"
				name="sorting"
				value="popularity"
				checked={sorting === "popularity"}
			/> popularity
		</label>
		<button>Update</button>
	</form>
</section>

<section>
	<h2>List of Presidents</h2>
	<ol>
		{#each sortedPresidents as president}
			<li>
				<President {president} />
			</li>
		{/each}
	</ol>
</section>

<style>
	form {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		align-items: center;
	}

	ol {
		padding-left: 1.5rem;
	}

	li {
		margin-block: 1.25rem;
	}
</style>
