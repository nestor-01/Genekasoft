var React = require('react');

var EmailField = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        placeholder: React.PropTypes.string
    },

    getDefaultProps: function()
    {
        return {
            id: "emailfield-x",
            placeholder: ""
        };
    },

    getInitialState: function()
    {
        return{
            style: ''
        };
    },

    render: function()
    {
        return (
            <input type="email" name={this.props.id} id={this.props.id} className={"input-field form-control " + this.state.style} placeholder={this.props.placeholder} style={this.props.style} />
        );
    },

    setStyle: function(style)
    {
        this.setState({
            style: style
        });
    }
});

module.exports = EmailField;