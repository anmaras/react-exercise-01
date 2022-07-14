import React, { Component } from 'react';
/* React controlled elements 

*/

class MainForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      comments: '',
      topic: 'react',
    };
  }

  changeNameHandler = (e) => {
    this.setState({
      /* noice trick */
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.comments, this.state.topic, this.state.userName);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.changeNameHandler}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            name="comments"
            cols="30"
            rows="10"
            value={this.state.comments}
            onChange={this.changeNameHandler}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select
            name="topic"
            value={this.state.topic}
            onChange={this.changeNameHandler}
          >
            <option value={'default'} disabled>
              Choose an option
            </option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MainForm;
