import Container from './Container';
import Main from './Main';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
};

export default MainLayout;
