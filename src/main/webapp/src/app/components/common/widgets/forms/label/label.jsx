var React = require('react');

var Label = React.createClass({

    getInitialState: function()
    {
        return {
            message: "",
            style: ''
        };
    },

    render: function()
    {
        return (
            <label id={this.props.id} className={"subscribe-message " + this.state.style}>{this.state.message}</label>
        );
    },

    setMessage: function(message)
    {
        this.setState({
            message: message
        });
    },

    setStyle: function(style)
    {
        this.setState({
            style: style
        });
    }
});

module.exports = Label;