var React = require('react');
var Form = require('../../../../common/widgets/forms/form/form.jsx');
var TextField = require('../../../../common/widgets/forms/textfield/textfield.jsx');

var ProductsBasicForm = React.createClass({

  getInitialState() {
    return {
      data: {}
    };
  },

  componentDidMount()
  {
    /*$(React.findDOMNode(this.refs.productBasicForm)).validate({
      errorPlacement: function(error, element)
      {
        element.parent().parent().addClass('has-error');

        error.css(UserFormStyles.errorField);
        error.insertAfter(element);
      }
    });*/
  },

  render()
  {
    return (
      <div>
        <div>
          <h5>Datos básicos</h5>
        </div>
        <hr/>
        <Form ref="productBasicForm">
          <TextField ref="code" id="code" label="Código" labelType="top" />
          <TextField ref="name" id="name" label="Nombre" labelType="top" />
          <TextField ref="desc" id="desc" label="Descripción" labelType="top" />
        </Form>
      </div>
    );
  },

  getBasicData()
  {
    return {
      code: this.refs.code.getValue(),
      name: this.refs.name.getValue(),
      description: this.refs.desc.getValue()
    };
  },

  isValid()
  {
    return this.refs.productBasicForm.isValid();
  },

  resetForm()
  {
    this.refs.productBasicForm.reset();
  }
});

module.exports = ProductsBasicForm;
