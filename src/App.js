import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import EmployeeList from './containers/EmployeeList/EmployeeList';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={EmployeeList} />
          </Layout>
      </BrowserRouter>
    );
  }
}

export default App;