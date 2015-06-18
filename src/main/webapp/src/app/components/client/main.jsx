var React = require('react');
var Router = require('react-router');

var Loader = require('./loader/loader.jsx');
var Header = require('./header/header.jsx');
var Footer = require('./footer/footer.jsx');
var Content = require('./content/content.jsx');
var TopMenu = require('./topMenu/topMenu.jsx');
var Swiper = require('./carousels/swiper/swiper.jsx');
var Particles = require('../common/widgets/particles/particles.jsx');

var DefaultRoute = Router.DefaultRoute,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var Main = React.createClass(
{
  render()
  {
    return (
      <div>
        <Loader ref="loader" />
        <Particles ref="particlesEffect" />
        <Header />
        <RouteHandler onInit={this._onChangeView} />
      </div>
    );
  },

  _onChangeView(item)
  {
    try
    {
      if(this.refs.particlesEffect) {
        this.refs.particlesEffect.pause();

        //var height = '800px';
        var height = '100vh';

        if (item === "signin") {
          this.refs.loader.hide();
          //height = $(window).height() + 'px';
          height = '100vh';
        }
        else if(item === "app")
        {
          //height = '800px';
          height = '100vh';
        }
        else {
          height = '150px';
        }

        this.refs.particlesEffect.setSize(height);
      }
    }
    catch(e)
    {
      console.log("ee");
    }
  }
});

module.exports = Main;