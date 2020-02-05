import React from 'react';

interface ElementProps {
  value: Array<any> | number | string,
  title: string,
  wrapper?: boolean
}

const Element: React.FC<ElementProps> = ({ value, title }:ElementProps) => (
  <span>
    {title}
    <span>
      {value}
    </span>
  </span>
);

export default Element;
