import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 mr-3 no-underline">
      <Image
        src="/assets/logo.svg"
        alt="MAXBET360 Logo"
        height={48}
        width={98}
        priority
      />
    </Link>
  );
}
