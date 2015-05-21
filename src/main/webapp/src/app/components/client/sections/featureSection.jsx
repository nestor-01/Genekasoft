var React = require('react');

var FeatureSection = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        baseDir: React.PropTypes.string,
        images: React.PropTypes.array,
        features: React.PropTypes.array
    },

    getDefaultProps: function()
    {
        return {
            id: 'feature-x',
            baseDir: "/",
            images: [],
            features: []
        };
    },

    componentDidMount: function()
    {
        
    },

    render: function()
    {
        return (
            <section id="features" className="clearfix">

              {/*<!-- Feature One -->*/}
              <div className="feature">

                {/*<!-- Overlay -->*/}
                <div className="overlay-silver bg"></div>
                
                  {/*<!-- Overlay -->*/}
                  <div className="container">
                    <div className="row">

                      {/*<!-- Features Content -->*/}
                      <div className="col-sm-6 col-sm-push-6 col-md-6 col-md-push-6">

                        {/*<!-- Heading -->*/}
                        <div className="heading">
                            <h2>El producto de moda!</h2>
                            <p className="subheadline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut abore et dolore magna</p>
                        </div>

                        {this._getFeaturedElements()}
                    </div>
                    <div className="col-sm-6 col-sm-pull-6 col-md-6 col-md-pull-6">
                        {this._getFeatureImages()}
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    },

    _getFeaturedElements: function()
    {
        return this.props.features.map(function(feature, index){
            return (
                <div key={index} className="feature-block">
                    <i className={feature.icon}></i>
                    <h3>{feature.title}</h3>
                    <p>{feature.content}</p>
                </div>
            );
        }.bind(this));
    },
    
    _getFeatureImages: function()
    {
        var ordinal = ['first', 'second'];
        
        return this.props.images.map(function(image, index) {
            return (
                <img key={index} className={"img-responsive " + ordinal[index] + " wow fadeInLeft"} src={this.props.baseDir + image.src} alt="" data-wow-offset={image.offset} data-wow-delay={image.delay} />
            );
        }.bind(this));
    },

    onTouchTap: function()
    {
        //alert("ok");
    }
});

module.exports = FeatureSection;