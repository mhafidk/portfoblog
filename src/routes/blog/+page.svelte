<script>
	import BlogCard from '$lib/components/blog-card.svelte';

	export let data;
	let posts = data.posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="mx-auto mt-8 max-w-xl">
	<h2 class="text-2xl font-bold">Blog</h2>
	<div class="mt-8 grid grid-cols-1 gap-8">
		{#each posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
