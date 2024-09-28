import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserComponent from './components/UserComponent';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false); //change to true to see the dashboard

    return (
        <Router>
            <Switch>
                <Route path="/user/:id" component={UserComponent} />
                <Route path="/dashboard">{isLoggedIn ? <Dashboard />  : <Redirect to='/login' />}</Route>
                <Route path="/login" component={Login}/>
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    )
}

export default App