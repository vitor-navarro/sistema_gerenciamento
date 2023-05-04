export default function phone_validate(phone: string):boolean {
  
  phone = phone.trim()

  const phoneRegex =  /^((\+)?[1-9]{2}(\s)?)?((\()?[1-9][0-9](\))?(\s)?)?([9]{1})?([1-9]{1})[0-9]{3}([-]?[0-9]{4})$/;

  if (phone === '' || typeof phone === 'string' && phoneRegex.test(phone)) {
    return true;
  }

  return false;
}