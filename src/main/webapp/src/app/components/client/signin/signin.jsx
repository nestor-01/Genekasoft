var React = require('react');
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
      missingInfo: 'none',
      invalidInfo: 'none'
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
      color: '#C55050',
      //paddingBottom: '5px'
    };

    var missingInfoStyle = $.extend({display: this.state.missingInfo}, errorsStyle);
    var invalidInfoStyle = $.extend({display: this.state.invalidInfo}, errorsStyle);

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
            <div style={missingInfoStyle}>{"Faltan datos"}</div>
            <div style={invalidInfoStyle}>{"Usuario o contraseña incorrecta"}</div>
            <br/>

            <button onTouchTap={this.onSignIn} className="btn btn-success col-md-12" style={{width: '100%'}}>Entrar</button>
          </div>
        </div>
        <br/>
        {/*<div className="transition" style={{textAlign: 'center', opacity: this.state.opacityButton}}>
          <a href="#/signup" style={{color: 'white', fontWeight: '500', fontSize: '12px'}}>{"¿No tienes una cuenta?"}</a>
        </div>*/}
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

      $.post('http://localhost:8080/geneka/api/user/loginUser', data)
        .done(function (response) {
          window.location.replace('#/admin/users');
        })
        .fail(function (error) {
          this.setState({
            invalidInfo: 'block',
            missingInfo: 'none'
          });
        }.bind(this));
    }

    else
    {
      this.setState({
        missingInfo: 'block',
        invalidInfo: 'none'
      });
    }
  }
});

module.exports = SignIn;
