var React = require('react');

var Form = require('../forms/form.jsx');
var EmailField = require('../forms/emailfield.jsx');
var Label = require('../forms/label.jsx');
var Submit = require('../forms/submit.jsx');

var Newsletter = React.createClass({

    propTypes:
    {
        baseDir: React.PropTypes.string,
        images: React.PropTypes.array
    },

    componentDidMount: function()
    {
        var newsletterMail = this.refs.newsletterMail;
        var subscribeMessage = $(this.refs.subscribeMessage.getDOMNode());

        this.refs.newsletterForm.setUpMailChimp({
            url:'http://testtesttest.us9.list-manage2.com/subscribe/post?u=008a9a2d943991d29216928b5&id=058e093803',
            done: function() {
                newsletterMail.setStyle('');
                subscribeMessage.html('<i class="fa fa-check"></i> Hemos enviado la confirmación a tu correo.').fadeIn().css("color", "#29b94f");
            },
            fail: function() {
                newsletterMail.setStyle('error');
                subscribeMessage.html('<i class="fa fa-warning"></i> Debe ingresar una dirección de correo válida.').fadeIn().css("color","#ef4b4b");
            }
        });
    },
    
    componentWillUnmout: function()
    {
        $(this.refs.subscribeMessage.getDOMNode()).off();
    },

    render: function()
    {
        return (
            <section id="newsletter" className="clearfix newsletter-background" data-scroll-index="2">
                <div className="newsletter overlay-gradient2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">

                                {/* Heading */}
                                <div className="heading center inverted">
                                    <h2>MANTENTE AL DÍA</h2>
                                    <p className="subheadline">Recibe notificaciones de nuestras promociones directamente en tu correo electrónico.</p>
                                </div>

                                {/* Subscribe Form */}
                                <Form ref="newsletterForm" nomethod={true}>
                                    <EmailField ref="newsletterMail" placeholder="Tu correo electrónico" />
                                    <Label ref="subscribeMessage" />
                                    <Submit id="subscribeSubmit" label="Send" />
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Newsletter;
