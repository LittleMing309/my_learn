<template>
    <li class="nav-cart" @mouseover="showCar" @mouseout="hideCar">
        <a href="javascript:;" class="ball-rect">购物车</a>
        <!--根据class改变颜色-->
        <span class="cart-empty-num" :class="{'cart-num':totleCount>0}">
            <i>{{totleCount}}</i>
        </span>
        <div class="nav-cart-wrapper" v-show="carShow">
            <div class="nav-cart-list">
                <div class="empty" v-if="totleCount<=0">
                    <h3>购物车为空</h3>
                    <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                </div>
                <div v-else class="full">
                    <div class="nav-cart-items">
                        <ul>
                            <li class="clear" v-for="(item,index) in carPanelData" :key="index">
                                <div class="cart-item js-cart-item cart-item-sell">
                                    <div class="cart-item-inner">
                                        <div class="item-thumb">
                                            <img :src="item.ali_image+'?x-oss-process=image/resize,w_80/quality,Q_100/format,webp'">
                                        </div>
                                        <div class="item-desc">
                                            <div class="cart-cell">
                                                <h4> 
                                                    <a href="#/item/100027401">{{item.title}}</a>
                                                </h4>
                                                <p class="attrs">
                                                    <span>{{item.spec_json.show_name}}</span>
                                                </p>
                                                <h6>
                                                    <span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.count}}</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="del-btn" @click="delCarPanelHandle(item.sku_id)">删除</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="nav-cart-total">
                        <p>共 <strong class="ng-binding">{{totleCount}}</strong> 件商品</p>
                        <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{totlePrice}}</span></h5>
                        <h6>
                            <router-link class="nav-cart-btn" to="/cart">去购物车</router-link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <transition
            name="ball"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-bind:css="true"
        >
            <div class="addcart-mask" v-show="ball.show">
                <img class="mask-item" />
            </div>
        </transition>
    </li>
</template>
<script>
    import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapState(['carPanelData','carShow','ball']),
            ...mapGetters(['totleCount','totlePrice'])
        },
        methods: {
            beforeEnter(el){

                let rect = this.ball.el.getBoundingClientRect()
                let rectEl = document.querySelector('.ball-rect').getBoundingClientRect()
                let ball = document.querySelector('.mask-item')
                let x = (rectEl.left + 16) - (rect.left + rect.width/2)
                let y = rect.top + rect.height/2 - rectEl.top + 5 - 16
                el.style.transform = 'translate3d(0,'+ y +'px,0)'
                ball.style.transform = 'translate3d(-'+ x +'px,0,0)'
                ball.src = this.ball.img
                console.log(x,y)
            },
            enter(el){
                let a = el.offsetHeight
                el.a = a
                el.style.transform = 'translate3d(0,0,0)'
                document.querySelector('.mask-item').style.transform = 'translate3d(0,0,0)'
            },
            afterEnter(){
                this.ball.show = false
            },
            ...mapMutations({
                delCarPanelHandle: 'delCarPanelData',
                showCar: 'showCar',
                hideCar: 'hideCar',
            })
        }
    }
</script>
<style>
    .ball-enter-active{
        transition: .5s cubic-bezier(.13,.94,.67,1.13);
    }
    .ball-enter-active .mask-item{
        transition: .5s cubic-bezier(0,0,1,1);
    }
</style>
