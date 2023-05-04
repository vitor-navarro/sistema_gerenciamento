import getOneEmailByEmail from "@/services/api/users/user_emailGetOne";
import email_format_validator from "./email_format_validator";

interface EmailValidationResult{
    success : boolean,
    message : string,
}

export default function email_validator(email:string) : Promise<EmailValidationResult>{
    if (!email_format_validator(email)) {
        return Promise.resolve({
          success: false,
          message: "O Email não está no formato valido"
        });
      }
    
      return getOneEmailByEmail(email)
        .then(response => {
          if (response) {
            return {
              success: true,
              message: "Email Encontrado"
            };
          } else {
            return {
              success: false,
              message: "Email Não Encontrado"
            };
          }
        })
        .catch(error => {
          throw new Error('Erro ao buscar Email');
        });
    }