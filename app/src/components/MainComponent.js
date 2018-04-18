import { Switch, Route } from 'react-router-dom';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import App from '../App';
import StaticWebsiteComponent from '../components/StaticWebsiteComponent';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/website' render={(props) => <StaticWebsiteComponent htmlContent="<div>TESSSST</div>"{...props} /> } />
    </Switch>
  </main>
)

export default Main;