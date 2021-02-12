import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import Main from './components/main/Main'

import './App.scss'

function App() {

  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;
