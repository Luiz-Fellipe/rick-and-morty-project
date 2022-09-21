import React, { forwardRef } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Styles
import { ButtonStyled } from './styles';

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'minimal' | 'danger' | 'link';
  size?: 'small' | 'medium' | 'large';
  full?: boolean;
  disabled?: boolean;
  onlyIcon?: boolean;
  Icon?: IconProp;
  iconSide?: 'left' | 'right';
};

export const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'small',
      full = false,
      disabled = false,
      Icon,
      onlyIcon = false,
      iconSide = 'left',
      ...rest
    }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        variant={variant}
        size={size}
        iconSide={iconSide}
        disabled={disabled}
        full={full}
        onlyIcon={onlyIcon}
        {...rest}
      >
        {Icon && <FontAwesomeIcon icon={Icon} />}
        {!onlyIcon && children}
      </ButtonStyled>
    );
  }
);

Button.displayName = 'Button';
