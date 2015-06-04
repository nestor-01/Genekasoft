var React = require('react');

var ProductsForm = React.createClass({

  componentDidMount() {

  },

  render()
  {
    return (
      <div>
        <div>
          <h5>Datos básicos</h5>
        </div>
        <hr/>
        <form>
          <div className="form-group">
            <label for="product-code">Código</label>
            <input ref="code" type="text" className="form-control" id="product-code" placeholder="" />
          </div>
          <div className="form-group info">
            <label for="product-name">Nombre</label>
            <input ref="name" type="text" className="form-control" id="product-name" placeholder="" />
          </div>
          <div className="form-group">
            <label for="product-desc">Descripción</label>
            <textarea ref="description" className="form-control" id="product-desc" placeholder=""></textarea>
          </div>
        </form>
      </div>
    );
  },

  getBasicData()
  {
    return {
      code: React.findDOMNode(this.refs.code).value,
      name: React.findDOMNode(this.refs.name).value,
      description: React.findDOMNode(this.refs.description).value
    };
  }
});

module.exports = ProductsForm;
