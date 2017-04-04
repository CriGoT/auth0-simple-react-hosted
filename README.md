# Simple React based component to use in Auth0 Hosted Page

This is a very simple React component created to show how to embed a React Component in th Auth0 Hosted Page. 

> **Note:** This is not production ready and does not show React/Auth0 best practices in terms of secure development

## Running locally

Clone the repo and modify the settings in [example/index.html](example/index.html) to your own domain/client:

```
yarn 
yarn start
```

In the page clieck on `example` to see the local version of the page. Using this page will trigger warnings because is intended to be used in the Hosted Page. The pacg will **not work** if the client is `OIDC conformant`

## Building

1. Run `yarn build`
2. Copy the contents of the `dist` folder to your CDN or Web Server
3. Update the Auth0 Login page to use your bundle

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>Sign In with Auth0</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
  <div id="container">
  </div>
  <!--[if IE 8]>
  <script src="//cdnjs.cloudflare.com/ajax/libs/ie8/0.2.5/ie8.js"></script>
  <![endif]-->

  <!--[if lte IE 9]>
  <script src="https://cdn.auth0.com/js/base64.js"></script>
  <script src="https://cdn.auth0.com/js/es5-shim.min.js"></script>
  <![endif]-->
  <script src="https://YOUR_CDN_OR_SERVER_URL/bundle.js" ></script>
  <script>
     loginComponent.render(
      document.getElementById('container'),
      JSON.parse(decodeURIComponent(escape(window.atob('@@config@@'))))
    );
  </script>
</body>
</html>
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
