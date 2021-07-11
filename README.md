# API REST + CRUD com MongoDB
Projeto Final - Turma On11 do curso Todas em Tech - {reprograma}
## Empodera a Juba 🦁
![img](https://i.imgur.com/DqEmw21.png)

<p>Essa API surgiu da dificuldade de pessoas com cabelos crespos ou cacheados encontrarem empreendimentos especializados em cortes, tratamentos e tranças, tendo como principal objetivo concentrar em um só local e ser uma API de mão dupla: fazendo a ligação de pequenos empreendedores que não têm um público fiel com crespas e cacheadas que precisam desses serviços.</p><p>O projeto consiste em uma API Rest em Nodejs, que realiza operações de criar, buscar, atualizar e deletar empreendimentos, bem como seus serviços, métodos de pagamento e localização, com os serviços acima descritos.<p>


## 🖥 Ambientes utilizados
- [Visual Studio Code](https://code.visualstudio.com/Download)
- [Insomnia](https://insomnia.rest/download)
- [Mongo Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=na&utm_source=google&utm_campaign=gs_americas_brazil_search_core_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=13564785545&gclid=Cj0KCQjwiqWHBhD2ARIsAPCDzak8as0viVQpJ4yutLMWnHSaaky7ECoUc-dN7iVjdtgZhZITJhB4nnsaAkEBEALw_wcB)



## ⚙ Configurações Iniciais:
1. Clone o repositório utilizando o Git:
``` bash 
git clone https://github.com/karlaathamiris/reprograma-empodera-juba.git
```
2. Abra o projeto no Visual Studio Code
3. Abra o terminal, com o atalho CTRL + J

**Para os passos seguintes, você deve ter instalado e configurado em sua máquina o nodejs, o npm e suas dependências**

4. O comando abaixo só precisará ser executado a primeira vez para instalar as dependêcias
``` bash
$ npm install
```
5. Para rodar/executar o projeto, execute o comando
``` bash
$ npm start
```

## 📁 Arquitetura 

```
 📁 reprograma-empodera-juba
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 controllerBraids.js
   |         |- 📄 controllerPaymentMethod.js
   |
   |    |- 📁 models
   |         |- 📄 braids.js
   |         |- 📄 paymentMethod.js
   |
   |    |- 📁 routes
   |         |- 📄 braidsRoutes.js 
   |         |- 📄 paymentMethodRoutes.js 
   |         |- 📄 index.js
   |
   |- 📄 app.js
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js
   |- 📄 README.md

```
## 🛣 Endpoints 

### Rota principal 
https://reprograma-empodera-juba.herokuapp.com/

**GET/empodera/braids/getAll**
<p>Retorna todos os salões/trancistas cadastradas<p>

**GET/empodera/braids/:id**
<p>Retorna um salão/trancista cadastrada, através do id<p>

**GET/empodera/braids/register**
<p>Registra, através de um json, o empreendimento, com os campos:<p>

```json

	"name": "NomeEstabelecimento",
	"email": "teste@outlook.com",
	"city": "Cidade",
	"district": "Bairro",
	"services": [
		"corte",
		"tranças box braids",
		"tratamento"
	],
	"phone": "88 999999999",
	"social": "@testeboxbraids",
  "paymentMethods": [
    "id_do_metodo_de_pagamento"
  ]

```

**PATCH/empodera/braids/:id**
<p>Atualiza os dados, passados como parâmetros na requisição, também em forma de JSON.
Através do ID do local requerido.<p>

**DELETE/empodera/braids/:id**
<p>Com o ID como referência, essa rota deleta um empreendimento da sua base de dados.<p>


### Métodos de Pagamento
Possuem uma tabela e rotas próprias, pré-cadastrada no banco de dados com todos os métodos de pagamentos disponíveis para uso e relacionamento a partir de seus IDs. 
Para poder fazer a correspondência correta, busque a partir da rota:

**GET/empodera/payment/getAll**
Irá retornar os métodos já populados no MongoDB, como no exemplo:

```json
{
  "payment": [
    {
      "_id": "60ea1f7ff555442c82bcc08f",
      "label": "Boleto",
      "__v": 0
    },
    {
      "_id": "60ea1f89f555442c82bcc091",
      "label": "Cartão de crédito",
      "__v": 0
    }
}
```