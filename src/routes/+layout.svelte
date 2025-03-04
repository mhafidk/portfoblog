<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	let { children } = $props();
</script>

<Navbar />
<main class="mx-auto max-w-3xl px-4 py-8">
	{@render children()}
</main>
