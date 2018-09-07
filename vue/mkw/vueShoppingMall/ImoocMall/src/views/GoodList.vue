<template>
    <div>
        <mall-header></mall-header>
        <mall-bread>
            <span>Goods</span>
        </mall-bread>
        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">Sort by:</span>
                    <a href="javascript:void(0)" class="default cur">Default</a>
                    <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                    <a href="javascript:void(0)" @click="showFilterPop" class="filterby stopPop">Filter by</a>
                </div>
                <div class="accessory-result">
                <!-- filter -->
                    <div class="filter stopPop" :class="{'filterby-show':filterBy}" id="filter">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd><a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}">All</a></dd>
                            <dd v-for="(price,index) in priceFilter" :key="index">
                                <a href="javascript:void(0)" :class="{'cur':priceChecked==index}" @click="setPriceFilter(index)">{{price.startPrice}} - {{price.endPrice}}</a>
                            </dd>
                        </dl>
                    </div>

                    <!-- search result accessories list -->
                    <div class="accessory-list-wrap">
                        <div class="accessory-list col-4">
                        <ul>
                            <li v-for="(item) in goodsList" :key="item.productId">
                                <div class="pic">
                                    <a href="#"><img v-lazy="'/static/img/'+item.productImg" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">XX</div>
                                    <div class="price">XX</div>
                                    <div class="btn-area">
                                    <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
        <mall-footer></mall-footer>
    </div>
</template>
<script>
    import '@/assets/css/base.css'
    import '@/assets/css/product.css'
    import MallHeader from '@/components/MallHeader'
    import MallFooter from '@/components/MallFooter'
    import MallBread from '@/components/MallBread'
    import axios from 'axios'
    export default {
        data(){
            return {
                goodsList: [],
                priceFilter: [
                    {
                        startPrice: '0.00',
                        endPrice: '500.00'
                    },
                    {
                        startPrice: '501.00',
                        endPrice: '1000.00'
                    },
                    {
                        startPrice: '1000.00',
                        endPrice: '5000.00'
                    }
                ],
                priceChecked: 'all',
                filterBy: false,
                overLayFlag: false
            }
        },
        mounted() {
            this.getGoodsList()
        },
        methods: {
            getGoodsList(){
                axios.get('/goods').then((result)=>{
                    console.log(result)
                    this.goodsList = result.data.result
                })
            },
            setPriceFilter(index){
                this.priceChecked = index
                this.closePop()
            },
            showFilterPop(){
                this.filterBy = true
                this.overLayFlag = true
            },
            closePop(){
                this.filterBy = false
                this.overLayFlag = false
            }
        },
        components: {
            MallHeader,
            MallFooter,
            MallBread
        }
    }
</script>