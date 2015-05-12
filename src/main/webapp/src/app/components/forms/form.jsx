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
            action: '#'
        };
    },

    render: function()
    {
        return (
            <form ref="form" role="form" method={this.props.method} action={this.props.action} name={this.props.id} id={this.props.id} className="clearfix">
                {this.props.children}
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
    }
});

module.exports = Form;
