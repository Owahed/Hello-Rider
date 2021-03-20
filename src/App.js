import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import NoMatch from './Component/NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Destination from './Component/Destination/Destination';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';


export const UserContext =createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      
     
     <Router>
       <Switch>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/header">
            <Header></Header>
         </Route>
         <PrivateRoute path="/destination/:id">
            <Destination></Destination>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="*">
            <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
