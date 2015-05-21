var React = require('react');

var TextField = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        type: React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            id: "textfield-x",
            placeholder: "",
            type: "text"
        };
    },

    render()
    {
        return (
            <input ref="textfield" type={this.props.type} name={this.props.id} id={this.props.id} className="input-field form-control" placeholder={this.props.placeholder} />
        );
    },

    getValue()
    {
      return $(React.findDOMNode(this.refs.textfield)).val();
    }
});

module.exports = TextField;