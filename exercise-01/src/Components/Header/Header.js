import React, { Component } from 'react';
import HeaderTitle from './HeaderTitle';

// class Header extends Component {
//   render() {
//     return <HeaderTitle />;
//   }
// }

const Header = () => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <HeaderTitle />
    </div>
  );
};

export default Header;
