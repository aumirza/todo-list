import { Component } from "react";
import { AddTodo, Todos } from "../../components";

export class TodoList extends Component {
  state = {
    key: 2,
    todos: [
      {
        key: 0,
        title: "Title 1",
        value: "something"
      },
      {
        key: 1,
        title: "Tilte 2",
        value: "something"
      }
    ]
  };

  addTodoHandler(rawTodo) {
    this.setState((oldState) => {
      let todo = {
        key: oldState.key,
        title: rawTodo.title,
        value: rawTodo.value
      };
      return {
        key: oldState.key + 1,
        todos: [...oldState.todos, todo]
      };
    });
  }

  render() {
    return (
      <>
        <AddTodo submitTodo={(Todo) => this.addTodoHandler(Todo)} />
        <Todos todos={this.state.todos} />
      </>
    );
  }
}
