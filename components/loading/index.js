// components/loading/index.js
Component({
    externalClasses: ['custom-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        size: {
            type: String,
            value: '30px'
        },
        type: {
            type: String,
            value: 'circular'
        },
        color: {
            type: String,
            value: '#c9c9c9'
        }
    }
})
