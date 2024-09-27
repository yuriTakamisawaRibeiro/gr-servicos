import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <style>
          {`
            @font-face {
              font-family: 'Inter';
              src: url('/fonts/Inter-VariableFont_opsz,wght.ttf') format('truetype');
              font-weight: 100 300 900;
              font-style: normal;
            }
            html, body {
              margin: 0; 
              padding: 0; 
              width: 100%;
              height: 100%;
              overflow-x: hidden; /* Para prevenir overflow horizontal */
            }
            body {
              font-family: 'Inter', sans-serif;
            }
          `}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
