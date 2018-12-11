// components/slider/index.js
import { touch } from '../mixins/touch'
import { basic } from '../mixins/basic'

Component({
    behaviors: [touch, basic],
    externalClasses: ['custom-class'],
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
                this.updateValue(val, false);
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
    attached(){
        this.updateValue(this.data.value);
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
            console.log('event_st',event)
            if (this.data.disabled) return
            this.touchStart(event)
            this.startValue = this.format(this.data.value)
        },
        onTouchMove(event) {
            console.log('tocuh_mv',event)
            var _this = this
            console.log('_this',_this)
            if (this.data.disabled) return
            this.touchMove(event)
            this.getRect('.van-slider').then(rect => {
                var diff = _this.deltax / rect.width * 100

                _this.updateValue(_this.startValue + diff)
            })
        },
        onTouchEnd() {
            if (this.data.disabled) return
            this.updateValue(this.data.value, true)
        },
        onClick() {
            var _this2 = this;

            if (this.data.disabled) return;
            this.getRect(function (rect) {
                var value = (event.detail.x - rect.left) / rect.width * 100;

                _this2.updateValue(value, true);
            });
        },
        updateValue(value, end) {
            value = this.format(value)
            this.setData({
                value: value,
                barStyle: "width: " + value + "%; height: " + this.data.barHeight + ";"
            });

            if (end) {
                this.$emit('change', value);
            }
        }
    }
})
