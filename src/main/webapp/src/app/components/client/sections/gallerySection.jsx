var React = require('react');
var Carousel = require('../carousels/carousel/carousel.jsx');

var GallerySection = React.createClass(
{
    getInitialState()
    {
        return {
            message: "",
            style: ''
        };
    },

    render()
    {
        return (
            <section id="gallery" className="clearfix" data-scroll-index="1">

                {/* Gallery */}
                <div className="gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">

                                {/* Heading */}
                                <div className="heading center">
                                    <h2 style={{color: 'white'}}>Haz un tour por nuestra galería de productos</h2>
                                    <p className="subheadline">Haz click en cada producto para ver los detalles</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <Carousel baseDir="img/bg/" images={
                                    [
                                        "screen1.jpg",
                                        "screen2.jpg",
                                        "screen3.jpg",
                                        "screen4.jpg",
                                        "screen4.jpg",
                                    ]
                                } />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = GallerySection;