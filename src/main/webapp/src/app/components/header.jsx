var React = require('react');

var TopMenu = require('./topMenu.jsx');
var Icons = require('./media/icons.jsx');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = React.createClass({

    propTypes: {
        onSelectMenu: React.PropTypes.func
    },

    render()
    {
        return (
                <header>
    
                    {/* Intro */}
                    <div className="overlay-gradient" data-scroll-index="0">
    
                        {/* Top Bar */}
                        <div className="top-bar">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
    
                                        {/* Logo */}
                                        <div className="logo">
                                            <a title="" href="#">Geneka!</a>
                                        </div>

                                        <TopMenu items={[
                                            {
                                                url: "#/",
                                                text: "Inicio",
                                                onClick: function(e)
                                                {
                                                    //this.props.onSelectMenu(e, this);
                                                }.bind(this)
                                            },
                                            {
                                                section: "1",
                                                text: "Galería"
                                            },
                                            {
                                                section: "2",
                                                text: "Suscripciones"
                                            },
                                            {
                                                section: "3",
                                                text: "Contacto"
                                            },
                                            {
                                                text: "Ingresar",
                                                url: "#/signin",
                                                hightlighted: true,
                                                icon: Icons.user,
                                                onClick: function(e)
                                                {
                                                    //this.props.onSelectMenu(e, "ingresar");
                                                }.bind(this)
                                            }
                                        ]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        );
    }
});

module.exports = Header;