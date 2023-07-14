import styled from 'styled-components';
import media from 'styled-media-query';

import Img from 'gatsby-image';

export const BoxShadowItem = styled.div`
  text-align: center;
  margin: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
  width: 30%;
  position: relative;

  &:focus,
  &:hover {
    cursor: pointer;
    div {
      color: #f2769f;
    }
  }

  ${media.lessThan('medium')`
    width: 80%;
  `}
`;

export const Image = styled(Img).attrs(props => ({
  alt: props.title,
}))`
  max-width: 50%;
  margin: 1rem 0 0 5rem;
  display: block;

  ${media.lessThan('small')`
    margin-left: 4rem;
  `}
`;

export const Link = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: '_blank',
  rel: 'noopener noreferrer',
}))``;

export const BoxShadowItemBody = styled.div`
  padding: 1.25rem;
  color: #343a40;
`;

export const BoxShadowItemDescription = styled.p`
  margin: 1rem;
`;

export const BoxShadowItemFooter = styled.small`
  position: absolute;
  bottom: 0;
  height: 1rem;
  left: 0;
  right: 0;
`;
