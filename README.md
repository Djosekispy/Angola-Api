# API - Validação de NIF

## Funcionalidade Adicionada: Validação de NIF
Foi adicionada a funcionalidade de validação de NIF na API, permitindo consultar e verificar os dados de contribuintes registrados no portal tributário. Essa funcionalidade torna o sistema mais eficiente e seguro, possibilitando a validação automática de NIFs e a prevenção de erros manuais ou inconsistências nos registros.

### Importância para o Projeto
A validação de NIF é crucial em cenários onde a precisão das informações fiscais é essencial, como:
- Cadastro e autenticação de usuários.
- Consulta de dados fiscais para processamento de pagamentos ou emissão de notas fiscais.
- Geração de relatórios de conformidade tributária.

Essa funcionalidade aumenta a confiabilidade do sistema ao garantir que os dados fornecidos sejam consistentes com as informações oficiais do portal tributário.

## Rota Adicionada
### **`GET /api/v1/validate/nif/:nif`**
Essa rota permite validar um NIF específico consultando os dados diretamente no portal do contribuinte.

#### Parâmetro
- **`:nif`**: O NIF que será validado.

#### Respostas

##### Sucesso
**Status:** `200 OK`

**Exemplo de Resposta:**
```json
{
  "nif": "0123456789",
  "nome": "João Silva",
  "tipo": "Pessoa Singular",
  "estado": "Ativo",
  "regimeIva": "Regime Normal",
  "residenciaFiscal": "Luanda"
}
```
Essa resposta retorna as informações associadas ao NIF validado.

##### Erro - NIF Não Encontrado
**Status:** `404 Not Found`

**Exemplo de Resposta:**
```json
{
  "Message": "Nif não encontrado"
}
```
Essa resposta é retornada quando o NIF fornecido não é encontrado no portal do contribuinte.

## Como Utilizar
1. Faça uma requisição `GET` para a rota `/api/v1/validate/nif/:nif`, substituindo `:nif` pelo NIF que deseja validar.
2. Verifique o código de status da resposta e os dados retornados.
3. Caso o NIF não seja encontrado, um erro 404 será retornado.

### Exemplo de Requisição com cURL  (Possivel apenas quando está função ser aceite no projecto pai):
```bash
curl -X GET https://angolaapi.onrender.com/api/v1/validate/nif/0123456789
```

## Conclusão
Essa funcionalidade adicionada melhora significativamente a usabilidade e segurança da API, ao oferecer uma solução confiável para a validação de NIFs. Com isso, o sistema está mais preparado para atender às necessidades fiscais e garantir a integridade dos dados processados.

