import { background, flexbox, layout, space } from 'styled-system';

import styled from '@emotion/styled';

const Flex = styled.div(
  { display: 'flex', position: 'relative' },
  space,
  flexbox,
  layout,
  background
);

export default Flex;