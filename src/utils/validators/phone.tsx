export default function phone_validate(phone: string):boolean {
  const phoneRegex = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;

  if (typeof phone === 'string' && phoneRegex.test(phone)) {
    return true;
  }

  return false;
}