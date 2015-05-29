var React = require('react');
var ProductCRUDStyles = require('../productCRUDStyles.jsx');

var TreeCategories = require('./treeCategories/treeCategories.jsx');

var ProductCategoriesForm = React.createClass({

  getInitialState()
  {
    return {
      stateIndicator: "minus",
      tree: [],
      valueCategories: []
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
    },
    {
      name: 'states',
      source: substringMatcher(states)
    });
    
    // https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
    // http://twitter.github.io/typeahead.js/examples/
    
    $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
      
      var inputName = React.createElement('input', {className: "form-control", value: suggestion, style: {"float": 'left', width: '50%'}});
      var inputValue = React.createElement('input', {className: "form-control", value: '0', style: {"float": 'left', width: '50%'}});
      var container = React.createElement('div', null, inputName, inputValue);
      
      this.state.valueCategories.push(container);
      this.setState();
      
      //console.log('Selection: ' + suggestion);
    }.bind(this));
=======
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
            
            if(!category.children)
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

    /*$.get('http://localhost:8080/geneka/api/category/getAllCategories')
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
      });*/
      
    var treeCategories = {
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
    
    def.resolve(treeCategories);

    return def.promise();
  },

  render()
  {
    return (
      <div style={{height: 'calc(100vh - 300px)'}}>
        <div style={{width: '50%', height: '100%', borderRadius: '4px 0 0 4px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)', "float": 'left', padding: '10px'}}>
          <div ref="treeCategories" className="tree">
            <TreeCategories ref="treeCategories" />
            <input className="form-control" placeholder="Buscar categorías" />
            {this.state.tree}
          </div>
        </div>
        <div style={{width: '50%', height: '100%', borderRadius: '0 4px 4px 0', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)', "float": 'left', padding: '10px'}}>
          {this.state.valueCategories}
          <br />
          <br />
          <input type="text" className="form-control typeahead" placeholder="Adicionar categorías valor" />
        </div>
        <div style={{clear: 'both'}}></div>
      </div>
    );
  }
});

module.exports = ProductCategoriesForm;
