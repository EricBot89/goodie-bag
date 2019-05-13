import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>Welcome to the Goodie Bag!</h1>
      <div>
        <Link to="/">Home (but why?) </Link>
        <Link to="/candy">CANDY!! </Link>
      </div>
    </nav>
  );
};

export { Nav };
