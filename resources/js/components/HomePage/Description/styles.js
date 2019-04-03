import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ImageDiv = styled.div`
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-repeat:   no-repeat;
  background-size: 1000px;
  height: 215px;
  padding-top: 15px;
`;