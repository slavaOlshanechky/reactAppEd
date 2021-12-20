import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "useless thing", price: "200" },
    { id: 1, value: 4, name: "Spoon" },
    { id: 2, value: 0, name: "Fork" },
    { id: 3, value: 0, name: "Plate" },
    { id: 4, value: 0, name: "Set of the minimalist" },
  ];
  // const secondState = [
  //   { id: 0, value: 14321, name: "useless thing", price: "200" },
  //   { id: 1, value: 234, name: "Spoon" },
  //   { id: 2, value: 5435, name: "Fork" },
  //   { id: 3, value: 643, name: "Plate" },
  //   { id: 4, value: 8787, name: "Set of the minimalist" },
  // ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    // console.log("handleDeleteID: ", id);
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newCounters = counters.map((c) => {
      // if (c.id === id) {
      //   return (c.value += 1);
      // }
      // return null;
      c.value = 235253;
      return c.value;
    });
    setCounters(newCounters);
  };

  const handleDecrement = () => {
    // setValue((prevState) => prevState - 1);
    console.log("handleDecrement");
  };

  return (
    <div>
      {counters.map((count) => (
        <Counter
          key={count.id}
          //don't need because we use {...count} which unite all props
          // id={count.id}
          // value={count.value}
          // name={count.name}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>{" "}
    </div>
  );
};
export default CountersList;
