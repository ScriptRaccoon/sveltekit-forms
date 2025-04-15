<script lang="ts">
	let { data } = $props()
</script>

<svelte:head>
	<title>Example 4</title>
</svelte:head>

<h1>Example 4</h1>

<p class="subtitle">Search Feature with GET</p>

<section>
	<h2>Search for Countries</h2>
	<form method="GET">
		<input
			type="search"
			name="query"
			aria-label="search query"
			placeholder="Country name ..."
			value={data.query}
		/>
		<button>Search</button>
	</form>
</section>

<section>
	<h2>Search Results ({data.countries.length})</h2>

	{#if data.countries.length}
		<ul>
			{#each data.countries as country}
				<li>
					{country}
				</li>
			{/each}
		</ul>
	{:else}
		<p>No countries found matching "{data.query}"</p>
	{/if}
</section>

<style>
	ul {
		padding-left: 1.5rem;

		li {
			margin-block: 0.25rem;
		}
	}

	input {
		display: block;
		width: 100%;
		margin-bottom: 0.5rem;
	}
</style>
