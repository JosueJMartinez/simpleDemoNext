// import React from "react";
import Link from "next/Link";

export default function NavBar() {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: "space-between",
    color: "grey",
    padding: "1rem",
  };
  return (
    <div style={styles}>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
