import emailjs from '@emailjs/browser';

const EMAIL_JS_SERVICE_ID = process.env.EMAIL_JS_SERVICE_ID
const EMAIL_JS_TEMPLATE_ID = process.env.EMAIL_JS_TEMPLATE_ID
const EMAIL_JS_PUBLIC_KEY = process.env.EMAIL_JS_PUBLIC_KEY


export default function emailSend(e) {
    
    var data = {
        name: e.name,
        phone: e.phone,
        email: e.email,
        message: e.message
    };

    fetch('http://localhost:3001/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response =>{
      if (!response.ok){
        throw new Error("errop na requisição")
      }
      return response.json()
    }).then(responseJson=>{
      console.log("SUCCESS!", responseJson)
    }).catch(error=>{
      console.log('FAILED...', error);
    })
}