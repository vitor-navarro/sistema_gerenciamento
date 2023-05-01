const { api } = require("./api")

export default function emailSend(e) {
    
    var data = {
        name: e.name,
        phone: e.phone,
        email: e.email,
        message: e.message
    };

    api.post('emails/emailSend', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response =>{
      console.log("SUCCESS!", response.data)
    }).catch(error=>{
      console.log('FAILED...', error);
    })

}