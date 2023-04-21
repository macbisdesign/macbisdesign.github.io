import './button.css';

export const createButton = ({
  size = 'medium',
  type,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);
  btn.className = ['storybook-button', `storybook-button--${type}`, `storybook-button--${size}`].join(' ');

  return btn;
};
