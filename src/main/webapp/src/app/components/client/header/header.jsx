var React = require('react');

var TopBar = require('./topBar.jsx');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = React.createClass({

    propTypes: {
        onSelectMenu: React.PropTypes.func
    },

    render()
    {
        return (
          <div>
                <TopBar ref="sticky" sticky={true} />
                <header>
    
                    {/* Intro */}
                    <div className="overlay-gradient" data-scroll-index="0">
    
                        {/* Top Bar */}
                        <TopBar ref="top" />
                    </div>
                </header>
          </div>
        );
    }
});

module.exports = Header;