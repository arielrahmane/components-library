import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Button(props: Props): JSX.Element {
  const { children } = props;

  return <button type="button" className="p-4 m-4 text-cyan-500 text-lg font-bold bg-gray-800 shadow-lg rounded-lg shadow-cyan-500/50 w-40 transition duration-300 ease-out hover:scale-105">{children}</button>;
}
