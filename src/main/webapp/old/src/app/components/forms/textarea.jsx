var React = require('react');

var TextArea = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        placeholder: React.PropTypes.string
    },

    getDefaultProps: function()
    {
        return {
            id: "textarea-x",
            placeholder: ""
        };
    },

    render: function()
    {
        return (
            <textarea name={this.props.id} id={this.props.id} className="input-field form-control" placeholder={this.props.placeholder}></textarea>
        );
    }
});

module.exports = TextArea;
