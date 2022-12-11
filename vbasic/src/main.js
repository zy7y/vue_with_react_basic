import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'

/** 基础语法 与 v-bind class style */
// import App from './1.基础语法与v-bind/基础语法.vue'
// import App from './1.基础语法与v-bind/基础语法.jsx'

/** 条件渲染 & 列表渲染 */
// import App from './2.条件&列表渲染/index.vue'
import App from './2.条件&列表渲染/index.jsx'

/** 响应式数据 & 事件处理 & 数据绑定*/
// import App from './3.响应式&数据绑定&事件/index.vue'
// import App from './3.响应式&数据绑定&事件/index.jsx'

/** 计算属性、生命周期、监听器、元素引用 */
// import App from './4.生命周期&元素引用/index.vue'
// import App from './4.生命周期&元素引用/index.jsx'

createApp(App).mount('#app')
