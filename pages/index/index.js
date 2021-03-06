//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        show: false,
        t_style: 'font-size:18px;',
        checked: true,
        notice_text: '今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻今日要闻'
    },
    //事件处理函数
    onLoad: function() {
        // wx.navigateTo({
        //     url: '/pages/nav/nav',
        // })
    },
    triggerShow() {
        this.setData({
            show: !this.data.show
        })
    },
    onClose() {
        this.setData({
            show: false
        });
    },
    onChange({
        detail
    }) {
        // 需要手动对 checked 状态进行更新
        console.log('de',detail)
        this.setData({
            checked: detail
        });
    },
    onSliderChange(event) {
        console.log('c',event)
        wx.showToast({
            icon: 'none',
            title: `当前值：${event.detail}`
        });
    }
})