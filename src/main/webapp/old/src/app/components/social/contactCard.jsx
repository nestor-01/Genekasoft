var React = require('react');

var ContactCard = React.createClass({

    propTypes:
    {
        location: React.PropTypes.shape({
            address: React.PropTypes.string.isRequired,
            city: React.PropTypes.string.isRequired,
            country: React.PropTypes.string.isRequired
        }),
        phones: React.PropTypes.array.isRequired,
        emails: React.PropTypes.array.isRequired
    },

    render: function()
    {
        return (
            <ul className="fast-contact">
                <li>
                    <i className="fa fa-building-o"></i>
                    {this.props.location.address}<br/>
                    {this.props.location.city}<br/>
                    {this.props.location.country}
                </li>
                <li>
                    <i className="fa fa-phone"></i>
                    {this._getPhonesElements()}
                </li>
                <li>
                    <i className="fa fa-envelope"></i>
                    {this._getEmailsElements()}
                </li>
            </ul>
        );
    },

    _getPhonesElements: function()
    {
        return this.props.phones.map(function(phone, index){
           return (
            <span key={index}>{phone} <br/></span>
           );
        });
    },

    _getEmailsElements: function()
    {
        return this.props.emails.map(function(email, index){
            return (
                <a key={index} href={"mailto:" + email} title="">{email}</a>
            );
        });
    }
});

module.exports = ContactCard;
