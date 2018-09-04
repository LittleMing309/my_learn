<template>
<div>
我是ueser
<div class="user-list">
	<router-link :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}" :key="'key_'+index" style="padding:0 20px;" v-for="(item,index) in userList">{{item.userName}}</router-link>
</div>
<div class="user-info" v-if="userInfo.userName" style="font-size: 20px;">
    <p>姓名：{{userInfo.userName}}</p>
    <p>性别：{{userInfo.sex}}</p>
    <p>爱好：{{userInfo.hobby}}</p>
</div>
<hr>
<div class="user-list" v-if="userInfo.userName" style="font-size: 20px;"></div>
    <router-link exact :to="{path:'',query:{info:'follow'}}">关注</router-link>
    <router-link exact :to="{path:'',query:{info:'share'}}">分享</router-link>
    <div>
        {{$route.query}}
    </div>
</div>
</template>
<script>
let data = [
    {
        id:1,
        userName:"leo1",
        tip:'vip',
        sex:'男',
        hobby:'写代码'
    },
    {
        id:2,
        userName:"leo2",
        tip:'vip',
        sex:'男',
        hobby:'唱歌'
    },
    {
        id:3,
        userName:"leo3",
        tip:'common',
        sex:'男',
        hobby:'读书'
    }
]
export default{
	data(){
		return {
			userList: data,
            userInfo: {}
		}
	},
    watch:{
        $route(){
            this.getData()
        }
    },
	created(){
        this.getData()
	},
    methods: {
        getData(){
            let id = this.$route.params.userId;
            if(id){
                this.userInfo = this.userList.filter((item)=>{
                    return item.id == id
                })[0];
            }else{
                this.userInfo = {}
            }
            console.log(this.userInfo)
        }
    }
}
</script>

<style>
	
</style>