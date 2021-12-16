import React from "react";
import Counter from "./counter";

const CountersList = () => {
  const counters = [
    { id: 0, value: 0, name: "useless thing" },
    { id: 1, value: 4, name: "Spoon" },
    { id: 2, value: 0, name: "Fork" },
    { id: 3, value: 0, name: "Plate" },
    { id: 4, value: 0, name: "Set of the minimalist" },
  ];

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} value={count.value} name={count.name}></Counter>
      ))}
    </>
  );
};
export default CountersList;
