import styled from 'styled-components';
import {Row} from 'react-bootstrap';

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
`;

export const ImageDiv = styled.div`
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-repeat:   no-repeat;
  background-size: 1000px;
  height: 215px;
  padding-top: 15px;
`;
