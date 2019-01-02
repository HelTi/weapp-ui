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
        currentActiveItemIndex: 0
    },

    navScroll(e) {
        console.log('e', e)
        this.data.navScrollLeft = e.detail.scrollLeft
    },
    clickNavItem(e) {
        let dataSet = e.currentTarget.dataset
        let currentIndex = dataSet.index
        this.setData({
            currentActiveItemIndex: currentIndex
        })

        const query = wx.createSelectorQuery()

        let navWidth, tabWidth, navScrollLeft, tabOffsetLeft = e.currentTarget.offsetLeft;
        let that = this

        query.select('#nav-scroll').boundingClientRect(function(rect) {
            navWidth = rect.width
            navScrollLeft = that.data.navScrollLeft
            //计算navItem
            const query = wx.createSelectorQuery()
            query.select('#nav-item' + currentIndex).boundingClientRect(function(rect) {
                tabWidth = rect.width
                that.navScrollIntoView(navScrollLeft, tabOffsetLeft - (navWidth - tabWidth) / 2)
            }).exec()

        }).exec()
    },
    computeCurrentNavItemPos(itemIndex) {

    },
    navScrollIntoView(from, to) {
        console.log('from', from)
        console.log('to', to)
        let navLeft = this.data.navScrollLeft + (to - from)
        console.log('navLeft', navLeft)
        this.setData({
            navScrollLeft: navLeft
        })

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