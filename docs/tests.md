# Testes



# Teste de Software


**Caso de Teste** | **CT01 - Criar conta usuário**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome completo, e-mail, endereço, telefone, senha, sua deficiência, adiciona uma foto de perfil e clica no botão "Salvar".<br> 2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação de cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta estabelecimento**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome do proprietário, razão social, CNPJ, e-mail, endereço, telefone, senha, deficiência atendida, descreve sobre a acessibilidade do local, adiciona fotos do estabelecimento e clica em "Salvar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela principal.
**Requisitos associados** | RF-002
**Resultado esperado** | Criação de cadastro.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Editar e consultar  perfil usuário**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a opção "Perfil" na aplicação, onde pode realizar a consulta, edição ou deleção do seu perfil de usuário.
**Requisitos associados** | RF-003, RF-005 e RF-007
**Resultado esperado** | O usuário consegue com sucesso realizar a consulta, edição ou deleção do seu perfil de usuário, conforme a ação escolhida.
**Dados de entrada** | Alterações nos dados de cadastro, caso a opção escolhida seja editar o perfil.
**Resultado obtido** | A operação de alteração ou deleção do perfil é realizada com sucesso.

**Caso de Teste** | **CT04 - Editar e Consultar  Perfil de Estabelecimento**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a opção "Perfil" na aplicação, onde tem a capacidade de consultar, editar ou deletar seu perfil de estabelecimento.
**Resultado esperado** | O usuário consegue com sucesso realizar a consulta, edição ou deleção do seu perfil de estabelecimento, conforme a ação escolhida.
**Dados de entrada** | Alterações nos dados de cadastro, caso a opção escolhida seja editar o perfil..
**Resultado obtido** | A operação de alteração ou deleção do perfil é realizada com sucesso.

**Caso de Teste** | **CT05 - Vizualizar uma lista de locais**
 :--------------: | ------------
**Procedimento**  | 1)O usuário acessa a página que lista os locais disponíveis. <br> 2)Para cada local listado, o usuário lê uma breve descrição, obtendo uma ideia rápida do que esperar. <br> 3) O usuário verifica a avaliação atribuída ao local, proporcionando uma visão resumida da experiência de outros usuários.
**Requisitos associados** | RF-010
**Resultado esperado** | O usuário consegue visualizar, de maneira clara e concisa, informações breves sobre cada local, incluindo uma breve descrição e a avaliação média do estabelecimento.
**Resultado obtido** |Informações breves sobre o local apresentadas de forma clara.

**Caso de Teste** | **CT06 - Consultar Perfil de um Lugar**
 :--------------: | ------------
**Procedimento**  | 1) O usuário, na página de locais, clica no botão "Saiba Mais" associado ao estabelecimento desejado. <br> 2) O usuário é direcionado para a página específica do estabelecimento, onde encontra informações mais detalhadas sobre o lugar.
**Requisitos associados** | RF-009
**Resultado esperado** |  aplicação exibe de maneira completa e detalhada as informações relacionadas ao estabelecimento na página específica, após o clique no botão "Saiba Mais".
**Resultado obtido** | Informações detalhadas sobre o local.


**Caso de Teste** | **CT08 - Avaliar e comentar sobre um estabelecimento e vizualizar outros comentários**
 :--------------: | ------------
**Procedimento**  | 1) O usuário logado acessa a página do estabelecimento desejado.<br> 2) O usuário atribui uma pontuação e adiciona um comentário sobre o local. <br>  3) O usuário verifica a seção de comentários para visualizar as opiniões de outros usuários sobre o mesmo estabelecimento.
**Requisitos associados** | RF-012, RF-013 e RF-014
**Resultado esperado** |  A aplicação registra com sucesso a avaliação e o comentário do usuário, e os comentários de outros usuários são exibidos na seção correspondente.
**Dados de entrada** |Avaliação (pontuação) fornecida pelo usuário. <br>Comentário detalhando a experiência no local
**Resultado obtido** | O comentário e avaliação são registrados.



### Plano de Teste de Requisitos Não Funcionais (RNF) 

**Caso de Teste** | **RNF-001 - Responsividade**
 :--------------: | ------------
**Objetivo**  |  Verificar se o sistema é responsivo para rodar em dispositivos móveis.
**Procedimento** | Acessar o sistema por meio de diferentes dispositivos móveis (smartphones, tablets) e verificar se a interface se ajusta corretamente.


**Caso de Teste** | **RNF-002 -  Acessibilidade para Leitores de Tela**
 :--------------: | ------------
**Objetivo**  |  Certificar-se de que o sistema é acessível para leitores de tela.
**Procedimento** | Utilizar um leitor de tela para navegar pelo sistema, verificando se todas as informações essenciais são adequadamente narradas.


**Caso de Teste** | **RNF-003 -  Core Web Vital**
 :--------------: | ------------
**Objetivo**  |  Assegurar que o sistema atinge notas superiores a 95% em Core Web Vitals.
**Procedimento** | Utilizar ferramentas de teste de desempenho para avaliar as métricas do Core Web Vitals, como Largest Contentful Paint (LCP), First Input Delay (FID) e Cumulative Layout Shift (CLS). Garantir que todas as métricas atendam ou ultrapassem os 95%.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software
Com base no teste de software, percebemos que o site está funcionando corretamente para o que se propõe, mas tem como pontos fracos a impossibilidade de visualização da senha e a probabilidade de duplicação de contas de usuários devido a uma falta de controle e validação de e-mails/contas.




# Testes de Usabilidade




## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você visitou um lugar com bom atendimento e estrutura para pessoas com deficiência e gostaria de comentar e avaliar. |
| 2             | Você tem deficiência visual e gostaria de acessar o site para encontrar um restaurante com cardápio em braile. |



## Registro de Testes de Usabilidade




Cenário 1: Você visitou um lugar com bom atendimento e estrutura para pessoas com deficiência e gostaria de comentar e avaliar. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1      | SIM             | 4                   | 44.36 segundos                          |

| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 14.12 segundos |


    Comentários dos usuários: A navegação no site é bastante simples e intuitivo. 
    

Cenário 2: Você esta auxiliando uma pessoa com deficiência visual a acessar o site para encontrar um restaurante com cardápio em braile.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 2     | SIM             | 3                    | 58.12 segundos                          |



| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.30 segundos |


    Comentários dos usuários: A função de leitor de voz do site é útil, mas sinto que poderia ser aprimorada para proporcionar uma experiência mais fluida. Algumas palavras ou frases não são pronunciadas com clareza, o que pode dificultar a compreensão para usuários que dependem exclusivamente desse recurso. 




## Avaliação dos Testes de Usabilidade



Com base nos testes de usabilidade, observamos que o site é intuitivo, no entanto, ao considerar a interação dos usuários, identificamos que algumas funcionalidades podem ser aprimoradas. No geral, a satisfação subjetiva foi classificada como regular. Estamos trabalhando para aprimorar essas áreas e proporcionar uma experiência ainda mais satisfatória aos usuários.


