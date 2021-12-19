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

  const handleIncrement = () => {
    // setValue((prevState) => prevState + 1);
    console.log("handleIncrement");
  };
  const handleDecrement = () => {
    // setValue((prevState) => prevState - 1);
    console.log("handleDecrement");
  };

  return (
    <div>
      <span> {props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
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
