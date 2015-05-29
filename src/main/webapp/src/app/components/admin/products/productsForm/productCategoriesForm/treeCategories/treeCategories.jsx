var React = require('react');
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
    this._getTreeElements();
  },

  componentDidUpdate()
  {
    var $tree = $(React.findDOMNode(this.refs.treeCategories));

    $tree.find('li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $tree.find('ul').each(function(){
      $(this).css({paddingLeft: '12px'});
    });
    $tree.find('li.parent_li > span').on('click', function (e) {
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
      e.stopPropagation();
    });
  },

  _getTreeElements()
  {
    this._getTreeCategories()
      .done(function(treeCategories){

        var createElements = function(list)
        {
          var _list = [];

          list.forEach(function(category) {

            var key = {key: category.id};

            if(category.children == 0)
            {
              _list.push(React.DOM.li(key, React.DOM.span(null, React.createElement(CheckBox, {label: category.name}))));
            }

            else
            {
              _list.push(React.DOM.li(key, React.DOM.span({style: {display: 'block', height: '25px'}}, category.name), createElements(category.children)));
            }
          });

          return React.DOM.ul(null, _list);
        };

        var r = createElements(treeCategories.children);

        this.setState({
          tree : r
        });

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

        console.log("tree", treeCategories);

        def.resolve(treeCategories);
      })
      .fail(function(error){
        def.reject(error);
      });

    /*var treeCategories = {
     id: 1,
     name: "Main",
     children: [
     {
     id: 2,
     name: "Main 1",
     children: [
     {
     id: 3,
     name: "Main 1.1",
     children: [
     {
     id: 4,
     name: "Main 1.1.1"
     }
     ]
     },
     {
     id: 5,
     name: "Main 1.2"
     }
     ]
     },
     {
     id: 6,
     name: "Main 2",
     children: [
     {
     id: 7,
     name: "Main 2.1"
     }
     ]
     }
     ]
     };

     def.resolve(treeCategories);*/

    return def.promise();
  },

  render()
  {
    return (
      <div>
        <input className="form-control" placeholder="Buscar categorías" />
        {this.state.tree}
      </div>
    );
  }
});

module.exports = TreeCategories;