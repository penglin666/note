<template>
	<view class="tools">
		<list :listIcon="curPageIcon" :note="note"/>
	</view>
</template>

<script>
	import list from "@/components/list.vue";
	export default {
		components: {
			list
		},
		data() {
			return {
				note:[{title:"tools"}]
			};
		},
		props: {
			curPageIcon: {
				type: [String, Number]
			}
		},
	}
</script>

<style lang="scss">

</style>
