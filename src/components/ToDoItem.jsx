import React, { useState } from "react";

function ToDoItem(props) {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    checked ? props.onChecked(props.id) : setChecked(true);
  }
  return (
    <div onClick={handleClick}>
      <li style={checked ? { textDecoration: "line-through" , cursor:"pointer"} : {textDecoration:"none", cursor:"pointer"}}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
