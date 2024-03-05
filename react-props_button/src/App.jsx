import "./App.css";

export default function App() {
  function handleButton() {
    console.log("You clicked me!");
  }
  return (
    <Button
      color="red"
      disabled={false}
      text="Click me"
      handleClick={handleButton}
    />
  );
}

function Button({ color, disabled, text, handleClick }) {
  return (
    <>
      <button
        style={{ height: "100px", backgroundColor: color }}
        disabled={disabled}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
}
