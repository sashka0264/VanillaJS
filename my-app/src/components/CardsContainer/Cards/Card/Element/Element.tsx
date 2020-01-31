import React from 'react';

interface IProps {
  value: Array<any> | number | string,
  title: string,
  wrapper?: boolean,
}

const Element = ({ value, title, wrapper }: IProps) => (
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
