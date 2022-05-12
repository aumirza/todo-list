export const Todo = (props) => {
  let todoStyle = {
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial",
    background: "rgba( 246, 108, 108, 0.55 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4.0px )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )"
  };
  return (
    <div style={todoStyle}>
      <p>{props.title}</p>
      <p>{props.value}</p>
    </div>
  );
};
