// pages/nav/nav.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navItems: [1, 2, 3, 4, 5],
        scrollLeft: 0
    },

    navScroll(e) {
        console.log('e', e)
    },
    clickNavItem(e) {
        console.log('item:e', e)
        let dataSet = e.currentTarget.dataset
        let currentIndex = dataSet.index
        this.computeCurrentNavItemPos(currentIndex)
        const query = wx.createSelectorQuery()
        query.select('#nav-scroll').boundingClientRect(function(rect) {
            console.log('rect', rect)
        }).exec()
        // this.setData({
        //     scrollLeft: 20
        // })
    },
    computeCurrentNavItemPos(itemIndex) {
        const query = wx.createSelectorQuery()
        query.select('#nav-item' + itemIndex).boundingClientRect(function(rect) {
            console.log('navItemRect', rect)
        }).exec()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})