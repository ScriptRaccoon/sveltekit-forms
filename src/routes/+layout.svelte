<script>
	import "./app.css"
	let { children } = $props()
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/example1">Example 1</a>
		</li>
		<li>
			<a href="/example2">Example 2</a>
		</li>
		<li>
			<a href="/example3">Example 3</a>
		</li>
		<li>
			<a href="/example4">Example 4</a>
		</li>
		<li>
			<a href="/example5">Example 5</a>
		</li>
	</ul>
</nav>

<main>
	{@render children()}
</main>

<style>
	nav {
		margin-block: 1rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
		gap: 1rem;
	}

	main {
		max-width: 42rem;
		margin-inline: auto;
		padding: 1rem;
	}
</style>
