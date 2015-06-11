var React = require('react');
var ValuedCategoriesStyles = require('./valuedCategoriesStyles.jsx');
var ProductCategoriesFormStyles = require('../productCategoriesFormStyles.jsx');

var ValuedCategories = React.createClass({

  getInitialState()
  {
    return {
      categories: [],
      categoryValues: [],
      lastCategory: null,
      categoryElements: []
    };
  },

  componentDidUpdate()
  {
    if(!this.configured)
    {
      var typeahead = $(React.findDOMNode(this.refs.typeahead));

      typeahead.typeahead({
          hint: true,
          highlight: true,
          minLength: 1,
          classNames: {
            menu: 'dropdown-menu'
          }
        },
        {
          name: 'states',
          source: this._substringMatcher(this.state.categories)
        });

      typeahead.on('typeahead:select', function (ev, categoryName) {
        $(this).typeahead('close');
        $(this).typeahead('val', '');

        this.setState({
          lastCategory: this.state.categories[categoryName]
        })
      }.bind(this));

      this.configured = true;
    }
  },

  /**
   * Callback used to perform the match
   * @param categoryList
   * @returns {Function}
   */
  _substringMatcher(categoryList)
  {
    return function findMatches(q, cb)
    {
      var matches = [],
          substrRegex = new RegExp(q, 'i');

      for(var name in categoryList)
      {
        if (substrRegex.test(name)) {
          matches.push(name);
        }
      }

      cb(matches);
    };
  },

  render()
  {
    if(this.state.lastCategory) {
      var category = this.state.lastCategory;
      var value = category.value;

      // This property will be not necessary
      delete category.children;

      // Create the object value
      if (this.state.categoryValues[category.name])
        value = this.state.categoryValues[category.name].value;
      else
        this.state.categoryValues[category.name] = category;

      this.state.categoryElements.push(
        <tr ref={category.id + category.name} key={category.name}>
          <td style={ValuedCategoriesStyles.labelColumn}>{category.name}</td>
          <td style={ValuedCategoriesStyles.inputColumn}>
            <input data-category={category.name} onChange={this._onChangeValue} ref={category.name} className="form-control" style={ValuedCategoriesStyles.input} defaultValue={value} />
          </td>
        </tr>
      );
    }

    return (
      <div style={{height: '100%'}}>
        <div style={ProductCategoriesFormStyles.toolBarSection}>
          <input style={{width: '100%'}} ref="typeahead" type="text" className="form-control typeahead" placeholder="Adicionar categorías valor" autoComplete="off" />
        </div>
        <div style={ProductCategoriesFormStyles.bodySection}>
          <table className="table table-hover">
            <thead>
              <th style={ValuedCategoriesStyles.labelColumn}>Category</th>
              <th style={ValuedCategoriesStyles.inputColumn}>Value</th>
            </thead>
            <tbody>
                {this.state.categoryElements}
            </tbody>
          </table>
        </div>
      </div>
    );
  },

  /**
   * Event fired when the values are asigned to categories
   * @param e
   */
  _onChangeValue(e)
  {
    this.state.categoryValues[e.target.dataset.category].value = e.target.value;
  },

  /**
   * Returns the final data
   * @returns {Array}
   */
  getValuedCategories()
  {
    var categoryValues = [];

    for(categoryName in this.state.categoryValues)
      categoryValues.push(this.state.categoryValues[categoryName]);

    return categoryValues;
  },

  resetForm()
  {
    this.setState({
      categoryValues: [],
      lastCategory: null,
      categoryElements: []
    }); //
  }
});

module.exports = ValuedCategories;