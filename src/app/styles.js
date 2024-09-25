"use client";
import styled from "styled-components";

export const Container = styled.div`
 overflow: hidden;
  width: 100vw; /* Adicione isso */
  position: relative; /* Para o posicionamento correto */
`;

export const Banner = styled.div`
  width: 100vw;
  position: relative;

  .image-container {
    position: relative;
    width: 100%;
    margin:0;
    padding:0;
    position: relative;


    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5); 
      z-index: 1; 
    }
  }
`;
