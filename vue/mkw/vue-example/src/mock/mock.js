import Mock from 'mockjs'

// 最新消息
Mock.mock(/getNewsList/, {
	'list|10': [{
		'url': '@url',
		'name': '@ctitle(10,20)'
	}]
})

// 全部产品
Mock.mock(/getProductList/,{
	pc: {
		title: 'PC产品',
		list: [
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			},
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			},
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			},
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			},
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			}
		]
	},
	app: {
		title: '手机应用类',
		last: true,
		list: [
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			},
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			},
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			},
			{
				name: '@ctitle(6)',
				url: '@url',
				hot: '@boolean'
			}
		]
	}
})

// 产品列表
Mock.mock(/getBoardList/,[
	{
		title: '@ctitle(6,10)',
		description: '@ctitle(12,20)',
		id: 'car',
		toKey: 'analysis',
		saleout: '@boolean'
	},
	{
		title: '@ctitle(4,6)',
		description: '@ctitle(8,12)',
		id: 'earth',
		toKey: 'count',
		saleout: '@boolean'
	},
	{
		title: '@ctitle(4,6)',
		description: '@ctitle(8,12)',
		id: 'loud',
		toKey: 'forecast',
		saleout: '@boolean'
	},
	{
		title: '@ctitle(4,6)',
		description: '@ctitle(8,12)',
		id: 'hill',
		toKey: 'publish',
		saleout: '@boolean'
	}
])

// 幻灯片
function getRImg(){
	return Mock.Random.image('700x300', Mock.Random.hex())
}

Mock.mock(/getSlides/, [
	{
		src: getRImg(),
		title: '@ctitle(6,12)',
		ky: 1,
		toKey: 'analysis'
	},
	{
		src: getRImg(),
		title: '@ctitle(6,12)',
		ky: 2,
		toKey: 'count'
	},
	{
		src: getRImg(),
		title: '@ctitle(6,12)',
		ky: 3,
		toKey: 'publish'
	},
	{
		src: getRImg(),
		title: '@ctitle(6,12)',
		ky: 4,
		toKey: 'forecast'
	}
])

// 用户名
Mock.mock(/login/, [
	{
		username: "yudongdong",
	    userId: 123123
	}
])

// 计算总价
Mock.mock(/getPrice/, {
	'number|1-100': 100 
})

// 
Mock.mock(/createOrder/, {
	'number|1-100': 100
})

// 订单列表
// Mock.mock(/getTableData/, {
//     "total": 25,
//     "list|25": [
//       {
//         "orderId": "@id",
//         "product": "@ctitle(4)",
//         "version": "@ctitle(3)",
//         "period": "@integer(1,5)年",
//         "buyNum": "@integer(1,8)",
//         "date": "@date()",
//         "amount": "@integer(100, 500)元"
//       }
//     ]
// })

Mock.mock(/getTableData/, [
	{
        "orderId": "ddj123",
        "product": "数据统计",
        "version": "高级版",
        "period": "1年",
        "buyNum": 2,
        "date": "2016-10-10",
        "amount": "500元"
      },
      {
        "orderId": "yuj583",
        "product": "流量分析",
        "version": "户外版",
        "period": "3个月",
        "buyNum": 1,
        "date": "2016-5-2",
        "amount": "2200元"
      },
      {
        "orderId": "pmd201",
        "product": "广告发布",
        "version": "商铺版",
        "period": "3年",
        "buyNum": 12,
        "date": "2016-8-3",
        "amount": "7890元"
      }
])