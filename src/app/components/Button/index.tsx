import React from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
    return (
        <ButtonStyled onClick={onClick} {...props}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
