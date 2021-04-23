<script>
	import { onMount, onDestroy } from 'svelte';
	import javascriptLogo from '../assets/javascript-logo.svg';
	import nprogress from 'nprogress';
	import { navigating } from '$app/stores';
	import nprogresscss from 'nprogress/nprogress.css';
	import tailwindcss from '../stylesheets/tailwind.css';
	const RemoveNavListener = navigating.subscribe((value) => {
		if (value) {
			nprogress.start();
		} else {
			nprogress.done();
		}
	});
	onDestroy(() => RemoveNavListener());
	// Show mobile icon and display menu
	let showMobileMenu = false;

	// List of navigation items
	const navItems = [{ label: 'About', href: '/About' }];

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Media match query handler
	const mediaQueryHandler = (e) => {
		// Reset mobile state
		if (!e.matches) {
			showMobileMenu = false;
		}
	};

	// Attach media query listener on mount hook
	onMount(() => {
		const mediaListener = window.matchMedia('(max-width: 767px)');

		mediaListener.addListener(mediaQueryHandler);
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" sizes="any" href={javascriptLogo} />
	<!-- Primary Meta Tags -->
	<title>JavaScripters: The Top JavaScript Discord Server</title>
	<meta name="title" content="JavaScripters: The Top JavaScript Discord Server" />
	<meta
		name="description"
		content="JavaScripters is a large, welcoming, Discord server for JavaScript, Node.js, and more!"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://javascripters.vercel.app/" />
	<meta property="og:title" content="JavaScripters: The Top JavaScript Discord Server" />
	<meta
		property="og:description"
		content="JavaScripters is a large, welcoming, Discord server for JavaScript, Node.js, and more!"
	/>
	<meta property="og:image" content={javascriptLogo} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://javascripters.vercel.app/" />
	<meta property="twitter:title" content="JavaScripters: The Top JavaScript Discord Server" />
	<meta
		property="twitter:description"
		content="JavaScripters is a large, welcoming, Discord server for JavaScript, Node.js, and more!"
	/>
	<meta property="twitter:image" content={javascriptLogo} />
</svelte:head>
<nav class="mb-2">
	<div class="m-auto w-full flex p-2">
		<div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
			<div class="middle-line" />
		</div>
		<ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
			<li>
				<a href="/"
					><img src={javascriptLogo} alt="The JavaScripters logo" class="max-h-full h-8" /></a
				>
			</li>
			{#each navItems as item}
				<li class="hover:font-bold text-lg">
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
<slot />

<style>
	nav {
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		height: 45px;
	}

	.mobile-icon {
		width: 25px;
		height: 14px;
		position: relative;
		cursor: pointer;
	}

	.mobile-icon:after,
	.mobile-icon:before,
	.middle-line {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.4s;
		transform-origin: center;
	}

	.mobile-icon:before,
	.middle-line {
		top: 0;
	}

	.mobile-icon:after,
	.middle-line {
		bottom: 0;
	}

	.mobile-icon:before {
		width: 66%;
	}

	.mobile-icon:after {
		width: 33%;
	}

	.middle-line {
		margin: auto;
	}

	.navbar-list {
		display: none;
		width: 100%;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
	}

	.navbar-list.mobile {
		position: fixed;
		display: block;
		height: calc(100% - 45px);
		bottom: 0;
		left: 0;
	}

	.navbar-list li {
		list-style-type: none;
		position: relative;
	}

	.navbar-list a {
		color: #fff;
		text-decoration: none;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 10px;
	}

	@media only screen and (min-width: 767px) {
		.mobile-icon {
			display: none;
		}

		.navbar-list {
			display: flex;
			padding: 0;
		}

		.navbar-list a {
			display: inline-flex;
		}
	}
	@media only screen and (max-width: 767px) {
		.mobile-icon:hover:before,
		.mobile-icon:hover:after,
		.mobile-icon.active:before,
		.mobile-icon.active:after,
		.mobile-icon.active .middle-line {
			width: 100%;
		}

		.mobile-icon.active:before,
		.mobile-icon.active:after {
			top: 50%;
			transform: rotate(-45deg);
		}

		.mobile-icon.active .middle-line {
			transform: rotate(45deg);
		}
	}
</style>
