import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lightsOn, lightsOff }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          lightsOff();
          console.log("Turn all lights off", lightsOff);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          lightsOn();
          console.log("Turn all lights on", lightsOn);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
