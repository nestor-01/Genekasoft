(function(){
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();
  window.React = React;
})();

var React = require('react'),
    SignIn = require('./components/signin.jsx'),
    SignUp = require('./components/signup.jsx'),
    Content = require('./components/content.jsx'),
    Products = require('./components/products/productsForm.jsx'),
    Main = require('./components/main.jsx'),
    Admin = require('./components/admin.jsx'),
    
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

var routes = (
  <Route path="/">
    <Route path="/" handler={Main}>
      <Route name="signin" handler={SignIn} />
      <DefaultRoute handler={Content} />
    </Route>
    <Route path="/admin" handler={Admin}>
      <Route name="users" handler={SignUp} />
      <Route name="products" handler={Products} />
    </Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
