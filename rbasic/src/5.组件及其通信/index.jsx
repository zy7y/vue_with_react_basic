import Child from "./child";
export default () => {
  // 接受子组件传递过来的值
  const accpetChildValue = (v) => {
    console.log("子组件过来的值是", v);
  };
  return (
    <div>
      <div>
        <h1>父传子</h1>
        <Child age={27} getMeValue={accpetChildValue} />
        <br />

        <h1>子传父</h1>
        <Child
          getMeValue={accpetChildValue}
          children={<h2>插槽hhhh</h2>}
        ></Child>
        <br />
      </div>
    </div>
  );
};
