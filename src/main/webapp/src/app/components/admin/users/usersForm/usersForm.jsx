var React = require('react');
var Services = require('../../../common/constants/services.jsx');
var UserFormStyles = require('./usersFormStyles.jsx');

var Form = require('../../../common/widgets/forms/form/form.jsx');
var TextField = require('../../../common/widgets/forms/textfield/textfield.jsx');
var MapContainer = require('../../../common/widgets/map/map.jsx');
var CheckBox = require('../../../common/widgets/forms/checkbox/checkbox.jsx');
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

    //$('.datepicker').datepicker();
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
              <button ref="myButton" onTouchTap={this.onSignUp} type="button" className="btn btn-default"><i className="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
              <button type="button" className="btn"><i className="glyphicon glyphicon-floppy-disk"></i> Limpiar</button>
            </div>
          </div>
        </div>
        <br /><br />
        <div style={{height: '100%', padding: '40px 50px 0 25px'}}>
          <div className="col-md-6">
            <Form ref="newUserForm" direction="left">
              <TextField ref="name" id="name" label="Nombre" labelType="left" placeholder="Nombres" />
              <TextField ref="lastName" id="lastName" label="Apellidos" labelType="left" placeholder="Apellidos" />
              <TextField ref="email" id="email" label="Correo" labelType="left" type="email" placeholder="Correo" />
              <div className="form-group">
                <label htmlFor="gender" className="col-sm-3 control-label">Género</label>
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
              <TextField ref="birthDate" id="birthDate" label="Cumpleaños" labelType="left" placeholder="Fecha de nacmiento" className="datepicker" dateFormat="yyyy-mm-dd" />
              <TextField ref="phone" id="phone" label="Teléfono" labelType="left" placeholder="Teléfono" />
              <TextField ref="address" id="address" label="Dirección" labelType="left" placeholder="Dirección" />
              <TextField ref="password" id="password" label="Contraseña" labelType="left" type="password" placeholder="Contraseña" />
              <TextField ref="passwordConfirm" id="passwordConfirm" label="Confirmar Contraseña" labelType="left" type="password" placeholder="Confirmar contraseña" />
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Deseo recibir noticias y ofertas especiales
                    </label>
                  </div>
                </div>
              </div>
            </Form>
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
    this.refs.address.setValue(address);
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
    var name = this.refs.name.getValue();
    var lastName = this.refs.lastName.getValue();
    var email = this.refs.email.getValue();
    
    var genderM = $(React.findDOMNode(this.refs.genderTextFieldM)).is(':checked');
    var genderF = $(React.findDOMNode(this.refs.genderTextFieldF)).is(':checked');

    var address = this.refs.address.getValue();
    var phone = this.refs.phone.getValue();
    var birthDate = this.refs.birthDate.getValue();
    var password = this.refs.password.getValue();
    var passwordConfirm = this.refs.passwordConfirm.getValue();

    var checkbox= $(React.findDOMNode(this.refs.checkboxTextField)).val();

    var data = {
      id: Math.floor((Math.random() * 1000) + 1),
      name: name,
      lastName: lastName,
      email: email,
      gender: (genderM) ? 'M' : 'F',
      address: address,
      phone: phone,
      dateOfBirth: birthDate,
      groupId: 1,
      password: password
    };

    if(this.refs.newUserForm.isValid() && password == passwordConfirm)
    {
      $.ajax({
        type: "post",
        url: Services.Users.saveUser(),
        contentType: "application/json",
        data: JSON.stringify(data)
      })
      .done(function (response) {
        window.notify.info('El usuario fue guardado con éxito');
        this.refs.newUserForm.reset();
      }.bind(this))
      .fail(function (error) {
        window.notify.info(Services.request[error.status]);
      }.bind(this));
    }
  }
});

module.exports = SignUp;