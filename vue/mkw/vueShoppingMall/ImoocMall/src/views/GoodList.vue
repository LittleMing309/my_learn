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
                    <a href="javascript:void(0)" @click="sortGoods" class="price">Price 
                        <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg>
                    </a>
                    <a href="javascript:void(0)" @click="showFilterPop" class="filterby stopPop">Filter by</a>
                </div>
                <div class="accessory-result">
                <!-- filter -->
                    <div class="filter stopPop" :class="{'filterby-show':filterBy}" id="filter">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd><a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" @click="setPriceFilter()">All</a></dd>
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
                                        <a href="#"><img v-lazy="'/static/img/'+item.productImage" alt=""></a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{item.productName}}</div>
                                        <div class="price">{{item.salePrice}}</div>
                                        <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="50">
                                 <vue-loading v-if="loading" type="bubbles" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
        
        <modal :mdShow="mdShow" @close="closeModal">
            <p slot="message">
                请先登录，否则无法加入购物车！
            </p>
            <div slot="btnGroup">
                <a href="javascript:;" class="btn btn--m" @click="mdShow = false">关闭</a>
            </div>
        </modal>

        <modal :mdShow="mdShowCart" @close="closeModal">
            <p slot="message">
                <svg class="icon-status-ok">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
                </svg>
                <span>
                    加入购物车成功
                </span>
            </p>
            <div slot="btnGroup">
                <a href="javascript:;" class="btn btn--m" @click="mdShowCart = false">接续购物</a>
                <router-link href="javascript:;" class="btn btn--m" to="/cart">查看购物车</router-link>
            </div>
        </modal>
        <mall-footer></mall-footer>
    </div>
</template>
<script>
    import '@/assets/css/base.css'
    import '@/assets/css/product.css'
    import MallHeader from '@/components/MallHeader'
    import MallFooter from '@/components/MallFooter'
    import MallBread from '@/components/MallBread'
    import Modal from '@/components/Modal'
    import { VueLoading } from 'vue-loading-template'
    import axios from 'axios'
    export default {
        data(){
            return {
                goodsList: [],
                priceFilter: [
                    {
                        startPrice: '0.00',
                        endPrice: '100.00'
                    },
                    {
                        startPrice: '100.00',
                        endPrice: '500.00'
                    },
                    {
                        startPrice: '500.00',
                        endPrice: '1000.00'
                    },
                    {
                        startPrice: '1000.00',
                        endPrice: '5000.00'
                    }
                ],
                priceChecked: 'all',
                filterBy: false,
                overLayFlag: false,
                sortFlag: true,
                page: 1,
                pageSize: 8,
                busy: true,
                loading: false,
                mdShow: false,
                mdShowCart: false
            }
        },
        mounted() {
            this.getGoodsList()
        },
        methods: {
            getGoodsList(flag){
                this.loading = true
                let param = {
                    page: this.page,
                    pageSize: this.pageSize,
                    sort: this.sortFlag ? 1 : -1,
                    priceLevel: this.priceChecked
                }
                axios.get('/goods/list',{
                    params: param
                }).then((result)=>{
                    console.log(result)
                    let res = result.data
                    if(res.status == '0'){
                        if(flag){
                            this.goodsList = [...this.goodsList,...result.data.result.list]

                            if(result.data.result.count == 0){
                                this.busy = true
                            }else{
                                this.busy = false
                            }

                        }else{
                            this.goodsList = result.data.result.list
                            this.busy = false
                        }
                        
                    }else{
                        this.goodsList = []
                    }
                    this.loading = false
                })
            },
            sortGoods(){
                this.sortFlag = !this.sortFlag
                this.page = 1
                this.getGoodsList()
            },
            setPriceFilter(index){
                if (index) {
                    this.priceChecked = index
                } else {
                    this.priceChecked = 'all'
                }
                this.closePop()
                this.page = 1
                this.getGoodsList()
            },
            showFilterPop(){
                this.filterBy = true
                this.overLayFlag = true
            },
            closePop(){
                this.filterBy = false
                this.overLayFlag = false
            },
            loadMore(){
                this.busy = true
                setTimeout(()=>{
                    this.page++
                    this.getGoodsList(true)
                },1000)
            },
            addCart(productId){
                axios.post('/goods/addCart',{
                    productId: productId
                }).then((res)=>{
                    console.log(res)
                    if(res.data.status == 0){
                        // alert('加入成功')
                        this.mdShowCart = true
                    }else{
                        // alert('加入失败：'+res.data.msg)
                        this.mdShow = true
                    }
                })
            },
            closeModal(){
                this.mdShow = false
                this.mdShowCart = false
            }
        },
        components: {
            MallHeader,
            MallFooter,
            MallBread,
            VueLoading,
            Modal
        }
    }
</script>