<script>
	export let type = 'primary';
	export let href;
</script>

<a href={href} class={`p-4 ${type==="primary"?"bg-blue-700":"bg-gray-500"} rounded-md font-bold text-center shadow-sm hover:shadow-lg`}
	><slot /></a
>
