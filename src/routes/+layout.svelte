<script>
	import '../app.css';
	import { page } from '$app/state';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	let { children } = $props();
</script>

{#if page.status == 200}
	<Navbar />
	<main class="px-4 py-8">
		{@render children()}
	</main>
	<Footer />
{:else}
	{@render children()}
{/if}
