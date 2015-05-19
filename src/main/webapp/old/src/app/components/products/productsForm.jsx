var React = require('react');
var Icons = require('../media/icons.jsx');

var Products = React.createClass({

  componentDidMount()
  {
    Dropzone.autoDiscover = false;

    var previewNode = document.querySelector("#template");
    previewNode.id = "";
    var previewTemplate = previewNode.parentNode.innerHTML;
    previewNode.parentNode.removeChild(previewNode);

    var myDropzone = new Dropzone('#add-file', {
      previewsContainer: "#previews",
      thumbnailWidth: 295,
      thumbnailHeight: 150,
      maxThumbnailFilesize: 3,
      parallelUploads: 20,
      uploadMultiple: false,
      previewTemplate: previewTemplate,
      url: "/geneka/api/product/uploadImages",
      paramName: "file",
      autoProcessQueue: false,
      maxFilesize: 20,
      params: {productName: 'productTest'}
    });

    myDropzone.on("addedfile", function(file) {
      //myDropzone.enqueueFile(file);
      //file.previewElement.querySelector(".start").onclick = function() { myDropzone.enqueueFile(file); };
    });

    myDropzone.on("sending", function(file) {
      //document.querySelector("#total-progress").style.opacity = "1";
      console.log("sending!");
      console.log($(file.previewElement));
      $(file.previewElement).find(".info").html('Uploading!');
    });

    myDropzone.on("totaluploadprogress", function(progress) {
      console.log("totaluploadprogress!");
      $(".info").html('UPLOADED!');
      //document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
    });

    myDropzone.on("queuecomplete", function(progress) {
      //document.querySelector("#total-progress").style.opacity = "0";
    });

    $(".start").on('click', function() {
      myDropzone.processQueue();
    });

    document.querySelector("#picture-actions .cancel").onclick = function() {
      myDropzone.removeAllFiles(true);
    };
  },

  render()
  {
    return (
      <div style={{marginTop: '30px', height: 'calc(100vh - 200px)'}}>
        <div className="col-xs-2" style={{height: '100%'}}>
          <ul className="nav nav-tabs tabs-left" style={{height: '100%'}}>
            <li className="active"><a href="#basicData" data-toggle="tab">Datos básicos</a></li>
            <li><a href="#images" data-toggle="tab">Imagenes</a></li>
            <li><a href="#categories" data-toggle="tab">Categorías</a></li>
          </ul>
        </div>
        <div className="col-xs-10" style={{height: '100%', overflowY: 'auto'}}>
          <div className="tab-content">
            <div className="tab-pane active" id="basicData">
              <h3>Datos básicos</h3>
              <hr/>
              <br/>
              <form>
                <div className="form-group">
                  <label for="product-code">Código</label>
                  <input type="text" className="form-control" id="product-code" placeholder="" />
                </div>
                <div className="form-group">
                  <label for="product-name">Nombre</label>
                  <input type="text" className="form-control" id="product-name" placeholder="" />
                </div>
                <div className="form-group">
                  <label for="product-desc">Descripción</label>
                  <textarea className="form-control" id="product-desc" placeholder=""></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
            <div className="tab-pane" id="images">
              <div className="row">
                <div className="col-lg-4">
                  <h3>Imágenes</h3>
                </div>
                <div id="picture-actions" className="col-lg-8 pull-right" style={{textAlign: 'right', paddingTop: '10px'}}>
                  <button id="add-file" className="btn btn-success fileinput-button">
                    <i className="glyphicon glyphicon-plus"></i>
                    <span> Add files</span>
                  </button>
                  <button type="submit" className="btn btn-primary start">
                    <i className="glyphicon glyphicon-upload"></i>
                    <span> Upload</span>
                  </button>
                  <button type="reset" className="btn btn-warning cancel">
                    <i className="glyphicon glyphicon-ban-circle"></i>
                    <span> Cancel</span>
                  </button>
                </div>
              </div>
              <hr/>

            {/*<div id="actions" className="row">
                <div className="col-lg-5">
                  <span className="fileupload-process">
                    <div id="total-progress" className="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                      <div className="progress-bar progress-bar-success" style={{width: '0%'}} data-dz-uploadprogress></div>
                    </div>
                  </span>
                </div>
              </div>*/}
              <div className="table table-striped" className="files" id="previews">
                <div id="template" className="file-row" style={{float: 'left'}}>
                  <div className="row" style={{width: '100%', paddingRight: '10px'}}>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{width: '100%', minWidth: '235px'}}>
                      <a className="thumbnail">
                        <div className="preview" style={{textAlign: 'center'}}>
                          <img style={{maxWidth: '195px', maxHeight: '130px', minHeight: '130px'}} data-dz-thumbnail />
                        </div>
                        <div className="caption">
                          <h4 className="name" style={{width: '100%', maxWidth: '177px', textOverflow: 'ellipsis', overflow: 'hidden', height: '19px'}} data-dz-name>Image</h4>
                          <div className="info">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Descripción"/>
                            </div>
                            <strong className="error text-danger" data-dz-errormessage></strong>
                          </div>
                          <div>
                            <h6 className="size" data-dz-size></h6>
                          {/*<div className="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                              <div className="progress-bar progress-bar-success" style={{width: '0%'}} data-dz-uploadprogress></div>
                            </div>*/}
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

                {/*<div>
                    <button className="btn btn-primary start">
                      <i className="glyphicon glyphicon-upload"></i>
                      <span> Start</span>
                    </button>
                    <button data-dz-remove className="btn btn-warning cancel">
                      <i className="glyphicon glyphicon-ban-circle"></i>
                      <span> Cancel</span>
                    </button>
                    <button data-dz-remove className="btn btn-danger delete">
                      <i className="glyphicon glyphicon-trash"></i>
                      <span>Delete</span>
                    </button>
                  </div>*/}
                </div>
              </div>
            </div>
            <div className="tab-pane" id="categories">
              <h3>Categorías</h3>
            </div>
          </div>
        </div>
      </div>
    );
    //
  }
});

module.exports = Products;