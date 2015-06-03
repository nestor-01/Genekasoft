var StyleSheet = require('react-style');

var ProductCategoriesFormStyles = StyleSheet.create({
  toolBarSection: {
    width: '100%',
    height: '53px',
    padding: '10px',
    boxShadow: '0px 3px 7px -2px #ccc',
    zIndex: '0',
    position: 'relative'
  },

  bodySection: {
    width: '100%',
    height: 'calc(100% - 53px)',
    boxShadow: '0px 3px 7px -2px #ccc',
    zIndex: '1',
    overflowY: 'auto',
    backgroundColor: '#fff'
  }
});

module.exports = ProductCategoriesFormStyles;