import { border, color, space, variant } from 'styled-system';

import styled from '@emotion/styled';

const Button = styled.button`
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  width: fit-content;
  cursor: pointer;
  :active {
    opacity: 0.9;
  }
  :focus {
    outline: none;
  }
  ${space}
  ${color}
  ${border}
  ${variant({
    variants: {
      white: { color: 'black', bg: 'white' },
      red: { color: 'white', bg: 'red' },
      green: { color: 'white', bg: 'green' },
      blue: { color: 'white', bg: 'blue' },
      yellow: { color: 'white', bg: 'yellow' },
    },
  })}
`;

Button.defaultProps = {
  variant: 'blue',
};

export default Button;
