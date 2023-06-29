import getOneUserByName from "@/services/users/user_getOne"

interface UserValidationResult{
    success : boolean,
    message : string,
}

export default function user_validator(user: string) : Promise<UserValidationResult> {

  if (user.length < 3) {
    return Promise.resolve({
      success: false,
      message: "O nome de usuário deve ter ao menos 3 Dígitos"
    });
  }

  return getOneUserByName(user)
    .then(response => {
      if (response) {
        return {
          success: true,
          message: "Usuário Encontrado"
        };
      } else {
        return {
          success: false,
          message: "Usuário Não Encontrado"
        };
      }
    })
    .catch(error => {
      throw new Error('Erro ao buscar usuário');
    });
}



    
    
    
    
    