import { border, color, layout, space } from 'styled-system';

import React from 'react';
import styled from '@emotion/styled';

const StyledTag = styled.div`
  color: white;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 16px;
  background-color: #0278ae;
  border: 2px solid;
  border-color: white;
  width: fit-content;
  ${space} ${border} ${color} ${layout};
`;

const Tag = ({ children, ...props }) => {
  return <StyledTag {...props}>{children}</StyledTag>;
};

export default Tag;
