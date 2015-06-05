var React = require('react');
var Services = require('../../../common/constants/services.jsx');

var ProductCRUDStyles = require('./productCRUDStyles.jsx');
var Icons = require('../../../common/constants/icons.jsx');

var Wizard = require('../../../common/widgets/wizard/wizard.jsx');
var WizardPage = require('../../../common/widgets/wizard/wizardPage.jsx');

var ProductBasicForm = require('./productBasicForm/productBasicForm.jsx');
var ProductImagesForm = require('./productImagesForm/productImagesForm.jsx');
var ProductCategoriesForm = require('./productCategoriesForm/productCategoriesForm.jsx');

var ProductsForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState()
  {
    return {
      basicData: {},
      imagesData: [],
      categoriesData: [],
    };
  },

  componentDidMount()
  {
    this.props.onInit('newProduct');

    var { router } = this.context;
    var productId = router.getCurrentParams().productId;

    console.log(productId);

    if(productId) // It's an edition
    {
      $.get(Services.Products.getProduct(), {id: productId})
        .done(function(productRaw) {
          if(productRaw)
          {
            var product = JSON.parse(productRaw);

            this.refs.basicForm.setState({
              data: {
                id: product.id,
                code: product.code,
                name: product.name,
                description: product.description,
                active: product.active
              },

              imagesData: product.images,
              categoriesData: product.categories
            });
          }
        }.bind(this))
        .fail(function(error) {
          alert(JSON.stringify(error));
        });
    }
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
            <ProductBasicForm ref="basicForm" data={this.state.basicData} />
          </WizardPage>
          <WizardPage key="imagesUploader">
            <ProductImagesForm ref="imagesForm" data={this.state.imagesData} />
          </WizardPage>
          <WizardPage key="categories">
            <ProductCategoriesForm ref="categoriesForm" data={this.state.categoriesData} />
          </WizardPage>
        </Wizard>
      </div>
    );
  },

  onSave()
  {
    this.refs.imagesForm.uploadImages()
      .done(function(response) {

        var data = $.extend(this.refs.basicForm.getBasicData(), {
          active: true,
          categories: this.refs.categoriesForm.getCategories().concat(this.refs.categoriesForm.getValuedCategories()),
          images: this.refs.imagesForm.getImagesData()
        });

        console.log(data);

        $.ajax({
            type: "post",
            url: Services.Products.saveProduct(),
            contentType: "application/json",
            data: JSON.stringify(data)
          })
          .done(function(response) {
          })
          .fail(function(error) {

          });
      })
      .fail(function(error) {

      });
  }
});

module.exports = ProductsForm;