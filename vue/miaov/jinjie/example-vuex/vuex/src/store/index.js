import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 定义一个容器
let store = new Vuex.Store({
    state: {
        count: 100,
        title: '',
        list: []
    },
    getters: {
        filterCount(state){
            return state.count >= 120 ? 120 : state.count
        }
    },
    mutations: {
        addIncrement(state, payload){
            state.count += payload.n
        },
        deIncrement(state, payload){
            state.count -= payload.de
        },
        changeTitle(state, payload){
            state.title = payload.title
        },
        changeList(state, list){
            state.list = list
        }
    },
    actions: {
        // addAction(context){
        addAction({commit,dispatch}){
            setTimeout(()=>{
                // 改变状态,提交mutations
                commit("addIncrement",{
                    n: 5
                })
                dispatch('textAction',{
                    text: '测试'
                })
            },1000)
        },
        textAction(context, obj){
            console.log(context)
            console.log('我被触发了', obj.text)
        },
        getListAction({commit}){
            axios.get('https://www.easy-mock.com/mock/5b518b0498002960110f86c6/example/getList')
            .then((data)=>{
                // console.log(data.data)
                commit("changeList",data.data)  // 拿到数据 ，提交mutations，改变状态
            }).catch(err=>{
                console.log(err)
            })
        }
    }
})

export default store 