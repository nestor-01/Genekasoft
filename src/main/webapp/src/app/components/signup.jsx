var React = require('react');
var Authenticated = require('../authenticated.jsx');

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
    
    var buttonTimer = setTimeout(function(){
      this.setState({
        opacityButton: 1
      });
    }.bind(this),380);
    
    var map;
      var latlng = new google.maps.LatLng(-34.397, 150.644);
      var mapOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    //React.findDOMNode(this.refs.userTextfield).focus();
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
              <form id="myform" role="form"  method="post" className="validate">
                <div className="row">
                <br/>
                  <div className="col-md-10">
                    <div className="input-group">
                      <input type="text" className="form-control" name="username" data-validate="required"  placeholder="Username" />
                      <div className="input-group-addon" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="It's so simple to create a tooltop for my website!" data-original-title="Digite un username valido">
                        <i className="entypo-user"></i>
                      </div>
                    </div>
                    <br />
                    <div className="input-group">
                      <input type="email" className="form-control" name="email" data-validate="required" data-message-required="This is custom message for required field."  placeholder="Email" />
                      <span className="input-group-addon" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">
                        <i className="entypo-mail"></i>
                      </span>
                    </div>        
                    <br />
                    <div className="input-group">
                      <input type="password" className="form-control" id="password" name="password" data-validate="required" data-message-required="This is custom message for required field." placeholder="Contraseña"/>
                      <span className="input-group-addon">
                        <i className="entypo-lock"></i>
                      </span>
                    </div>
                    <br />
                    <div className="input-group">
                      <input type="password" className="form-control" id="password_again" name="password_again" data-validate="equalTo[#password]"placeholder="Confirmar Contraseña" />
                      <span className="input-group-addon">
                        <i className="entypo-lock"></i>
                      </span>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="input-group">
                      <input type="text" className="form-control" name="name"data-validate="required" data-message-required="This is custom message for required field."  placeholder="Nombre" autocomplete="off" />
                      <div className="input-group-addon">
                        <i className="entypo-user"></i>
                      </div>
                    </div>
                    <br />
                    <div className="input-group">
                      <input type="date" className="form-control datepicker" data-format="dd MM yyyy" name="fechanacimiento"data-validate="required" data-message-required="This is custom message for required field." placeholder="Fecha de nacimiento"/>
                      <div className="input-group-addon">
                        <a href="#">
                          <i className="entypo-calendar"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                      <input type="text" className="form-control" name="apellido"data-validate="required" data-message-required="This is custom message for required field."  placeholder="Apellido" autocomplete="off" />
                      <div className="input-group-addon">
                        <i className="entypo-user"></i>
                      </div>
                    </div>
                    <br />
                    <div className="input-group">       
                      <input type="text" className="form-control" name="phone" data-validate="required" data-message-required="This is custom message for required field."  placeholder="Telefono" data-mask="phone" autocomplete="off" />
                      <div className="input-group-addon">
                        <i className="entypo-phone"></i>
                      </div>
                    </div>
                  </div>  
                </div>
                <br />
                <div className="checkbox">
                  <label>
                    <input type="checkbox">Deseo recibir noticias y ofertas especiales</input>
                  </label>
                </div>
                <br />
                <div className="form-group text-left">
                  <button type="submit" className="btn btn-success" name="registrarse">Registrarse</button>
                </div>
              </form>
            </div>
            <div className="col-md-6" style={{height: 'calc(100vh - 338px)'}}>
              <div className="col-md-12" style={{height: '100%', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '4px', boxShadow: '0px 1px 5px 1px #45667E', padding: '5px'}}>
                <div id="map-canvas" className="col-md-12" style={{height: '100%', borderRadius: '4px'}}></div>
              </div>
            </div>
          </div>
          <div style={{clear: 'both'}}></div>
        </div>
      </div>
      </div>
    );
  }
});

module.exports = SignUp;