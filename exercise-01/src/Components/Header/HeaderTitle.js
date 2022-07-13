import React, { Component } from 'react';

class HeaderTitle extends Component {
  render() {
    return <h1>{this.props.titleText}</h1>;
  }
}

// const HeaderTitle = (props) => {
//   return <h1>{props.titleText}</h1>;
// };

export default HeaderTitle;
