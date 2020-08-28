export default {
	state: {
		jsState: [{

				title: "JS的组件通讯",
				show: false,
				content: [{
						id: 1,
						smTitle: `父组件向子组件传递数据`,
						text: `在父组件的字标签上绑定自定义属性等于一个值，在子组件与data同级的props属性获取。`
					},
					{
						id: 2,
						smTitle: `子组件向父组件传递数据`,
						text: `在子组件中通过this.$emit("类自定义事件名",传递的数据)，在父组件中的子组件标签绑定该自定义函数名='您定义的方法名'，执行该方法里面的形参就是子组件传递过来的数据。`
					},
					{
						id: 3,
						smTitle: `多层组件通信`,
						text: `采用中央事件总线，它本质上是一个vue的实例对象在main.js原型上上挂载(Vue.proptotype.$bus)，发送数据的组件通过this.$bus.$emit("类自定义事件",传递的数据)；接收数据的组件通过this.$bus.$on("您自定义的事件",传递的数据形参)`
					},
				],

			},
			{

				title: "JS的三钟路由传参方式",
				show: false,
				content: [{
						id: 1,
						smTitle: "父传子",
						text: "在父组件的字标签上绑定自定义属性等于一个值，在子组件与data同级的props属性获取"
					},
					{
						id: 2,
						smTitle: "子传fu",
						text: "在父组件的字标签上绑定自定义属性等于一个值，在子组件与data同级的props属性获取"
					},
				],

			},
			{
				title: "VUE的组件通讯2",
				show: false,
				content: [{
						id: 1,
						smTitle: "父传子",
						text: "在父组件的字标签上绑定自定义属性等于一个值，在子组件与data同级的props属性获取"
					},
					{
						id: 2,
						smTitle: "子传fu",
						text: "在父组件的字标签上绑定自定义属性等于一个值，在子组件与data同级的props属性获取"
					},
				],

			},


		]
	},
	getters: {

	},
	mutations: {
		setStatus(state, index) {
			state.jsState[index].show = !state.jsState[index].show;
			for (let i = 0; i < state.jsState.length; i++) {
				if (i != index) {
					state.jsState[i].show = false;
				}
			}
		},
	},
	actions: {

	}
}
