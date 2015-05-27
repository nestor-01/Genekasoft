var React = require('react');
var ProductCRUDStyles = require('../productCRUDStyles.jsx');

var CheckBox = require('../../../../common/widgets/forms/checkbox/checkbox.jsx');

var ProductCategoriesForm = React.createClass({

  getInitialState()
  {
    return {
      stateIndicator: "minus"
    };
  },

  componentDidMount()
  {
    var self = this; //
    var $tree = $(React.findDOMNode(this.refs.treeCategories));

    $tree.find('li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $tree.find('ul').each(function(){
      $(this).css({paddingLeft: '12px'});
    });
    $tree.find('li.parent_li > span').on('click', function (e) {
      var children = $(this).parent('li.parent_li').find(' > ul > li');
      if (children.is(":visible")) {
        children.hide('fast');

        self.setState({
          stateIndicator: "plus"
        });

        $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
      } else {
        children.show('fast');

        self.setState({
          stateIndicator: "minus"
        });

        $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
      }
      e.stopPropagation();
    });
  },

  render()
  {
    return (
      <div style={{height: 'calc(100vh - 300px)'}}>
        <div style={{width: '50%', height: '100%', borderRadius: '4px 0 0 4px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)', float: 'left', padding: '10px'}}>
          <div ref="treeCategories" className="tree">
            <ul>
              <li>
                <span> Usuarios</span>
                <ul>
                  <li>
                    <span>
                      <CheckBox label="Item1" />
                    </span>
                  </li>
                  <li>
                    <span> Users</span>
                    <ul>
                      <li>
                        <span>
                          <CheckBox label="Item2" />
                        </span>
                      </li>
                      <li>
                        <CheckBox label="Item2" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>
                      <CheckBox label="Item3" />
                    </span>
                  </li>
                  <li>
                    <span>
                      <CheckBox label="Item4" />
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div style={{width: '50%', height: '100%', borderRadius: '0 4px 4px 0', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)', float: 'left', padding: '10px'}}>
          <h1>fff</h1>
          <h1>fff</h1>
        </div>
        <div style={{clear: 'both'}}></div>
      </div>
    );
  }
});

module.exports = ProductCategoriesForm;
