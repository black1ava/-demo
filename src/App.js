import React, { useState, useCallback, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoginPage from './Components/LoginPage';
import Companies from './Components/Companies';

export const LoginContext = createContext();

function App() {

  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login')));

  const handleLogin = useCallback(() => {
    localStorage.setItem('login', !login);
    setLogin(login => !login);
  }, [login]);

  console.log(login);

  return (
    <div>
      <LoginContext.Provider value={{ login, handleLogin}}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login"/>
            </Route>
            <Route path="/login" component={ LoginPage }/>
            <Route path="/companies">
              { login ? <Companies /> : <Redirect to="/login"/> }
            </Route>
          </Switch>
        </Router>
      </LoginContext.Provider>
    </div>
  )
}

export default App
