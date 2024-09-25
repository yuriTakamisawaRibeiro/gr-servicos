"use client"
import Header from './components/Header';
import { Container, Banner } from './styles';
import Image from 'next/image';
import bannerDesktop from '../app/images/banner-image-desktop.png';
import { useEffect } from 'react';

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

  
  return (
    <Container>
      <Header />
      <Banner>
        <div className="image-container">
          <Image
            src={bannerDesktop}
            alt="Banner desktop"
            layout="responsive"
            width={1920}
            height={1080}
            style={{ objectFit: 'cover' }}
          />
          <div className="overlay" /> 
        </div>
      </Banner>
    </Container>
  );
}
