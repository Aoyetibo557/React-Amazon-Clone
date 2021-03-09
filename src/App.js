import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Topbar from './component/Topbar';
import Details from './component/Details'
import Checkout from './component/Checkout';
import Login from './component/Login'
import { useStateValue } from './component/StateProvider';
import { auth } from './component/firebase';


function App() {

  const [{ user }, dispatch] = useStateValue();
  // Piece of code which runs on given conditions
  useEffect(() => {
    // listner to listen to login / logout state
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      // any cleanup operations go in here...
      unsubscribe()
    }
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route exact path="/checkout" component="">
            <Header />
            <Checkout />
          </Route>

          <Route exact path="/login" component="">
            <Login />
          </Route>

          <Route exact path="/details">
            <Header />
            <Details />
          </Route>

          <Route exact path="/">
            <Header />
            {/* <Topbar /> */}
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
