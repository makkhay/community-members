import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Community Members homepages
import App from './App';
import NotFound from './NotFound';

// Community Members pages
import Monte from './members/MonteThakkar';
import Prakash from './members/PrakashGurung';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/monte" component={Monte} />
        <Route path="/prakash" component={Prakash} />
        <Route component={NotFound} />
      </Switch>
      
    
      
      
      
    </Router>
  )
}

export default Routes;
