import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {countCreator} from './store/reposReducer'

function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.repos.count)

  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch(countCreator(333))}>Click me</button>
    </div>
  );
}

export default App;
