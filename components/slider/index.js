// components/slider/index.js
import { touch } from '../mixins/touch'

Component({
    behaviors: [touch],
    /**
     * 组件的属性列表
     */
    properties: {
        disabled: Boolean,
        max: {
            type: Number,
            value: 100
        },
        min: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
            value: 0,
            observer: function (val) {

            }
        },
        barHeight: {
            type: String,
            value: '2px'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        format(value) {
            var _this$data = this.data,
                max = _this$data.max,
                min = _this$data.min,
                step = _this$data.step

            return Math.round(Math.max(min, Math.min(value, max)) / step) * step
        },
        onTouchStart(event) {
            if (this.data.disabled) return
            this.onTouchStart(event)
            this.startValue = this.format(this.data.value)
        }
    }
})
