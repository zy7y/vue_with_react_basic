<script setup>
import { computed, ref, reactive } from "vue";
import { onMounted, onUnmounted, onUpdated } from "vue";
import { watch, watchEffect } from "vue";
const count = ref(0);

/**
 * 计算属性 模版中使用仅传方法名
 * 计算属性值会基于其响应式依赖被缓存，
 * 一个计算属性仅会在其响应式依赖更新时才重新计算
 */
const isShow = computed(() => {
  return count.value > 5 ? true : false;
});

/** 生命周期
 * 组合式 API 中的 setup() 钩子会在所有选项式 API 钩子之前调用
 *
 */
onMounted(() => {
  console.log("组件挂载");
});

onUnmounted(() => {
  console.log("组件卸载");
});

onUpdated(() => {
  console.log("响应式数据更行");
});

/** 侦听器
 * watch 响应式数据修改后执行
 */

// 侦听ref对象
watch(count, (newValue, oldValue) => {
  console.log("count改变了");
  console.log("新", newValue, "老", oldValue);
});

const info = reactive({
  name: "777",
  age: 18,
});

// 侦听 reactive
watch(
  () => info.age,
  (newAge, oldAge) => {
    console.log("新", newAge, "老", oldAge);
  }
);

// 创建后就执行一次
watchEffect(() => {
  console.log("watchEffect ");
});

/** 元素引用 ref */
const btnRef = ref();

const printRefValue = () => {
  console.log(btnRef?.value);
};
</script>

<template>
  <div>
    <h1>计算属性 大于5 才显示</h1>
    <h2 v-show="isShow">计算属性显示 {{ count }}</h2>
    <button @click="count++">点击➕</button>
    <button @click="info.age--">返老还童</button>
    <button ref="btnRef" @click="printRefValue">按钮REF Dom 对象</button>
  </div>
</template>

<style scoped></style>
