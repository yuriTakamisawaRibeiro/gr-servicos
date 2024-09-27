"use client";
import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const Banner = styled.div`
  width: 100vw; /* Use 100vw para garantir que preencha toda a largura */
  position: relative;
  overflow: hidden; /* Para garantir que nada extravase */

  .image-container {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 1; 
  }
`;

export const BannerText = styled.div`
  position: absolute;
  color: #ffffff; 
  z-index: 2;
  margin-left: 40px;
  top: 20%;

  h1 {
    font-size: 38px;
    font-weight: bold;
  }

  h2 {
    font-size: 35px;

    span {
      color: #00F8D5; 
    }
  }
`;

export const AboutUsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  align-items: center; 
  margin-top: 50px;

  .text-container {
    margin-left: 40px;
    p {
      font-size: 24px;
      font-weight: 300;

    }
  }

  .image-container {
    margin-left: 20px; 
    margin-right: 30px;

    img {
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2); 
      border-radius: 8px; 
      max-width: 100%; 
    }
  }
`;
