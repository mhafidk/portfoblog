<script>
	export let post;
</script>

<div class="">
	<a href={`/blog/${post.slug}`} class="text-lg font-bold text-lime-600 hover:text-lime-700"
		>{post.title}</a
	>
	<p class="line-clamp-4 pt-2">
		{post.description}
	</p>
	<div class="flex gap-3 pt-3 font-mono text-xs text-violet-600">
		{#each post.tags as tag}
			<p>{tag}</p>
		{/each}
	</div>
</div>
<div class="-mx-4 flex justify-between md:mx-0">
	<div class="flex gap-2">
		<div class="h-0.5 w-4 bg-neutral-800"></div>
		<div class="h-0.5 w-2 bg-neutral-600"></div>
		<div class="h-0.5 w-0.5 bg-neutral-400"></div>
	</div>
	<div class="flex gap-2">
		<div class="h-0.5 w-0.5 bg-neutral-400"></div>
		<div class="h-0.5 w-2 bg-neutral-600"></div>
		<div class="h-0.5 w-4 bg-neutral-800"></div>
	</div>
</div>
