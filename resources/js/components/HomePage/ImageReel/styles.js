import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

export const ImageText = styled.span`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
  color: white;
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const StyledCol = styled(Col)`
  position: relative;
  float: left;
  width:  25%;
  height: 280px;
  background-position: 50% 50%;
  background-repeat:   no-repeat;
  background-size:     cover;
  background-image: url(${props => props.src};);
  filter: grayscale(100%);

  &:hover {
    filter: none;

    span {
      display: flex;
    }
  }
`;

export const StyledDiv = styled.div`
  text-align: center;
  height: 100%;
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledLink = styled.a`
  font-weight: 700;
  font-style: italic;
`;