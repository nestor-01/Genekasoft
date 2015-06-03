var React = require('react');
var WizardStyles = require('./wizardStyles.jsx');

var Wizard = React.createClass({

  propTypes: {
    style: React.PropTypes.object,
    paginationStyle: React.PropTypes.object,
    activePage: React.PropTypes.string
  },

  getDefaultProps()
  {
    return {
      style: {},
      paginationStyle: {},
      activePage: ''
    };
  },

  getInitialState()
  {
    return {
      activePage: this.props.activePage
    };
  },

  componentDidMount()
  {

  },

  renderPages()
  {
    this.pageIndexes = {};

    return React.Children.map(this.props.children, function(page, index) {
      this.pageIndexes[index] = page.key;

      if(page.key === this.state.activePage)
      {
        this.pageIndex = index;

        return React.cloneElement(page, {
          visibility: WizardStyles.pageVisible
        });
      }

      return React.cloneElement(page, {
        visibility: WizardStyles.pageHidden
      });
    }.bind(this));
  },

  render()
  {
    return (
      <div style={this.props.style}>
        {this.renderPages()}
        <nav className="fixedBottomBar">
          <ul className="pager">
            <li style={{marginRight: '10px'}}><a onTouchTap={this._onPrev}><span aria-hidden="true">&larr;</span> Atrás</a></li>
            <li><a onTouchTap={this._onNext}>Siguiente <span aria-hidden="true">&rarr;</span></a></li>
          </ul>
        </nav>
      </div>
    );
  },

  _onNext()
  {
    if(this.pageIndex < (this.props.children.length - 1))
    {
      this.setState({
        activePage: this.pageIndexes[this.pageIndex + 1]
      });
    }
  },

  _onPrev()
  {
    if(this.pageIndex > 0)
    {
      this.setState({
        activePage: this.pageIndexes[this.pageIndex - 1]
      });
    }
  }
});

module.exports = Wizard;
