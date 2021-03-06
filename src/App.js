import React, { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import ChatRoom from "./component/ChatRoom";
import Login from "./component/Login";
import { useStateValue } from "./component/StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="App__body">
              <SideBar />
              <Switch>
                <Route path="/room/:roomId">
                  <ChatRoom />
                </Route>
                <Route path="/">
                  <h1>Welcome Screen</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
