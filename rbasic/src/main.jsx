import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import "./App.css";

/**基础语法 */
// import App from "./1.基础语法与绑定/基础语法";

/**条件&列表渲染 */
import App from "./2.条件&列表渲染";

/**state数据绑定&事件处理 */
// import App from "./3.state&数据绑定&事件处理/index";

/**生命周期&监听&元素引用 */
// import App from "./4.生命周期&元素引用/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
