import React from "react";
import { Card as RadixCard } from "@radix-ui/themes";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <RadixCard
      size="1"
      variant="ghost"
      className={`p-3.5 bg-white border rounded border-basics-grey20 ${className}`}
    >
      {children}
    </RadixCard>
  );
};

export default Card;
