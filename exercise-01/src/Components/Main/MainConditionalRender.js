import React, { Component } from 'react';

class MainConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    /* ----------CONDITIONAL------------- */

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Antoni</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    /* ---------------------------------- */

    /* ------CONDITIONAL WITH VARIABLE--------- */

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Antoni</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    /* ---------------------------------------- */

    /* ---------TERNARY CONDITIONAL OPERATOR---------- */

    //   return this.state.isLoggedIn ? (
    //     <div>Welcome Antoni</div>
    //   ) : (
    //     <div>Welcome Guest</div>
    //   );
    // }

    /* ----------------------------------------------- */

    /* ------SHORT CIRCUIT OPERATOR------------------ */

    return this.state.isLoggedIn && <div>Welcome Antoni</div>;

    /* ---------------------------------------------- */
  }
}

// function MainConditionalRender() {
//   return (
//     <div>MainConditionalRender</div>
//   )
// }

export default MainConditionalRender;
