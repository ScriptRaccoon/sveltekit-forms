<script lang="ts">
	import President from "./President.svelte"
	import presidents from "./presidents.json"
</script>

<svelte:head>
	<title>Example 2</title>
</svelte:head>

<h1>Example 2</h1>

<p class="subtitle">Save Form State in the URL</p>

<section>
	<h2>List of Presidents</h2>
	<ol>
		{#each presidents as president}
			<li>
				<President {president} />
			</li>
		{/each}
	</ol>
</section>

<style>
	ol {
		padding-left: 1.5rem;
	}

	li {
		margin-block: 1.25rem;
	}
</style>
