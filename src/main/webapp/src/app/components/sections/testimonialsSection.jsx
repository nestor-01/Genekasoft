var React = require('react');
var TestiCarousel = require('../carousels/testiCarousel.jsx');

var TestimonialsSection = React.createClass({

    propTypes: {
        testimonials: React.PropTypes.array
    },

    getInitalProps: function()
    {
        return {
            testimonials: []
        };
    },

    render: function()
    {
        return (
            <section id="testimonials" className="clearfix testimonials-background">

                {/* Testimonials */}
                <div className="testis">

                    {/* Overlay */}
                    <div className="overlay-silver bg"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">

                                {/* Heading */}
                                <div className="heading center">
                                    <h2>Más de 1.000 clientes satisfechos!</h2>
                                    <p className="subheadline">Esto es lo que nuestros clientes opinan de nuestro servicio</p>
                                </div>

                                <TestiCarousel testimonials={[
                                    {
                                        photo: 'img/bg/testi.jpg',
                                        name: 'John Doe',
                                        profession: 'Co-Founder of Chappi',
                                        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                                    },
                                    {
                                        photo: 'img/bg/testi.jpg',
                                        name: 'John Doe',
                                        profession: 'Co-Founder of Chappi',
                                        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                                    }
                                ]} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = TestimonialsSection;