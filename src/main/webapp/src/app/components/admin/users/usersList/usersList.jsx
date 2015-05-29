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
    $("#mytable #checkall").click(function () {
      if ($("#mytable #checkall ").is(':checked')) {
        $("#mytable input[type=checkbox]").each(function () {
          $(this).prop("checked", true);
        });

      } else {
        $("#mytable input[type=checkbox]").each(function () {
          $(this).prop("checked", false);
        });
      }
    });
      $("#status").click(function(){
          $('#mytable tbody tr').find('input:checkbox').each(function(index, input){

              if ($(input).is(':checked')) {
                  $(input).parent().parent().attr({
                      "style":"background-color:red;"
                  });
                  console.log($(this).is(':checked'))
              }
              else if (!$(input).is(':checked')) {

                  $(input).parent().parent().attr("disabled", false);
                  console.log($(this).is(':checked'))
              }
          })



      });
      $("#remove").click(function() {

          $('table tr').find('input:checkbox').each(function(index, input){
              console.log(input)
              if($(input).is(":checked")){
                  console.log(index);
                  console.log($(input).parent().parent());
                 $(input).parent().parent().remove();
                  console.log(input);
              }

          })


      })

      $("#delete").click(function(){
          alert("aa");
      })

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
              $('<input/>', {type: "checkbox"}).appendTo($td_c);
              $('<td/>', {text: user.name, className: "myName"}).appendTo($tr);
              $('<td/>', {text: user.lastName, className: "myLastname"}).appendTo($tr);
              $('<td/>', {text: user.email, className: "myEmail"}).appendTo($tr);
              $('<button id="remove" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button>',{type: "button"}).appendTo($tr);




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

    <h3>Listado de Usuarios</h3>
</div>
<div className="col-lg-8 pull-right" style={{textAlign: 'right', paddingTop: '10px'}}>
    <button type="submit" className="btn btn-primary start" id="status">
    <i className="glyphicon glyphicon-upload"></i>
    <span>Estado</span>
    </button>
    <button  className="btn btn-danger delete" id="remove"  >
    <i className="glyphicon glyphicon-trash"></i>
    <span> Eliminar</span>
    </button>
    </div>


    <hr/>
    <table id="mytable" className="table table-bordred table-striped" >
    <thead>
    <tr>
    <th><input type="checkbox" id="checkall" /> </th>
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