<script>
	import BlogCard from '$lib/components/blog-card.svelte';

	export let data;
	let posts = data.posts;
</script>

<svelte:head>
	<title>Muhammad Hafid Khoirul</title>
</svelte:head>

<div class="mx-auto max-w-3xl">
	<div class="my-24">
		<div class="mb-8">
			<img src="/mhk-potrait.webp" alt="" class="mx-auto h-32 w-32 rounded-full" />
		</div>
		<div class="text-center">
			<p class="text-2xl">Hi! I'm <span class="font-bold text-lime-600">Hafid</span>.</p>
			<p class="mt-3 text-base">I'm a software engineer,<br />based in Bogor, Indonesia.</p>
		</div>
		<div class="">
			<div class="mt-8">
				<div class="flex justify-center gap-8">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href="mailto:mhafidk@gmail.com" target="_blank" rel="noreferrer">
						<svg
							class="h-8 w-8 fill-current hover:text-lime-600"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"
							/></svg
						>
					</a>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href="https://www.github.com/mhafidk" target="_blank" rel="noreferrer">
						<svg
							class="h-8 w-8 fill-current hover:text-lime-600"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/></svg
						>
					</a>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href="https://www.linkedin.com/in/mhafidk" target="_blank" rel="noreferrer">
						<svg
							class="h-8 w-8 fill-current hover:text-lime-600"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/></svg
						>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="-mx-4 px-4 py-24">
	<div class="mx-auto max-w-xl">
		<h2 class="text-xl font-bold">A Little About Me</h2>
		<div class="my-4">
			<p>
				Currently, I'm working as a backend engineer at <a
					href="https://www.qontak.com"
					class="border-b text-lime-600 hover:text-lime-700">Qontak</a
				>. I am focused on backend technology, where I design efficient and scalable systems. My
				expertise includes building robust APIs, crafting optimized queries, and writing
				high-performance, well-tested, maintainable code.
			</p>
			<p class="mt-3">
				Outside of development, I’m an amateur photographer and a writer. I enjoy blending
				creativity and logic in both tech and life.
			</p>
		</div>
		<div class="">
			<a href="/about" class="border-b text-lime-600 hover:text-lime-700">More about me</a>
		</div>
	</div>
</div>
<div class="py-24">
	<div class="mx-auto max-w-xl">
		<h2 class="text-xl font-bold">Experiences & Tools</h2>
		<div class="mt-4">
			<ol class="border-s border-neutral-400">
				<li>
					<div class="flex-start flex items-center pt-3">
						<div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-lime-600"></div>
						<p class="font-medium">2020 - Present</p>
					</div>
					<div class="ms-4 mt-1 mb-6">
						<h4 class="mb-1.5 text-lg font-semibold text-lime-600">
							Backend Engineer, <a
								href="https://www.qontak.com"
								target="_blank"
								rel="noreferrer"
								class="border-b border-lime-600 text-lime-600 hover:border-lime-700 hover:text-lime-700"
								>Qontak</a
							>
						</h4>
						<div class="mb-3">
							<ul class="list-outside list-disc pl-8">
								<li>
									Optimized code performance, resulting in a 50% speed increase, by addressing N+1
									queries, refining query execution, and strategically employing caching.
								</li>
								<li>
									Drove technical feature implementations, managing the development process from RFC
									conception to final deployment, collaborating closely with FE, QA, Design, and
									Product teams.
								</li>
								<li>
									Increased test coverage using RSpec, ensuring high code quality and reducing
									production bugs.
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li>
					<div class="flex-start flex items-center pt-3">
						<div class="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-lime-600"></div>
						<p class="font-medium">2016 - 2020</p>
					</div>
					<div class="ms-4 mt-1 mb-6">
						<h4 class="mb-1.5 text-lg font-semibold text-lime-600">
							Computer Engineering, <a
								href="https://www.ub.ac.id"
								target="_blank"
								rel="noreferrer"
								class="border-b border-lime-600 text-lime-600 hover:border-lime-700 hover:text-lime-700"
								>Brawijaya University</a
							>
						</h4>
						<div class="mb-3">
							<ul class="list-outside list-disc pl-8">
								<li>
									Achieved academic distinction with a cumulative GPA of 3.86, reflecting consistent
									high performance and dedication.
								</li>
								<li>
									Fueled my passion for technology by joining the Robotics Club, gaining hands-on
									experience in robotics, programming, and real-world problem solving, with a focus
									on robotic vision systems, including image detection and recognition.
								</li>
								<li>
									Engaged in numerous robotics competitions, securing awards in several, forging
									meaningful connections, and enriching my technical and collaborative skills
									through real-world challenges.
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ol>
		</div>
		<div class="mt-16">
			<p align="center">
				<img
					class="block md:hidden"
					alt="skills"
					src="https://skillicons.dev/icons?i=git,bitbucket,docker,cpp,css,elasticsearch,git,go,html,js,opencv,postgres,rails,redis,ruby,svelte,tailwind,ubuntu,py&perline=7"
				/>
				<img
					class="hidden md:block"
					alt="skills"
					src="https://skillicons.dev/icons?i=git,bitbucket,docker,cpp,css,elasticsearch,git,go,html,js,opencv,postgres,rails,redis,ruby,svelte,tailwind,ubuntu,py"
				/>
			</p>
		</div>
	</div>
</div>
<div class="py-24">
	<div class="mx-auto max-w-xl">
		<h2 class="text-xl font-bold">Latest Blog Posts</h2>
		<div class="mt-4 grid grid-cols-1 gap-8">
			{#each posts as post}
				<BlogCard {post} />
			{/each}
		</div>
		<div class="mt-8">
			<a href="/blog" class="border-b text-lime-600 hover:text-lime-700">More posts</a>
		</div>
	</div>
</div>
