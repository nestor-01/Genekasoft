var React = require('react');
var TreeCategoriesStyles = require('./treeCategoriesStyles.jsx');
var ProductCategoriesFormStyles = require('../productCategoriesFormStyles.jsx');

var CheckBox = require('../../../../../common/widgets/forms/checkbox/checkbox.jsx');

var TreeCategories = React.createClass({

  getInitialState()
  {
    return {
      tree: []
    };
  },

  componentDidMount()
  {
    // Checkbox list

    this.checkboxes = [];
  },

  componentDidUpdate()
  {
    var self = this;
    var $tree = $(React.findDOMNode(this.refs.treeCategories));

    $tree.find('li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $tree.find('ul').each(function(){
      $(this).css({paddingLeft: '12px'});
    });
    $tree.find('li.parent_li > span').on('click', function (e)
    {
      var children = $(this).parent('li.parent_li').find(' > ul > li');
      if (children.is(":visible")) {
        children.hide('fast');

        /*self.setState({
         stateIndicator: "plus"
         });*/

        $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
      } else {
        children.show('fast');

        /*self.setState({
         stateIndicator: "minus"
         });*/

        $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');

      }
    });
  },

  render()
  {
    var createElements = function(list)
    {
      return React.DOM.ul(null, list.map(function(category)
      {
        var withoutChildren = category.children.length == 0;
        var checkbox = <CheckBox ref={withoutChildren ? category.id : 'parent_'+category.id} key={category.id} label={category.name} />;

        if(withoutChildren) this.checkboxes.push({
          id: category.id,
          name: category.name,
          description: category.description,
          parentsId: category.parentsId,
          value: category.value
        });

        return (
          <li key={category.id}>
            <span key={category.id} style={withoutChildren ? TreeCategoriesStyles.parent : {}}>
                  {withoutChildren ? checkbox : category.name}
                  {createElements(category.children)}
            </span>
          </li>
        );
      }.bind(this)));
    }.bind(this);

    return (
      <div style={{height: '100%'}}>
        <div style={ProductCategoriesFormStyles.toolBarSection}>
          <div className="input-group">
            <input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
              <div className="input-group-addon">
                <i className="glyphicon glyphicon-search"></i>
              </div>
          </div>
        </div>
        <div style={ProductCategoriesFormStyles.bodySection}>
          <div ref="treeCategories" className="tree">
            {createElements(this.state.tree.children || [])}
          </div>
        </div>
      </div>
    );
  },

  getCheckedCategories()
  {
    return this.checkboxes.filter(function(checkbox) {
      if(this.refs[checkbox.id].isChecked()) return checkbox;
    }.bind(this));
  }
});

module.exports = TreeCategories;