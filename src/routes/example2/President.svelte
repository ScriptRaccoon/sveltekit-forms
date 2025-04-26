<script lang="ts">
	type Props = {
		president: {
			name: string
			start_year: number
			end_year: number
			popularity: number
		}
	}

	let { president }: Props = $props()
</script>

<div>
	<strong class="name">{president.name}</strong>
	({president.start_year}&ndash;{president.end_year})
</div>
<div class="popularity-bar">
	<div class="bar" style="width: {president.popularity * 10}%;"></div>
</div>
<div>Popularity: {president.popularity}/10</div>

<style>
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
