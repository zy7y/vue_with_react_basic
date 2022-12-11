<script setup>
import { ref, reactive } from "vue";

// 单个数据 count.value   count
const count = ref(0);

// 对象 info.age info.age
const info = reactive({
  name: "777",
  age: 18,
  loves: ["王者荣耀", "Lol手游"],
});

// script中使用 响应式数据 ref
const isShow = () => {
  return count.value > 5 ? true : false;
};

// script 中使用响应式数据 reactvie
const changeAge = () => {
  info.age = 27;
};

const changeCount = (v) => {
  count.value = v;
};
</script>

<template>
  <div>
    <h1>响应式数据</h1>
    <!-- template 使用 响应式对象 -->
    <h2>{{ count }}</h2>
    <h2>{{ info }}</h2>
    <h2 v-show="isShow()">age: {{ info.age }}</h2>

    <h1>数据绑定</h1>
    <input v-model="count" />

    <!-- 不使用 v-model实现 -->
    <input :value="count" @input="(event) => (count = event.target.value)" />

    <!-- 事件 v-on:click-->
    <button @click="changeAge">改变age</button>
    <button @click="changeCount(23)">count 改成23</button>
  </div>
</template>

<style scoped></style>
