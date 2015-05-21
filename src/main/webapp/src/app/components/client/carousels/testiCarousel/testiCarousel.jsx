var React = require('react');

var TestiCarousel = React.createClass({

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
        $(React.findDOMNode(this.refs.testiCarouselContainer)).owlCarousel({
            items: 1,
            itemsDesktop: [1199,1],
            itemsDesktopSmall: [991,1],
            itemsTablet: [768,1],
            slideSpeed: 800,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            pagination: true,
            autoHeight: true
        });
    },
    
    componentWillUnmount: function()
    {
        $(React.findDOMNode(this.refs.testiCarouselContainer)).off();
    },

    render: function()
    {
        return (
            <div ref="testiCarouselContainer" id="testi-carousel" className="owl-carousel">
                {this._getTestimonials()}
            </div>
        );
    },

    _getTestimonials: function()
    {
        return this.props.testimonials.map(function(testimonial, index){
            return (
                <div key={index}>
                    <blockquote>
                        <img className="img-responsive img-circle" src={testimonial.photo} alt="" />
                        <cite>{testimonial.name} <span>{testimonial.profession}</span></cite>
                        <p>{testimonial.content}</p>
                    </blockquote>
                </div>
            );
        });
    }
});

module.exports = TestiCarousel;