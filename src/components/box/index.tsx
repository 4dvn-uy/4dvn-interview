import React from 'react';
import './index.scss';

interface Props {
  color?: 'blue' | 'green';
}

export const Box: React.FC<Props> = ({ children, color }) => (
  <div className={`box${color ? ` box--${color}` : ''}`}>{children}</div>
);
