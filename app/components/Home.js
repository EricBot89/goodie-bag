import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> What are you doing here???</h1>
      <p>
        {" "}
        go check out the <Link to="/candy">candy!</Link>{" "}
      </p>
    </div>
  );
};

export { Home };
