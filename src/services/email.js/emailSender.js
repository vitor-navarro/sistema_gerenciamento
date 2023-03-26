import emailjs from '@emailjs/browser';

const EMAIL_JS_SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID
const EMAIL_JS_TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID
const EMAIL_JS_PUBLIC_KEY = process.env.EMAIL_JS_PUBLIC_KEY

export function emailSend (e) {

    var templateParams = {
        name: e.name,
        phone: e.phone,
        email: e.email,
        message: e.message
    };

    emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_PUBLIC_KEY)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}