import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Books from './Books';
import Collection from './Collection';
import Messages from './Messages';
import About from './About';

const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Books}/>
<Route path="/collection" component={Collection}/>
<Route path="/messages" component={Messages}/>
<Route path="/about" component={About}/>
</Switch>
</BrowserRouter>
);
export default Routes;