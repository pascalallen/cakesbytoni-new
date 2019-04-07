import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

export const ImageDiv = styled.div`
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-repeat:   no-repeat;
  background-size: 1000px;
  height: 280px;
`;

export const StyledSpinner = styled(Spinner)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;