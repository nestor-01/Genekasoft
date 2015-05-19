var React = require('react');

var Footer = React.createClass({

    propTypes: {
        copyright: React.PropTypes.string
    },

    getDefaultProps: function()
    {
        return {
            copyright: "Todos los derechos reservados - Copyright © " + new Date().getFullYear()
        };
    },

    render: function()
    {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a className="scrollup" href="#" title=""><i className="fa fa-angle-up"></i></a>
                            <p>{this.props.copyright}</p>
                        </div>
                    </div> {/* .row End */}
                </div> {/* .container End */}
            </footer>
        );
    }
});

module.exports = Footer;