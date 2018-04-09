import React, { Component } from 'react';

import classes from './Employee.css';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

class Employee extends Component {
  state = {
    detail: []
  }

  onEmployeeSelect(index) {
    this.setState({detail: this.props.employee[index]})
  }

  render() {
    let employee = this.props.employee
      .map((emp, i) => {
        return (
          <div
            className={`panel panel-default ${classes.Pointer}`}
            onClick={this.onEmployeeSelect.bind(this, i)}>
            <div className='panel-heading'>
              <p>Employee Name: {emp.name}</p>
            </div>
          </div>
        )
      })

    return (
      <div className='row'>
        <div className='col-md-6'>
          {employee}
        </div>
        <div className='col-md-6'>
          <EmployeeDetails detail = {this.state.detail}/>
        </div>
      </div>
    )
  }
}

export default Employee;