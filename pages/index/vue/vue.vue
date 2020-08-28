<template>
	<view class="vue">
		<list :listIcon="curPageIcon" :note="note" @listStatus="changeStatus"/>
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
				note: []
			};
		},
		created(){
			this.note=this.$store.state.vue.vueState;
		},
		props: {
			curPageIcon: {
				type: [String, Number]
			}
		},
		methods:{
			changeStatus(index){
				this.$store.commit("setStatus",index);
			}
		}
	}
</script>

<style lang="scss">

</style>
