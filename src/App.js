import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import EmployeeList from './containers/EmployeeList/EmployeeList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <EmployeeList />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;