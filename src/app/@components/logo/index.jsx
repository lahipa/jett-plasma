import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <img src="/brand/main-logo.svg" alt="Logo" className="text-inherit" />
    </Link>
  );
};

export default Logo;
