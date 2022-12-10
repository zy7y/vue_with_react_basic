import { defineComponent } from "vue";
import { ref, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
    // 单个数据
    const count = ref(0);

    // 对象
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
    return () => (
      <div>
        <h1>响应式数据</h1>
        {/* <!-- template 使用 响应式对象 --> */}
        <h2>{count.value}</h2>
        {/* 无法直接渲染 对象 */}
        <h2>{JSON.stringify(info)}</h2>
        <h2 v-show={isShow()}>age: {info.age}</h2>

        <h1>数据绑定</h1>
        <input v-model={count.value} />

        {/* <!-- 不使用 v-model实现 --> */}
        <input
          value={count.value}
          onInput={(event) => (count.value = event.target.value)}
        />

        {/* <!-- 事件 --> */}
        {/* 默认会有个 event 对象可以传递 */}
        <button onClick={changeAge}>改变age</button>
        <button onClick={() => changeCount(23)}>count 改成23</button>
      </div>
    );
  },
});
