<template>
	<view class="vue">
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
				note:[{title:"js"}]
			};
		},
		created(){
			
		},
		props: {
			curPageIcon: {
				type: [String, Number]
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">

</style>
