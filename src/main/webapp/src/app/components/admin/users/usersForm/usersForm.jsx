var React = require('react');
var UserFormStyles = require('./usersFormStyles.jsx');

var MapContainer = require('../../../common/widgets/map/map.jsx');
var Events = require('../../../common/constants/events.jsx');

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
    
    /*setTimeout(function(){
      this.setState({
        opacityButton: 1
      });
    }.bind(this),380);*/

    $(React.findDOMNode(this.refs.signUpButton)).on('click',
      function(e)
      {
        this.onSignUp(e);
      }.bind(this)
    );

    $('#myForm').validate({
      errorPlacement: function(error, element)
      {
        console.log(error);

        element.parent().parent().addClass('has-error');

        error.css(UserFormStyles.errorField);
        error.insertAfter(element);
      }
    });

    $('.datepicker').datepicker();
  },
  
  render()
  {
    return (
      <div>
        <div className="col-md-12" style={{paddingRight: '0'}}>
          <div className="col-md-8 col-xs-6">
            <h4><i className="glyphicon glyphicon-user" /> Nuevo Usuario</h4>
          </div>
          <div className="col-md-4 col-xs-6" style={{textAlign: 'right', right: '50px'}}>
            <div className="btn-group" role="group" aria-label="...">
              <button onTouchTap={this.onSignUp} type="button" className="btn btn-default"><i className="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
              <button type="button" className="btn"><i className="glyphicon glyphicon-floppy-disk"></i> Limpiar</button>
            </div>
          </div>
        </div>
        <br /><br />
        <div style={{height: '100%', padding: '40px 50px 0 25px'}}>
          <div className="col-md-6">
            <form className="form-horizontal" id="myForm" ref="newUserForm" role="form">
              <div className="form-group">
                <label for="inputEmail3" className="col-sm-3 control-label">Nombre</label>
                <div className="col-sm-8">
                  <input ref="nameTextField" type="text" className="form-control" id="nameTextField" name="nameTextField" data-validate="required" data-message-required="This is custom message for required field."  placeholder="Nombre" autoComplete="off" required />
                </div>
              </div>
              <div className="form-group">
                <label for="lastname" className="col-sm-3 control-label">Apellidos</label>
                <div className="col-sm-8">
                  <input ref="lastnameTextField" type="text" className="form-control" name="lastname"data-validate="required" data-message-required="This is custom message for required field."  placeholder="Apellidos" autoComplete="off" required />
                </div>
              </div>
              <div className="form-group">
                <label for="email" className="col-sm-3 control-label">Correo</label>
                <div className="col-sm-8">
                  <input ref="userTextField" name="userTextField" type="email" className="form-control" name="email" data-validate="required" data-message-required="This is custom message for required field."  placeholder="Email" required />
                </div>
              </div>
              <div className="form-group">
                <label for="gender" className="col-sm-3 control-label">Género</label>
                <div className="col-sm-8">
                  <div className="radio">
                    <label style={{paddingRight: '20px'}}>
                      <input ref="genderTextFieldM" type="radio" name="genderTextField" id="genderTextFieldM" value="M" /> Masculino
                    </label>
                    <label>
                      <input ref="genderTextFieldF" type="radio" name="genderTextField" id="genderTextFieldF" value="F" /> Femenino
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="birthdate" className="col-sm-3 control-label">Cumpleaños</label>
                <div className="col-sm-8">
                  <input ref="birthdateTextField" type="text" className="form-control datepicker" name="birthdate" data-format="dd MM yyyy" data-validate="required" data-message-required="This is custom message for required field." placeholder="Fecha de nacimiento" data-date-format="dd-MM-yyyy" required />
                </div>
              </div>
              <div className="form-group">
                <label for="phoneTextField" className="col-sm-3 control-label">Teléfono</label>
                <div className="col-sm-8">
                  <input ref="phoneTextField" name="phoneTextField" type="number" ref="phoneTextField" className="form-control" name="phone"data-validate="required" data-message-required="This is custom message for required field." placeholder="Teléfono" autoComplete="off" required />
                </div>
              </div>
              <div className="form-group">
                <label for="address" className="col-sm-3 control-label">Dirección</label>
                <div className="col-sm-8">
                  <input ref="addressTextField" type="text" className="form-control" name="address"data-validate="required" data-message-required="This is custom message for required field."  placeholder="Dirección" autoComplete="off" required />
                </div>
              </div>
              <br />
              <div className="form-group">
                <label for="password" className="col-sm-3 control-label">Contraseña</label>
                <div className="col-sm-8">
                  <input ref="passwordTextField" type="password" className="form-control" id="password" placeholder="Contraseña" required />
                </div>
              </div>
              <div className="form-group">
                <label for="password_again" className="col-sm-3 control-label">Confirmar Contraseña</label>
                <div className="col-sm-8">
                  <input ref="password_againTextField" type="password" className="form-control" id="password_again" name="password_again" data-validate="equalTo[#password]"placeholder="Confirmar Contraseña" required />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Deseo recibir noticias y ofertas especiales
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-md-6 pull-right" style={{height: '100%'}}>
            <div id="userPictureUpload" style={{width: '100%', height: '100px', borderRadius: '4px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)'}}>
              <div style={{width: '100px', height: '100%', float: 'left'}}>
                <div id="userPhoto" style={{position: 'relative', left: '20px', top: '20px', borderRadius: '50%', backgroundColor: 'white', height: '60px', width: '60px', float: 'left', boxShadow: '0px 0px 4px 0px #383838', backgroundImage: 'url(img/bg/testi.jpg)', backgroundSize: '60px'}}></div>
              </div>
              <div id="messageToUploadPicture" style={{float: 'left', width: 'calc(100% - 100px)', color: 'rgb(132,132,132)', fontSize: '10px', height: '100%', padding: '23px 0'}}>
                <h5 className="col-md-12" style={{fontSize: '13px', padding: '0', marginBottom: '6px'}}>Arrastra la foto aquí o haz click para cargarla</h5>
                <h6 style={{fontSize: '11px', color: '#A5A5A5', fontWeight: '300', marginTop: '-4px'}}>La foto no debe pesar más de 1 MB</h6>
              </div>
            </div>
            <br/>
            <div style={{width: '100%', height: 'calc(100vh - 365px)', minHeight: '365px'}}>
              <MapContainer onLoadAddress={this._onLoadAddress} onDragStart={this._onDragStartMap} onDragEnd={this._onDragEndMap} />
            </div>
          </div>
        </div>
      </div>
    );
  },

  _onLoadAddress(address)
  {
    $(React.findDOMNode(this.refs.addressTextField)).val(address);
  },

  _onDragStartMap()
  {
    if(this.props.onEvent)
      this.props.onEvent(Events.onDragStart, null);
  },

  _onDragEndMap()
  {
    if(this.props.onEvent)
      this.props.onEvent(Events.onDragEnd, null);
  },

  onSignUp(e)
  {
    var name = $(React.findDOMNode(this.refs.nameTextField)).val();
    var lastname = $(React.findDOMNode(this.refs.lastnameTextField)).val();
    var user = $(React.findDOMNode(this.refs.userTextField)).val();
    var genderM = $(React.findDOMNode(this.refs.genderTextFieldM)).is(':checked');
    var genderF = $(React.findDOMNode(this.refs.genderTextFieldF)).is(':checked');
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
      gender: (genderM) ? 'M' : 'F',
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