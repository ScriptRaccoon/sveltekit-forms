<script lang="ts">
	import { enhance } from "$app/forms"
	import Note from "./Note.svelte"

	let { data, form } = $props()
</script>

<svelte:head>
	<title>Example 4</title>
</svelte:head>

<h1>Example 4</h1>

<p class="subtitle">Note App with Form Actions</p>

<section>
	<h2>Add a Note</h2>
	<form method="POST" action="?/add" use:enhance>
		<textarea
			name="content"
			rows="4"
			aria-label="note content"
			class:outlined={form?.error}
		></textarea>
		<button type="submit">Add Note</button>
	</form>

	{#if form?.message}
		<p>{form.message}</p>
	{/if}

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}
</section>

<section>
	<h2>Notes</h2>

	{#each data.notes as note (note.id)}
		<Note {note} />
	{:else}
		<p>No notes yet</p>
	{/each}
</section>

<style>
	textarea.outlined {
		border-color: red;
	}
</style>
