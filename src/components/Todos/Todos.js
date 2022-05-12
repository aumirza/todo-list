import { Todo } from "../Todo/Todo";

export const Todos = (props) => {
  const todosStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gridGap: "10px"
  };
  return (
    <div style={todosStyle}>
      {props.todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} value={todo.value} />;
      })}
    </div>
  );
};
