var React = require('react');
var Authenticated = require('../authenticated.jsx');
var MapContainer = require('./map.jsx');

var SignUp = React.createClass({

  getInitialState()
  {
    var _height = $(window).height() - 150;
    var _width = 300;
    var _top = ($(window).height()/2) - (_height / 2) - 100;
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
      opacityButton: 0
    };
  },
  
  componentDidMount()
  {
    this.props.onInit('signup');

    this.setState({
      opacity: .3
    });
    
    setTimeout(function(){
      this.setState({
        opacityButton: 1
      });
    }.bind(this),380);

    $(React.findDOMNode(this.refs.newUserForm)).on('submit',
      function(e)
      {
        this.onSignUp(e);
      }.bind(this)
    );

    $('#myForm').validate({
      errorPlacement: function(error, element)
      {
        error.appendTo(element.parent().parent().find(".errorSpace"));
      }
    });

    $('.datepicker').datepicker();
  },
  
  render()
  {
    return (
      <div>
        <div className="hidden-xs col-sm-12 col-md-12 col-lg-12"></div>
        <div className="hidden-xs col-sm-12 col-md-12 col-lg-12"></div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{padding: '40px 0 20px'}}>
          <div className="signupForm col-xs-12 col-sm-11 col-md-11 col-lg-10 center-block" ref="signupContainer" style={{height: '100%', float: 'none', background: 'rgba(255,255,255,'+this.state.opacity+')', opacity: this.state.opacityButton, borderRadius: "4px"}}>
            <div style={{position: 'absolute', top: '-15px', left: '0', borderRadius: '4px 4px 0 0', height: '35px', width: '100%', fontSize: '23px', color: '#45667E'}}>
              <a href="/#/signin"><i className="fa fa-arrow-left" style={{padding: '10px 10px', float: 'left'}}></i></a>
              <h4 style={{fontSize: '23px', padding: '0 0 3px 20px'}}>Registro</h4>
            </div>
            <div style={{height: '100%', paddingTop: '50px'}}>
              <div className="col-md-6">
                <form id="myForm" ref="newUserForm" role="form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-group">
                        <input ref="nameTextField" type="text" className="form-control" id="nameTextField" name="nameTextField" data-validate="required" data-message-required="This is custom message for required field."  placeholder="Nombre" autoComplete="off" required />
                        <div className="input-group-addon">
                          <i className="entypo-user"></i>
                        </div>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group">
                        <input ref="lastnameTextField" type="text" className="form-control" name="lastname"data-validate="required" data-message-required="This is custom message for required field."  placeholder="Apellidos" autoComplete="off" required />
                        <div className="input-group-addon">
                          <i className="entypo-user"></i>
                        </div>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-9">
                      <div className="input-group">
                        <input ref="userTextField" name="userTextField" type="email" className="form-control" name="email" data-validate="required" data-message-required="This is custom message for required field."  placeholder="Email" required />
                        <span className="input-group-addon" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">
                          <i className="entypo-mail"></i>
                        </span>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group">
                        <select ref="genderTextField" className="form-control" name="gender" data-validate="required" data-message-required="This is custom message for required field." placeholder="Gender" required>
                          <option>M</option>
                          <option>F</option>
                        </select>
                        <span className="input-group-addon" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">
                          <i className="entypo-users"></i>
                        </span>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-group">
                        <input ref="birthdateTextField" type="text" className="form-control datepicker" name="birthdate" data-format="dd MM yyyy" data-validate="required" data-message-required="This is custom message for required field." placeholder="Fecha de nacimiento" data-date-format="dd-MM-yyyy" required />
                        <div className="input-group-addon">
                          <i className="entypo-calendar"></i>
                        </div>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group">
                        <input ref="phoneTextField" name="phoneTextField" type="number" ref="phoneTextField" className="form-control" name="phone"data-validate="required" data-message-required="This is custom message for required field." placeholder="Teléfono" autoComplete="off" required />
                        <div className="input-group-addon">
                          <i className="entypo-phone"></i>
                        </div>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <input ref="addressTextField" type="text" className="form-control" name="address"data-validate="required" data-message-required="This is custom message for required field."  placeholder="Dirección" autoComplete="off" required />
                        <div className="input-group-addon">
                          <i className="entypo-address"></i>
                        </div>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-group">
                        <input ref="passwordTextField" type="password" className="form-control" id="password" name="password" data-validate="required" data-message-required="This is custom message for required field." placeholder="Contraseña" required/>
                        <span className="input-group-addon">
                          <i className="entypo-lock"></i>
                        </span>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group">
                        <input ref="password_againTextField" type="password" className="form-control" id="password_again" name="password_again" data-validate="equalTo[#password]"placeholder="Confirmar Contraseña" required />
                        <span className="input-group-addon">
                          <i className="entypo-lock"></i>
                        </span>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="checkbox">
                        <label>
                          <input ref="checkboxTextField" type="checkbox">Deseo recibir noticias y ofertas especiales</input>
                        </label>
                      </div>
                      <span className="errorSpace"></span>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group pull-right">
                        <button type="submit" className="btn btn-success" name="registrarse">Registrarse</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xs-12 col-md-6 pull-right" style={{height: 'calc(100vh - 338px)'}}>
                <MapContainer onLoadAddress={this._onLoadAddress} />
              </div>
            </div>
            <div style={{clear: 'both'}}></div>
          </div>
        </div>
      </div>
    );
  },

  _onLoadAddress(address)
  {
    $(React.findDOMNode(this.refs.addressTextField)).val(address);
  },

  onSignUp(e)
  {
    e.preventDefault();
    e.stopPropagation();

    var name = $(React.findDOMNode(this.refs.nameTextField)).val(); //
    var lastname = $(React.findDOMNode(this.refs.lastnameTextField)).val();
    var user = $(React.findDOMNode(this.refs.userTextField)).val();
    var gender = $(React.findDOMNode(this.refs.genderTextField)).val();
    var address = $(React.findDOMNode(this.refs.addressTextField)).val();
    var phone = $(React.findDOMNode(this.refs.phoneTextField)).val();
    var birthdate = $(React.findDOMNode(this.refs.birthdateTextField)).val();
    var groupId = $(React.findDOMNode(this.refs.groupIdTextField)).val();
    var password = $(React.findDOMNode(this.refs.passwordTextField)).val();
    var password_again = $(React.findDOMNode(this.refs.password_againTextField)).val();
    var checkbox= $(React.findDOMNode(this.refs.checkboxTextField)).val();

    var data = {
      id: Math.floor((Math.random() * 1000) + 1), // tmp
      name: name,
      lastname: lastname,
      email: user,
      gender: gender,
      address: address,
      phone: phone,
      datoOfBirth: birthdate,
      groupId: 1, //
      password: password,
      checkbox: checkbox
    };

    console.log(data);

    if($(React.findDOMNode(this.refs.newUserForm)).valid() &&
    password == password_again)
    {
      $.ajax({
        type: "post",
        url: '/geneka/api/user/saveUser',
        contentType: "application/json",
        data: JSON.stringify(data)
      })
        .done(function (response) {
          console.log(response);
          $('#myForm').trigger("reset");
        })
        .fail(function (error) {
          console.log(error);
        }.bind(this));
    }
    else{
      console.log('no valid');
    }
  }
});

module.exports = SignUp;