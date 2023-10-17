'use client'

import { Icon } from '@/components/atoms/Icon'
import React, { ReactNode, Ref, forwardRef } from 'react'
import { FieldError, FieldErrors, Merge } from 'react-hook-form'
import styles from './styles.module.scss'

export type ErrorType = {
  message: string
}

type ValidationType = {
  required: string
}

type InputProps = {
  icon?: string
  backgroundColor?: string
  placeholderColor?: string
  color?: string
  id: string
  isTextarea?: boolean
  label: string
  placeholder: string
  type: string
  value?: string
  error?:
    | FieldError
    | FieldErrors<any>
    | ErrorType
    | string
    | Merge<FieldError, FieldErrors<any>>
  validation?: ValidationType
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Input = forwardRef(
  (
    {
      icon,
      backgroundColor,
      placeholderColor,
      color,
      id,
      isTextarea = false,
      label,
      placeholder,
      type,
      value,
      onChange,
      onKeyDown,
      error,
      validation,
      ...rest
    }: InputProps,
    ref?: Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let errorMessage: ReactNode = null
    let errorIcon = icon
    let errorIconColor = '#398278'

    if (error) {
      if (typeof error === 'string') {
        errorMessage = error
        errorIcon = 'x'
        errorIconColor = 'green'
      } else if ((error as FieldError).type) {
        errorMessage = (error as FieldError).message
        errorIcon = 'x'
        errorIconColor = 'green'
      } else if ((error as ErrorType).message) {
        errorMessage = (error as ErrorType).message
        errorIcon = 'x'
        errorIconColor = 'green'
      }
    }

    const inputClassList = [
      styles.input,
      styles[`input--${backgroundColor}`],
    ].join(' ')

    const inputFieldClassList = [
      styles.input__field,
      styles[`input__field--${color}`],
      styles[`input__field--${placeholderColor}`]
    ].join(' ')

    return (
      <>
        <label htmlFor={id} className={styles.input__label}>
          {label}
        </label>

        {validation && error && (
          <span className={styles.input__validation}>
            {validation.required}
          </span>
        )}

        <div className={inputClassList}>
          <Icon icon={errorIcon} fill={errorIconColor} />
          {isTextarea ? (
            <textarea
              className={`${inputFieldClassList} ${
                error ? styles['inputfield--error'] : ''
              }`}
              id={id}
              placeholder={placeholder}
              ref={ref as Ref<HTMLTextAreaElement>}
              {...rest}
            />
          ) : (
            <input
              className={`${inputFieldClassList} ${
                error ? styles['inputfield--error'] : ''
              }`}
              ref={ref as Ref<HTMLInputElement>}
              id={id}
              type={type}
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              color={color}
              {...rest}
            />
          )}
        </div>
      </>
    )
  }
)
