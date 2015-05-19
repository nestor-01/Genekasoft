var React = require('react');

var Loader = require('./loader.jsx');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Content = require('./content.jsx');
var TopMenu = require('./topMenu.jsx');
var Swiper = require('./carousels/swiper.jsx');
var Particles = require('./miscellaneous/particles.jsx');

var Router = require('react-router'),
DefaultRoute = Router.DefaultRoute,
Route = Router.Route,
RouteHandler = Router.RouteHandler;

var Icons = require('./media/icons.jsx');

var Main = React.createClass(
{
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

      var height = '800px';

      if (item === "signin") {
        height = $(window).height() + 'px';
      }
      else if(item === "app")
      {
        height = '800px';
      }
      else {
        height = '150px';
      }

      this.refs.particlesEffect.setSize(height);
    }
  }
});

module.exports = Main;