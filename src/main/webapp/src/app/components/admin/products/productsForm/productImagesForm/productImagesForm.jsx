var React = require('react');
var ProductCRUDStyles = require('../productCRUDStyles.jsx');

var ImagesFormStyles = ProductCRUDStyles.imagesForm;
var DnDStyles = ImagesFormStyles.dndSection;

var ProductsImagesForm = React.createClass({

  componentDidMount()
  {
    /*Dropzone.autoDiscover = false;

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
      url: "http://localhost:8080/geneka/api/product/uploadImages",
      paramName: "file",
      params: {
        productName: 'myProduct'
      },
      autoProcessQueue: false,
      maxFilesize: 2,
      headers: {
        'Cache-Control': null,
        'X-Requested-With': null
      }
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
    };*/
  },

  render()
  {
    return (
      <div>
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
        <div id="messageToDragImgs" style={DnDStyles.panel}>
          <h4 style={DnDStyles.message1}>Haz click o arrastra tus imágenes aquí</h4>
          <h6 style={DnDStyles.message2}>Tamaño máximo de 2 MB</h6>
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
    );
  }
});

module.exports = ProductsImagesForm;
