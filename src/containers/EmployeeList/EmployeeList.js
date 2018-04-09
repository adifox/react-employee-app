import React, { Component } from 'react';

import Employee from '../../components/Employee/Employee';
// import EmployeeDetails from '../../components/EmployeeDetails/EmployeeDetails';

class EmployeeList extends Component {
  state = {
    employees: [
      { name: 'Mark', age: 26, position: 'front-end' },
      { name: 'Tom', age: 32, position: 'back-end' },
      { name: 'Paul', age: 34, position: 'dev-ops' }
    ]
    // details: []
  }

  // showDetails(arg) {
  //   this.state.employees.map((_, i) => {
  //     if (i === arg) {
  //       let employee = this.state.employees[i];
  //       this.setState({details: employee})
  //     }
  //   })
  // }

  render () {
    return (
      <Employee employee={this.state.employees} />
        // click={this.showDetails.bind(this)}/>
    )
  }
}

export default EmployeeList;