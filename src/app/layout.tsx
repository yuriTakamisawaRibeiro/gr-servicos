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
              font-weight: 100 900;
              font-style: normal;
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
