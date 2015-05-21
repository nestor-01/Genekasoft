var React = require('react');

var Carousel = React.createClass({

    propTypes:
    {
        id: React.PropTypes.string,
        baseDir: React.PropTypes.string,
        images: React.PropTypes.array
    },

    getDefaultProps: function()
    {
        return {
            id: 'carousel-gallery-x',
            baseDir: "/",
            images: []
        };
    },

    componentDidMount: function()
    {
        var galleryContainer = React.findDOMNode(this.refs.galleryContainer);

        $(galleryContainer).owlCarousel({
            items: 4,
            itemsDesktop: [1199,4],
            itemsDesktopSmall: [991,3],
            itemsTablet: [768,3],
            slideSpeed: 800,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            pagination: true
        });

        $(galleryContainer).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery:{
                enabled:true
            }
        });
    },
    
    componentWillUnmount: function()
    {
        $(React.findDOMNode(this.refs.galleryContainer)).off();
    },

    render: function()
    {
        return (
            <div ref="galleryContainer" className="owl-carousel">
                {this._getImageElements()}
            </div>
        );
    },

    _getImageElements: function()
    {
        return this.props.images.map(function(image, index) {
            return (
                <div key={index} className="wow fadeIn" data-wow-delay={(index * 0.13) + "s"} data-wow-offset="300">
                    <div className="ico"><i className="fa fa-search"></i></div>
                    <a href={this.props.baseDir + image} title="">
                        <img className="img-responsive" src={this.props.baseDir + image} alt="" />
                    </a>
                </div>
            );
        }.bind(this));
    },

    onTouchTap: function()
    {
        //alert("ok");
    }
});

module.exports = Carousel;