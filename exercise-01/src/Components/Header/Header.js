import React, { Component } from 'react';
import HeaderTitle from './HeaderTitle';

class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'red' }}>
        <HeaderTitle />
      </div>
    );
  }
}

// const Header = (props) => {
//   return (
//     <div style={{ backgroundColor: 'red' }}>
//       <HeaderTitle titleText={props.header} />
//
//   );
// };

export default Header;
