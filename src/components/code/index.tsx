import React from 'react';
import './index.scss';
import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';

export const Code: React.FC<SyntaxHighlighterProps> = ({ children, ...innerProps }) => (
  <SyntaxHighlighter className="code" {...innerProps}>
    {children}
  </SyntaxHighlighter>
);
