import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Styles
import { ButtonStyled } from './styles';

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  Icon?: IconProp;
  onlyIcon?: boolean;
  iconSide?: 'left' | 'right';
  isActive?: boolean;
  isLoading?: boolean;
};

export const Button = forwardRef(
  (
    {
      children,
      disabled = false,
      variant = 'primary',
      Icon,
      onlyIcon = false,
      iconSide = 'left',
      isActive = false,
      isLoading = false,
      ...rest
    }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <ButtonStyled
        ref={ref}
        disabled={disabled}
        variant={variant}
        iconSide={iconSide}
        isActive={isActive}
        {...rest}
      >
        {!isLoading && Icon && <FontAwesomeIcon icon={Icon} />}

        {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}

        {!onlyIcon && children}
      </ButtonStyled>
    );
  }
);

Button.displayName = 'Button';
