import React from 'react';

const employeeDetails = (props) => {
  console.log('calling here:', props);
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <p>Name: {props.detail.name}</p>
        <p>Age: {props.detail.age}</p>
        <p>Position: {props.detail.position}</p>
      </div>
    </div>
  )
}

export default employeeDetails;