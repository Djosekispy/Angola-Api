<h1 align="center"><img src="./public/logo.png"></h1>
<div align="center">
  <p>
    <strong>Vamos transformar Angola em uma API?</strong>
    <br/>
    <label> Que tal pegarmos a ideia do Brasil Api e levarmos em Angola ?</label>
  </p>
 </div>
 
 ## Sobre a ideia
 Imagina um país com 1.246.700 km² com cerca de 30 milhões de habitantes distribuido em 18 províncias, mas não possuir uma API pública para consulta de diversas informações sobre finanças, geografia ou validação de dados. Pois é, um grande problema. 
 
 Face a esse problema nos inspiramos na organização brasileira chamada [Brasil Api](https://github.com/BrasilAPI/BrasilAPI/) e decidimos reunir o maior número de informações necessária sobre Angola e distribuir de forma gratuita. 

 Nós conseguimos distribuir algumas informações bancarias como :
<ul>
  <li> Taxa de juro do BNA</li>
  <li> Taxa de juro Luibor (Taxa Interbancária de Oferta de Fundos do Mercado de Luanda)</li>
  <li> Taxa de inflação </li>
  <li> Taxas de câmbio no BNA</li>
  <li> Taxas de câmbio nos bancos comerciais</li>
  <li> Taxas de juros de bancos comerciais</li>
</ul>
Todas as informações acima são extraídas diretamente do site https://www.bna.ao. 
<br/>
<br/>
Também decidimos disponiblizar end points para validar as seguintes informações : 
 <ul>
   <li> Bilhete de identidade</li>
   <li> Pasaporte </li>
   <li> Número de celular</li>
 </ul>
Importante realçar que também conseguimos disponiblizar conteúdos como : 
 <ul>
   <li> Lista de provincias de Angola</li>
   <li> Lista de munícipios de uma província </li>
   <li> Lista de distritos de um munícipio</li>
 </ul>


## Endpoints
Embaixo segue a lista e descrição de endpoints implementados nesse projecto.
OBS: SSL está desabilitado nos endpoints.




#### Taxa de juros do Banco Nacional de Angola
Retorna o valor da taxa de juros do Bna.


**GET** `https://angolaapi.herokuapp.com/api/v1/banks/rates/interest/bna`

##### Exemplo da consulta
```json
// GET https://angolaapi.herokuapp.com/api/v1/banks/rates/interest/bna

{
  "rate": "15,5%"
}
```

#### Taxa de juros LUIBOR
Retorna o valor da Taxa Interbancária de Oferta de Fundos do Mercado de Luanda.

**GET** `https://angolaapi.herokuapp.com/api/v1/banks/rates/interest/luibor`

##### Exemplo da consulta
```json
// GET https://angolaapi.herokuapp.com/api/v1/banks/rates/interest/luibor

{
  "date": "10 de Setembro de 2020",
  "rates": [
    {
      "maturity": "Overnight",
      "rate": "5,38%"
    },
    {
      "maturity": "3 Meses",
      "rate": "12,35%"
    },
    {
      "maturity": "12 Meses",
      "rate": "16,14%"
    }
  ]
}
```
#### Taxa de inflação
Retorna o valor da Taxa de inflação do Banco Nacional de Angola.

**GET** `https://angolaapi.herokuapp.com/api/v1/banks/rates/inflation`

##### Exemplo da consulta
```json
// GET https://angolaapi.herokuapp.com/api/v1/banks/rates/inflation

{
  "date": "14 de Fevereiro de 2021",
  "status": "Dados referentes ao mês de Janeiro de 2021",
  "rates": [
    {
      "type": "Inflação Mensal",
      "rate": "1,50%"
    },
    {
      "type": "Inflação Acumulada",
      "rate": "1,50%"
    },
    {
      "type": "Inflação Homóloga",
      "rate": "24,41%"
    }
  ]
}
```


#### Taxas de câmbio do Banco Nacional de Angola
Retorna as taxas de câmbio mais importantes do BNA.


**GET** `https://angolaapi.herokuapp.com/api/v1/banks/rates/exchange`

##### Exemplo da consulta
```json
// GET https://angola-api.com/api/v1/banks/rates/exchange

{
  "rates": [
    {
      "currency": "USD",
      "rate": 635.762
    },
    {
      "currency": "EUR",
      "rate": 773.722
    },
    {
      "currency": "ZAR",
      "rate": 44.132
    }
  ]
}
```

#### Venda, compra, e taxa de variação das duas moedas estrangeiras mais populares de Angola
Retorna a cotação do dolar e euro nos principais bancos comerciais do país.


**GET** `https://angolaapi.herokuapp.com/api/v1/banks/rates/comercial-exchange`

##### Exemplo da consulta
```json
// GET https://angolaapi.herokuapp.com/api/v1/banks/rates/comercial-exchange

{
  "date": "25 de Fevereiro de 2021",
  "banks": [
    {
      "name": "Banco de Investimento Rural - (BIR)",
      "current": {
        "buy": [
          {
            "currency": "USD/AOA",
            "quotation": 572
          },
          {
            "currency": "EUR/AOA",
            "quotation": 712.07
          }
        ],
        "sell": [
          {
            "currency": "USD/AOA",
            "quotation": 699
          },
          {
            "currency": "EUR/AOA",
            "quotation": 854.55
          }
        ]
      },
      "lastDay": {
        "buy": [
          {
            "currency": "USD/AOA",
            "quotation": 595
          },
          {
            "currency": "EUR/AOA",
            "quotation": 715.31
          }
        ],
        "sell": [
          {
            "currency": "USD/AOA",
            "quotation": 698
          },
          {
            "currency": "EUR/AOA",
            "quotation": 854.55
          }
        ]
      },
      "variation": {
        "buy": [
          {
            "currency": "USD/AOA",
            "variation": "4,02%"
          },
          {
            "currency": "EUR/AOA",
            "variation": "0,46%"
          }
        ],
        "sell": [
          {
            "currency": "USD/AOA",
            "variation": "-0,14%"
          },
          {
            "currency": "EUR/AOA",
            "variation": "0,00%"
          }
        ]
      }
    },
    ...
  ]
    
```
#### Taxas de juro dos bancos comerciais para depósitos a prazo
Retorna o nome do banco, os dias e as taxas de juros de para depósitos a prazo efetuado pelos mesmos


**GET** `https://angolaapi.herokuapp.com/api/v1/banks/rates/interest/term-deposit`

##### Exemplo da consulta
```json
// GET https://angolaapi.herokuapp.com/api/v1/banks/rates/interest/term-deposit

{
  "date": "25 de Fevereiro de 2021",
  "banks": [
    {
      "name": "Banco Millenium Atlântico - (ATL)",
      "rates": [
        {
          "days": 30,
          "rate": "3,50%"
        },
        {
          "days": 90,
          "rate": "5,00%"
        },
        {
          "days": 360,
          "rate": "7,00%"
        }
      ]
    },
    {
      "name": "Banco Angolano de Investimentos - (BAI)",
      "rates": [
        {
          "days": 30,
          "rate": "4,50%"
        },
        {
          "days": 90,
          "rate": "7,00%"
        },
        {
          "days": 360,
          "rate": "11,0%"
        }
      ]
    },
    ...
  ]
```

### Geography 

#### Províncias
Retorna a lista de províncias do território nacional ou apenas uma província se o ID for informado.

**GET** `https://angolaapi.herokuapp.com/api/v1/geography/provinces`

##### Exemplo da consulta
```json
// GET https://angolaapi.herokuapp.com/api/v1/geography/provinces

[
  {
    "id": "6032c083c5686966bcc04202",
    "nome": "Bengo",
    "codigo": "BGO",
    "capital": "Caxito",
    "area": 15506,
    "populacao": 356641,
    "municipios": 6,
    "comunas": 23
  },
  {
    "id": "6032c083c5686966bcc04203",
    "nome": "Benguela",
    "codigo": "BGU",
    "capital": "Benguela",
    "area": 31788,
    "populacao": 2231385,
    "municipios": 10,
    "comunas": 38
  },
  {
    "id": "6032c083c5686966bcc04204",
    "nome": "Bié",
    "codigo": "BIE",
    "capital": "Cuíto",
    "area": 70314,
    "populacao": 1455255,
    "municipios": 9,
    "comunas": 39
  },
  ...
 ]
```

**GET** `https://angolaapi.herokuapp.com/api/v1/geography/provinces/`**[id]**

##### Exemplo da consulta
```json
// GET https://angolaapi.herokuapp.com/api/v1/geography/provinces/6032c083c5686966bcc04210

{
  "id": "6032c083c5686966bcc04210",
  "nome": "Moxico",
  "codigo": "MOX",
  "capital": "Luena",
  "area": 223023,
  "populacao": 758568,
  "municipios": 9,
  "comunas": 27
}
```
#### Munícipios
Busca pelos munícipios de uma determinada província

**GET** `https://angolaapi.herokuapp.com/api/v1/geography/county?provincia=`**[provincia]**

##### Exemplo da consulta
```json
// GET https://angolaapi.herokuapp.com/api/v1/geography/county?provincia=Luanda

[
  {
    "id": "6032c086c5686966bcc04270",
    "descricao": "",
    "nome": "Belas",
    "provincia": "Luanda"
  },
  {
    "id": "6032c086c5686966bcc04271",
    "descricao": "",
    "nome": "Cacuaco",
    "provincia": "Luanda"
  },
  {
    "id": "6032c086c5686966bcc04272",
    "descricao": "",
    "nome": "Cazenga",
    "provincia": "Luanda"
  },
  {
    "id": "6032c086c5686966bcc04273",
    "descricao": "",
    "nome": "Ícolo e Bengo",
    "provincia": "Luanda"
  },
  {
    "id": "6032c086c5686966bcc04274",
    "descricao": "",
    "nome": "Luanda",
    "provincia": "Luanda"
  },
  {
    "id": "6032c086c5686966bcc04275",
    "descricao": "",
    "nome": "Quilamba Quiaxi",
    "provincia": "Luanda"
  },
  {
    "id": "6032c086c5686966bcc04276",
    "descricao": "",
    "nome": "Quissama",
    "provincia": "Luanda"
  },
  {
    "id": "6032c086c5686966bcc04277",
    "descricao": "",
    "nome": "Talatona",
    "provincia": "Luanda"
  },
  {
    "id": "6032c086c5686966bcc04278",
    "descricao": "",
    "nome": "Viana",
    "provincia": "Luanda"
  }
]
```
### Validate 

#### Bilhete de identidade
Verifica se número informado é um bilhete de identidade nacional.

**GET** `https://angolaapi.herokuapp.com/api/v1/validate/bi/`**[bi]**

##### Consulta com sucesso
```json
// GET https://angolaapi.herokuapp.com/api/v1/validate/bi/006151112LA041
// Status: 200
{
  "message": "this is an Angola valid bi number"
}
```


##### Consulta com erro
```json
// GET https://angolaapi.herokuapp.com/api/v1/validate/bi/006151112LA04A
// Status: 400
{
  "message": "Invalid bi number"
}
```
#### Passaporte
Retorna se o registo informado é aceitavél como identificador de um passaporte angolano.

**GET** `https://angolaapi.herokuapp.com/api/v1/validate/passport/`**[passport]**

##### Consulta com sucesso
```json
// GET https://angolaapi.herokuapp.com/api/v1/validate/passport/n1234566
// Status: 200
{
  "message": "this is an Angola valid passport number"
}
```


##### Consulta com erro
```json
// GET https://angolaapi.herokuapp.com/api/v1/validate/passport/n12345667
// Status: 400
{
  "message": "Invalid passport number"
}
```

#### Telefone
Verifica se o número informado é de Angola e a qual operadora pertence.

**GET** `https://angolaapi.herokuapp.com/api/v1/validate/phone/`**[phone]**


##### Consulta com sucesso
```json
// GET https://angolaapi.herokuapp.com/api/v1/validate/phone/+244923445618
// Status: 200
{
  "message": "this is an Angola valid phone number",
  "operator": "Unitel"
}
```


##### Consulta com erro
```json
// GET https://angolaapi.herokuapp.com/api/v1/validate/phone/+8599562562
// Status: 400
{
  "message": "Invalid phone number"
}
```


## Chega de Português rsrsrs, abaixo os passos para contribuir no Angola Api 	

1. Fork it (https://github.com/Angola-Api/Angola-Api)	
2. Create your feature branch (`git checkout -b feature/fooBar`)	
3. Commit your changes (`git commit -am 'Add some fooBar'`)	
4. Push to the branch (`git push origin feature/fooBar`)	
5. Create a new Pull Request

## Autores

| [<img src="https://github.com/luteroelavoco.png?size=115" width=115><br><sub>@luteroelavoco</sub>](https://github.com/luteroelavoco) | [<img src="https://github.com/adilsonfuxe.png?size=115" width=115><br><sub>@adilsonfuxe</sub>](https://github.com/adilsonfuxe) |
| :---: | :---: |
