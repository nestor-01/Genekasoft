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
    var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches;
     
        // an array that will be populated with substring matches
        matches = [];
     
        // regex used to determine if a string contains the substring `q`
        var substrRegex = new RegExp(q, 'i');
     
        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });
     
        cb(matches);
      };
    };
     
    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
      'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
     
    $('.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1,
      classNames: {
        menu: 'dropdown-menu'
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
  },

  render()
  {
    return (
      <div style={{height: 'calc(100vh - 300px)'}}>
        <div style={{width: '50%', height: '100%', borderRadius: '4px 0 0 4px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(249, 249, 249)', "float": 'left', padding: '10px'}}>
          <div ref="treeCategories" className="tree">
            <TreeCategories ref="treeCategories" />
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
