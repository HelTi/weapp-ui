// components/notice-bar/index.js
import {
    basic
} from '../mixins/basic.js'

Component({
    /**
     * 组件的属性列表
     */
    behaviors: [basic],
    properties: {
        text: {
            type: String,
            value: ''
        },
        show: {
            type: Boolean,
            value: true
        },
        delay: {
            type: Number,
            value: 0
        },
        speed: {
            type: Number,
            value: 50
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        animationData: null
    },
    ready() {
        console.log('notice-bar-ready')
        //初始化重置动画
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear'
        })
        this.timer = null
        this.animation = wx.createAnimation()
        this.init()
    },
    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            Promise.all([
                this.getRect('.z-notice-bar__content-wrap'),
                this.getRect('.z-notice-bar__content')
            ]).then(rects => {
                const [wraprect, conrect] = rects
                let content_wrap_width = this.content_wrap_width = wraprect.width,
                    content_width = this.content_width = conrect.width;
                if (!content_wrap_width || !content_width) {
                    return
                }
                //如果容器宽度小于内容宽度
                if (content_wrap_width < content_width) {
                    //滚动
                    let delay = this.data.delay
                    const duration = (content_width / this.data.speed) * 1000;
                    this.duration = duration;

                    this.animation = wx.createAnimation({
                        duration,
                        timingFunction: 'linear',
                        delay
                    });

                    this.scrollAnimation()
                }
            })

        },
        scrollAnimation() {
            this.timer && clearInterval(this.timer)
            // 动画初始位置
            this.setData({
                animationData: this.resetAnimation
                    .translateX(this.content_wrap_width)
                    .step()
                    .export()
            })

            setTimeout(() => {
                this.setData({
                    animationData: this.animation
                        .translateX(-this.content_width)
                        .step()
                        .export()
                });
            }, 20)

            this.timer = setTimeout(() => {
                this.scrollAnimation()
            }, this.duration);
        },
        detached() {
            this.timer && clearInterval(this.timer)
        }
    }
})