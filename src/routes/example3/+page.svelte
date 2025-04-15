<script lang="ts">
	import { enhance } from "$app/forms"

	let { data, form } = $props()
</script>

<h1>Example 3</h1>

<p class="subtitle">Todo App with Form Actions</p>

<section>
	<h2>Add a Note</h2>
	<form method="POST" action="?/add" use:enhance>
		<textarea
			id="content"
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
		<div class="note">
			<div class="header">
				<div class="date">
					{note.created_at.toLocaleString()}
				</div>
				<form method="POST" action="?/delete" use:enhance>
					<input hidden type="text" value={note.id} name="id" />
					<button class="delete" type="submit">Delete</button>
				</form>
			</div>

			<div class="content">
				{#each note.contents as content}
					{content}
					<br />
				{/each}
			</div>
		</div>
	{:else}
		<p>No notes yet</p>
	{/each}
</section>

<style>
	.note {
		background-color: #f5f5fa;
		border: 1px solid #dadada;
		border-radius: 0.5rem;
		padding: 1rem;
		margin-block: 1rem;

		.header {
			display: flex;
			justify-content: space-between;
			align-items: top;
			margin-bottom: 0.25rem;
		}

		.date {
			font-size: 0.85rem;
			color: #777;
		}

		.content {
			font-size: 1.25rem;
		}
	}

	textarea.outlined {
		border-color: red;
	}
</style>
