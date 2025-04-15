<script lang="ts">
	import { page } from "$app/state"
	import presidents from "./presidents.json"

	let sorting = $derived(page.url.searchParams.get("sorting") ?? "chronological")

	let sortedPresidents = $derived(
		sorting === "chronological"
			? presidents
			: presidents.toSorted((p, q) => q.popularity - p.popularity),
	)
</script>

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
				<div>
					<strong class="name">{president.name}</strong>
					({president.start_year}&ndash;{president.end_year})
				</div>
				<div class="popularity-bar">
					<div class="bar" style="width: {president.popularity * 10}%;"></div>
				</div>
				<div>Popularity: {president.popularity}/10</div>
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

		li {
			margin-block: 1.25rem;
		}
	}

	.popularity-bar {
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		border-radius: 100vw;
		height: 0.5rem;
		width: min(16rem, 100%);
		margin-block: 0.5rem;
		overflow: hidden;

		.bar {
			background-color: #4caf50;
			height: 100%;
		}
	}

	.name {
		font-size: 1.25rem;
	}
</style>
