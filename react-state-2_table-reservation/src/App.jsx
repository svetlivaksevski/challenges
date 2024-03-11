import Counter from "./components/Counter";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleIncrement() {
    setPeople(people + 1);
  }

  function handleDecrement() {
    setPeople(people - 1);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        people={people}
        onHandleIncrement={handleIncrement}
        onHandleDecrement={handleDecrement}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
