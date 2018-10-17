import React from "react";
import Helmet from "react-helmet";
import Main from "./Main";
import Header from "./Header";
import Head from "./Head";
import AnchorPoint from "react-anchor-point";
import styles from "./global.scss";


//<link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />

const App = () => {
  return (
    <div>
      <Head/>    
      <Header />
      <AnchorPoint ref={(reactAnchor) => { window.reactAnchor = reactAnchor}}>
        <Main />
      </AnchorPoint>
  
    </div>
    );
};

export default App;