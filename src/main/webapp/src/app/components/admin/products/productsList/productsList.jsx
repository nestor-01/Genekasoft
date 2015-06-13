var React = require('react');
var Services = require('../../../common/constants/services.jsx');
var CheckBox = require('../../../common/widgets/forms/checkbox/checkbox.jsx');
var Dialog = require('../../../common/widgets/dialog/dialog.jsx');

var ProductsList = React.createClass({

  getInitialState() {
    return {
      productsList: {}
    };
  },

  componentDidMount()
  {
    this.getProducsList()
      .done(function(list) {
        list.forEach(function(product) {
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
          <td style={{textAlign: 'center'}} width="50"><img src={firstThumbnail} /></td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td style={{textAlign: 'center'}}>
           <button onClick={this._onEdit} data-productid={product.id} className="btn btn-sm btn-primary" title="Editar"><i className="glyphicon glyphicon-pencil"></i></button>&nbsp;&nbsp;
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
                <th>Vista previa</th>
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
        <Dialog ref="confirmDelete" onConfirm={this._onConfirm}>
          <p>¿Está seguro que desea eliminar este producto?</p>
          <div style={{position: 'relative', width: '100%', height: '40px', top: '35px'}}>
            <button onClick={this._onYes} className="btn btn-primary" style={{width: '55px', outline: 'none'}}>Si</button>&nbsp;
            <button onClick={this._onNo} className="btn" style={{width: '55px', outline: 'none'}} data-dialog-close>No</button>
          </div>
        </Dialog>
      </div>
    );
  },

  getProducsList()
  {
    return $.get(Services.Products.getProducts());
  },

  _onYes()
  {
    this.doDelete();
    this.refs.confirmDelete.close();
  },

  _onNo()
  {
    this.refs.confirmDelete.close();
  },

  _onDelete(e)
  {
    this.productIdToDelete = e.target.dataset.productid;
    this.refs.confirmDelete.open();
  },

  _onEdit(e)
  {
    var productIdToEdit = e.target.dataset.productid;

    if(!productIdToEdit)
      productIdToEdit = $(e.target).closest('button')[0].dataset.productid;

    window.location = '#/admin/products/editProduct/' + productIdToEdit;
  },

  doDelete()
  {
    if(this.productIdToDelete)
    {
      $.post(Services.Products.deleteProduct(), {productId: this.productIdToDelete})
        .done(function(response) {
          if(response.status == Services.response.status.OK)
          {
            delete this.state.productsList[this.productIdToDelete];
            this.forceUpdate();

            window.notify.info('El producto fue eliminado con éxito');
          }
        }.bind(this))
        .fail(function(error) {
          alert(error.message);
          console.log(error);
        });
    }
  }

});

module.exports = ProductsList;