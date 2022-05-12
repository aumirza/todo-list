export const AddTodo = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    let title = event.target.title.value;
    let value = event.target.description.value;

    if (title && value) {
      let todo = {
        title: title,
        value: value
      };
      props.submitTodo(todo);
    } else {
      alert("cannot Add empty");
    }
  };

  const addTodoStyle = {
    width: "85vW",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
    background: "#0011ff",
    borderRadius: "4px"
  };
  return (
    <>
      <form style={addTodoStyle} onSubmit={submitHandler}>
        <input name="title" type="text" />
        <input name="description" type="text" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
