import { defineComponent, ref } from "vue";
import Child from "./child";
export default defineComponent({
  name: "",
  setup() {
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
    return () => (
      <div>
        <div>
          <h1>父传子</h1>
          <Child age={27} onGetMeValue={accpetChildValue} />
          <br />

          <h1>子传父</h1>
          <Child onGetMeValue={accpetChildValue}></Child>
          <br />

          <h1>组件Ref</h1>
          <Child ref={childRef}></Child>
          <button onClick={consloeChildRef}>
            获取child暴露的值 {childRef?.value?.info}
          </button>
          <br />

          <h1>插槽</h1>
          <Child
            v-slots={{
              default: () => <h2>使用默认插槽</h2>,
            }}
          ></Child>

          <Child>
            {{
              bar: () => <h2>使用bar插槽</h2>,
            }}
          </Child>
        </div>
      </div>
    );
  },
});
