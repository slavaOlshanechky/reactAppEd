import React, { useState } from "react";

const Counter = (props) => {
  // console.log(props);

  //child component shouldn't has his own state
  // const [value, setValue] = useState(props.value); //useState can contain [],{},[{}]
  const { value } = props;
  const formatValue = () => {
    return value === 0 ? "Empty" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span> {props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.value)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement()}
      >
        -
      </button>{" "}
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
