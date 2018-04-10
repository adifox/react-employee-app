import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Employee.css';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';

class Employee extends Component {
  state = {
    detail: []
  }

  onEmployeeSelected(index) {
    let employee = this.state.detail.slice();

    employee[0] = this.props.employee[index];
    console.log('the employee:', employee);
    this.setState({ detail: employee });
  }

  render() {
    let employee = this.props.employee
      .map((emp, i) => {
        return (
          <div
            key={ i.toString() }
            onClick={ this.onEmployeeSelected.bind(this, i) }
            className={ `panel panel-default ${ classes.Pointer }` }>
            <div className="panel-heading">
              <p>Employee Name: { emp.alias }</p>
            </div>
          </div>
        );
      });

    return (
      <div className="row">
        <div className="col-md-6">
          { employee }
        </div>
        <div className="col-md-6">
          <EmployeeDetails detail = { this.state.detail }/>
        </div>
      </div>
    );
  }
}

Employee.propTypes = {
  employee: PropTypes.string
};

export default Employee;