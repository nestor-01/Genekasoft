var React = require('react');

// Social imports
var FacebookButton = require('./facebookButton.jsx');
var TwitterButton = require('./twitterButton.jsx');
var TumblrButton = require('./tumblerButton.jsx');

var SocialLinks = React.createClass({

    propTypes:
    {
        networks: React.PropTypes.array
    },

    getDefaultProps: function()
    {
        return {
            networks: [
                <FacebookButton key="facebook" url="#" title="Nuestra página de fans" />,
                <TwitterButton key="twitter" url="#" title="Nuestras últimas noticias" />,
                <TumblrButton key="tumblr" url="#" title="Otras cosas" />
            ]
        };
    },

    render: function()
    {
        return (
            <ul className="socials">
                {this.props.networks}
            </ul>
        );
    }
});

module.exports = SocialLinks;
