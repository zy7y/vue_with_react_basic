import { defineComponent, computed, toRef } from "vue";
export default defineComponent({
  name: "",
  props: {
    name: String,
    age: {
      type: Number,
      default: 2,
    },
  },
  emits: ["getMeValue"],
  setup(props, ctx) {
    const isFlag = computed(() => {
      // 如果在script 中需要使用 父组件传递过来的值
      return props.age > 10;
    });

    /**
     * 子传父
     */

    // 1. 定义一个事件给父组件绑定 getMeValue
    const uploadParent = () => {
      // 2. 将值传给父组件绑定的方法
      console.log("child：给父组件传值");
      ctx.emit("getMeValue", 2022);
    };

    /**
     * 组件Ref
     */

    // 1.定义要对外暴露的内容

    const info = { name: 8777 };

    const login = () => {
      console.log("我在 child。vue 中登录");
    };

    ctx.expose({ info, login });
    return () => (
      <div>
        <div>
          接受父组件过来的值是{props?.name} - {props?.age}
        </div>
        <h1 v-show={isFlag.value}>大于10显示 父组件过来的age</h1>
        <button onClick={uploadParent}>子组件按钮，点我给父组件送个值</button>

        <h1>插槽</h1>
        {ctx.slots.default ? ctx.slots.default() : false}
        <div>
          具名插槽
          {ctx.slots.bar?.()}
        </div>

        <h1>over</h1>
      </div>
    );
  },
});
