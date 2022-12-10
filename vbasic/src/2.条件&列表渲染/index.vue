<script setup>
// 定义数组
const names = ["7", "777", "6666"];

const info = {
  name: "7",
  age: 7,
};

const isFlag = true;
</script>

<template>
  <div>
    <h1>列表渲染</h1>
    <ul>
      <template v-for="(name, index) in names" key="index">
        <li>索引：{{ index }} - 元素：{{ name }}</li>
      </template>
    </ul>
    <h2>列表渲染-2</h2>
    <template v-for="(value, key) in info" key="key">
      <span>{{ key }} - {{ value }}</span>
    </template>
    <h1>条件渲染</h1>
    <template v-if="isFlag == true">
      <span>true</span>
    </template>
    <template v-else-if="isFlag == 3">
      <span>3</span>
    </template>
    <template v-else>
      <h2>最后执行</h2>
    </template>
  </div>
</template>

<style scoped></style>
