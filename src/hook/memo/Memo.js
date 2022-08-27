import { useState } from "react";
import Content from "./Content";

//1. memo() -> Higher Order Component (HOC)
//2. useCallback()

//---------------------------------------------------------
/**
 * Cách sử dụng memo:
 * - export default memo(ComponentName)
 * Nguyên lý hoạt động của memo
 * - Với component được bao bởi memo, trong trường hợp component cha bị re-render,  \
 * memo sẽ kiểm tra các props của component con được bao bởi memo
 * -> props của component con có thay đổi => re-render component con
 * -> props của component con không có thay đổi => không re-render component con
 *
 * VÍ DỤ: COMPONENT CONTENT
 */
function Memo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function increase2() {
    setCount2(count2 + 1);
  }

  return (
    <div style={{ padding: "10px 32px" }}>
      <Content count={count}></Content>
      <h1>Count1: {count}</h1>
      <h1>Count2: {count2}</h1>
      <button onClick={increase}>Click me</button>
      <button onClick={increase2}>Click me 2</button>
    </div>
  );
}

export default Memo;
