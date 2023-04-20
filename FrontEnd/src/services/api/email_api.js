export default function emailSend(e) {
    
    var data = {
        name: e.name,
        phone: e.phone,
        email: e.email,
        message: e.message
    };

    console.log(data)

    fetch('http://localhost:3001/emails/emailSend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response =>{
      if (!response.ok){
        throw new Error("erro na requisição")
      }
      return response.json()
    }).then(responseJson=>{
      console.log("SUCCESS!", responseJson)
    }).catch(error=>{
      console.log('FAILED...', error);
    })
}