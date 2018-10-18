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
      <Background img="/public/bird.jpg" interval={20000} colors="cadetblue, cornflowerblue, darkblue, darkcyan, darkgreen, darkolivegreen"/>
      <Header />
      <AnchorPoint ref={(reactAnchor) => { window.reactAnchor = reactAnchor}}>
        <Main />
      </AnchorPoint>
    </div>
    );
};

export default App;