import styled from 'styled-components';
import font from './assets/fonts/palatinolinotype_roman.ttf';
import smile from './assets/logo/smile.svg';
import { ReactSVG } from 'react-svg';
import { logoColor } from './styles';
const Wrapper = styled.div`
  @font-face {
    font-display: swap;
    font-family: 'Lati';
    font-style: normal;
    font-weight: 400;
    src: url(${font}) format('truetype');
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  font-size: 1rem;
  color: ${logoColor};
  @media (max-width: 900px) {
    font-size: 0.65rem;
  }
`;

const SmileImage = styled(ReactSVG)`
  & path {
    fill: ${logoColor};
  }
  width: 3.2em;
`;
const Title = styled.h1`
  line-height: 1;
  font-family: 'Lati';
  font-weight: normal;
  font-style: normal;
  font-size: 3em;
  margin: 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;
const BigLetter = styled.span`
  font-size: 1em;
`;
const OddLetter = styled.span`
  font-size: 0.72em;
`;
const Evenletter = styled.span`
  font-size: 0.6em;
`;

const LetterR = styled.span`
  font-size: 0.72em;
  letter-spacing: -0.08em;
`;
const LetterF = styled.span`
  letter-spacing: -0.08em;
`;

const Desc = styled.span`
  font-size: 0.7em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 0.5;
`;
const CustomLogo = () => {
  return (
    <Wrapper>
      <SmileImage src={smile} alt="pokerface logo" />
      <Title>
        <BigLetter>P</BigLetter>
        <Evenletter>o</Evenletter>
        <OddLetter>k</OddLetter>
        <Evenletter>e</Evenletter>
        <LetterR>r</LetterR>
        <LetterF>F</LetterF>
        <Evenletter>a</Evenletter>
        <OddLetter>c</OddLetter>
        <Evenletter>e</Evenletter>
      </Title>
      <Desc>Кавер группа</Desc>
    </Wrapper>
  );
};
export default CustomLogo;
