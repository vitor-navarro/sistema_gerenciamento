import emailJs from '@emailjs/browser';

interface emailObjectProps {
    name: string;
    phone?: string;
    email?: string;
    message: string;
}

export function emailSend(emailObject: emailObjectProps){
    if(!emailObject.phone && !emailObject.email){
        return 'Preencha o campo de telefone ou email'
    }else{
        emailJs.sendForm('service_7pjx8yj', 'template_1', e.target, 'user_1')
        .then((result) => {
            console.log(result.text);
        }
        , (error) => {
            console.log(error.text);
        }
        );
    }



}