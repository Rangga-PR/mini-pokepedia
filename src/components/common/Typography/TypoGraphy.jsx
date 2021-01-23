import { color, space, typography, variant } from 'styled-system';

import styled from '@emotion/styled';

const Typography = styled.p(
  space,
  color,
  typography,
  variant({
    variants: {
      h1: { fontSize: 'h1' },
      h2: { fontSize: 'h2' },
      h3: { fontSize: 'h3' },
      h4: { fontSize: 'h4' },
      h5: { fontSize: 'h5' },
      h6: { fontSize: 'h6' },
      variant: { fontSize: 'body' },
      caption: { fontSize: 'caption' },
    },
  })
);

Typography.defaultProps = {
  variant: 'body',
};

export default Typography;
