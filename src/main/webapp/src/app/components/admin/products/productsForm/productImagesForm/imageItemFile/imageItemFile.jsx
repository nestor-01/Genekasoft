var React = require('react');

var ImageItemFile = React.createClass({

  getInitialState()
  {
    var fileName = this.props.file.name;

    return {
      name: fileName,
      description: '',
      thumbnail: '',
      file: ''
    };
  },

  handleChange: function(state) {
    return function(event)
    {
      var obj = {};
      obj[state] = event.target.value;
      this.setState(obj);
    }.bind(this);
  },

  componentDidMount()
  {
    console.log('updating', this.props.file);
  },

  render()
  {
    var name = this.state.name;

    return (
        <div ref="container" className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{width: '100%', maxWidth: '216px', padding: '5px'}}>
          <a className="thumbnail">
            <div className="preview" style={{textAlign: 'center'}}>
              <img style={{maxWidth: '195px', maxHeight: '130px', minHeight: '130px'}} src={this.state.thumbnail || this.props.file.thumbnail} />
            </div>
            <div className="caption">
              <input type="text" className="form-control" placeholder="Titulo" defaultValue={this.props.file.name} value={name} onChange={this.handleChange('name')}></input>
              <br/>
              <div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Descripción" defaultValue={this.props.file.description} value={this.state.description} onChange={this.handleChange('description')}/>
                </div>
                <strong className="error text-danger">{this.props.errormessage}</strong>
              </div>
              <div>
                <h6 className="size">{ (this.props.file.size) ? Math.floor(this.props.file.size/1024)+'k' : ''}</h6>
              </div>
              <p style={{marginBottom: '0'}}>
                <button onClick={this.props.file.onRemove} className="btn btn-xs btn-danger delete" style={{width: '100%'}}>
                  <i className="glyphicon glyphicon-trash"></i>
                  <span> Delete</span>
                </button>
              </p>
            </div>
          </a>
        </div>
    );
  },

  setThumbnail(data)
  {
    this.setState({
      thumbnail: data
    });
  },

  setFilePath(path)
  {
    this.setState({
      file: path
    });
  },

  getData()
  {
    return this.state;
  }
});

module.exports = ImageItemFile;