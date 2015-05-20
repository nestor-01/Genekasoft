var React = require('react');
var Icons = require('../media/icons.jsx');

var Products = React.createClass({

  componentDidMount()
  {
    this.props.onInit('newProduct');

    Dropzone.autoDiscover = false;

    var previewNode = document.querySelector("#template");
    previewNode.id = "";
    var previewTemplate = previewNode.parentNode.innerHTML;
    previewNode.parentNode.removeChild(previewNode);

    var myDropzone = new Dropzone('#messageToDragImgs', {
      previewsContainer: "#previews",
      thumbnailWidth: 295,
      thumbnailHeight: 150,
      maxThumbnailFilesize: 3,
      parallelUploads: 20,
      uploadMultiple: false,
      previewTemplate: previewTemplate,
      url: "/geneka/api/product/upload",
      paramName: "file",
      autoProcessQueue: false,
      maxFilesize: 2
    });

    myDropzone.on("addedfile", function(file) {
      $('#messageToDragImgs').hide();
      //myDropzone.enqueueFile(file);
      //file.previewElement.querySelector(".start").onclick = function() { myDropzone.enqueueFile(file); };
    });

    myDropzone.on("removedfile", function(file) {
      if(myDropzone.getQueuedFiles().length == 0)
      {
        $('#messageToDragImgs').show();
      }
    });

    myDropzone.on("totaluploadprogress", function(progress) {
      //document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
    });

    myDropzone.on("sending", function(file) {
      //document.querySelector("#total-progress").style.opacity = "1";
      $(file.previewElement).find(".info").html('Uploaded!');
    });

    myDropzone.on("queuecomplete", function(progress) {
      //document.querySelector("#total-progress").style.opacity = "0";
    });

    $(".start").on('click', function() {
      myDropzone.processQueue();
    });

    document.querySelector("#picture-actions .cancel").onclick = function() {
      myDropzone.removeAllFiles(true);
      $('#messageToDragImgs').show();
    };
  },

  componentWillUnmount()
  {
  },

  render()
  {
    return (
      <div className="col-md-12" style={{paddingRight: '0'}}>
        <div className="col-md-8 col-xs-6">
          <h4><i className="glyphicon glyphicon-th" /> Nuevo Producto</h4>
        </div>
        <div className="col-md-4 col-xs-6" style={{textAlign: 'right', right: '50px'}}>
          <div className="btn-group" role="group" aria-label="...">
            <button onTouchTap={this.onSignUp} type="button" className="btn btn-default"><i className="glyphicon glyphicon-floppy-disk"></i> Guardar</button>
            <button type="button" className="btn"><i className="glyphicon glyphicon-floppy-disk"></i> Limpiar</button>
          </div>
        </div>
        <br />
        <br />
        <div style={{height: '100%', padding: '45px 65px 0 25px'}}>
          <div ref="basicDataPanel" id="basicDataPanel" style={{width: '100%', float: 'left'}}>
            <div>
              <h5>Datos básicos</h5>
            </div>
            <hr/>
            <form>
              <div className="form-group">
                <label for="product-code">Código</label>
                <input type="text" className="form-control" id="product-code" placeholder="" />
              </div>
              <div className="form-group info">
                <label for="product-name">Nombre</label>
                <input type="text" className="form-control" id="product-name" placeholder="" />
              </div>
              <div className="form-group">
                <label for="product-desc">Descripción</label>
                <textarea className="form-control" id="product-desc" placeholder=""></textarea>
              </div>
            </form>
          </div>
          <div ref="imagesUploaderPanel" id="imagesUploaderPanel" style={{width: '100%', float: 'left', display: 'none', marginBottom: '80px'}} className="slidedown">
            <div className="row">
              <div className="col-lg-4">
                <h3>Imágenes</h3>
              </div>
              <div id="picture-actions" className="col-lg-8 pull-right" style={{textAlign: 'right', paddingTop: '10px'}}>
                <div className="btn-group" role="group">
                  <button type="submit" className="btn btn-primary start">
                    <i className="glyphicon glyphicon-upload"></i>
                    <span> Upload</span>
                  </button>
                  <button type="reset" className="btn cancel">
                    <i className="glyphicon glyphicon-ban-circle"></i>
                    <span> Cancel</span>
                  </button>
                </div>
              </div>
            </div>
            <hr/>
            <div id="messageToDragImgs" style={{width: '100%', height: '200px', border: '2px dashed #dadada', borderRadius: '10px', margin: '50px 50px 50px 0', background: 'rgb(250,250,250)', textAlign: 'center', cursor: 'pointer'}}>
              <h4 style={{top: '35%', position: 'relative', color: '#D5D5D5'}}>Haz click o arrastra tus imágenes aquí</h4>
              <h6 style={{top: '35%', position: 'relative', color: '#D5D5D5', fontWeight: '300'}}>Tamaño máximo de 2 MB</h6>
            </div>
            <div key="tablePreviews" className="table table-striped" className="files" id="previews">
              <div id="template" className="file-row" style={{float: 'left'}}>
                <div className="row" style={{width: '100%', paddingRight: '10px'}}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{width: '100%', minWidth: '235px'}}>
                    <a className="thumbnail">
                      <div className="preview" style={{textAlign: 'center'}}>
                        <img style={{maxWidth: '195px', maxHeight: '130px', minHeight: '130px'}} data-dz-thumbnail />
                      </div>
                      <div className="caption">
                        <input type="text" className="form-control" placeholder="Titulo" data-dz-name></input>
                        <br/>
                        <div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Descripción"/>
                          </div>
                          <strong className="error text-danger" data-dz-errormessage></strong>
                        </div>
                        <div>
                          <h6 className="size" data-dz-size></h6>
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
              </div>
            </div>
          </div>
          <br />
          <br />
          <nav className="fixedBottomBar">
            <ul className="pager">
              <li style={{marginRight: '10px'}}><a onTouchTap={this._onPrev}><span aria-hidden="true">&larr;</span> Atrás</a></li>
              <li><a onTouchTap={this._onNext}>Siguiente <span aria-hidden="true">&rarr;</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  },

  _onPrev()
  {
    $('#imagesUploaderPanel').hide();
    $('#basicDataPanel').show();
  },

  _onNext()
  {
    $('#basicDataPanel').hide();
    $('#imagesUploaderPanel').show();
  }
});

module.exports = Products;