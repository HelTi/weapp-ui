// pages/nav/nav.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navItems: [{
                name: '精品推荐',
            },
            {
                name: '今日优选',
            },
            {
                name: '生鲜',
            },
            {
                name: '9.9拼',
            },
            {
                name: '限时购秒杀',
            },
            {
                name: '超大号精品'
            },
            {
                name: '9.9拼',
            },
            {
                name: '限时购秒杀',
            },
            {
                name: '超大号精品'
            },
        ],
        navScrollLeft: 0,
        activeIndex: 0
    },

    navScroll(e) {
        console.log('e', e)
        this.data.navScrollLeft = e.detail.scrollLeft
    },
    clickNavItem(e) {
        let dataSet = e.currentTarget.dataset
        let currentIndex = dataSet.index
        this.setData({
            activeIndex: currentIndex
        })

        this.navScrollIntoView()
    },
    computeCurrentNavItemPos(itemIndex) {

    },
    navScrollIntoView() {
        let that = this
        let activeIndex = this.data.activeIndex
        wx.createSelectorQuery().select('#nav-scroll').boundingClientRect(function(rect) {
            let navWidth = rect.width

            const query = wx.createSelectorQuery()
            query.selectAll('.nav-item').boundingClientRect(function(rects) {
                let activeTabWidth = rects[activeIndex].width
                let offsetLeft = rects.slice(0, activeIndex).reduce(function(prev, curr) {
                    return prev + curr.width
                }, 0)
                that.setData({
                    navScrollLeft: offsetLeft - (navWidth - activeTabWidth) / 2
                });
            }).exec()

        }).exec()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {},

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