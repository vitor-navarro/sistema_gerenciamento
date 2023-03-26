import emailjs from '@emailjs/browser';

const EMAIL_JS_SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID
const EMAIL_JS_TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID
const EMAIL_JS_PUBLIC_KEY = process.env.EMAIL_JS_PUBLIC_KEY

export function emailSend (e) {
    var templateParams = {
        name: 'James',
        phone: '0652455478',
        email: 'teste@gmail.com',
        message: 'Check this out!'
    };

    console.log('emailSend', templateParams)
    console.log('EMAIL_JS_SERVICE_ID', EMAIL_JS_SERVICE_ID)
    console.log('EMAIL_JS_TEMPLATE_ID', EMAIL_JS_TEMPLATE_ID)
    console.log('EMAIL_JS_PUBLIC_KEY', EMAIL_JS_PUBLIC_KEY)

    emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams, EMAIL_JS_PUBLIC_KEY)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}