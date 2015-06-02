var React = require('react');

var ImageItemFile = React.createClass({

  render()
  {
    return (
      <div className="row" style={{width: '100%', paddingRight: '10px'}}>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{width: '100%', minWidth: '235px'}}>
          <a className="thumbnail">
            <div className="preview" style={{textAlign: 'center'}}>
              <img style={{maxWidth: '195px', maxHeight: '130px', minHeight: '130px'}} src={this.state.thumbnail} />
            </div>
            <div className="caption">
              <input onChange={this._onChangeTitle} type="text" className="form-control" placeholder="Titulo" defaultValue={this.props.name}></input>
              <br/>
              <div>
                <div className="form-group">
                  <input onChange={this._onChangeDescription} type="text" className="form-control" placeholder="Descripción"/>
                </div>
                <strong className="error text-danger">{this.props.errormessage}</strong>
              </div>
              <div>
                <h6 className="size">{this.props.size}</h6>
              </div>
              <p style={{marginBottom: '0'}}>
                <button data-dz-remove className="btn btn-xs btn-danger delete" style={{width: '100%'}}>
                  <i className="glyphicon glyphicon-trash"></i>
                  <span> Delete</span>
                </button>
              </p>
            </div>
          </a>
        </div>
      </div>
    );
  },

  setThumbnail(data)
  {
    this.setState({
      thumbnail: data
    });
  }
});

module.exports = ImageItemFile;