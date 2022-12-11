import { useEffect, useRef } from "react";
import { useMemo } from "react";
import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    name: "777",
    age: 18,
  });

  /** 计算属性
   * 把“创建”函数和依赖项数组作为参数传入 useMemo，
   * 它仅会在某个依赖项改变时才重新计算 memoized 值。
   * 这种优化有助于避免在每次渲染时都进行高开销的计算。
   */
  const isShow = useMemo(() => {
    return count > 5 ? true : false;
  }, [count]);

  /** 生命周期
   * useEffect 默认情况下，它在第一次渲染之后和每次更新之后
   */
  useEffect(() => {
    // DOM 更新之后调用
    console.log("更新了");

    return () => {
      // 组件卸载的时候执行
      console.log("卸载了");
    };
  });

  /** 仅执行一次 */
  useEffect(() => {
    console.log("仅一次执行");
  }, []);

  /**
   * 监听器
   */
  useEffect(() => {
    console.log("监听值 count", count);
  }, [count]);

  useEffect(() => {
    console.log("监听值 info.age", info.age);
  }, [info.age]);

  /**
   * ref获取元素对象
   */
  const btnRef = useRef();

  const printRefValue = () => {
    console.log(btnRef.current);
    console.log(btnRef);
  };
  return (
    <div>
      <h1>计算属性 大于5 才显示</h1>
      <h2 hidden={isShow}>计算属性显示 {count}</h2>
      <button onClick={() => setCount(count + 1)}>点击➕</button>
      <button onClick={() => setInfo({ ...info, age: info.age - 1 })}>
        返老还童
      </button>
      <button ref={btnRef} onClick={printRefValue}>
        按钮REF Dom 对象
      </button>
    </div>
  );
};
