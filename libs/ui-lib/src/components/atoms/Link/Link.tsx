// component.tsx.hbs

import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <a
      className={`px-2 text-button-primary items-start underline ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
