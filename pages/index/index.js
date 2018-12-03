//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        show: false,
        t_style: 'font-size:18px;'
    },
    //事件处理函数
    onLoad: function() {

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
    }
})