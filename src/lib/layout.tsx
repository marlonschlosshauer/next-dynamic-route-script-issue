import React from "react";
import { Cmp } from "./cmp";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <Cmp />
      </head>
      <body>{children}</body>
    </html>
  );
};
