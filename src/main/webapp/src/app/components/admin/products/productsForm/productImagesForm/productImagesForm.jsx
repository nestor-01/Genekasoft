var React = require('react');
var ProductCRUDStyles = require('../productCRUDStyles.jsx');
var ImageItemFile = require('./imageItemFile/imageItemFile.jsx');

var ImagesFormStyles = ProductCRUDStyles.imagesForm;
var DnDStyles = ImagesFormStyles.dndSection;

var ProductsImagesForm = React.createClass({

  getInitialState()
  {
    return {
      filePreviews: {},
      images: {},
      dropzoneProps: {
        previewsContainer: "#previews",
        thumbnailWidth: 295,
        thumbnailHeight: 150,
        maxThumbnailFilesize: 3,
        parallelUploads: 20,
        uploadMultiple: true,
        url: "http://localhost:8080/geneka/api/product/uploadImages",
        paramName: "file",
        autoProcessQueue: false,
        maxFilesize: 2,
        headers: {
          'Cache-Control': null,
          'X-Requested-With': null
        }
      }
    };
  },

  componentDidMount()
  {
    Dropzone.autoDiscover = false;

    var self = this;

    Dropzone.prototype.defaultOptions.addedfile = function(file)
    {
      var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;

          self.state.filePreviews[file.name] = file;
          self.forceUpdate();

          _ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            node.textContent = file.name;
          }
          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            node = _ref1[_j];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = function(file) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(this.options.dictCancelUploadConfirmation, function() {
                  return this.removeFile(file);
                });
              } else {
                if (this.options && this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(this.options.dictRemoveFileConfirmation, function() {
                    return this.removeFile(file);
                  });
                } else {
                  return this.removeFile(file);
                }
              }
            }.bind(this);
          }.bind(this);

          /** Remove event **/
          for(var fileName in self.state.filePreviews)
          {
            self.state.filePreviews[fileName]["onRemove"] = removeFileEvent(self.state.filePreviews[fileName]);
          }
          return _results;
        }
    };

    Dropzone.prototype.defaultOptions.removedfile = function(file) {
      delete self.state.filePreviews[file.name];
      self.forceUpdate();

      return this._updateMaxFilesReachedClass();
    };

    Dropzone.prototype.defaultOptions.thumbnail = function(file, dataUrl)
    {
      var thumbnailElement, _i, _len, _ref;

      self.refs[file.name].setThumbnail(dataUrl);

      if (file.previewElement) {
        file.previewElement.classList.remove("dz-file-preview");
        _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          thumbnailElement = _ref[_i];
          thumbnailElement.alt = file.name;
          thumbnailElement.src = dataUrl;
        }
        return setTimeout(((function(_this) {
          return function() {
            return file.previewElement.classList.add("dz-image-preview");
          };
        })(this)), 1);
      }
    };

    this.uploadPromise = $.Deferred();
    this.myDropzone = new Dropzone('#messageToDragImgs', this.state.dropzoneProps);

    this.myDropzone.on("addedfile", function(file) {
      //$('#messageToDragImgs').hide();
      //myDropzone.enqueueFile(file);
      //file.previewElement.querySelector(".start").onclick = function() { myDropzone.enqueueFile(file); };
    });

    this.myDropzone.on("removedfile", function(file) {
      //console.log(this.myDropzone.getQueuedFiles());
      /*if(this.myDropzone.getQueuedFiles().length == 0)
      {
        $('#messageToDragImgs').show();
      }*/
    }.bind(this));

    this.myDropzone.on("totaluploadprogress", function(progress) {
      //document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
    });

    this.myDropzone.on("sending", function(file) {
      //document.querySelector("#total-progress").style.opacity = "1";
      $(file.previewElement).find(".info").html('Uploaded!');
    });

    this.myDropzone.on("queuecomplete", function(progress) {
      //console.log("response: ", this.uploadResponse);
      
      //document.querySelector("#total-progress").style.opacity = "0";
    }.bind(this));

    this.myDropzone.on("successmultiple", function(files, response, e) {
      var dataFiles = response.data.paths;

      for(var fileName in dataFiles)
      {
        this.refs[fileName].setFilePath(dataFiles[fileName]);
      }

      this.uploadPromise.resolve(response);
    }.bind(this));

    $(".start").on('click', function() {
      this.myDropzone.processQueue();
    }.bind(this));

    document.querySelector("#picture-actions .cancel").onclick = function() {
      this.resetForm();
    }.bind(this);
  },

  componentDidUpdate()
  {
    if(Object.keys(this.state.filePreviews).length == 0)
    {
      $('#messageToDragImgs').show();
    }

    else
    {
      $('#messageToDragImgs').hide();
    }
  },

  render()
  {
    var getImageElements = function()
    {
      var images = [];

      for(var name in this.state.filePreviews)
      {
        var file = this.state.filePreviews[name];
        var element = <ImageItemFile ref={file.name} key={file.name} file={file} />;

        images.push(element);
      }

      return images;
    }.bind(this);

    return (
      <div>
        <div className="row">
          <div className="col-lg-4">
            <h3>Imágenes</h3>
          </div>
          <div id="picture-actions" className="col-lg-8 pull-right" style={{textAlign: 'right', paddingTop: '10px'}}>
            <div className="btn-group" role="group">
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
          <div className="row" style={{width: '100%', padding: '0 10px 80px 40px', textAlign: 'center'}}>
            {getImageElements()}
          </div>
        </div>
      </div>
    );
  },

  _onChangeTitle(e)
  {

  },

  _onChangeDescription(e)
  {

  },

  uploadImages(productName)
  {
    this.myDropzone.options.params = {
      productName: productName
    };

    this.myDropzone.processQueue();
    return this.uploadPromise.promise();
  },

  getImagesData()
  {
    var imageObjects = [];

    for(var fileName in this.state.filePreviews)
    {
      imageObjects.push(this.refs[fileName].getData());
    }

    return imageObjects;
  },

  resetForm()
  {
    this.myDropzone.removeAllFiles(true);
    $('#messageToDragImgs').show();
  }
});

module.exports = ProductsImagesForm;
