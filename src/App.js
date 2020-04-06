import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import { loggedIn } from './actions/isLoggedAction';

function App() {
  const counter = useSelector(state => state.count);
  const isLoggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>Our App</h1>
        <p>Counter: {counter} </p>
        <button
          className="ui green button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button className="ui red button" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div>
        {!isLoggedIn ? (
          <button
            style={{ marginTop: '15px' }}
            className="ui inverted blue button"
            onClick={() => dispatch(loggedIn())}
          >
            Login
          </button>
        ) : (
          <div>
            <p>You are logged in</p>
            <button
              className="ui inverted red button"
              onClick={() => dispatch(loggedIn())}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
