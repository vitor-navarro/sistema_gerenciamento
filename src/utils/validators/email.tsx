export default function email_validate(email : string) : boolean{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        return false;
      }
      else{
        return true;
      }
        
}