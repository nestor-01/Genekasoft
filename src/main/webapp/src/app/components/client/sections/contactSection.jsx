var React = require('react');

// Form imports
var Form = require('../../common/widgets/forms/form/form.jsx');
var TextField = require('../../common/widgets/forms/textfield/textfield.jsx');
var TextArea = require('../../common/widgets/forms/textarea/textarea.jsx');
var Submit = require('../../common/widgets/forms/submit/submit.jsx');

// Social imports
var SocialLinks = require('../social/socialLinks.jsx');
var ContactCard = require('../social/contactCard.jsx');

var ContactSection = React.createClass({

    render: function()
    {
        return (
            <section id="contact" className="clearfix" data-scroll-index="3">

                {/* Contact */}
                <div className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">

                                {/* Heading */}
                                <div className="heading center">
                                    <h2>¡Contactanos!</h2>
                                    <p className="subheadline">Nos encantaría oir tus comentarios acerca de nuestros productos, no dudes en ponerte en contacto con nosotros si deseas conocer más acerca de nuestras ofertas.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ContactCard
                                    location={{
                                        address: 'Calle 5 # 5 - 1',
                                        city: 'Santiago de Cali',
                                        country: 'Colombia'
                                    }}
                                    phones={['334-344-2323', '944-343-4545']}
                                    emails={['geneka@email.com']}
                                />
                                <SocialLinks />
                            </div>
                            <div className="col-md-6">
                                <Form id="contactform" method="post" action="#">
                                    <TextField id="contactname" placeholder="Nombre" />
                                    <TextField id="contactemail" placeholder="Correo electrónico" />
                                    <TextArea id="contactmessage" placeholder="Mensaje" />
                                    <Submit id="send" label="Enviar" />
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = ContactSection;