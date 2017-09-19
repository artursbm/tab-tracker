## Repositório para  o projeto AondeIr, app informativo para a sociedade de MG, idealizado pela Prof. Fabiana de Menezes, iniciado por Paulo Matos, finalizado por Artur Mello, com auxílio adiministrativo da empresa CPE Jr., iniciativa júnior dos alunos de Engenharia Elétrica da Escola de Engenharia da UFMG. ##

O repositório conterá arquivos do servidor em Node.js, e posteriores arquivos do conteúdo do cliente do aplicativo.

### Usando o Postman para fazer testes intermediários de métodos HTTP ###

### primeira funcionalidade para o Vue.js: register route/page ###

> Essa funcionalidade será o módulo node 'axios', que irá fazer a ligação entre o Vue.js (página) e a rota do servidor Express.js; Para isso, instalo o pacote axios na parte de client: uma biblioteca que permite fazer, a partir de uma página do app vue.js, uma requisição de método HTTP no server Express;


### Segunda Funcionalidade: Implementando a UI para o Register endpoint/page ###

> Primeira tarefa: construir uma página na porta 8080 que seja capaz de se conectar até o Register endpoint, a partir de uma UI. Essa UI vai ser um 'register component' (Vue.js front-end) para se conectar posteriormente ao 'register endpoint' (Express.js back-end). Essa parte foi realizada, e, sempre que o usuario digita user e passwd na UI, um POST é feito no server-side, que retorna uma mensagem de boas-vindas.

### Terceira Funcionalidade: Sequelize, um ORM que vai mapear a base de dados para modelos do JS, para facilitar na manipulação desses modelos ###

> A primeira coisa a se fazer é sincronizar o módulo sequelize com a database a ser utilizada (configurada em models), e, após essa conexão e configuração inicial,
o servidor pode ser conectado à porta configurada.

> Cada modelo mapeia uma tabela dentro de uma base de dados. Se eu não tenho a tabela, ela pode ser criada a partir do Sequelize model;

> Um arquivo 'models' vai exportar um objeto sequelize. Há um diretório ./models que vai guardar um arquivo index.js, que exporta um módulo de sequelize.

### Quarta funcionalidade: Definindo rotas (modificando ./routes) a partir do ./controllers (onde guardamos todas as definições dos endpoints ###

> A nova funcionalidade irá implementar a configuração das rotas, para gerar conteúdo a partir do cliente, e este terminar endereçando dados ao server. Será criada uma nova pasta, controllers, que irá guardar todas as definições de funções de cada endpoint, que é pra onde as rotas enviarão os dados inseridos ou requisitados pelo cliente;

> Em server/routes, apenas faço uma chamada para os endpoints a partir das rotas que estou definindo (vide app.post('/register', AuthenticationController.js));

> Em server/controllers, todos os endpoints são definidos, e exportados. AuthenticationController.js exporta todas as rotas  que estiverem associadas com Autenticação (/register, por exemplo);

### Quinta funcionalidade: adicionando uma framework para auxiliar na validação: Joi ###

> Joi é uma framework que valida as requisições (req.body, req.parameters, req.query, etc);

> Será criada um diretório chamado /src/policies, onde terá um arquivo para validar o controle de autenticação de usuário (se existe já aquele email cadastrado ou não);

> AuthenticationControllerPolicy se conecta ao routes.js, e vai fazer o trabalho de autenticação de usuário utilizando o framework Joi.

> Isso tudo funciona no Express assim: A Policy funciona como middleware antes de ir até o controller.

> Para realizar a encriptação da senha no BD, é utilizado o módulo Bcrypt-nodeJS.

> Criei campo username, e vou usar o Joi para não permitir que o usuário comece com número.

> Finalizando a parte de registro com a interface front-end sendo capaz de se comunicar com o endpoint /register

### Sexta funcionalidade: adicionando Vuetify [MATERIAL DESIGN] à UI, para melhorar aparência ###

> Utilizando uma framework para o Vue.js, Vuetify é uma plataforma para UI no padrão Material Design.

> link: [Vuetify](https://vuetifyjs.com/)

> Utilizando uma série de tags (semelhantes à ideia do Bootstrap), implementa-se o material design de forma eficiente e rápida.

> Atualizando colocando a toolbar em MD.

### Sétima funcionalidade: adicionando uma tela de login (fazendo check com o servidor) ###

> Foi feita uma UI para a tela de login, semelhante com  a tela de registro.

> O usuário precisa apenas digitar username e password, o servidor fará um crosscheck e retornará o status.

> Para encriptar a comunicação e autenticar de forma segura o usuário, foi utilizado o módulo JsonWebToken.

### Oitava funcionalidade: usando Vuex para o front-end ###

> Quando o projeto cresce, e existem vários componentes no app, a forma tradicional de comunicação entre esses componentes é por messages

> Vuex vem como alternativa para facilitar essa comunicação

> Vuex centraliza os componentes do app, não permitindo que sejam coisas "largadas", onde mudanças só ocorrem se forem previstas para ocorrer

> Vuex vai ajudar a manter os dados de usuário sendo persistentes em todas as telas

> Instalando também vuex-router, que mantém sincronia entre o Vuex e o roteamento feito

### Nona funcionalidade: A HORA DA VERDADE ---> IMPLEMENTANDO O QUIZ! ###

> O quiz só estará disponível quando o usuário logar, ou registrar-se