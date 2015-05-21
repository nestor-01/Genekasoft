var React = require('react');

var TumblrButton = React.createClass({

    propTypes:
    {
        url: React.PropTypes.string,
        title: React.PropTypes.string
    },

    getDefaultProps: function()
    {
        return {
            url: "#",
            title: ""
        };
    },

    render: function()
    {
        return (
            <li><a href={this.props.url} title={this.props.title}><i className="fa fa-tumblr"></i></a></li>
        );
    }
});

module.exports = TumblrButton;
