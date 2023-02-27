import { ComponentPropsWithRef } from 'react';
import AlertCircleIcon from '../assets/alert-circle.svg';
import '../styles/button.scss';

export const Button = (props: any) => {
  return (
    <button {...props}>
      <img src={AlertCircleIcon} alt="alert circle" />
      <span>Button Component</span>
    </button>
  )
}

export type IButtonProps = ComponentPropsWithRef<'button'>;