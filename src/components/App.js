import React from "react";
import Helmet from "react-helmet";
import Main from "./Main";
import Header from "./Header";
import Head from "./Head";
import Background from "./Background";
import AnchorPoint from "react-anchor-point";
import styles from "./global.scss";

const App = () => {
  return (
    <div>
      <Head/>    
      <Background interval={20000} colors="darkorange, cadetblue, cornflowerblue, darkblue, darkcyan"/>
      <Header />
      <AnchorPoint ref={(reactAnchor) => { window.reactAnchor = reactAnchor}}>
        <Main />
      </AnchorPoint>
    </div>
    );
};

export default App;