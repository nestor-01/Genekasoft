var React = require('react');

var Products = React.createClass({

  componentDidMount()
  {

  },

  render()
  {
    return (
        <div style={{marginTop: '30px', height: 'calc(100vh - 200px)'}}>

<div className="col-xs-12" style={{height: '100%', overflowY: 'auto'}}>


<div className="row">
    <div className="col-md-8 col-xs-6">
    <h4><i className="glyphicon glyphicon-th-list" /> Listado De Productos</h4>
</div>
</div>
</div>
</div>

    );
  }

});

module.exports = Products;