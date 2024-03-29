# Essencial para funcionamento

OBS: Configuração do .env é aqui, mas no arquivo .env tudo que estiver escrito - essencial é necessário para o funcionamento

(tutorial básico para quem nunca usou .env)

Existe no BackEnd um arquivo chamado .env.example.
Crie um arquivo .env ou renomeie o arquivo .env.example para .env.
OBS:(Eu possuo um .env.test, nele é modificado apenas o database para teste)

## As configurações essenciais para o funcionamento da aplicação são:
- A **PORT** onde a aplicação vai funcionar

Escolha a porta que preferir, nesse exemplo vou utilizar a PORT=3009


----


- As **CORS** aceitas da aplicação

 As cors aceitas é uma url de onde vão vir as suas requisições, é importante configura-lá pois caso não o faça qualquer um pode fazer requisição para a sua aplicação.

 A partir do Momento que a configurou corretamente ele só vai aceitar requisições de uma url especifica.

 Em desenvolvimento eu utilizei a seguinte configuração, ela é a config padrão do localhost:
 ENABLED_CORS=http://localhost:3000


----


- As informações de login do **DATABASE**.

 Sempre antes de utilizar o database inicie o XAMPP, e inicie o Module MySQL dele será a primeira actions escrito start.
 
 No Database existem 4 partes essenciais,
 
 - **DATABASE_NAME**:
 Abra seu Mysql workbench que já foi instalado ([caso não o tenha pode ver como fazer instalar aqui](https://github.com/vitor-navarro/sistema_gerenciamento/blob/main/info/Instalacao_necessaria.md))
 
 Caso seja sua primeira vez usando, provavelemente terá de configurar uma nova conexão, para isso deixo o video do Professor DB - [01 - Criando conexão no MySQL Workbench 6](https://www.youtube.com/watch?v=xzAdW7fW0p8)
 
 OBS: Caso seja local pode utilizar em HostName: localhost e username root(padrão)
 <br> <br>
 Após configurada a conexão, acesse-a e na parte de cima nos icones procure por Create a new schema in the connected Server, crie um schema com o nome que preferir, esse será o nome utilizado.
 <br> <br>
 Utilize o nome do schema criado no DATABASE_NAME, exemplo, nome do schema sistema_gerenciamento:
 
 No .env:
 DATABASE_NAME=sistema_gerenciamento
 
 - **DATABASE_USER_NAME**:
 
 O Username foi o que configurou no passo anterior, o padrão é root
 
 DATABASE_USER_NAME=root
 
 - **DATABASE_PASSWORD**:
 
 É a senha para acesso do database, caso não tenha configurado irá ser em branco:
 
 DATABASE_PASSWORD=""
 
 - **DATABSE_HOST**:
 
 é o host também configurado no passo do DATABASE_NAME, se for o localhost que está usando ficará assim:

 DATABSE_HOST=localhost
 
 
----


- A configuração da **SESSION**.

 Atualmente é apenas uma senha exigida pelo express-sessions, pode colocar o que você quiser
 
 SESSIONS_SECRET=minha_senha
 
 
----


Ao final dessas configurações nosso arquivo deve ter ficado parecido com isso:

PORT=3009<br>
ENABLED_CORS=http://localhost:3000

GMAIL_HOST=smtp.gmail.com<br>
GMAIL_PORT=587<br>
GMAIL_USER=<br>
GMAIL_PASS=<br>
GMAIL_TO_EMAIL_LIST=<br>
GMAIL_FROM_EMAIL=

SITE_COMPANY_NAME=

DATABASE_NAME=sistema_gerenciamento<br>
DATABASE_USER_NAME=root<br>
DATABASE_PASSWORD="" <br>
DATABSE_HOST=localhost

SESSIONS_SECRET=minha_senha

# Funções Adicionais

OBS: Caso não esteja atualizado ou faltando algo por favor contate o autor.

## Dentre as funções adicionais do sistema estão:

- Envio de emails

OBS: Ele está apenas para uma lista de emails predefinida atualmente, caso queira fique a vontade para fazer a funcionalidade de envio de emails personalizada.

- **GMAIL_HOST** - Não é necessário mudar
- **GMAIL_PORT** - Não é necessário mudar
- **GMAIL_USER** - Será seu email usado para enviar emails, que deve estar com a autenticação em duas etapas funcionando ([veja aqui](https://github.com/vitor-navarro/sistema_gerenciamento/blob/main/Backend%20-%20API/tutorials/pt-br/1-Conta_gmail.md) - Desculpe se estiver um pouco feio ou desatualizado vou arrumar isso mais para frente), como exemplo utilizarei teste_teste@gmail.com<br>
 GMAIL_USER=teste_teste@gmail.com
- **GMAIL_PASS** - Será sua senha porém não a senha do email, será uma senha gerada que pode [ver aqui](https://github.com/vitor-navarro/sistema_gerenciamento/blob/main/Backend%20-%20API/tutorials/pt-br/1-Conta_gmail.md) no passo 2 como cria-lá
- **GMAIL_TO_EMAIL_LIST** - lista de emails para a qual vai enviar emails, exemplo: teste_teste2@gmail.com teste_teste3@gmail.com.
- **GMAIL_FROM_EMAIL** - Título que vai aparecer no from do email exemplo: Email de teste < teste_teste@gmail.com >
<br>
- **SITE_COMPANY_NAME** - é o nome utilizado no template para enviar emails

No final nossa .env deve ficar assim:

PORT=3009<br>
ENABLED_CORS=http://localhost:3000

GMAIL_HOST=smtp.gmail.com<br>
GMAIL_PORT=587<br>
GMAIL_USER=teste_teste@gmail.com<br>
GMAIL_PASS='senha'<br>
GMAIL_TO_EMAIL_LIST=teste_teste2@gmail.com,teste_teste3@gmail.com<br>
GMAIL_FROM_EMAIL=Email de teste < teste_teste@gmail.com >

SITE_COMPANY_NAME=nome_para_envio_email

DATABASE_NAME=sistema_gerenciamento<br>
DATABASE_USER_NAME=root<br>
DATABASE_PASSWORD=""<br>
DATABSE_HOST=localhost

SESSIONS_SECRET=minha_senha
