import styled from "styled-components";
import "./DisplayFlex.css";

const StyledButton = styled.button`
  color: white;
  background-color: orange;
  font-size: 1rem;
`;

const BlueButton = styled.button`
  color: white;
  background-color: blue;
  font-size: 1rem;
`;
const MyButton = styled.button`
  color: white;
  background-color: yellow;
  font-size: 1rem;
`;

const YellowButton = styled(MyButton)`
  color: black;
`;

const StyledButtons = () => {
  return (
    <div className="flexContainer5">
      <StyledButton>스타일버튼</StyledButton>
      <BlueButton>블루버튼</BlueButton>
      <YellowButton>노랑버튼</YellowButton>
    </div>
  );
};

export default StyledButtons;
