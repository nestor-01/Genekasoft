(function(){
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();
  window.React = React;
})();

var React = require('react'),
    Router = require('react-router');

var Main = require('./components/client/main.jsx'),
    Content = require('./components/client/content/content.jsx'),
    SignIn = require('./components/client/signin/signin.jsx'),

    Admin = require('./components/admin/admin.jsx'),

    UsersList = require('./components/admin/users/usersList/usersList.jsx'),
    UsersForm = require('./components/admin/users/usersForm/usersForm.jsx'),
    UserStatistics = require('./components/admin/users/userStatistics/userStatistics.jsx'),


    ProductsList = require('./components/admin/products/productsList/productsList.jsx'),
    ProductsForm = require('./components/admin/products/productsForm/productsForm.jsx');

var DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

var routes = (
  <Route path="/">
    <Route path="/" handler={Main}>
      <Route name="signin" handler={SignIn} />
      <DefaultRoute handler={Content} />
    </Route>
    <Route path="/admin" handler={Admin}>
      <Route name="users" handler={UsersList} />
      <Route name="users/newUser" handler={UsersForm} />
      <Route name="users/userStatistics" handler={UserStatistics} />

      <Route name="products" handler={ProductsList} />
      <Route name="products/newProduct" handler={ProductsForm} />
    </Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
