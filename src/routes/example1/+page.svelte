<script lang="ts">
	import { page } from "$app/state"

	let showHelp = $derived(page.url.searchParams.has("show_help"))
</script>

<svelte:head>
	<title>Example 1</title>
</svelte:head>

<h1>Example 1</h1>

<p class="subtitle">Save Flags in the URL</p>

<p>
	{#if showHelp}
		<a href={page.url.pathname}>Hide Help</a>
	{:else}
		<a href="{page.url.pathname}?show_help=true">Show Help</a>
	{/if}
</p>

{#if showHelp}
	<section>
		<h2>Help</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
			architecto, illum delectus error sequi recusandae!
		</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, obcaecati?</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt itaque iure
			mollitia odio sapiente provident distinctio adipisci doloremque magni
			consequatur impedit maxime a harum ea sit repellendus rem amet numquam,
			repellat corrupti facilis ipsa aperiam ipsam! Non, consequatur. Veniam,
			labore.
		</p>
	</section>
{/if}
