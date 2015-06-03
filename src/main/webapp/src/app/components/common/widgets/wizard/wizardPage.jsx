var React = require('react');
var WizardStyles = require('./wizardStyles.jsx');

var WizardPage = React.createClass({

  getDefaultProperties()
  {
    return {
      visibility: WizardStyles.pageHidden
    };
  },

  render()
  {
    return (
      <div ref="page" styles={[this.props.visibility, this.props.style]}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = WizardPage;
