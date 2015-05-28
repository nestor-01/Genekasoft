var React = require('react');
var ProductCRUDStyles = require('../productCRUDStyles.jsx');

var CheckBox = require('../../../../common/widgets/forms/checkbox/checkbox.jsx');

var ProductCategoriesForm = React.createClass({

  getInitialState()
  {
    return {
      stateIndicator: "minus",
      tree: []
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

    this._getTreeElements();
  },

  _getTreeElements()
  {
    /*
    <ul>
      <li>
        <span>First One</span>
        <ul>
          <li>
            <span>Second One</span>
          </li>
        </ul>
      </li>
      <li>
        <span>Third One</span>
      </li>
    </ul>*/


    /*
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
     */

    this._getTreeCategories()
      .done(function(treeCategories){

        var createElements = function(list)
        {
          var resp;

          for(var i=0; i<list.length; i++)
          {
            var category = list[i];

            if(category.children.length > 0)
            {
              return React.DOM.ul(null, React.DOM.li(null, React.DOM.span(null, category.name), createElements(category.children)));
            }

            else
            {
              return React.DOM.ul(null, React.DOM.li(null, React.DOM.span(null, category.name)));
            }
          }

          return resp;
        };

        var r = createElements(treeCategories.children);

        this.setState({
          tree : r
        });

        console.log(r);
      }.bind(this));
  },

  _getTreeCategories()
  {
    var def = $.Deferred();

    $.get('http://localhost:8080/geneka/api/category/getAllCategories')
      .done(function(response) {
        var rawCategoriesList = JSON.parse(response);

        var createTree = function(list) {
          var idToNodeMap = {"root": {"children": []}};
          var root = idToNodeMap.root;
          var parentNode;

          for (var i = 0; i < list.length; i++) {
            var category = list[i];
            category.children = [];
            idToNodeMap[category.id] = category;

            parentNode = idToNodeMap[category.parentsId || "root"];
            delete category.id;
            parentNode.children.push(category);
          }

          return root;
        };

        var treeCategories = createTree(rawCategoriesList);
        def.resolve(treeCategories);
      })
      .fail(function(error){
        def.reject(error);
      });

    return def.promise();
  },

  render()
  {
    return (
      <div style={{height: 'calc(100vh - 300px)'}}>
        <div style={{width: '50%', height: '100%', borderRadius: '4px 0 0 4px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)', float: 'left', padding: '10px'}}>
          <div ref="treeCategories" className="tree">
            {this.state.tree}
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
