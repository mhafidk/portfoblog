<script>
	import { marked } from 'marked';
	import { formatDate } from '$lib/helper';

	export let data;
	$: post = data.post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="mx-auto max-w-(--breakpoint-md)">
	<h1 class="mt-8 text-center text-3xl font-bold text-lime-600">{post.title}</h1>
	<div class="mt-2 flex items-center justify-center gap-8">
		<p class="text-center text-sm text-neutral-500">{formatDate(post.createdAt)}</p>
	</div>
	<img
		src={post.coverImage.url}
		alt={post.title}
		class="mt-8 h-96 w-full rounded object-cover md:h-[28rem]"
	/>

	<article
		class="prose prose-base prose-neutral prose-h2:leading-relaxed mx-auto mt-8 max-w-(--breakpoint-sm) px-4 md:px-0"
	>
		{@html marked(post.content)}
	</article>
</div>

<style lang="postcss">
	h1 {
		line-height: 1.5;
	}
</style>
