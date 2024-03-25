import { Fragment, useState } from "react";
// import { useImmer } from "use-immer";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";

const finishLine = 200;

export default function CarRace() {
  const [cars, setCars] = useState(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);
    // First solution with Spread Syntax
    setCars((current) => {
      return current.map((car) => {
        if (car.emoji === clickedCar.emoji) {
          return {
            ...car,
            position: {
              ...car.position,
              lastDistance: coveredDistance,
              x: car.position.x + coveredDistance,
            },
          };
        }
        return car;
      });
    });
    //Second solution with `immer`
    // updateCars((draft) => {
    //   const pickedCard = draft.find((car) => car.emoji === clickedCar.emoji);
    //   pickedCard.position.x += coveredDistance;
    //   pickedCard.position.lastDistance = coveredDistance;
    // });
    // const coveredDistance = getRandomDistance();
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => setCars(initialCars)} />
      ) : (
        <AllCarRoutes $finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track>
                <CarButton
                  onClick={() => moveCar(car)}
                  $positionX={car.position.x}
                  $lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
