var React = require('react');

var TextField = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        placeholder: React.PropTypes.string
    },

    getDefaultProps: function()
    {
        return {
            id: "textfield-x",
            placeholder: ""
        };
    },

    render: function()
    {
        return (
            <input type="text" name={this.props.id} id={this.props.id} className="input-field form-control" placeholder={this.props.placeholder} />
        );
    }
});

module.exports = TextField;