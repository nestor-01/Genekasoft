var React = require('react');

var TextField = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        placeholder: React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            id: "textfield-x",
            placeholder: ""
        };
    },

    render()
    {
        return (
            <input ref="textfield" type="text" name={this.props.id} id={this.props.id} className="input-field form-control" placeholder={this.props.placeholder} />
        );
    },

    getValue()
    {
      return $(React.findDOMNode(this.refs.textfield)).val();
    }
});

module.exports = TextField;