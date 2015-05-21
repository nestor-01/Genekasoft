var React = require('react');
var TopMenu = require('./../topMenu/topMenu.jsx');
var Icons = require('../../common/constants/icons.jsx');

var TopBar = React.createClass({

  propTypes: {
    sticky: React.PropTypes.bool
  },

  getDefaultProps()
  {
    return {
      sticky: false
    };
  },

  render()
  {
    return (
      <div className={ (this.props.sticky) ? "top-bar" : "top-bar slidedown"}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              {/* Logo */}
              <div className="logo">
                <a title="" href="#">
                  <span key="group" style={{fontSize: '35px', paddingTop: '5px'}}>Group</span>
                  <span key="native" style={{fontSize: '25px', position: 'relative', top: '-3px'}}> Native</span>
                  <span key="digital" style={{fontSize: '18px', position: 'relative', top: '-5px'}}> Digital</span>
                </a>
              </div>

              <TopMenu items={[
                {
                  url: "#/",
                  text: "Inicio",
                  onClick: function(e)
                  {
                    //this.props.onSelectMenu(e, this);
                  }.bind(this)
                },
                {
                  section: "1",
                  text: "Galería"
                },
                {
                  section: "2",
                  text: "Suscripciones"
                },
                {
                  section: "3",
                  text: "Contacto"
                },
                {
                  text: "Ingresar",
                  url: "#/signin",
                  hightlighted: true,
                  icon: Icons.user,
                  onClick: function(e)
                  {
                    //this.props.onSelectMenu(e, "ingresar");
                  }.bind(this)
                }
              ]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TopBar;