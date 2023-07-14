import styled from 'styled-components';

import media from 'styled-media-query';

export const SectionPortfolio = styled.section.attrs(props => ({
  id: props.id,
}))`
  padding-top: 2%;
  padding-bottom: 2%;
  text-align: justify;
`;

export const SectionTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.75rem;
  font-weight: 400;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${media.lessThan('large')`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;
