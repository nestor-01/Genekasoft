var React = require('react');
var Services = require('../../../common/constants/services.jsx');
var CheckBox = require('../../../common/widgets/forms/checkbox/checkbox.jsx');

var Products = React.createClass({

  getInitialState() {
    return {
      productsList: {}
    };
  },

  componentDidMount()
  {
    this.getProducsList()
      .done(function(list) {
        JSON.parse(list).forEach(function(product) {
          this.state.productsList[product.id] = product;
        }.bind(this));

        this.forceUpdate();
      }.bind(this));

    $('[data-toggle="popover"]').popover()
  },

  render()
  {
    var productsList = [];

    for(var id in this.state.productsList)
    {
      var product = this.state.productsList[id];
      var firstThumbnail = (product.images.length > 0) ? product.images[0].thumbnail : '';

      productsList.push(
        <tr key={product.id}>
          {/*<td><CheckBox id={product.id} label="" /></td>*/}
          <td style={{textAlign: 'center'}} width="50"><img src={firstThumbnail} /></td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td style={{textAlign: 'center'}}>
           <button className="btn btn-sm btn-primary" title="Editar" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?"><i className="glyphicon glyphicon-pencil"></i></button>&nbsp;&nbsp;
           <button onClick={this._onDelete} data-productid={product.id} className="btn btn-sm btn-danger" title="Eliminar"><i className="glyphicon glyphicon-remove"></i></button>
          </td>
        </tr>
      );
    }

    return (
      <div>
        <div className="col-md-12" style={{padding: '0 0 30px'}}>
          <div className="col-md-8 col-xs-6">
            <h4><i className="glyphicon glyphicon-th-list" /> Lista de productos</h4>
          </div>
        </div>
        <br /><br />
        <div style={{padding: '20px'}}>
          <table className="table table-bordered table-hover" style={{backgroundColor: 'rgb(250, 250, 250)'}}>
            <thead>
              <tr>
                {/*<th width="35"><CheckBox /></th>*/}
                <th>Vista previa</th>
                <th>Codigo</th>
                <th>Name</th>
                <th>Description</th>
                <th width="110" style={{textAlign: 'center'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productsList}
            </tbody>
          </table>
        </div>
      </div>
    );
  },

  getProducsList()
  {
    return $.get(Services.Products.getProducts());
  },

  _onDelete(e)
  {
    var productId = e.target.dataset.productid;

    if(productId)
    {
      $.post(Services.Products.deleteProduct(), {productId: productId})
        .done(function(response) {
          var resp = JSON.parse(response);

          if(resp.status == 'ok')
          {
            alert('Producto eliminado con éxito');
            delete this.state.productsList[productId];

            this.forceUpdate();
          }

          else
          {
            alert(resp.info);
          }
        }.bind(this))
        .fail(function(error) {
          alert('Problema al eliminar producto, revisar la consola');
          console.log(error);
        });
    }
  }

});

module.exports = Products;