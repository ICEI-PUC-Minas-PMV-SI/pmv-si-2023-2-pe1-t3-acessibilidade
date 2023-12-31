



### Requisitos Funcionais

|ID    | Descrição do Requisito  | Artefato | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve permitir que o usuário crie um perfil pessoal | cadastro.html | Matheus + Mari |
|RF-002| A aplicação deve permitir que o estabelecimento crie um perfil  | cadastro.html | Matheus + Mari |
|RF-003| A aplicação deve permitir que o usuário delete seu perfil pessoal | perfilUser.html | Gabriela |
|RF-004| A aplicação deve permitir que o estabelecimento delete seu perfil | perfilEst.html | Gabriela |
|RF-005| A aplicação deve permitir que o usuário edite o perfil pessoal | perfilUser.html | Gabriela + Mari |
|RF-006| A aplicação deve permitir que o estabelecimento edite o perfil | perfilEst.html | Gabriela + Mari |
|RF-007| A aplicação deve permitir que o usuário consulte seu perfil pessoal |  perfilUser.html  | Gabriela + Mari |
|RF-008| A aplicação deve permitir que o estabelecimento consulte seu perfil  | perfilEst.html | Gabriela + Mari |
|RF-009| A aplicação deve permitir que o usuário veja um pefil do um lugar | infoLocal.html | Ana Cecilia + Mari |
|RF-010| A aplicação deve permitir que o usuário veja uma lista de lugares | infoLocal.html | Ana Cecilia |
|RF-011| A aplicação deve permitir que o usuário filtre a lista de lugares por tipo de acessibilidade, categoria do lugar e cidade | Mari |
|RF-012| A aplicação deve permitir que o usuário avalie um lugar |  avaliar.html | Mari |
|RF-013| A aplicação deve permitir que o usuário envie um comentário sobre o lugar |  avaliar.html | Mari |
|RF-014| A aplicação deve permitir que o usuário veja comentários sobre o lugar |  avaliar.html | Mari |
|RF-015| A aplicação deve auxiliar o usuário a navegar nas suas funcionalidades com um assistente virtual | Em construção | Mariana |
|RF-016| A aplicação deve mostrar para quais deficiências o local é acessível | infoLocal.html | Ana Cecilia |
|RF-017| A aplicação deve mostrar quais os tipos de deficiências | tipoDef.html | Ana Cecilia |
|RF-018| A aplicação deve apresentar a iniciativa | iniciativa.html | Matheus |
|RF-019| A aplicação deve apresentar as informações sobre acessibilidade| infoAcesse.html | Gabriela|
|RF-020| A aplicação deve mostrar como funciona a plataforma| comoFun.html | Mariana |

## Descrição das estruturas:

## Cadastrar/Editar perfil usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome           | Texto             | Nome do User                              | Lucas Silva                                    |
| E-mail         | Texto             | E-mail do User                            | lucasilva@email.com                            |
| Senha          | Texto             | Senha de acesso ao site                   | Lucassilva@22                                  |
| Telefone  | Número        | telefone do estabelecimento  |        (34) 3784-0564                        |
| Tipos de deficiência  | checkbox        |  deficiências  atendidas |          Fisica, visual, auditiva, intelectual ou multipla.                                 |

## Cadastrar/Editar perfil estabelecimento
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome do propritário| texto   |Nome do dono do restaurante              | Julio                                              |
| Razão Social             | Texto             | Nome do estabelecimento                              | Churrascaria BeloMonte
| E-mail         | Texto             | E-mail do estabeleciemento                             | churrasbelomonte@email.com                            |
| Senha          | Texto             | Senha de acesso ao site                   | estabe@22                                  |                    |
| Fotos  | JPEG, JPG e PNG          | Fotos do local |            FOTO                                      |
| Descrição  | Texto        | Conteúdo do estabelecimento |          Possui rampa de acesso...                                      |
| Tipos de deficiência  | checkbox        |  deficiências  atendidas |          Fisica, visual, auditiva, intelectual ou multipla.                                 |
| Endereço  | texto        | Endereço do estabelecimento  |          Rua tal 255                              |
| CNPJ  | texto        | CNPJ do estabelecimento  |        09.853.424/0001-73                         |
| Telefone  | Número       | telefone do estabelecimento  |        (34) 3784-0564                        |

