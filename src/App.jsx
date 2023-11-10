import {
  Container,
  Wrapper,
  Image,
  Title,
  ButtonsWrapp,
  Button,
  IconWrapp,
} from './styles';

import {
  FaInstagram,
  FaTelegramPlane,
  FaVk,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

import CustomLogo from './CustomLogo';

function App() {
  return (
    <Wrapper>
      <Container>
        <Image />
        <CustomLogo />
        <Title>
          Мы способны превратить Ваш праздник в непревзойденное шоу.
        </Title>
        <ButtonsWrapp $firstSection>
          <Button
            $site
            href="https://pokerfaceband.ru/"
            rel="noreferrer"
            target="_blank"
          >
            Сайт
          </Button>
        </ButtonsWrapp>
        <ButtonsWrapp>
          <Button
            $vk
            href="https://vk.com/pokerfacecoverband"
            rel="noreferrer"
            target="_blank"
          >
            <IconWrapp $small>
              <FaVk />
            </IconWrapp>
          </Button>
          <Button
            $instagram
            href="https://www.instagram.com/pokerfacecoverband/"
            rel="noreferrer"
            target="_blank"
          >
            <IconWrapp $small>
              <FaInstagram />
            </IconWrapp>
          </Button>
          <Button
            $youtube
            href="https://www.youtube.com/@pokerfacecoverband"
            rel="noreferrer"
            target="_blank"
          >
            <IconWrapp $small>
              <FaYoutube />
            </IconWrapp>
          </Button>
        </ButtonsWrapp>
        <ButtonsWrapp>
          <Button
            $whatsApp
            href="https://api.whatsapp.com/send?phone=79264610236"
            rel="noreferrer"
            target="_blank"
          >
            <IconWrapp $small>
              <FaWhatsapp />
            </IconWrapp>
          </Button>
          <Button
            $telegram
            href="https://t.me/pokerfacecoverband"
            rel="noreferrer"
            target="_blank"
          >
            <IconWrapp $small>
              <FaTelegramPlane />
            </IconWrapp>
          </Button>
        </ButtonsWrapp>
      </Container>
    </Wrapper>
  );
}

export default App;
