# <img src="./public/logo.png">

<h1 align="center">
    Angola API
</h1>

<p align="center">
  <img alt="Angola API" src="https://img.shields.io/static/v1?label=Languages&message=2&color=d92e2e&labelColor=4f4f4f">
  <img alt="Angola API" src="https://img.shields.io/static/v1?label=Angola%20API&message=V1&color=8257E5&labelColor=000000">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<div align="center">
  <p align="center">
    <strong>Vamos transformar Angola em uma API?</strong>
    <br/>
    <label> Que tal pegarmos a ideia do Brasil API e levarmos em Angola?</label>
  </p>
</div>

<p align="center">
  <a href="#bulb-sobre-o-projecto">Sobre o Projecto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer_and_wrench-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#open_hands-como-contribuir">Como Contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-memo-License">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#busts_in_silhouette-colaboradores">Colaboradores</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bust_in_silhouette-autores">Autores</a>
</p>

## :bulb: Sobre o projecto

Imagina um país com 1.246.700 km² com cerca de 30 milhões de habitantes distribuído em 18 províncias, mas não possui uma API pública para consulta de diversas informações sobre finanças, geografia ou validação de dados. Pois é, um grande problema.

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
Também decidimos disponiblizar endpoints para validar as seguintes informações :
 <ul>
   <li> Bilhete de identidade</li>
   <li> Passaporte </li>
   <li> Número de telefone</li>
   <li> Número de identificação fiscal (NIF)</li>
 </ul>
Importante realçar que também conseguimos disponiblizar conteúdos como :
 <ul>
   <li> Lista de provincias de Angola</li>
   <li> Lista de munícipios de uma província </li>
   <li> Lista de distritos de um munícipio</li>
 </ul>

## :hammer_and_wrench: Tecnologias

Este projecto foi construído usando as seguintes tecnologias:

- [Javascript](https://www.w3schools.com/js/)
- [TypeScript](https://www.typescriptlang.org/)

## :link: Endpoints

Embaixo segue a lista e descrição de endpoints implementados nesse projecto.
OBS: SSL está desabilitado nos endpoints.

### Geography

#### Províncias

Retorna a lista de províncias do território nacional ou apenas uma província se o ID for informado.

**GET** `https://angolaapi.onrender.com/api/v1/geography/provinces`

##### Exemplo da consulta

```json
// GET https://angolaapi.onrender.com/api/v1/geography/provinces

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

**GET** `https://angolaapi.onrender.com/api/v1/geography/provinces/`**[id]**

##### Exemplo da consulta

```json
// GET https://angolaapi.onrender.com/api/v1/geography/provinces/6032c083c5686966bcc04210

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

**GET** `https://angolaapi.onrender.com/api/v1/geography/county?provincia=`**[municipio]**

##### Exemplo da consulta

```json
// GET https://angolaapi.onrender.com/api/v1/geography/county?provincia=Luanda

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

**GET** `https://angolaapi.onrender.com/api/v1/validate/bi/`**[bi]**

##### Consulta com sucesso

```json
// GET https://angolaapi.onrender.com/api/v1/validate/bi/006151112LA041
// Status: 200
{
  "success": true,
  "message": "This is an Angola valid bi number"
}
```

##### Consulta com erro

```json
// GET https://angolaapi.onrender.com/api/v1/validate/bi/006151112LA04A
// Status: 400
{
  "success": false,
  "message": "Invalid bi number"
}
```

#### Passaporte

Retorna se o registo informado é aceitavél como identificador de um passaporte angolano.

**GET** `https://angolaapi.onrender.com/api/v1/validate/passport/`**[passport]**

##### Consulta com sucesso

```json
// GET https://angolaapi.onrender.com/api/v1/validate/passport/n1234566
// Status: 200
{
  "message": "This is an Angola valid passport number"
}
```

##### Consulta com erro

```json
// GET https://angolaapi.onrender.com/api/v1/validate/passport/n12345667
// Status: 400
{
  "message": "Invalid passport number"
}
```

#### Telefone

Verifica se o número informado é de Angola e a qual operadora pertence.

**GET** `https://angolaapi.onrender.com/api/v1/validate/phone/`**[phone]**

##### Consulta com sucesso

```json
// GET https://angolaapi.onrender.com/api/v1/validate/phone/+244923445618
// Status: 200
{
  "message": "This is an Angola valid phone number",
  "operator": "Unitel"
}
```

##### Consulta com erro

```json
// GET https://angolaapi.onrender.com/api/v1/validate/phone/+8599562562
// Status: 400
{
  "message": "Invalid phone number"
}
```

#### Número de Identificação Fiscal (Nif)

Verifica se o NIF informado é de válido e a retorna os dados.

**GET** `https://angolaapi.onrender.com/api/v1/validate/nif/`**[nif]**

##### Consulta com sucesso

```json
// GET https://angolaapi.onrender.com/api/v1/validate/nif/003519344HA042
// Status: 200
{
  "nif": "003519344HA042",
  "nome": "João Silva",
  "tipo": "SINGULAR",
  "estado": "Activo",
  "regimeIva": "Sem actividade em IVA (Não factura IVA)",
  "residenciaFiscal": "Residente Fiscal"
}
```

##### Consulta com erro

```json
// GET https://angolaapi.onrender.com/api/v1/validate/nif/003519344HA047
// Status: 404
{
   "Message": "Nif não encontrado"
}
```


## :open_hands: Como contribuir

### Chega de Português rsrsrs, abaixo os passos para contribuir no Angola Api  

1. Faça um Fork no projecto (<https://github.com/Angola-Api/Angola-Api>)
2. Cria uma branch com a tua feature (`git checkout -b angolaapi/new-feature`)
3. Faça um Commit com as tuas mudanças (`git commit -am 'Add new feature'`)
4. Faça um Push para a Branch (`git push origin feature/new-feature`)
5. Cria uma Pull Request

## :memo: License

Este projeto está sob a licença do MIT. Acessa: (<https://opensource.org/licenses/MIT>) para mais detalhes.

## :busts_in_silhouette: Colaboradores

| [<img src="https://github.com/carlcr.png?size=115" width=115><br><sub>@carlcr</sub>](https://github.com/carlcr) | [<img src="https://github.com/alexxfreitag.png?size=115" width=115><br><sub>@alexxfreitag</sub>](https://github.com/alexxfreitag) |
| :---: | :---: |
| [<img src="https://github.com/ViniciusCarvalhoDev.png?size=115" width=115><br><sub>@ViniciusCarvalhoDev</sub>](https://github.com/ViniciusCarvalhoDev) | [<img src="https://github.com/Nurul-GC.png?size=115" width=115><br><sub>@Nurul-GC</sub>](https://github.com/Nurul-GC) |

## :bust_in_silhouette: Autores

| [<img src="https://github.com/luteroelavoco.png?size=115" width=115><br><sub>@luteroelavoco</sub>](https://github.com/luteroelavoco) | [<img src="https://github.com/adilsonfuxe.png?size=115" width=115><br><sub>@adilsonfuxe</sub>](https://github.com/adilsonfuxe) |
| :---: | :---: |
