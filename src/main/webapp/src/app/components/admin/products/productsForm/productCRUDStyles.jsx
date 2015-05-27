var StyleSheet = require('react-style');

var ProductCRUDStyles = StyleSheet.create({
  wizardStyle: {
    height: '100%',
    padding: '45px 65px 0 25px'
  },

  imagesForm: {
    dndSection: {
      panel: {
        width: '100%',
        height: '200px',
        border: '2px dashed #dadada',
        borderRadius: '10px',
        margin: '50px 50px 50px 0',
        background: 'rgb(250,250,250)',
        textAlign: 'center',
        cursor: 'pointer'
      },
      message1: {
        top: '35%',
        position: 'relative',
        color: '#D5D5D5'
      },
      message2: {
        top: '35%',
        position: 'relative',
        color: '#D5D5D5',
        fontWeight: '300'
      }
    }
  }
});

module.exports = ProductCRUDStyles;
