import { Icon } from '@/components/atoms/Icon';
import styles from './styles.module.scss';
import React, { ReactNode, Ref, forwardRef } from 'react';

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value?: string;
  error?: string;
  className?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef(
  (
    {
      id,
      label,
      placeholder,
      type,
      value,
      onChange,
      onKeyDown,
      error,
      className,
      ...rest
    }: InputProps,
    ref?: Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    return (
      <div className={styles.inputContainer}>
        <label htmlFor={id} className={styles.input__label}>
          {label}
        </label>

        <div className={styles.input}>
          <div className={styles.icon}>
            <Icon icon='pencil' fill='#000' />
          </div>
          <input
            className={`${styles.input__field} ${error ? styles['inputfield--error'] : ''
              }`}
            ref={ref as Ref<HTMLInputElement>}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            {...rest}
          />

        </div>
      </div>
    );
  }
);
