import classNames from 'classnames';
import React, { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Button(props: Props): JSX.Element {
  const { children } = props;

  return <button>{children}</button>;
}
