import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1340,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1341,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1342,
      name: "🫐 Blueberry",
      color: "blue",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
