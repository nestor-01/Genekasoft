var React = require('react');
var SwiperSection = require('./../sections/swiperSection.jsx');
var ContactSection = require('./../sections/contactSection.jsx');
var NewsletterSection = require('./../sections/newsletterSection.jsx');
var GallerySection = require('./../sections/gallerySection.jsx');
var FeatureSection = require('./../sections/featureSection.jsx');
var TestimonialSection = require('./../sections/testimonialsSection.jsx');

var Search = require('../search/search.jsx');

var Icons = require('../../common/constants/icons.jsx');

var Content = React.createClass({

    componentDidMount()
    {
      $('body').css('overflow', 'auto');
      this.props.onInit('app');
    },

    _onCancelSearch()
    {
        React.findDOMNode(this.refs.initMessage).style.display = 'block';
    },

    _onSearch()
    {
        React.findDOMNode(this.refs.initMessage).style.display = 'none';
    },

    render: function()
    {
        return (
            <div id="content">
                <div ref="initMessage" className="header col-md-12" style={{textAlign: 'center'}}>
                    <h2 style={{color: 'white'}}>!TODO LO QUE NECESITAS EN UN SOLO SITIO!</h2>
                    <br />
                </div>
                <Search onSearch={this._onSearch} onCancelSearch={this._onCancelSearch}/>
                {/*<Swiper baseDir="img/bg/" images={["phone1.png", "phone2.png", "phone3.png"]} />*/}
                {/*<GallerySection />
                <FeatureSection features={[
                    {
                        icon: Icons.rocket,
                        title: 'Diseño moderno',
                        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo'
                    },
                    {
                        icon: Icons.cogs,
                        title: 'Fácil de personalizar',
                        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempo'
                    }
                ]} baseDir='img/bg/' images={[
                    {
                        src: 'phones1.png',
                        offset: '300',
                        delay: '0s'
                    },
                    {
                        src: 'phones2.png',
                        offset: '300',
                        delay: '0.5s'
                    }
                ]} />
                <TestimonialSection />
                <NewsletterSection />
                <ContactSection />*/}
            </div>
        );
    }
});

module.exports = Content;