# Essencial para funcionamento

### A configuração do arquivo .env do front é simples, até o momento tenho apenas a url da API, isso vai depender da [configuracao_backend](https://github.com/vitor-navarro/sistema_gerenciamento/blob/main/info/configuracao_backend.md) para funcionar.
Tanto as features essenciais quanto as adicionais são configuradas pela .env do backend.

### Para configurar a .env
(tutorial básico para quem nunca usou .env)

- Existe no FrontEnd um arquivo chamado .env.example.
- Crie um arquivo .env ou renomeie o arquivo .env.example para .env.
- Provavelmente será localmente que estará usando a aplicação então o que você vai fazer é juntar: http://localhost: com a porta usada pelo backend + /.
- Exemplo no PORT você utilizou a porta 3009 então seu arquivo de configuração de váriaveis de ambiente .env vai ficar assim:
API_BASE_URL=http://localhost:3009/
OBS: é importante colocar / no final caso o contrário irá dar erro ao fazer fetchs.

# Funções Adicionais

Como eu disse em [configuracao_backend](https://github.com/vitor-navarro/sistema_gerenciamento/blob/main/info/configuracao_backend.md) algumas partes do .env de la não são essenciais a principio para o funcionamento do sistema.

Como por exemplo o envio de emails.
