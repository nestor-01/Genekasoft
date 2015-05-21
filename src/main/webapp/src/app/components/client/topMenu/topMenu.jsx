var React = require('react');

var TopMenu = React.createClass({

    propTypes:
    {
        items: React.PropTypes.array
    },

    getDefaultProps: function()
    {
        return {
          items: []
        };
    },

    render: function()
    {
        return (
            <div className="nav">
                <nav className="navbar navbar-default" role="navigation">

                    {/* Mobile Button */}
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <ul className="collapse navbar-collapse navbar-ex1-collapse">
                        {this._getMenuItems()}
                    </ul>
                </nav>
            </div>
        );
    },

    _getMenuItems: function()
    {
        return this.props.items.map(function(item, index)
        {
            var icon,
                link;
            
            if(item.icon)
            {
                icon = <i className={item.icon}></i>;
            }
            
            if(item.section)
            {
                link = <a data-scroll-nav={item.section} title="" onTouchTap={item.onClick}>{item.text} {icon}</a>;
            }
            
            else
            {
                link = <a href={item.url} title="" onTouchTap={item.onClick}>{item.text} {icon}</a>;
            }
            
            
            return (
                <li key={index} className={(item.hightlighted) ? 'download-btn' : ''}>
                    {link}
                </li>
            );
        });
    }
});

module.exports = TopMenu;

