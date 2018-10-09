import React from "react";
import ReactDOM from "react-dom";
import sass from "./sass.scss";
import css from "./css.css";

const App = () => {
  return <div className={sass.test + " " + css.css}>Hello World</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));