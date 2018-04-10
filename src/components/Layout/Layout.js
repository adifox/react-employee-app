import React from 'react';
import PropTypes from 'prop-types';

import HelperBox from '../../hoc/HelperBox';
import Header from '../Header/Header';

const layout = (props) => (
  <HelperBox>
    <Header />
    <main className="container">
      { props.children }
    </main>
  </HelperBox>
);

layout.propTypes = {
  children: PropTypes
};

export default layout;