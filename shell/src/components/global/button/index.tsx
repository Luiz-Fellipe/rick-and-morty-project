import React, { forwardRef } from 'react';

// Styles
import { ButtonStyled } from './styles';

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

export const Button = forwardRef(
  (
    { children, disabled = false, ...rest }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <ButtonStyled ref={ref} disabled={disabled} {...rest}>
        {children}
      </ButtonStyled>
    );
  }
);

Button.displayName = 'Button';
