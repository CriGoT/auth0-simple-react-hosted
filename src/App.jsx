import React, {Component} from 'react';

import LoginForm from './LoginForm';
import auth0js from 'auth0-js'; 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      submitting: false,
      // You can discover this connection using other mechanisms
      connection: 'acme',
      username: this.props.extraParams.login_hint,
      password: ""
    };

    this.login = this.login.bind(this);
    this.changeField = this.changeField.bind(this);
  }

  changeField(name, value) {
    let newState = {};
    newState[name]=value;
    this.setState(newState);
  }

  login(e) {
    e.preventDefault();
    this.setState({error:null, submitting: true});

    const toCamelCase= (object, exceptions) => {
      if (typeof object !== 'object' || Array.isArray(object) || object === null) {
        return object;
      }

      exceptions = exceptions || [];

      const snakeToCamel = (str) => {
        const parts = str.split('_');
        return parts.reduce((p, c)=> p + c.charAt(0).toUpperCase() + c.slice(1), parts.shift());
      }
      
      return Object.keys(object).reduce(function (p, key) {
        var newKey = exceptions.indexOf(key) === -1 ? snakeToCamel(key) : key;
        p[newKey] = toCamelCase(object[key]);
        return p;
      }, {});
    };


    const authorizeParams = toCamelCase(this.props.internalOptions);

    let auth0 = new auth0js.WebAuth(
      Object.assign(
        authorizeParams,
        {
          domain: this.props.auth0Domain,
          clientID: this.props.clientID,
          redirectUri: this.props.callbackURL
        }
      ));

    // When using other authentication options you may need to use authorize
    // auth0.authorize(
    //   Object.assign(
    //     authorizeParams,
    //     {
    //       username: this.state.username,
    //       password: this.state.password
    //     }),
    //   this.loginCallback.bind(this));

    auth0.redirect.loginWithCredentials(
       Object.assign({scope: 'openid'}, // make sure that basic scope is present
         this.props.internalOptions,
         {
           connection: this.state.connection,
           username: this.state.username,
           password: this.state.password
         }),

       this.loginCallback.bind(this));
  }

  loginCallback(err,authResult) {
    console.log(err, authResult);
    // Since this is a hosted page the only reason why you would get a cllabck is because of an error
    this.setState({error:err, submitting: false});
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <LoginForm onSubmit={this.login} onFieldChange={this.changeField} {...this.state} />
      </div>
    );
  }
}
