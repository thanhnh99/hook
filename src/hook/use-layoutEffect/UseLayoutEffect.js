//UseEffect
//1. Cập nhật lại state
//2. Cập nhật lại DOM (mutated)
//3. Render lại UI
//4. Gọi cleanup nếu deps thay đổi
//5. Gọi useEffect callback

//useLayoutEffect
//1. Cập nhật lại state
//2. Cập nhật lại DOM (mutated)
//3. Gọi cleanup nếu deps thay đổi (sync)
//4. Gọi useEffectLayout callback (sync)
//5. Render lại UI
import { useState, useLayoutEffect, useEffect } from "react";
function UseLayoutEffect() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  //dùng useEffect sẽ bị nháy màn hình
  // useEffect(() => {
  //     if(count > 3) {
  //         setCount(0)
  //     }
  // }, [count])

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default UseLayoutEffect;
