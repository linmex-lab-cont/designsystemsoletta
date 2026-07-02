import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase field label. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and replaces the hint. */
  error?: string;
  /** Icon node shown inside the field, left-aligned. */
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/** Soletta text input with label, hint and error states. */
export function Input(props: InputProps): JSX.Element;
