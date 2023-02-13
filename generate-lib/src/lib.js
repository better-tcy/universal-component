import { createApp } from 'vue'

import Test from './Test.vue'

/**
 * 
 * @param {Component} component - 渲染的组件
 * @param {HTMLElement} el - 组件挂载的dom节点
 */
const renderComponent = (component, props, el) => {
  createApp(component, props).mount(el)
}

export {
  renderComponent,
  Test
}