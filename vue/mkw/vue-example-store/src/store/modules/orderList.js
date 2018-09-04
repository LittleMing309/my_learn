import Vue from 'vue'

const state = {
	orderList: [],
	params: {}
}

const getters = {
	getOrderList: state => state.orderList
}

const actions = {
	fetchOrderList ({commit,state}) {
		Vue.http.post('/api/getTableData',state.params).then((res)=>{
			var data = JSON.parse(res.bodyText)
			commit('updateOrderList',data)
		}, (err)=>{
			console.log(err)
		})
	},
	changeOrder (headItem) {
		this.tableHeads.map((item)=>{
			item.active = false
			return item
		})

		headItem.active = true

		if(this.currentOrder === 'desc'){
			this.currentOrder = 'asc'
		}else if(this.currentOrder === 'asc'){
			this.currentOrder = 'desc'
		}

		this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
	}
}

const mutations = {
	updateOrderList (state, payload) {
		state.orderList = payload
	},
	updateParams (state,{key, val}) {
		state.params[key] = val
		console.log(state.params)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}