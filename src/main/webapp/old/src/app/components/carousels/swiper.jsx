var React = require('react');

var Swiper = React.createClass({

    propTypes:
    {
        baseDir: React.PropTypes.string,
        images: React.PropTypes.array
    },

    getDefaultProps: function()
    {
        return {
            baseDir: "/",
            images: []
        };
    },

    componentDidMount: function()
    {
        // Phone Slider Function
        var getSlide = function() {
            var wW = $(window).width();
            if (wW < 601) {
                return 1;
            }
            return 3;
        };
        
        // Phone Carousel
        var mySwiper = $('.swiper-container').swiper({

            mode:'horizontal',
            loop: true,
            speed: 950,
            effect: 'coverflow',
            slidesPerView: getSlide(),
            grabCursor: true,
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            coverflow: {
                rotate: -30,
                stretch: 10,
                depth: 120,
                modifier: 1,
                slideShadows: false
            }
        });

        // Set number of slide based on device width
        $(window).resize(function() {
            var wW = $(window).width();
            if (wW < 601) {
                mySwiper.params.slidesPerView = 1;
            } else {
                mySwiper.params.slidesPerView = 3;
            }
            mySwiper.reInit();
        });
    },
    
    componentWillUnmount: function()
    {
        $('.swiper-container').off();
        $(window).off();
    },

    render: function()
    {
        return (
            <div ref="swiper-container" className="swiper-container wow fadeIn" data-wow-delay="1.5s">

                {/* Arrows */}
                <a className="arrow-left" href="#" title=""><i className="fa fa-angle-left"></i></a>
                <a className="arrow-right" href="#" title=""><i className="fa fa-angle-right"></i></a>

                <div className="swiper-wrapper">
                    {this._getImageElements()}
                </div>
            </div>
        );
    },

    _getImageElements: function()
    {
        return this.props.images.map(function(image, index){
           return (
               <div key={index} className="swiper-slide">
                   <img className="img-responsive" src={this.props.baseDir + image} alt="" onTouchTap={this.onTouchTap} />
               </div>
           );
        }.bind(this));
    },

    onTouchTap: function()
    {
        //alert("ok");
    }
});

module.exports = Swiper;