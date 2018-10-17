import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Dewordify from './Dewordify'
import Child2 from './Child2'

const Main = () => (
  <main style={{clear: "both"}}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/dewordify' component={Dewordify}/>
    </Switch>
  </main>
)

export default Main;