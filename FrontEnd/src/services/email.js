
export default function emailSend(e) {
    
    var data = {
        name: e.name,
        phone: e.phone,
        email: e.email,
        message: e.message
    };

    const baseURL = process.env.API_BASE_URL

    fetch(baseURL + 'emails/emailSend', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        data
      })
    }).then(response =>{
      console.log("SUCCESS!", response.data)
    }).catch(error=>{
      console.log('FAILED...', error);
    })

}