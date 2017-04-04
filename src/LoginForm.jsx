import React, { Component, PropTypes } from 'react';

export default class LoginForm extends Component {
  renderError() {
    if (this.props.error) {
      return <div><span style={{color:'red'}}>{this.props.error.description}</span></div>;      
    }

    return null;
  }

  handleChange(e) {
    this.props.onFieldChange(e.target.name, e.target.value);
  }

  render() {
    return (
      <form>
        {this.renderError()}
        <input id="username" type="text" name="username" placeholder="user" value={this.props.username} onChange={this.handleChange.bind(this)} /><br />
        <input id="password" type="password" name="password" placeholder="password" value={this.props.password}  onChange={this.handleChange.bind(this)} /><br />
        <br />
        <button onClick={this.props.onSubmit} > Login </button>
      </form>
    );
  }
}
