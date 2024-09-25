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
  height: 100vh; /* Defina a altura do banner */
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