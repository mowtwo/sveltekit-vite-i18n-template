<script context="module" lang="ts">
	// import { loadTranslations, locale } from '$lib/translations';

	// export const load = async (options: any) => {
	// 	const { pathname } = options.url;
	// 	const defaultLocale = 'cn';
	// 	const initLocale = locale.get() ?? defaultLocale;
	// 	await loadTranslations(initLocale, pathname);
	// 	return {};
	// };
</script>

<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind.css'

	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

