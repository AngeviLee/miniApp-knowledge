// components/header/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      // 校验属性值的数据类型
      type: Array,
      // 默认值
      value: ''
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
    changeData() {
      console.log('我是子组件的回调方法')
      // this.triggerEvent()相当于this.$emit()
      this.triggerEvent('dataChange', {
        type: '我',
        num:  10
      })
    }
  }
})
