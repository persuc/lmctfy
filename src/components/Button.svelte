<script>
	export let handler;
	let clazz = '';
	export { clazz as class };
</script>

<div
	on:click={handler}
	class={clazz +
		' bg-[var(--primary-color)] text-[var(--focusTo-color)] grow-1 shrink-0 px-2 h-8 rounded-xl mx-2 flex items-center cursor-pointer'}
>
	<div class="flex items-center gap-1 select-none">
		<slot />
	</div>
</div>
