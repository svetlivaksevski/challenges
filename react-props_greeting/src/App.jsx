import "./App.css";

export default function App() {
  return <Greeting name="Sven" />;
}

function Greeting({ name }) {
  const coaches = ["Gimena", "Jan", "Sven", "Marcell", "Klaus"];
  return <p>Hello, {coaches.includes(name) ? "Coach! " : name}</p>;
}
