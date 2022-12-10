<script setup>
// 定义变量
const username = "777";

// 定义函数
const info = () => {
  return username + "7777";
};

// 属性绑定
const helper = "请输入姓名";

// 多个属性
const attrInfo = {
  id: "username",
  name: "user",
  style: { backgroundColor: "red" },
};
</script>

<template>
  <!-- 模版语法使用 script中的变量/函数 {{}} -->
  <div>
    <h1>模版语法使用</h1>
    <h2>name:{{ username }}</h2>
    <h2>info:{{ info() }}</h2>

    <!-- 使用表达式 -->
    <span :class="true ? 'hello' : 'world'">
      {{ false ? "7777" : "111" }}
    </span>
  </div>

  <!-- 属性绑定 v-bind -->
  <div>
    <h1>属性绑定</h1>
    <input v-bind:placeholder="helper" />
    <input :placeholder="helper" />
    <!-- 绑定多个属性 -->
    <input v-bind="attrInfo" />
  </div>
</template>

<style scoped>
.hello {
  background-color: blue;
  color: yellow;
  font-size: 24px;
}

.world {
  font-size: 10px;
  color: aquamarine;
}
</style>
