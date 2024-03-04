import "./App.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">Happy day!</h2>
      <label htmlFor="text">When is International Day of Happiness?</label>
      <input id="text"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/International_Day_of_Happiness"
      >
        Click here
      </a>
    </article>
  );
}
