<script lang="ts">
	import { enhance } from "$app/forms"

	let { data } = $props()
</script>

<svelte:head>
	<title>Example 5</title>
</svelte:head>

<h1>Example 5</h1>

<p class="subtitle">Build the Collatz Sequence in the URL</p>

{#if !data.values}
	<form method="GET">
		<label>
			Start number
			<input type="number" name="values" min="1" max="1000000" />
		</label>
		<p>
			<button>Start</button>
		</p>
	</form>
{:else}
	<menu>
		<form method="POST" use:enhance>
			<button disabled={data.values.at(-1) === 1}>Continue</button>
		</form>

		<form method="GET">
			<button>Reset</button>
		</form>
	</menu>

	<div class="values">
		{#each data.values as value, i}
			<span class="value">{value}</span>
			{#if i < data.values.length - 1}
				&rarr;
			{/if}
		{/each}
	</div>
{/if}

<style>
	.value:not(:first-child) {
		margin-left: 0.25rem;
	}

	menu {
		display: flex;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.values {
		font-weight: bold;
		font-size: 1.25rem;
	}
</style>
