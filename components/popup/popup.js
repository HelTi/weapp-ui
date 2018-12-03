// components/popup/popup.js
import {
    transition
} from '../mixins/transition'

Component({
    behaviors: [transition(false)],
    /**
     * 组件的属性列表
     */
    properties: {
        transition: String,
        customStyle: String,
        overlayStyle: String,
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center'
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
        onClickOverlay: function onClickOverlay() {
            this.triggerEvent('click-overlay');

            if (this.data.closeOnClickOverlay) {
                this.triggerEvent('close');
            }
        }
    }
})