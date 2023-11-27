import styled from 'styled-components';
import image from './assets/img/IMG_2.jpg';

/* Theme Colors */
export const background = '#EDEAE2';
const textColor = '#4A323F';
const buttonColor = '#C25E5C';
export const logoColor = '#4A323F';

/* */
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  margin: 0;
  padding: 5vmin;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${background};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (max-width: 450px) {
    align-items: flex-start;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  @media (max-width: 900px) {
    font-size: 0.8rem;
    width: unset;
  }
  @media (orientation: portrait) {
    width: unset;
  }
  @media (orientation: landscape) {
    width: 40%;
    /* width: unset; */
  }
  @media (max-width: 1024px) and (orientation: landscape) {
    width: 50%;
    /* width: unset; */
  }
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  /* border: 1px solid wheat; */
`;
export const Image = styled.div`
  background-image: url(${image});
  width: 100%;
  aspect-ratio: 16/9;
  background-size: 140%;
  background-position: 55% 50%;
  border-radius: 0.7em;
  position: relative;
  &:after {
    background-image: linear-gradient(
      45deg,
      rgba(114, 97, 147, 0.25) 25%,
      rgba(227, 123, 124, 0.25) 50%,
      rgba(255, 228, 180, 0.25)
    );
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    border-radius: 0.7em;

    box-shadow: 0 1px 10px #0000002e;
    z-index: 1;
  }
`;
export const Title = styled.h2`
  font-size: 1.3em;
  font-style: normal;
  font-weight: 300;
  line-height: 1.3;
  margin: 0 0 1em 0;
  text-align: center;
  color: ${textColor};
`;
export const ButtonsWrapp = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.$firstSection ? 'column' : 'row')};
  width: 100%;
  gap: 0.7em;
  justify-content: space-between;

  margin-bottom: 1em;
`;
export const Button = styled.a`
  /* width: 100%; */
  min-height: 3em;
  padding: 0 1em;
  /* flex-basis: 100%; */
  flex-grow: 1;
  font-size: 1.5em;
  font-weight: 500;
  color: ${(props) => (props.$site ? background : '#fff')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  background: ${(props) =>
    props.$instagram
      ? 'linear-gradient(to right, #bc2a8d, #ff7e29)'
      : props.$vk
      ? 'rgb(87, 131, 182)'
      : props.$whatsApp
      ? 'rgb(37, 211, 102)'
      : props.$telegram
      ? 'rgb(4, 135, 217)'
      : props.$youtube
      ? 'rgb(255,0,0)'
      : buttonColor};
  box-shadow: 0 0 10px 0px #44444438;
`;
export const IconWrapp = styled.div`
  font-size: 1.5em;
  margin: ${(props) => (props.$small ? '0 auto' : '0 auto 0 0')};
  display: inline-flex;
`;
