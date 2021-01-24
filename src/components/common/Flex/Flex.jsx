import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
} from 'styled-system';

import styled from '@emotion/styled';

const Flex = styled.div(
  { display: 'flex', position: 'relative' },
  space,
  flexbox,
  layout,
  background,
  border,
  color,
  position
);

export default Flex;
