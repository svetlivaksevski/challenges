import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const allLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(allLights);

  const handleToggle = (id) => {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  };
  const numberOfLightsOn = lights.filter((light) => light.isOn).length;

  const lightsOn = () =>
    setLights(lights.map((lightOn) => ({ ...lightOn, isOn: true })));

  const lightsOff = () =>
    setLights(lights.map((lightOff) => ({ ...lightOff, isOn: false })));

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        numOflights={numberOfLightsOn}
        lightsOn={lightsOn}
        lightsOff={lightsOff}
      />
    </Layout>
  );
}
