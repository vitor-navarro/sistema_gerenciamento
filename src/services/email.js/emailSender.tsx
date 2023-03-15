import emailJs from '@emailjs/browser';


interface emailObjectProps {
    name: string;
    phone?: string;
    email?: string;
    message: string;
}

const serviceID = process.env.EMAIL_JS_SERVICE_ID!;
const templateID = process.env.EMAIL_JS_TEMPLATE_ID!;
const publicKey = process.env.HCEuOJwTQn6kqliB8!;

export function emailSend(emailObject: emailObjectProps){
    if(!emailObject.phone && !emailObject.email){
        console.log('Preencha o campo de telefone ou email')
        return;
    }else{
        
        emailJs.sendForm(serviceID, templateID, 'contact-form', publicKey)
        .then((result) => {
            console.log(result.text);
        }
        , (error) => {
            console.log(error.text);
        }
        );
    }



}