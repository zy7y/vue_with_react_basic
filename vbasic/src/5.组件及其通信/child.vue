<!-- 子组件 -->
<script setup>
import { computed } from "vue";

/**
 * 接收父组件值
 */
// 数组写法 接受父组件 name
// defineProps(["name"]);

// 对象写法 接受父组件 age 需要是 数字， 必须c传
const props = defineProps({
  name: { type: String, require: true },
  age: { type: Number, default: 2 },
});

const isFlag = computed(() => {
  // 如果在script 中需要使用 父组件传递过来的值
  return props.age > 10;
});

/**
 * 子传父
 */

// 1. 定义一个事件给父组件绑定
const emits = defineEmits(["getMeValue"]);
const uploadParent = () => {
  // 2. 将值传给父组件绑定的方法
  console.log("child：给父组件传值");
  emits("getMeValue", 2022);
};

/**
 * 组件Ref
 */

// 1.定义要对外暴露的内容

const info = { name: 8777 };

const login = () => {
  console.log("我在 child。vue 中登录");
};

defineExpose({ info, login });

/**
 * 定义插槽
 */
</script>

<template>
  <div>接受父组件过来的值是{{ name }} - {{ age }}</div>
  <h1 v-show="isFlag">大于10显示 父组件过来的age</h1>
  <button @click="uploadParent">子组件按钮，点我给父组件送个值</button>
  <!-- 模版中可以直接使用$emit 给父组件传值 -->
  <button @click="$emit('getMeValue', '777')">子组件按钮 $emit</button>

  <h1>插槽</h1>
  <!-- 默认插槽 -->
  <slot> </slot>

  <div>
    具名插槽
    <slot name="777"></slot>
  </div>

  <h1>over</h1>
</template>

<style scoped></style>
