/**
 * basic behavior
 */

export const basic = Behavior({
  methods: {
    $emit() {
      this.triggerEvent.apply(this, arguments)
    },
    getRect(selector, all) {
      var _this = this

      return new Promise(resolve => {
        wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }

          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      })
    }
  }
})