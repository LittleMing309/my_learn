<template>
    <div>
        <input type="button" value=" - " @click="decrease">
        <span>{{num}}</span>
        <input type="button" value=" + " @click="increase" />
    </div>
</template>
<script>
    export default{
        props: {
            num: {
                type: Number
            }
        },
        methods: {
            increase(){
                this.$emit('incre')
            },
            decrease(){
                this.$emit('decre')
            }
        }
    }
</script>