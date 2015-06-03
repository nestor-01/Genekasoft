var StyleSheet = require('react-style');

var AdminStyles = StyleSheet.create({
  tree: {
    minHeight: '20px',
    marginBottom: '20px'
  },

  treeUl: {
    position: 'relative',
    paddingLeft: '17px'
  },

  treeLi: {
    cursor: 'pointer',
    listStyleType: 'none',
    margin: '0',
    padding: '10px 5px 0 5px',
    position: 'relative'
  },

  treeLiSpanA: {
    fontWeight: '300',
    display: 'inline-block',
    padding: '3px 8px',
    textDecoration: 'none',
    height: '38px',
    color: 'white',
    WebkitTransition: 'font 0.2s ease',
    MozTransition: 'font 0.2s ease',
    OTransition: 'font 0.2s ease',
    MsTransition: 'font 0.2s ease'
  },

  treeLiSpanAHover: {
    fontWeight: '500',
    fontSize: '16px'
  },

  treeLiParentLiSpanA: {
    cursor: 'pointer',
    left: '0px',
    position: 'relative'
  },

  applyTreeSelectors: function(element) {
    document.styleSheets[0].addRule(element+' li:before, '+element+' li:after', 'content: left: -10px; position: absolute; right: auto');

    document.styleSheets[0].addRule(element+' li:before', 'border-left: 1px solid #81A8BE; bottom: 50px; height: 100%; top: -8px; width: 1px');
    document.styleSheets[0].addRule(element+' li:after', 'border-top: 1px solid #81A8BE; height: 20px; top: 21px; width: 10px');

    document.styleSheets[0].addRule(element+'>ul>li:before, '+element+'>ul>li:after', 'border: 0');
    document.styleSheets[0].addRule(element+' li:last-child::before', 'height: 30px');
  }
});

module.exports = AdminStyles;
