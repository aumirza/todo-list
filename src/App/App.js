import { TodoList } from "../containers";

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};
