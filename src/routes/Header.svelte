<script>
	import { locale } from '$lib/translations';
</script>

<header>
	<select bind:value={$locale}>
		<option value="zh">中文</option>
		<option value="en">English</option>
	</select>
	<nav />
</header>
