module.exports = {
  appid: '201010', // 此处需要替换成自己的key
  appkey: '72933362EAA649B893699E6191BC898F',
  serviceId: 'a4966e02741c4cc091fe1834d00f149c',
  clientConfig:{
    //是否显示参数
    showParam:true,
    //是否显示加入购物车计数
    showCount:true,
    //详情是否显示品牌
    showBrand:true,
    //规格自定义按钮
    btn:[
      { text: '加入购物车', click: (p) => console.log(p) }
    ],
    //规格自定义附件按钮
    combBtn:[{
      text:"加入清单",
      click:(p)=>console.log(p)
    }]
  }
}