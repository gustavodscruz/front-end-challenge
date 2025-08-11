import React, { ButtonHTMLAttributes } from "react";
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    content: string;
    onPress: () => void;
}

export default function Button({ content, onPress, ...props }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={() => onPress()} {...props}>
      {content}
    </button>
  );
}
