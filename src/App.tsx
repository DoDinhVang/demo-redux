import React from 'react';
// import Like from './Like/Like';
import {useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {State} from './redux/configStore'
import {Action} from './redux/actions/index'
import * as actionCreator from './redux/action-creator'
import { bindActionCreators } from 'redux';
function App() {

  const state = useSelector((state: State)=> state.counterReducer)
  const disPatch = useDispatch();
  const {decre,incre} =  bindActionCreators(actionCreator,disPatch)

  console.log('state',state)
  return (
    <div>
       Count: {state.number}
      <button onClick={() => {
          disPatch({
            type: 'decre'
          })

      }}>-</button>
      <button onClick={() =>{
          disPatch({
            type: 'incre'
          })
      }}>+</button>
    </div>
  );
}

export default App;
