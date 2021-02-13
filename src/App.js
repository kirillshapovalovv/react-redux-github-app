import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Main from './components/main/Main'
import Card from './components/card/Card'

import './App.scss'

function App() {

  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route path={"/card/:username/:reponame"} component={Card} />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
