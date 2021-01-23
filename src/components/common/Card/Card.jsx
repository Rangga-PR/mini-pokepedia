import { background, layout, space } from 'styled-system';

import styled from '@emotion/styled';

const Card = styled.div`
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  margin: 8px;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 8px 0 rgba(37, 40, 43, 0.12);

  ${space}
  ${layout}
  ${background}
`;

export default Card;
