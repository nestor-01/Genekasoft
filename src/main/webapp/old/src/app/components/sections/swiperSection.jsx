var React = require('react');

var Icons = require('../media/icons.jsx');

var SwiperSection = React.createClass({

    render: function()
    {
        return (
                <div id="intro" className="overlay-gradient" data-scroll-index="0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                {/* Intro Heading */}
                                <div className="headline">
                                    <h1 className="wow fadeInDown">¡TODO LO QUE QUIERES EN UN SOLO SITIO!</h1>
                                    <p className="wow fadeInDown" data-wow-delay="0.5s">Lo último en tecnología, repuestos importados de la mejor calidad</p>
                                </div>
                                {/* Intro Heading End */}

                                <Swiper baseDir="img/bg/" images={["phone1.png", "phone2.png", "phone3.png"]} />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = SwiperSection;