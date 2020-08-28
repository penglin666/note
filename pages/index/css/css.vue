<template>
	<view class="css">
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
				note:[{title:"css"}]
			}
		},
		props: {
			curPageIcon: {
				type: [String, Number]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
