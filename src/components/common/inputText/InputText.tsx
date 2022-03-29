import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import s from './InputText.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

export const InputText: React.FC<SuperInputTextPropsType> = ({
  type,
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  spanClassName,

  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) onChange(e);
    if (onChangeText) onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (onKeyPress) onKeyPress(e);

    if (onEnter && e.key === 'Enter') onEnter();
  };

  const finalSpanClassName = `${s.error} ${spanClassName || ''}`;
  const finalInputClassName = `${s.superInput} ${error ? s.errorInput : ''} ${s.input}`;

  return (
    <div className={s.superInput}>
      <input
        type={type}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </div>
  );
};

InputText.defaultProps = {
  spanClassName: undefined,
  error: undefined,
  onEnter: undefined,
  onChangeText: undefined,
};
