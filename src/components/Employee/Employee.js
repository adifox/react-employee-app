import React, { Component } from 'react';

import classes from './Employee.css';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

class Employee extends Component {
  state = {
    detail: []
  }

  onEmployeeSelect(index) {
    let employee = this.state.detail.slice();

    employee[0] = this.props.employee[index]
    this.setState({ detail: employee });
  }

  render() {
    let employee = this.props.employee
      .map((emp, i) => {
        return (
          <div
            className={ `panel panel-default ${ classes.Pointer }` }
            onClick={ this.onEmployeeSelect.bind(this, i) }
            key={ i.toString() }>
            <div className='panel-heading'>
              <p>Employee Name: { emp.alias }</p>
            </div>
          </div>
        )
      })

    return (
      <div className='row'>
        <div className='col-md-6'>
          { employee }
        </div>
        <div className='col-md-6'>
          <EmployeeDetails detail = { this.state.detail }/>
        </div>
      </div>
    )
  }
}

export default Employee;