import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './paths/Home';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function AppLogin() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
    <Router>
      <React.StrictMode>
        <AppLogin />
      </React.StrictMode>
    </Router>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
