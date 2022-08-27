import { useState } from "react";


// import UseState from './hook/use-state/1.useState'
// import Radio from './hook/use-state/2.radio'
// import CheckBox from './hook/use-state/3.checkbox'
// import Content from './hook/use-effect/Content'
// import Avatar from "./hook/use-effect/Avatar";
// import UseLayoutEffect from "./hook/use-layoutEffect/UseLayoutEffect";
// import UseRef from "./hook/use-ref/UseRef";
// import TodoList from "./hook/use-state/4.todoList";
// import Memo from "./hook/memo/Memo"
// import UseCallback from "./hook/use-callback/UseCallback"
import UseMemo from "./hook/use-memo/UseMemo"


function App() {

  // const [mounted, setMounted] = useState(false)
  return (
    <div style={{ padding: 50 }}>
      {/*USE STATE*/}
          {/**<UseState/>
            <Radio/>
            <CheckBox/>
            <TodoList/> */}

      {/**USE Effect */}

      {/* <button onClick={() => setMounted(!mounted)}>Toggle</button> */}
      {/* {mounted && <Content/>} */
        /*{mounted && <Avatar /> }*/
      }
      {/* <UseLayoutEffect/> */}
      {/* <UseRef/> */}
      {/* <Memo/> */}

      {/* <UseCallback/> */}
      <UseMemo/>
    </div>
  );
}

export default App;
