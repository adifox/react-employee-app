import React from 'react';

import HelperBox from '../../hoc/HelperBox';
import Header from '../Header/Header';

const layout = (props) => (
  <HelperBox>
    <Header />
    <main className='container'>
      { props.children }
    </main>
  </HelperBox>
)

export default layout;