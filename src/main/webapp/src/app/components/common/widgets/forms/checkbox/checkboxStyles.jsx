var StyleSheet = require('react-style');

var CheckBoxStyles = StyleSheet.create({
  checkBoxStyle: {
    opacity: '0',
    WebkitAppearance: 'none',
    display: 'inline-block',
    verticalAlign: 'middle',
    zIndex: '100',
    width: '30px',
    height: '30px',
    top: '50%',
    left: '7px',
    marginTop: '-12px',
    position: 'absolute',
    cursor: 'pointer'
  },

  labelStyle: {
    display: 'inline-block',
    position: 'relative',
    fontSize: '14px',
    fontWeight: '400',
    padding: '3px 0 0 30px',
    verticalAlign: 'top',
    color: 'rgb(129, 128, 128)',
    cursor: 'pointer',
    WebkitTransition: 'color 0.3s',
    transition: 'color 0.3s'
  },

  labelStyle_before: function() {
    document.styleSheets[0].addRule('.genekaCheckbox label:before', "top: 26px; left: 4px; width: 20px; height: 20px; border: 2px solid #ccc; margin-top: -25px; position: absolute; cursor: pointer; content: ''; transition: opacity 0.3s; -webkit-transition: opacity 0.3s;");
  },

  svgStyle: {
    position: 'absolute',
    width: '17px',
    height: '15px',
    top: '13px',
    left: '10px',
    pointerEvents: 'none'
  },

  pathStyle: {
    stroke: 'rgb(175, 223, 0)',
    strokeWidth: '13px',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none'
  }
});

module.exports = CheckBoxStyles;
