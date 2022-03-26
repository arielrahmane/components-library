import classNames from 'classnames';
import React from 'react';

export interface NavbarItem {
  name: string;
  href?: string;
}

export interface NavbarProps {
  /** Mandatory props */
  items: NavbarItem[];
  heading: string;
  /** Styling props */
  backgroundColor?: string;
  textColor?: string;
  textCase?: string;
}

const defaultProps = {
  backgroundColor: "bg-blue-500", 
  textColor: "text-white",
  textCase: "uppercase",
}

export function Navbar(props: NavbarProps) {
  const {
    items, 
    heading, 
    backgroundColor, 
    textColor, 
    textCase
   } = props;

  return (
    <>
      <nav className={classNames(backgroundColor, "relative flex flex-wrap items-center justify-between px-2 py-3 mb-3")}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          {/* Heading */}
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className={classNames(textColor, textCase, "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap")}>
              {heading}
            </a>
          </div>
          {/* Items */}
          <div className="lg:flex flex-grow items-center flex">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {items.map((item: NavbarItem) => (
                <li className="nav-item">
                  <a
                    className={classNames(textColor, textCase, "px-3 py-2 cursor-pointer flex items-center text-xs font-bold leading-snug hover:opacity-75")}
                    href={item.href ? item.href : ""}
                  >
                    <i className={classNames(textColor, "text-lg opacity-75")}></i><span className="ml-2">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {...defaultProps}
