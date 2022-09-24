import React, { InputHTMLAttributes } from 'react';
import { IconProp, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  InputStyled,
  InputContent,
  ErrorMessage,
  InputContainer,
} from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  disabled?: boolean;
  full?: boolean;
  error?: boolean;
  errorMessage?: string;
  Icon: IconProp | IconDefinition;
}

export function Input({
  placeholder,
  disabled,
  error,
  errorMessage,
  full,
  Icon,
  ...rest
}: IInputProps) {
  return (
    <InputContainer data-testid="input-with-icon-container" full={full}>
      <InputContent
        data-testid="input-with-icon-content"
        error={error}
        disabled={disabled}
      >
        {Icon && <FontAwesomeIcon icon={Icon} />}
        <InputStyled
          data-testid="input-with-icon"
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </InputContent>

      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
}
