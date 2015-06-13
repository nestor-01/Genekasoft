var React = require('react');
var Services = require('../../common/constants/services.jsx');

var TextField = require('../../common/widgets/forms/textfield/textfield.jsx');
var Label = require('../../common/widgets/forms/label/label.jsx');
var Authenticated = require('../../common/mixins/authenticated.jsx');

var SignIn = React.createClass({

  getInitialState()
  {
    var _height = 350;
    var _width = 300;
    var _top = ($(window).height()/2) - (_height / 2);
    var _left = ($(window).width()/2) - (_width / 2);

    return {
      _height: _height,
      _width: _width,
      _top: _top,
      _left: _left,
      height: _height + 'px',
      width: _width + 'px',
      top: _top + 'px',
      left: _left + 'px',
      opacity: 0,
      opacityButton: 0,
      errorMessage: ''
    };
  },

  componentDidMount()
  {
    this.props.onInit('signin');

    this.setState({
      opacity: .3
    });

    var buttonTimer = setTimeout(function(){
      this.setState({
        opacityButton: 1
      });
    }.bind(this),380);

    React.findDOMNode(this.refs.userTextfield).focus();
  },

  componentWillUnmount()
  {
    this.replaceState(this.getInitialState());
  },

  render()
  {
    var errorsStyle = {
      fontWeight: '900',
      fontSize: '14px',
      textAlign: 'center',
      textShadow: '0px 0px 2px #fff',
      color: '#C55050'
    };

    var errorInfoStyle;

    if(this.state.errorMessage != '')
      errorInfoStyle = $.extend({display: 'block'}, errorsStyle);
    else
      errorInfoStyle = $.extend({display: 'none'}, errorsStyle);

    return (
      <div className="col-xs-12 col-sm-12 col-md-12" style={{marginTop: '80px'}}>
        <div className="loginForm center-block" ref="loginContainer" style={{height: this.state.height, width: this.state.width, background: 'rgba(255,255,255,'+this.state.opacity+')', opacity: this.state.opacityButton, backgroundColor: "white", borderRadius: "4px" }}>
          <div style={{padding: '20px 20px'}}>
            <h3 style={{color: 'white'}}>Autenticación</h3>
            <br/>
            <span style={{color: 'white'}}>Usuario</span>
            <TextField ref="userTextfield" />

            <br/>
            <br/>

            <span style={{color: 'white'}}>Contraseña</span>
            <TextField type="password" ref="passwordTextField" />

            <br/>
            <div style={errorInfoStyle}>{this.state.errorMessage}</div>
            <br/>

            <button onTouchTap={this.onSignIn} className="btn btn-success col-md-12" style={{width: '100%'}}>Entrar</button>
          </div>
        </div>
        <br/>
      </div>
    );
  },

  onSignIn(e)
  {
    var user = this.refs.userTextfield.getValue();
    var password = this.refs.passwordTextField.getValue();

    if($.trim(user) != '' && $.trim(password) != '') {
      var data = {
        email: user,
        password: password
      };

      $.post(Services.Security.signIn(), data)
        .done(function (response) {
          if(response.status == Services.response.status.OK)
          {
            window.location.replace('#/admin/users');
          }
          else
          {
            this.setState({
              errorMessage: response.message
            });
          }
        }.bind(this))
        .fail(function (response) {
          this.setState({
            errorMessage: response.message
          });
        }.bind(this));
    }

    else
    {
      this.setState({
        errorMessage: 'Faltan datos'
      });
    }
  }
});

module.exports = SignIn;
