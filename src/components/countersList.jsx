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
  const updaterState = [
    { id: 0, value: 2, name: "useless thing", price: "200" },
    { id: 1, value: 8, name: "Spoon" },
    { id: 2, value: 1, name: "Fork" },
    { id: 3, value: 5, name: "Plate" },
    { id: 4, value: 3, name: "Set of the minimalist" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    // console.log("handleDeleteID: ", id);
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  function handleUpdate() {
    setCounters(updaterState);
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          //don't need because we use {...count} which unite all props
          // id={count.id}
          // value={count.value}
          // name={count.name}
          onDelete={handleDelete}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>{" "}
      <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>
        Update
      </button>
    </>
  );
};
export default CountersList;
