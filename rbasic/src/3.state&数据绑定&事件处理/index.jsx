import { useState } from "react";

export default () => {
  // count 值， setCount 改变值，
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    name: "777",
    age: 18,
    loves: ["王者荣耀", "Lol手游"],
  });
  const changeAge = () => {
    setInfo({ ...info, age: 27 });
  };
  const isShow = () => {
    return count > 5 ? true : false;
  };

  return (
    <div>
      <h1>state数据</h1>
      <h2>{count}</h2>
      {/* 无法直接渲染 对象 */}
      <h2>{JSON.stringify(info)}</h2>
      <h2 hidden={isShow()}>age: {info.age}</h2>

      <h1>数据绑定</h1>
      <input value={count} onInput={(event) => setCount(event.target.value)} />

      {/* <!-- 事件 --> */}
      <button onClick={changeAge}>改变age</button>
      <button onClick={() => setCount(23)}>count 改成23</button>
    </div>
  );
};
