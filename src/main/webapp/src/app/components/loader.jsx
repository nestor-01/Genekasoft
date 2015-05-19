var React = require('react');

var Loader = React.createClass({

    componentDidMount: function()
    {
        /*$(window).load(function() {
            $(React.findDOMNode(this.refs.loadWrapper)).delay(450).fadeOut();
            $(React.findDOMNode(this.refs.loader)).delay(750).fadeOut('slow');
        }.bind(this));*/
    },

    render: function()
    {
        return (
            <div ref="loadWrapper" id="loader-wrapper">
                <div ref="loader" id="loader"></div>
            </div>
        );
    }
});

module.exports = Loader;

