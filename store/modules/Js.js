export default {
	state: {
		jsState: [{

				title: `Javascript中的数据类型(5/6基1引)`,
				show: false,
				content: [{
						id: 1,
						smTitle: `Number--(数字)`,
						text: `包含有小数(float)、整数(int)及特殊值(NaN)。`
					},
					{
						id: 2,
						smTitle: `String--(字符串)`,
						text: `使用"XXX"或者是'XXX'表示的数据是字符串类型的数据。`
					},
					{
						id: 3,
						smTitle: `Boolean--(布尔型)`,
						text: `boolena类型的值只有两个： true或者false，代表真假性。`
					},
					{
						id: 4,
						smTitle: `Undefined--(未定义)`,
						text: `变量定义后从未赋值时，该变量的默认值为undefined；数据类型undefined只有一个值undefined。`
					},
					{
						id: 5,
						smTitle: `Null--(空)`,
						text: `数据类型null只有一个值null；可以通过给一个变量赋 null 值来清除变量的内容。`
					},
					{
						id: 6,
						smTitle: `Symbol()--(Symbol类型)`,
						text: `es6新增的`
					},
				],

			},
			{

				title: `数组的常用方法`,
				show: false,
				content: [{
						id: 1,
						smTitle: `push`,
						text: `在数组的末尾添加一个或多个元素，并返回数组的新的长度。`,
						imgs:['/static/screenshot/js_2-2-1.png']
					},
					{
						id: 2,
						smTitle: `pop`,
						text: `删除数组末尾/索引值最大的元素，并返回被删除的元素。`,
						imgs:['/static/screenshot/js_2-2-2.png']
					},
					{
						id: 3,
						smTitle: `unshift`,
						text: `在数组的头部添加一个或多个元素,并返回数组的新长度。`,
						imgs:['/static/screenshot/js_2-2-3.png']
					}, 
					{
						id: 4,
						smTitle: `shift`,
						text: `删除索引为0的元素，并返回删除的元素。`,
						imgs:['/static/screenshot/js_2-2-4.png']
					}, 
					{
						id: 5,
						smTitle: `concat`,
						text: `合并数组或元素，返回新的数组,原数组不会改变。`,
						imgs:['/static/screenshot/js_2-2-5.png']
					}, 
					{
						id: 6,
						smTitle: `splice`,
						text: `在数组中添加删除或替换元素。`,
						imgs:['/static/screenshot/js_2-2-6-1.png','/static/screenshot/js_2-2-6-2.png','/static/screenshot/js_2-2-6-3.png']
					}, 
					{
						id: 7,
						smTitle: `slice`,
						text: `截取复制数组指定位置的内容。`,
						imgs:['/static/screenshot/js_2-2-7.png']
					},
					{
						id: 8,
						smTitle: `join`,
						text: `指定字符连接字符串。`,
						imgs:['/static/screenshot/js_2-2-8.png']
					},
					{
						id: 9,
						smTitle: `sort`,
						text: `将数组进行升序排序。`,
						imgs:['/static/screenshot/js_2-2-9.png']
					},
					{
						id: 10,
						smTitle: `reverse`,
						text: `将数组进行颠倒。`,
						imgs:['/static/screenshot/js_2-2-10.png']
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
