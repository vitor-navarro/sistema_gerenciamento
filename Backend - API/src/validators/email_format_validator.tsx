function email_format_validator(email : string) : boolean{

  email = email.trim()

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  
  if (typeof email === 'string' && emailRegex.test(email)) {
      return true;
    }

    return false;
        
}

module.exports = email_format_validator