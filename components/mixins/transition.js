/**
 * transition
 */
export const transition = (showDefaultVlaue) => {
    return Behavior({
        properties: {
            customStyle: String,
            show: {
                type: Boolean,
                value: showDefaultVlaue,
                observer: 'observerShow'
            },
            duration: {
                type: Number,
                value: 300
            }
        },
        data: {
            type: '',
            inited: false,
            display: false
        },
        methods: {
            observerShow(value) {
                if (value) {
                    this.show()
                } else {
                    this.setData({
                        type: 'leave'
                    })
                }
            },
            show() {
                this.setData({
                    inited: true,
                    display: true,
                    type: 'enter'
                })
            },
            onAnimationEnd() {
                if (!this.data.show) {
                    this.setData({
                        display: false
                    })
                }
            }
        },
        attached() {
            if (this.data.show) {
                this.show()
            }
        }
    })
}