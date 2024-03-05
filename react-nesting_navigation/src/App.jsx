import "./App.css";
import Header from "./components/Header.jsx";
import Nav from "./components/Navigation.jsx";
import Link from "./components/Link.jsx";
import Logo from "./components/Logo.jsx";
import Avatar from "./components/Avatar.jsx";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Impressum</Link>
        </Nav>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
