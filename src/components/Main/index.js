import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dewordify from './Dewordify';
import Bio from './Bio';
import FAQ from './FAQ';
import Typography from './Typography';
import styles from "./styles.scss";

const Main = () => (
  <main className={styles.main} style={{clear: "both"}}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/bio' component={Bio}/>
      <Route path='/dewordify' component={Dewordify}/>
      <Route path='/faq' component={FAQ}/>
      <Route path='/typography' component={Typography}/>
    </Switch>
  </main>
)

export default Main;