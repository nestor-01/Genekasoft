var React = require('react');

var Loader = require('./loader.jsx');
//var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Content = require('./content.jsx');
var TopMenu = require('./topMenu.jsx');
var Swiper = require('./carousels/swiper.jsx');

var Icons = require('./media/icons.jsx');

var Main = React.createClass(
{
  render()
  {
    return (
        <div>
            <Loader />
            <Content />
            <Footer />
        </div>
    );
    
  }
});

module.exports = Main;