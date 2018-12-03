// components/transition/transition.js
import {
    transition
} from '../mixins/transition'
Component({
    /**
     * 组件的属性列表
     */
    externalClasses: ['custom-class'],
    behaviors: [transition(true)],
    properties: {
        name: {
            type: String,
            value: 'fade'
        }
    }
})