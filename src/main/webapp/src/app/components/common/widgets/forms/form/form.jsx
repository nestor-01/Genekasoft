var React = require('react');

var Form = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        nomethod: React.PropTypes.bool,
        method: React.PropTypes.oneOf(['post', 'get', '']),
        action: React.PropTypes.string
    },

    getDefaultProps: function()
    {
        return {
            id: 'form-x',
            method: '',
            action: '#',
            direction: ''
        };
    },

    getInitialState() {
        return {
            errorElements: {}
        };
    },

    componentDidMount() {
        $(React.findDOMNode(this.refs.form)).validate({
          errorPlacement: function(errorElement, field)
          {
            this.state.errorElements[field.attr('id')] = errorElement;
            this.forceUpdate();
          }.bind(this)
        });
    },

    render: function()
    {
        this.fields = {};
        var direction = (this.props.direction == 'left') ? 'form-horizontal' : '';

        var processFields = function()
        {
            return React.Children.map(this.props.children, function(field, index) {
                return (this.state.errorElements[field.ref]) ? 
                    React.cloneElement(field, {errorElement: this.state.errorElements[field.ref]}) :
                    React.cloneElement(field);
            }.bind(this));
        }.bind(this);

        return (
            <form ref="form" role="form" method={this.props.method} action={this.props.action} name={this.props.id} id={this.props.id} className={"clearfix " + direction}>
                {processFields()}
            </form>
        );
    },

    setUpMailChimp: function(options)
    {
        $(this.refs.form.getDOMNode()).ajaxChimp({
            callback: function(resp) {
                if (resp.result === 'success')
                    options.done();
                else
                    options.fail();
            },
            url: options.url
        });
    },
    
    componentWillUnmout: function()
    {
        $(this.refs.form.getDOMNode()).off();
    },

    isValid()
    {
        return $(React.findDOMNode(this.refs.form)).valid();
    },

    reset()
    {
        $(React.findDOMNode(this.refs.form)).trigger('reset');
    }
});

module.exports = Form;
