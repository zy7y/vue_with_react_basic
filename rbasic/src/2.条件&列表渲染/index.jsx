const App = () => {
  // 定义数组
  const names = ["7", "777", "6666"];

  const info = {
    name: "7",
    age: 7,
  };

  const isFlag = true;

  // 条件渲染
  const isFlagRun = () => {
    if (isFlag == true) {
      return <span>true</span>;
    } else if (isFlag == 3) {
      return <span>3</span>;
    } else {
      return <h2>最后执行</h2>;
    }
  };

  return (
    <div>
      <h1>列表渲染</h1>
      <ul>
        {names.map((item, index) => {
          return (
            <li key={index}>
              索引：{index} - 元素：{item}
            </li>
          );
        })}
      </ul>
      <h2>列表渲染-2</h2>
      {Object.keys(info).map((key) => {
        return (
          <span key={key}>
            key:{key} - value:{info[key]}
          </span>
        );
      })}

      <h1>条件渲染</h1>
      {isFlagRun()}
    </div>
  );
};

export default App;
