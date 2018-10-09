import React from "react";
import Helmet from "react-helmet";
import Main from "./Main";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Put on your helmet</title>
      </Helmet>
      <Header />
      <Main />
    </div>
    );
};

export default App;