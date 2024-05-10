import Link from "next/link";
import React from "react";

export interface NavigationProps {
  prefix?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ prefix = "/" }) => {
  return (
    <nav>
      {["a", "b", "c"].map((route, key) => (
        <ul key={key}>
          <li>
            <Link href={`${prefix}/${route}`}>Go to ({route})</Link>
          </li>
        </ul>
      ))}
    </nav>
  );
};
