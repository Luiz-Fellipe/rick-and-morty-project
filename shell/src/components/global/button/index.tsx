import React, { forwardRef } from 'react';

// Styles
import { ButtonStyled } from './styles';

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
};

export const Button = forwardRef(
  (
    { children, disabled = false, variant = 'primary', ...rest }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <ButtonStyled ref={ref} disabled={disabled} variant={variant} {...rest}>
        {children}
      </ButtonStyled>
    );
  }
);

Button.displayName = 'Button';
