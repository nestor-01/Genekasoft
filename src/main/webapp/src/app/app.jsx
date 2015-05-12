(function(){
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();
  window.React = React;
})();

var React = require('react'),
    Loader = require('./components/loader.jsx'),
    SignIn = require('./components/signin.jsx'),
    SignUp = require('./components/signup.jsx'),
    Header = require('./components/header.jsx'),
    Content = require('./components/content.jsx'),
    Particles = require('./components/miscellaneous/particles.jsx'),
    Authenticated = require('./authenticated.jsx'),
    
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;
    
var App = React.createClass({

  render()
  {
    return (
      <div>
        <Loader />
        <Particles ref="particlesEffect" />
        <Header />
        <RouteHandler onInit={this._onChangeView} />
      </div>
    );
  },

  _onChangeView(item)
  {
    if(this.refs.particlesEffect) {
      this.refs.particlesEffect.pause();

      if (item === "signin") {
        this.refs.particlesEffect.setSize($(window).height() + 'px');
      }
      else {
        this.refs.particlesEffect.setSize('150px');
      }
    }
  }
});

var routes = (
  <Route name="home" path="/" handler={App}>
    <Route name="signin" handler={SignIn} />
    <Route name="signup" handler={SignUp} />
    <DefaultRoute handler={Content} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
