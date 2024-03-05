import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Home</Button>
      <Button>About</Button>
      <Button>My projects</Button>
      <Button>Contact me</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
