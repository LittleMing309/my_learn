<template>
    <div>
        <p>我是商品列表</p>
        <router-link :to="{name:'Title'}">商品标题</router-link>
        <router-link to="/goods/img">商品图片</router-link>
        <router-view></router-view>
        <button @click="toCart">购物车</button>
    </div>
</template>
<style>

</style>
<script>
    export default{
        methods: {
            toCart(){
                this.$router.push({path:'/cart',query:{goodsId:Math.random()}})
            }
        }
    }
</script>