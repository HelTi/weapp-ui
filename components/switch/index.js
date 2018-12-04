// components/switch/index.js
Component({
    behaviors: ['wx://form-field'],
    /**
     * 组件的属性列表
     */
    properties: {
        checked: Boolean,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '30px'
        }
    },

    data: {

    },
    attached() {
        this.setData({
            value: this.data.checked
        });
    },

    methods: {
        onClick() {
            if (!this.data.disabled && !this.data.loading) {
                let checked = !this.data.checked
                this.triggerEvent('input', checked)
                this.triggerEvent('change', checked)
                this.computedClasses()
                this.computedStyle()
            }
        },
        computedClasses() {
            let computedClass = ['custom-class', 'van-switch']
            if (this.data.checked) {
                computedClass.concat(['van-switch--on', 'van-switch--disabled'])
            }

            let classStr = computedClass.join(' ')
            this.setData({
                classes: classStr
            })
        },
        computedStyle() {
            let backgroundColor = this.data.checked ? this.data.activeColor : this.data.inactiveColor

            let computedStyleStr = "font-size: " + this.data.size + "; " + (backgroundColor ? "background-color: " + backgroundColor : '')
        }
    }
})