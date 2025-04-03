<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="border-b border-gray-200 py-6 text-center">
		<a href="/" class="text-xl font-light hover:text-lime-600 md:text-2xl"
			>Muhammad <span class="font-bold">Hafid</span> Khoirul</a
		>
	</div>
	<nav>
		<ul class="flex justify-center gap-8 border-b border-gray-200 py-4 text-sm">
			<li>
				<a
					href="/"
					class="border-b-2 border-transparent pb-4 hover:text-lime-600"
					class:text-lime-600={$page.url?.pathname === '/'}
					class:border-lime-600={$page.url?.pathname === '/'}
					class:border-transparent={$page.url?.pathname !== '/'}>Home</a
				>
			</li>
			<li>
				<a
					href="/about"
					class="border-b-2 border-transparent pb-4 hover:text-lime-600"
					class:text-lime-600={$page.url?.pathname === '/about'}
					class:border-lime-600={$page.url?.pathname === '/about'}
					class:border-transparent={$page.url?.pathname !== '/about'}>About</a
				>
			</li>
			<li>
				<a
					href="/blog"
					class="border-b-2 border-transparent pb-4 hover:text-lime-600"
					class:text-lime-600={$page.url?.pathname === '/blog'}
					class:border-lime-600={$page.url?.pathname === '/blog'}
					class:border-transparent={$page.url?.pathname !== '/blog'}>Blog</a
				>
			</li>
			<li>
				<a href="/" class="hover:text-lime-600">Contact</a>
			</li>
		</ul>
	</nav>
</header>
