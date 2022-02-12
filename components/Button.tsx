import classNames from 'classnames';
import React, { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Button(props: Props): JSX.Element {
  const { children } = props;

  return <button className="p-4 m-4 bg-green-600">{children}</button>;
}
