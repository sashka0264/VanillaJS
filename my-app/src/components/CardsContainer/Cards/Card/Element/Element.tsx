import React from 'react';

interface ElementProps {
  value: Array<any> | number | string,
  title: string,
  wrapper?: boolean,
}

const Element: React.FC<ElementProps> = ({ value, title, wrapper }:ElementProps) => (
  <>
    {wrapper
      ? (
        <span>
          {title}
          <span>
            {value}
          </span>
        </span>
      )

      : (
        <>
          {title}
          <span>
            {value}
          </span>
        </>
      )}
  </>
);

export default Element;
