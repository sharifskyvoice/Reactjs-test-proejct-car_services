import styled from "styled-components";
import defaultImg from "../images/car-1.JPG";
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
