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


function App() {
  return (
    <div className="App">
     
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
         <Route path="/destination/:id">
            <Destination></Destination>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="*">
            <NoMatch></NoMatch>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
