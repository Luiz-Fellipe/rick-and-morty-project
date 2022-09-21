import React, { InputHTMLAttributes } from 'react';

import {
  InputStyled,
  ErrorMessage,
  InputContainer,
  Label,
  Description,
} from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  disabled?: boolean;
  full?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  description?: string;
}

export function Input({
  placeholder,
  disabled,
  error,
  errorMessage,
  full,
  label,
  description,
  ...rest
}: IInputProps) {
  return (
    <InputContainer data-testid="input-without-icon-container" full={full}>
      {!!label && <Label>{label}</Label>}
      {!!description && <Description>{description}</Description>}
      <InputStyled
        data-testid="input-without-icon"
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        {...rest}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
}
