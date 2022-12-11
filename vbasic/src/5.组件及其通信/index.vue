<script setup>
import Child from "./child.vue";
import { ref } from "vue";

// 接受子组件传递过来的值
const accpetChildValue = (v) => {
  console.log("子组件过来的值是", v);
};

// child组件 ref
const childRef = ref();

const consloeChildRef = () => {
  console.log(childRef?.value);
  console.log(childRef?.value?.info);
  // 调用暴露出来的 方法
  childRef?.value?.login();
};
</script>

<template>
  <div>
    <h1>父传子</h1>
    <Child :age="27" />
    <br />
    <h1>动态组件</h1>
    <!-- is 可以传入 组件字符串，组件对象， 后面绑定的属性则
    则是实际组件绑定的属性
    -->
    <component :is="'button'" :id="18"></component>
    <br />

    <h1>子传父</h1>
    <Child @get-me-value="accpetChildValue"></Child>
    <br />

    <h1>组件Ref</h1>
    <Child ref="childRef"></Child>
    <button @click="consloeChildRef">
      获取child暴露的值 {{ childRef?.value?.info }}
    </button>
    <br />

    <h1>插槽</h1>
    <Child>
      <template v-slot:default>
        <h2>默认</h2>
      </template>
    </Child>

    <Child>
      <template v-slot:777>
        <h2>使用777插槽</h2>
      </template>
    </Child>
  </div>
</template>

<style scoped></style>
