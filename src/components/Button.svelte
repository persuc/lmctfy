<script>
	export let handler;
	let clazz = '';
	export { clazz as class };
</script>

<div
	on:click={handler}
	class={clazz +
		' bg-primary hover:bg-primary-light text-white grow-1 shrink-0 px-3 h-8 rounded-xl mx-2 flex items-center cursor-pointer tracking-wide'}
>
	<div class="flex items-center gap-1 select-none">
		<slot />
	</div>
</div>
