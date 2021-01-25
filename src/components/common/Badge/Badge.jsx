import { color, layout, position, space, variant } from 'styled-system';

import styled from '@emotion/styled';

const Badge = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '90px',
    width: 'fit-content',
    minWidth: '20px',
    height: '20px',
    fontSize: '11px',
    fontWeight: 'bold',
    padding: '2px',
  },
  space,
  layout,
  color,
  position,
  variant({
    variants: {
      white: { color: 'black', bg: 'white' },
      red: { color: 'white', bg: 'red' },
      green: { color: 'white', bg: 'green' },
      blue: { color: 'yellow', bg: 'blue' },
      yellow: { color: 'white', bg: 'yellow' },
    },
  })
);

Badge.defaultProps = {
  variant: 'red',
};

export default Badge;
