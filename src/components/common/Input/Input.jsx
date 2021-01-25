import { color, layout, space, typography } from 'styled-system';

import styled from '@emotion/styled';

const Input = styled.input`
  border-radius: 6px;
  border: 2px solid #ebebeb;
  padding: 8px;
  font-family: Press-Start-2P;
  font-size: 8px;

  :focus {
    outline: none;
    border: 2px solid #0278ae;
  }
  ${space}
  ${color}
  ${typography}
  ${layout}
`;

export default Input;
