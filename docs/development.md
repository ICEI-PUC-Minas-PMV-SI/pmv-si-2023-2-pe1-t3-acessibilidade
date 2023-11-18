Programação de Funcionalidades
Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:

Login do sistema: https://repl.it/@rommelpuc/LoginApp
Cadastro de Contatos: https://repl.it/@rommelpuc/Cadastro-de-Contatos
Links Úteis:

Trabalhando com HTML5 Local Storage e JSON
JSON Tutorial
JSON Data Set Sample
JSON - Introduction (W3Schools)
JSON Tutorial (TutorialsPoint)
Exemplo
Requisitos Atendidos
As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)



### Requisitos Funcionais

|ID    | Descrição do Requisito  | Artefato | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve permitir que o usuário crie um perfil pessoal | cadastro.html | Matheus |
|RF-002| A aplicação deve permitir que o estabelecimento crie um perfil  | cadastro.html | Matheus |
|RF-003| A aplicação deve permitir que o usuário delete seu perfil pessoal | perfilUser.html | Gabriela |
|RF-004| A aplicação deve permitir que o estabelecimento delete seu perfil | perfilEst.html | Gabriela |
|RF-005| A aplicação deve permitir que o usuário edite o perfil pessoal | perfilUser.html | Gabriela |
|RF-006| A aplicação deve permitir que o estabelecimento edite o perfil | perfilEst.html | Gabriela |
|RF-007| A aplicação deve permitir que o usuário consulte seu perfil pessoal |  perfilUser.html  | Gabriela |
|RF-008| A aplicação deve permitir que o estabelecimento consulte seu perfil  | perfilEst.html | Gabriela |
|RF-009| A aplicação deve permitir que o usuário veja um pefil do um lugar | infoLocal.html | Ana Cecilia|
|RF-010| A aplicação deve permitir que o usuário veja uma lista de lugares | infoLocal.html |Ana Cecilia |
|RF-011| A aplicação deve permitir que o usuário filtre a lista de lugares por tipo de acessibilidade, categoria do lugar e cidade | Em construção | Mariana |
|RF-012| A aplicação deve permitir que o usuário avalie um lugar |  Em construção | Ana Cecilia |
|RF-013| A aplicação deve permitir que o usuário envie um comentário sobre o lugar |  Em construção |Ana Cecilia |
|RF-014| A aplicação deve permitir que o usuário veja comentários sobre o lugar |  Em construção | Ana Cecilia|
|RF-015| A aplicação deve auxiliar o usuário a navegar nas suas funcionalidades com um assistente virtual | Em construção | Mariana |
|RF-016| A aplicação deve mostrar para quais deficiências o local é acessível | infoLocal.html | Ana Cecilia |
|RF-017| A aplicação deve mostrar quais os tipos de deficiências | tipoDef.html | Ana Cecilia|
|RF-018| A aplicação deve apresentar a iniciativa | iniciativa.html | Matheus|
|RF-019| A aplicação deve apresentar as informações sobre acessibilidade| infoAcesse.html | Gabriela|
|RF-020| A aplicação deve mostrar como funciona a plataforma| comoFun.html | Mariana|

## Descrição das estruturas:

## Cadastrar/Editar perfil usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do usuário  | Numero (Inteiro)  | Identificador único do User               | 1                                              |
| Nome           | Texto             | Nome do User                              | Lucas Silva                                    |
| E-mail         | Texto             | E-mail do User                            | lucasilva@email.com                            |
| Senha          | Texto             | Senha de acesso ao site                   | Lucassilva@22                                  |

## Cadastrar/Editar perfil estabelecimento
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id do Estabelecimento | Numero (Inteiro)  | Identificador único do User               | 1                                              |
| Nome do estabelecimento            | Texto             | Nome do estabelecimento                              | Churrascaria BeloMonte
| E-mail         | Texto             | E-mail do estabeleciemento                             | churrasbelomonte@email.com                            |
| Senha          | Texto             | Senha de acesso ao site                   | estabe@22                                  |                    |
| Fotos  | JPEG, JPG e PNG          | Fotos do local |            FOTO                                      |
| Conteúdo  | Texto        | Conteúdo do estabelecimento |          Possui rampa de acesso...                                      |


