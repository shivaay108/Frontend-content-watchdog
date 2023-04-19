import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <h2>Logo</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">ContactUs</Link>
        <Link href="/">Login</Link>
      </nav>
      <nav>
        <Link href="/">Dark</Link>
      </nav>
    </header>
  );
};

export default NavBar;
