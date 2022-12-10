import "./index.css";
const App = () => {
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
  return (
    <>
      <div>
        {/* 使用 变量/ 函数 */}
        <h1>react 使用</h1>
        <h2>name:{username}</h2>
        <h2>info:{info()}</h2>
      </div>

      {/* 使用表达式 */}
      <span className={true ? "hello" : "world"}>{false ? "7777" : "111"}</span>

      <div>
        <h1>属性绑定</h1>
        <input placeholder={helper} />
        {/* <!-- 绑定多个属性 --> */}
        <input {...attrInfo} />
      </div>
    </>
  );
};
export default App;
