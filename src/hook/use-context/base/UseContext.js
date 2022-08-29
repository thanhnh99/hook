import { useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";

// Context
// Khi chưa dùng Context, muốn truyền props từ A sang D sẽ truyền như sau
// Component A => Component B => Component C => Component

// Khi dùng context, sẽ có thể truyền props từ A trực tiếp sang D
//1. create context
//2. Provider
//3. Consumer

//UseContext(ThemeContext) sẽ trả lại property "value" của  ThemeProvider
function UseContext() {
  const context = useContext(ThemeContext);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle them</button>
      <Content />
    </div>
  );
}

export default UseContext;
