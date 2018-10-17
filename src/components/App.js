import React from "react";
import Helmet from "react-helmet";
import Main from "./Main";
import Header from "./Header";
import AnchorPoint from "react-anchor-point";
import styles from "./global.scss";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MKTLR = Marketing + Web Development</title>
      </Helmet>
    
      <Header />
    
      <AnchorPoint ref={(reactAnchor) => { window.reactAnchor = reactAnchor}}>
        <Main />
      </AnchorPoint>
  
    </div>
    );
};

export default App;