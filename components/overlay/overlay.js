// components/overlay/overlay.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: Boolean,
        mask: Boolean,
        customStyle: String,
        zIndex: {
            type: Number,
            value: 100
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onClick() {
            this.triggerEvent('click')
        },
        noop() {}
    }
})