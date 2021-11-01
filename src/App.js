import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App(){
    return(
        <Router>
            <div className='App'>
                <Header/>

                <div className='appbody'>
                    <Sidebar />
                    <Switch>
                        <Route path="/mail">
                            <Mail/>
                        </Route>
                        <Route path="/">
                            <EmailList/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
       
            
            
       
    );
}


export default App;