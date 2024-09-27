"use client";
import Header from './components/Header';
import { Container, Banner, BannerText, AboutUsSection, ChooseUsSection } from './styles';
import Image from 'next/image';
import bannerDesktop from '../app/images/banner-image-desktop.png';
import sweepingFloor from '../app/images/sweeping-floor-desktop.png';
import { useEffect } from 'react';
import Button from "./components/Button";

export default function Home() {
  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.overflowX = 'hidden';
    }
    return () => {
      const html = document.querySelector('html');
      if (html) {
        html.style.overflowX = 'auto';
      }
    };
  }, []);

  const handleClick = () => {
    alert('Botão clicado!');
  };


  return (
    <Container>
      <Header />
      <Banner>
        <div className="image-container">
          <BannerText>
            <h1>Deixe a bagunça com a gente:</h1>
            <h2>
              Sua <span>melhor escolha</span> em <br /> serviços especializados de limpeza <br /> pós-obra
            </h2>
          </BannerText>
          <Image
            src={bannerDesktop}
            alt="Banner desktop"
            layout="responsive"
            width={1920}
            height={1000}
            quality={100} // Define a qualidade máxima
            priority // Carrega a imagem com prioridade
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay" />
        </div>
      </Banner>

      <AboutUsSection>
        <div className="text-container">
          <p>
            Oferecemos um serviço especializado em <strong>limpeza pós-obra</strong>, transformando seu projeto recém-concluído em um espaço impecável e pronto para uso. Com uma abordagem detalhada e eficiente.
          </p>
          <Button onClick={handleClick}>Fale conosco</Button>

        </div>
        <div className="image-container">
          <Image
            src={sweepingFloor}
            alt="varrendo chão"
            layout="responsive"
            width={300}
            height={200}
            quality={100} // Define a qualidade máxima
            style={{ objectFit: 'cover' }}
          />
        </div>
      </AboutUsSection>

      <ChooseUsSection>
        <h2>Por que nos escolher?</h2>
      </ChooseUsSection>
    </Container>
  );
}
