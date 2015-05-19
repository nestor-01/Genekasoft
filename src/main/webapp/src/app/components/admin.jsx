var React = require('react');
var TopMenu = require('./topMenu.jsx');
var Icons = require('./media/icons.jsx');
var Particles = require('./miscellaneous/particles.jsx');
var Events = require('./events.jsx');

var Router = require('react-router'),
DefaultRoute = Router.DefaultRoute,
Route = Router.Route,
RouteHandler = Router.RouteHandler;

var Admin = React.createClass({

  getDefaultProps()
  {
    return {
      onInit: function(){}
    };
  },

  componentDidMount()
  {
    $('.menu').on('click', function(){
      if ($('.l-site').hasClass('is-open')) {
        $('.menu').removeClass('is-active');
        $('.l-site').removeClass('is-open');
      } else {
        $('.menu').addClass('is-active');
        $('.l-site').addClass('is-open');
      }
    });


    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    /*$('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
    });*/

    this.refs.particlesEffect.setSize('100%');
  },

  render()
  {
    return ( 
      <div id="admin" className="l-site" style={{height: '100%', color: '#686969', fontWeight: '300'}}>
        <div className="l-nav" style={{color: 'white'}}>
          <Particles ref="particlesEffect" percentage={true} />
          <div id="userInfo" style={{height: '120px', width: '100%', bottom: '0', padding: '30px 20px', position: 'absolute', top: '0', boxShadow: '-1px 15px 12px -14px rgba(0, 0, 0, 0.17)', background: 'rgba(84, 136, 163, 0.5)'}}>
            <div id="userPhoto" style={{borderRadius: '50%', backgroundColor: 'white', height: '60px', width: '60px', float: 'left', boxShadow: '0px 1px 6px 0px #423312', backgroundImage: 'url(img/bg/testi.jpg)', backgroundSize: '60px'}}></div>
            <div id="name" style={{padding: '20px 15px 12px 75px', height: '60px', fontSize: '13px', fontWeight: 'bold', textShadow: '1px 1px 1px #594219'}}>John Henderson</div>
          </div>
          <div className="tree" style={{zIndex: '0', height: 'calc(100% - 140px)', overflowY: 'auto', position: 'absolute', top: '120px', width: '100%', paddingTop: '20px'}}>
            <ul>
              <li className="parent_li">
                <span><i className="glyphicon glyphicon-dashboard"></i><a href="#/admin">Dashboard</a></span>
              </li>
              <br />
              <li>
                <span><i className="glyphicon glyphicon-user"></i><a href="#/admin/users">Usuarios</a></span>
                <ul>
                  <li>
                    <span><i className="glyphicon glyphicon-plus"></i><a>Nuevo Usuario</a></span>
                  </li>
                  <li>
                    <span><i className="glyphicon glyphicon-stats"></i><a>Estadísticas</a></span>
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <span><i className="glyphicon glyphicon-th"></i><a href="#/admin/products">Productos</a></span>
                <ul>
                  <li>
                    <span><i className="glyphicon glyphicon-plus"></i><a>Nuevo Producto</a></span>
                  </li>
                  <li>
                    <span><i className="glyphicon glyphicon-stats"></i><a>Estadísticas</a></span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="l-page" style={{height: '100%', overflowY: 'auto', background: '#f1f1f1'}}>
          <div id="admin-toolbar" style={{padding: '10px', height: '60px'}}>
            <div>
              <div style={{width: 'calc(100% - 55px)', float: 'left'}}>
                <ol className="breadcrumb">
                  <li>
                    <div className="menu">
                      <div className="menu-hamburger"></div>
                    </div>
                  </li>
                  <li><a href="#">Gestión</a></li>
                  <li><a href="#">Usuarios</a></li>
                  <li className="active">Nuevo Usuario</li>
                </ol>
              </div>
              <div style={{width: '40px', float: 'right'}}>
                <button className="btn btn-info" style={{width: '40px'}}><i className="glyphicon glyphicon-off"></i></button>
              </div>
            </div>
          </div>
          <hr style={{marginBottom: '17px', border: '0', borderTop: '1px solid #eeeeee', marginTop: '6px'}} />
          <section className="band band-a">
            <div className="band-container">
              <RouteHandler onInit={this._onChangeView} onEvent={this._viewEventsHandler} />
            </div>
          </section>
        </div>
      </div>
    );
  },
  
  _onChangeView(item)
  {
    
  },

  _viewEventsHandler(event, params)
  {
    if(event === Events.onDragStart)
    {
      this.refs.particlesEffect.pause();
    }

    if(event === Events.onDragEnd)
    {
      this.refs.particlesEffect.start();
    }
  }
});
module.exports = Admin;