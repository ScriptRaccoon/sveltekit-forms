<script lang="ts">
	import { enhance } from "$app/forms"
	import type { Note as NoteType } from "./types"

	type Props = {
		note: NoteType
	}

	let { note }: Props = $props()
</script>

<div class="note">
	<div class="header">
		<div class="date">
			{note.createdAt.toLocaleString()}
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

<style>
	.note {
		background-color: #f5f5fa;
		border: 1px solid #dadada;
		border-radius: 0.5rem;
		padding: 1rem;
		margin-block: 1rem;
	}

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
</style>
