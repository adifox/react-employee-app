import React from 'react';

const employeeDetails = (props) => {
  let employeeDetail, image;

  if (props.detail.length !== 0) {
    let heroImg = (props.detail[0].alias).toLowerCase();

    image = (
      <img
        alt={ `{ heroImg }-logo` }
        src={ require(`../../assets/images/${ heroImg }.jpg`) }
        className="img-responsive"/>
    );

    employeeDetail = (
      <div className="panel panel-default">
        <div className="panel-heading">
          <p>Name: { props.detail[0].alias }</p>
          <p>Age:  { props.detail[0].powers }</p>
          <p>Logo: { image }</p>
        </div>
      </div>
    );
  } else {
    employeeDetail = null;
  }

  return employeeDetail;
};

export default employeeDetails;
