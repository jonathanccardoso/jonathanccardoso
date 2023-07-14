import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

import { ArrowDownCircleFill } from 'styled-icons/bootstrap';

import img from '../../../content/assets/background-portfolio.jpg';

const Icon = `
  display: block;
  height: 3rem;
  width: 3rem;
  text-align: center;
  color: #343a40;

  ${media.lessThan('medium')`
    margin: 2rem;
  `}
`;

export const SectionInitial = styled.section.attrs(props => ({
  id: props.id,
}))`
  background: url(${img});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 8rem 1rem;
  color: white;
  text-align: center;
  height: 90vh;

  ${media.lessThan('medium')`
    height: 85vh;
  `}
`;

export const ContainerInitial = styled.div`
  max-width: 40rem;
  width: 100%;
  padding: 1rem;

  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 300;

  /* animations for this purpose type writter */
  ::after {
    content: '|';
    margin-left: 5px;
    opacity: 1;
    animation: cursorEffect 0.7s infinite;
  }

  @keyframes cursorEffect {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

export const Button = styled.a`
  margin-top: 1rem;
  background-image: none;

  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
`;

export const Image = styled(Img).attrs({
  alt: 'Jonathan Cardoso',
  'aria-label': 'Jonathan Cardoso',
})`
  display: block;
  margin-left: auto;
  margin-right: auto;

  position: absolute;
  max-width: 180px;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
`;

export const ChevronDownIcon = styled(ArrowDownCircleFill)`
  ${Icon}
`;
