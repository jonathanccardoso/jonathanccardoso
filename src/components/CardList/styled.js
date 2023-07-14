import styled from 'styled-components';
import media from 'styled-media-query';

// import { Github } from "styled-icons/fa-brands"
import * as Image from 'styled-icons/fa-brands';

const Icon = `
  height: 5rem;
  width: 5rem;
  text-align: center;

  ${media.lessThan('medium')`
    margin: 2rem;
  `}
`;

export const CardItem = styled.div`
  text-align: center;
  margin: 1rem;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
  color: #292b2c;
  background: #f2f2f2;
  transition: all 0.2s linear;
  overflow: hidden;
  max-width: 29rem;

  &:focus,
  &:hover {
    // cursor: pointer;
    box-shadow: 2px 8px 100px rgba(0, 0, 0, 0.15);
    transform: translate3D(0, -8px, 0);
  }
`;

export const CardItemIcon = styled(Image.Github).attrs(props => ({
  title: props.title,
  icon: props.icon,
}))`
  ${Icon}
`;

export const CardItemTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const CardItemDescription = styled.p``;
