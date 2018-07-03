//引入数据源，require暂时不支持绝对路径
var webkitData = require('../datas/datas.js')

Page({
  onLoad: function () {
    this.setData({
      webkit_filter_list: webkitData.webkit_filter_list
    });
  },
  onItemClick: function (event) {
    var pageUrl = event.currentTarget.dataset.url;
    if (pageUrl) {
      wx.navigateTo({
        url: pageUrl,
      })
    } else {
      wx.showToast({
        title: '当前页不存在',
      })
    }
  }
})