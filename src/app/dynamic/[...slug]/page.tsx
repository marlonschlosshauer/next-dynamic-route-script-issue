import Link from "next/link";
import React from "react";

export interface PageProps {
  params: {
    slug: string[];
  };
}

export default function Page(props: PageProps) {
  const { params } = props;

  if (!params) {
    return null;
  }

  const { slug } = params;

  return (
    <div>
      <h1>{slug}</h1>
      {["a", "b", "c"].map((route, key) => (
        <ul key={key}>
          <li>
            <Link href={`/dynamic/${route}`}>Go to ({route})</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
