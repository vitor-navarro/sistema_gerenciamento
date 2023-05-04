

export default function getOneEmailByEmail(email: string): Promise<boolean> {
    const base_url = process.env.API_BASE_URL;
    const url = base_url + "auth/emailExist";
  
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email
    })
  })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 401) {
      return response.json();
    } else {
      throw new Error('Erro ao buscar Email');
    }

  })
  .then(data => {
    return data;
  })
  .catch(error => {
   throw new Error('Erro ao buscar Email');
  });
}