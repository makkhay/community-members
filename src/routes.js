import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Community Members homepages
import App from './App';
import NotFound from './NotFound';

// Community Members pages
import MonteDashboard from './members/MonteThakkar/Dashboard';
import MontePortfolio from './members/MonteThakkar/Portfolio';
import MonteProfile from './members/MonteThakkar/Profile';
import MonteLocked from './portals/MonteThakkar'

import William from './members/WilliamHua';
import Teodora from './members/TeodoraCaneva';

import PrakashDashboard from './members/PrakashGurung/Dashboard';
import Prakash from './members/PrakashGurung';
import PrakashLocked from './portals/PrakashGurung'

import Emanuel from './members/EmanuelSaunders';
import Nicholas from './members/NicholasSzeto';
import Jahon from './members/JakhongirKhusanov';
import Sukhjit from './members/SukhjitSingh';

import MitulDashboard from './members/MitulSavani/Dashboard';
import Mitul from './members/MitulSavani';
import MitulLocked from './portals/MitulSavani'

import Ryan from './members/RyanLiszewski';
import Thomas from './members/ThomasZhu';
import Bhavesh from './members/BhaveshChowdhury';
import Girish from './members/GirishRawat';
import Affaan from './members/AffaanGhazzali';
import MitulSavani from './members/MitulSavani';

import Karan from './members/KaranGupta';

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />

        <Route exact path="/monte" component={MonteDashboard} />
        <Route path="/monte/dashboard" component={MonteDashboard} />
        <Route path="/monte/portfolio" component={MontePortfolio} />
        <Route path="/monte/profile" component={MonteProfile} />
        <Route path="/monte/locked" component={MonteLocked} />

        <Route path="/william" component={William} />
        <Route path="/teodora" component={Teodora} />
        
        <Route exact path="/prakash" component={PrakashDashboard} />
        <Route path="/prakash/locked" component={PrakashLocked} />
        <Route path="/prakash/dashboard" component={PrakashDashboard}/>




        <Route path="/emanuel" component={Emanuel} />
        <Route path="/affaan" component={Affaan} />
        <Route path="/nicholas" component={Nicholas} />
        <Route path="/jahon" component={Jahon} />
        <Route path="/sukhjit" component={Sukhjit} />

        <Route exact path="/mitul" component={Mitul} />
        <Route path="/mitul/locked" component={MitulLocked} />
        <Route path="/mitul/dashboard" component={MitulDashboard}/>

        <Route path="/ryan" component={Ryan} />
        <Route path="/thomas" component={Thomas} />
        <Route path="/bhavesh" component={Bhavesh} />
        <Route path="/girish" component={Girish} />
        <Route path="/karan" component={Karan} />
      </Switch>
    </Router>
  )
}

export default Routes;
