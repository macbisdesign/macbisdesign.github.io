import './button.css';

export interface Button { // export button for use in Header.ts
  size: string;
  type: string;
  label: string;
  onClick: () => void;
}

export const createButton = ({
  size = 'medium',
  type,
  label,
  onClick,
}: Button ) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  btn.className = ['storybook-button', `storybook-button--${type}`, `storybook-button--${size}`].join(' ');

  return btn;
};