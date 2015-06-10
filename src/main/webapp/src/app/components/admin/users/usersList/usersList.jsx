var React = require('react');



var Users = React.createClass({

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


  $(document).ready(function(){

     $("#mytable tbody").on('change','input:checkbox', function (e) {

          if (!$(e.currentTarget).is(':checked')) {

              console.log(!$(e.currentTarget).is(':checked'))

          }
          else if($(e.currentTarget).is(':checked')){

              console.log(!$(e.currentTarget).is(':checked'))
          }
      });


      $("#mytable tbody").on("button: click", "button", function(event){
          $(this).parent().remove();
      });

  });


  console.log("test1");

  $.get('/geneka/api/user/getAllUsers')
      .done(function (response) {
        console.log("test2");
        var users = JSON.parse(response);
        console.log(users)


          $.each(users, function (index, user){
              var $tr = $('<tr/>');
              var $td_c = $('<td/>').appendTo($tr);
              $('<input  id="toggle-event"  checked type="checkbox"  data-toggle="toggle" data-size="mini" data-onstyle="primary" data-offstyle="danger" data-on="on" data-off="off"  />', {type: "checkbox"}).appendTo($td_c).bootstrapToggle();
              $('<td/>', {text: user.name, className: "myName"}).appendTo($tr);
              $('<td/>', {text: user.lastName, className: "myLastname"}).appendTo($tr);
              $('<td/>', {text: user.email, className: "myEmail"}).appendTo($tr);
              $('<button    class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button>',{type: "button"}).appendTo($tr);




              $tr.appendTo($('#mytable tbody'));
              console.log($('#mytable tbody'))
          } )


      })
      .fail(function (error) {
        alert( "error" );
      });



},
render()
{

  return (
      <div style={{marginTop: '30px', height: 'calc(100vh - 200px)'}}>

<div className="col-xs-12" style={{height: '100%', overflowY: 'auto'}}>


    <div className="row">
    <div className="col-md-8 col-xs-6">
    <h4><i className="glyphicon glyphicon-th-list" /> Listado de Usuarios</h4>
    </div>
</div>
<div className="col-lg-8 pull-right" style={{textAlign: 'right', paddingTop: '10px'}}>

    </div>


    <hr/>
    <table id="mytable" className="table table-bordred table-striped" >
    <thead>
    <tr>
    <th>Estado </th>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Correo</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>

    </tbody>
    </table>
    <div className="clearfix"></div>
    <ul className="pagination pull-right">
    <li className="disabled"><a href="#"><span className="glyphicon glyphicon-chevron-left"></span></a></li>
<li className="active"><a href="#">1</a></li>
<li><a href="#">2</a></li>
<li><a href="#">3</a></li>
<li><a href="#">4</a></li>
<li><a href="#">5</a></li>
<li><a href="#"><span className="glyphicon glyphicon-chevron-right"></span></a></li>
</ul>








</div>
</div>

)
}

});

module.exports = Users;