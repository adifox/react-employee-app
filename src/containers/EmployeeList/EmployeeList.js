import React, { Component } from 'react';
import axios from 'axios';

import Employee from '../../components/Employee/Employee';

class EmployeeList extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/adifox/fake-json-directory/db')
      .then((response) => {
        this.setState({ employees: response.data.heroDetails })
      })
  }

  render () {
    return (
      <Employee employee={ this.state.employees } />
    )
  }
}

export default EmployeeList;