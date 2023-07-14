import React from 'react';

import * as Styled from './styled';
import Container from '../Container';
import Social from '../Social';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Main>
        <Styled.P>
          © Copyright <b>Jonathan Cardoso</b> {new Date().getFullYear()}. All rights reserved.
        </Styled.P>
        <Social />
      </Styled.Main>
    </Container>
  </Styled.Footer>
);

export default Footer;
