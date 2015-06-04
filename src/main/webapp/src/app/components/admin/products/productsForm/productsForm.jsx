var React = require('react');

var ProductCRUDStyles = require('./productCRUDStyles.jsx');
var Icons = require('../../../common/constants/icons.jsx');

var Wizard = require('../../../common/widgets/wizard/wizard.jsx');
var WizardPage = require('../../../common/widgets/wizard/wizardPage.jsx');

var ProductBasicForm = require('./productBasicForm/productBasicForm.jsx');
var ProductImagesForm = require('./productImagesForm/productImagesForm.jsx');
var ProductCategoriesForm = require('./productCategoriesForm/productCategoriesForm.jsx');

var ProductsForm = React.createClass({

  componentDidMount()
  {
    this.props.onInit('newProduct');
  },

  componentWillUnmount()
  {
  },

  render()
  {
    return (
      <div className="col-md-12" style={{paddingRight: '0'}}>
        <div className="col-md-8 col-xs-6">
          <h4><i className="glyphicon glyphicon-th" /> Nuevo Producto</h4>
        </div>
        <div className="col-md-4 col-xs-6" style={{textAlign: 'right', right: '50px'}}>
          <div className="btn-group" role="group" aria-label="...">
            <button onTouchTap={this.onSave} type="button" className="btn btn-default"><i className="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
            <button type="button" className="btn"><i className="glyphicon glyphicon-floppy-disk"></i> Limpiar</button>
          </div>
        </div>
        <br />
        <br />
        <Wizard style={ProductCRUDStyles.wizardStyle} activePage="basicData">
          <WizardPage key="basicData">
            <ProductBasicForm />
          </WizardPage>
          <WizardPage key="imagesUploader">
            <ProductImagesForm ref="imagesForm" />
          </WizardPage>
          <WizardPage key="categories">
            <ProductCategoriesForm ref="categoriesForm" />
          </WizardPage>
        </Wizard>
        {/*<div style={{height: '100%', padding: '45px 65px 0 25px'}}>
          <div ref="basicDataPanel" id="basicDataPanel" style={{width: '100%', float: 'left'}}>
            <div>
              <h5>Datos básicos</h5>
            </div>
            <hr/>
            <ProductBasicForm />
          </div>
          <div ref="imagesUploaderPanel" id="imagesUploaderPanel" style={{width: '100%', float: 'left', display: 'none', marginBottom: '80px'}}>
            <div className="row">
              <div className="col-lg-4">
                <h3>Imágenes</h3>
              </div>
              <div id="picture-actions" className="col-lg-8 pull-right" style={{textAlign: 'right', paddingTop: '10px'}}>
                <div className="btn-group" role="group">
                  <button type="submit" className="btn btn-primary start">
                    <i className="glyphicon glyphicon-upload"></i>
                    <span> Upload</span>
                  </button>
                  <button type="reset" className="btn cancel">
                    <i className="glyphicon glyphicon-ban-circle"></i>
                    <span> Cancel</span>
                  </button>
                </div>
              </div>
            </div>
            <hr/>
            <ProductImagesForm />
          </div>
          <div ref="categoriesPanel" id="imagesUploaderPanel" style={{width: '100%', float: 'left', display: 'none', marginBottom: '80px'}} className="slidedown">
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
                      <span><i className="glyphicon glyphicon-plus"></i><a href="#/admin/users/newUser">Nuevo Usuario</a></span>
                    </li>
                    <li>
                      <span><i className="glyphicon glyphicon-stats"></i><a href="#/admin/users/userStatistics">Estadísticas</a></span>
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <span><i className="glyphicon glyphicon-th"></i><a href="#/admin/products">Productos</a></span>
                  <ul>
                    <li>
                      <span><i className="glyphicon glyphicon-plus"></i><a href="#/admin/products/newProduct">Nuevo Producto</a></span>
                    </li>
                    <li>
                      <span><i className="glyphicon glyphicon-stats"></i><a href="#/admin/products/productStatistics">Estadísticas</a></span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <nav className="fixedBottomBar">
            <ul className="pager">
              <li style={{marginRight: '10px'}}><a onTouchTap={this._onPrev}><span aria-hidden="true">&larr;</span> Atrás</a></li>
              <li><a onTouchTap={this._onNext}>Siguiente <span aria-hidden="true">&rarr;</span></a></li>
            </ul>
          </nav>
        </div>*/}
      </div>
    );
  },

  onSave()
  {
    console.log("Categories:", this.refs.categoriesForm.getCategories());
    console.log("Images:", this.refs.imagesForm.getImagesData());
    console.log("Valued categories:", this.refs.categoriesForm.getValuedCategories());
  }
});

module.exports = ProductsForm;