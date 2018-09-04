<template>
    <div>
        <p>这是购物车页面……</p>
        <p>商品id是：{{$route.query.goodsId}}</p>
        <button @click="back">后退</button>
    </div>
</template>
<script>
    export default{
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>