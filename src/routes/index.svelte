<script>
	import Link from '../components/link.svelte';
</script>

<svelte:head>
	<title>JavaScripters: The Top Discord server for JavaScript</title>
</svelte:head>
<div class="grid md:grid-cols-2 grid-cols-1 m-4">
	<div class="mb-4  mt-32 lg:m-48 m-auto">
		<h1 class="text-5xl md:text-7xl font-bold text-center">JavaScripters</h1>
		<h2 class="text-gray-500 text-center text-xl m-2">The Top Discord server for JavaScript</h2>
		<div class="flex justify-center items-stretch mt-4">
			<Link href="https://discord.gg/3d56D4amF5">Join Now</Link>
			<Link href="/About" type="">Learn More</Link>
		</div>
	</div>
	<iframe
		src="https://discord.com/widget?id=779474636780863488&theme=dark"
		class="m-auto"
		title="The JavaScripters discord server"
		width="350"
		height="500"
		allowtransparency="true"
		frameborder="0"
		sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
	/>
</div>
