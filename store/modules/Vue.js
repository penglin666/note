export default {
	state: {
		vueState: [{

				title: `VUE的组件通信`,
				show: false,
				content: [{
						id: 1,
						smTitle: `父组件向子组件传递数据`,
						text: `在父组件的字标签上绑定自定义属性等于一个值，在子组件与data同级的props属性获取。`,
						imgs:['/static/screenshot/vue_1-1-2.png','/static/screenshot/vue_1-1-1.png']
					},
					{
						id: 2,
						smTitle: `子组件向父组件传递数据`,
						text: `在子组件中通过this.$emit("类自定义事件名",传递的数据)，在父组件中的子组件标签绑定该自定义函数名='您定义的方法名'，执行该方法里面的形参就是子组件传递过来的数据。`,
						imgs:['/static/screenshot/vue_1-2-1.png','/static/screenshot/vue_1-2-2.png']
					},
					{
						id: 3,
						smTitle: `多层组件通信`,
						text: `采用中央事件总线，它本质上是一个vue的实例对象在main.js原型上上挂载(Vue.proptotype.$bus)，发送数据的组件通过this.$bus.$emit("类自定义事件",传递的数据)；接收数据的组件通过this.$bus.$on("您自定义的事件",传递的数据形参=>{console.log(传递数据的形参进行操作)})。`,
					},
				],

			},
			{

				title: `VUE的三钟路由传参方式`,
				show: false,
				content: [{
						id: 1,
						smTitle: `通过query来传参(通过path来匹配)`,
						text: `传递参数的页面："this.$router.push({path:接收参数的页面路由},query:{参数名:参数值})"；接收参数页面：this.$route.query.参数名；特点：跳转接收页面是地址栏会增加显示"?参数名=参数值"。`,
					},
					{
						id: 2,
						smTitle: `通过params来传参(通过路由name匹配)`,
						text: `传递参数页面："this.$router.push({name:路由中配置的name},params:{参数名：参数值})"；接收参数页面：this,$route.params.参数名;特点：与query不同，地址栏不带参数。`
					},
					{
						id: 3,
						smTitle: `location预声明参数模式(通过path来匹配)`,
						text: `页面路由配置:path:"路由/:参数名"；传递参数页面：this.$router.push({path:接收参数的页面路由/参数})；接收参数页面：this.$route.params.参数；特点：跳转接收页面是地址栏增加显示"/参数"。`
					},
				],

			},
			{
				title:`VUE的watch`,
				show: false,
				content: [{
						id: 1,
						smTitle: `使用`,
						text: `与data()同级watch:{"监听的数据":{handler(新值,旧值){在这里执行数据变化之后该干嘛干嘛},   deep:true,//是否深度监听   immediate:true,//首次进入组件是否执行监听}}。`
					},
					{
						id:2,
						smTitle:`注意事项`,
						text:`普通监听时，新值和旧值相等，因为它们的引用指向同一份数据，vue不会保留之前的副本，若想新老值不同，可结合监听属性来操作。`
						}
				],

			},


		]
	},
	getters: {

	},
	mutations: {
		setStatus(state, index) {
			state.vueState[index].show = !state.vueState[index].show;
			for (let i = 0; i < state.vueState.length; i++) {
				if (i != index) {
					state.vueState[i].show = false;
				}
			}
		},
	},
	actions: {

	}
}
