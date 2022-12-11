const Child = (props) => {
  // 1. 定义一个事件给父组件绑定 getMeValue
  const uploadParent = () => {
    // 2. 将值传给父组件绑定的方法
    console.log("child：给父组件传值");
    props.getMeValue(2022);
  };

  return (
    <div>
      <div>
        接受父组件过来的值是{props?.name} - {props?.age}
      </div>
      <button onClick={uploadParent}>子组件按钮，点我给父组件送个值</button>

      <h1>插槽</h1>
      {props?.children}

      <h1>over</h1>
    </div>
  );
};

export default Child;
