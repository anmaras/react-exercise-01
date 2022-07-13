import React, { Component } from 'react';
import FooterTitle from './FooterTitle';

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'green' }}>
        <FooterTitle footerTitleText={this.props.footer} />
      </div>
    );
  }
}

// const Footer = (props) => {
//   return (
//     <div style={{ backgroundColor: 'green' }}>
//       <FooterTitle footerTitleText={props.footer} />
//     </div>
//   );
// };

export default Footer;
