var React = require('react');

var Submit = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        label: React.PropTypes.string
    },

    getDefaultProps: function()
    {
        return {
            id: "submit-x",
            label: ""
        };
    },

    render: function()
    {
        return (
            <input type="submit" value={this.props.label} name={this.props.id} className="submit" id={this.props.id} />
        );
    }
});

module.exports = Submit;
