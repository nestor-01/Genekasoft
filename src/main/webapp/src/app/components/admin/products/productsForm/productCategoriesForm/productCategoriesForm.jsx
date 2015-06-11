var React = require('react');
var Services = require('../../../../common/constants/services.jsx');

var TreeCategories = require('./treeCategories/treeCategories.jsx');
var ValuedCategories = require('./valuedCategories/valuedCategories.jsx');

var ProductCategoriesForm = React.createClass({

  getInitialState()
  {
    return {
      stateIndicator: "minus",
      valueCategories: []
    };
  },

  _createTreeCategoryData()
  {
    $.get(Services.Products.getCategories())
      .done(function (categoriesList) {
        var createTree = function (list) {
          var idToNodeMap = {"root": {"children": []}};
          var root = idToNodeMap.root;
          var parentNode;

          for (var i = 0; i < list.length; i++) {
            var category = list[i];
            category.children = [];
            idToNodeMap[category.id] = category;

            parentNode = idToNodeMap[category.parentsId || "root"];
            parentNode.children.push(category);
          }

          return root;
        };

        var createValuedArray = function(list) {
          var obj = {};

          list.forEach(function(category) {
            obj[category.name] = category
          });

          return obj;
        };

        this.treeCategories = createTree(categoriesList);
        this.valuedCategories = createValuedArray(categoriesList);

        this.refs.treeCategories.setState({
          tree: this.treeCategories
        });

        this.refs.valuedCategories.setState({
          categories: this.valuedCategories
        });

      }.bind(this))
      .fail(function (error) {

      });
  },

  componentDidMount()
  {
    this._createTreeCategoryData();
  },

  render()
  {
    return (
      <div style={{height: 'calc(100vh - 260px)'}}>
        <div style={{width: '50%', height: '100%', borderRadius: '4px 0 0 4px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)', "float": 'left'}}>
          <TreeCategories ref="treeCategories" />
        </div>
        <div style={{width: '50%', height: '100%', borderRadius: '0 4px 4px 0', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)', "float": 'left'}}>
          <ValuedCategories ref="valuedCategories" />
        </div>
      </div>
    );
  },

  getCategories()
  {
    return this.refs.treeCategories.getCheckedCategories();
  },

  getValuedCategories()
  {
    return this.refs.valuedCategories.getValuedCategories();
  },

  resetForm()
  {
    this.refs.treeCategories.resetForm();
    this.refs.valuedCategories.resetForm();
  }
});

module.exports = ProductCategoriesForm;
