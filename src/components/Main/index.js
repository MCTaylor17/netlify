import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Child1 from './Child1'
import Child2 from './Child2'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/child1' component={Child1}/>
      <Route path='/child2' component={Child2}/>
    </Switch>
  </main>
)

export default Main;