import React from "react";
import Header from "../components/header";

function Home({children}) {
  return (
    <div>
      <Header className="header container" />

      {children}
    </div>
  )
}

export default Home;
