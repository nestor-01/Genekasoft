var React = require('react');
var TextFieldStyles = require('./textFieldStyles.jsx');

var TextField = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        type: React.PropTypes.string
    },

    labelTypes:
    {
        none: 'none',
        left: 'left',
        top: 'top'
    },

    getDefaultProps()
    {
        return {
            placeholder: "",
            type: "text",
            labelType: 'none'
        };
    },

    getInitialState() {
        return {
            value: '',
            defaultValue: ''
        };
    },

    componentDidUpdate()
    {
        if(this.props.errorElement)
        {
            this.markWithError(this.props.errorElement);
        }
    },

    render()
    {
        var element;
        var id = this.props.id;

        if(this.props.labelType == this.labelTypes.none)
        {
            element = (
                <div>
                    <input
                        key="textfield"
                        ref="textfield"
                        id="textfield" 
                        style={(this.props.errorState) ? TextFieldStyles.error : {}} 
                        onChange={this._onChangeValue} 
                        type={this.props.type} 
                        name={this.props.id} 
                        className={"form-control " + this.props.className} 
                        placeholder={this.props.placeholder} 
                        defaultValue={this.state.defaultValue} 
                        value={this.state.value} 
                        data-date-format={this.props.dateFormat} 
                        required />
                </div>
            );
        }

        else if(this.props.labelType == this.labelTypes.left)
        {
            element = (
                <div className={"form-group " + ((this.props.errorState) ? 'has-error' : '')}>
                  <label htmlFor={this.props.label} className="col-sm-3 control-label">{this.props.label}</label>
                  <div className={"col-sm-8 " + ((this.props.errorState) ? 'has-error' : '')}>
                    <input 
                        key="textfield"
                        ref="textfield" 
                        id={id} 
                        onChange={this._onChangeValue} 
                        type={this.props.type} 
                        className={"form-control " + this.props.className} 
                        name={this.props.label} 
                        data-validate="required" 
                        data-message-required="Este campo es requerido." 
                        placeholder={this.props.placeholder} 
                        autoComplete="off" 
                        defaultValue={this.state.defaultValue} 
                        value={this.state.value} 
                        data-date-format={this.props.dateFormat} 
                        required />
                  </div>
                </div>
            );
        }

        else if(this.props.labelType == this.labelTypes.top)
        {
            element = (
                <div className="form-group">
                    <label htmlFor={this.props.label}>{this.props.label}</label>
                    <input 
                        key="textfield"
                        ref="textfield" 
                        id={id} 
                        onChange={this._onChangeValue} 
                        type={this.props.type} 
                        name={this.props.label} 
                        className={"form-control " + this.props.className} 
                        data-validate="required" 
                        data-message-required="Este campo es requerido." 
                        placeholder={this.props.placeholder} 
                        defaultValue={this.state.defaultValue} 
                        value={this.state.value} 
                        data-date-format={this.props.dateFormat} 
                        required />
                </div>
            );
        }

        return element;
    },

    _onChangeValue(e)
    {
        this.setState({value: e.target.value});
    },

    markWithError(errorElement)
    {
        var $textfield = $(React.findDOMNode(this.refs.textfield));

        $textfield.parent().addClass('has-error');
        $textfield.parent().parent().addClass('has-error');

        errorElement.css(TextFieldStyles.error);
        errorElement.insertAfter($textfield);
    },

    getValue()
    {
      return this.state.value;
    },

    setValue(value)
    {
        this.setState({
            value: value
        });
    }
});

module.exports = TextField;