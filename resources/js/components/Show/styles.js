import styled from 'styled-components';
import {Row, Container} from 'react-bootstrap';

export const ImageDiv = styled.div`
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-repeat:   no-repeat;
  background-size: 1000px;
  min-height: 215px;
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
`;

export const StyledContainer = styled(Container)`
  height: 100vh;
`;
