# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


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

**Caso de Teste** | **CT03 - Editar, consultar ou deletar perfil usuário**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a opção "Perfil" na aplicação, onde pode realizar a consulta, edição ou deleção do seu perfil de usuário.
**Requisitos associados** | RF-003, RF-005 e RF-007
**Resultado esperado** | O usuário consegue com sucesso realizar a consulta, edição ou deleção do seu perfil de usuário, conforme a ação escolhida.
**Dados de entrada** | Alterações nos dados de cadastro, caso a opção escolhida seja editar o perfil.
**Resultado obtido** | A operação de alteração ou deleção do perfil é realizada com sucesso.

**Caso de Teste** | **CT04 - Editar, Consultar ou Deletar Perfil de Estabelecimento**
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

**Caso de Teste** | **CT07 - Filtrar Lista de Lugares**
 :--------------: | ------------
**Procedimento**  | 1) O usuário acessa a barra de navegação da aplicação. <br> 2) Utilizando os menus disponíveis, o usuário seleciona os filtros desejados para acessibilidade, categoria do lugar e cidade.
**Requisitos associados** | RF-011
**Resultado esperado** |  A aplicação responde apresentando uma lista filtrada de locais de acordo com os critérios selecionados pelo usuário.
**Dados de entrada** | Informações sobre o local, como tipo de acessibilidade, categoria e cidade.
**Resultado obtido** | Lista de locais com base no filtro.

**Caso de Teste** | **CT08 - Avaliar e comentar sobre um estabelecimento e vizualizar outros comentários**
 :--------------: | ------------
**Procedimento**  | 1) O usuário logado acessa a página do estabelecimento desejado.<br> 2) O usuário atribui uma pontuação e adiciona um comentário sobre o local. <br>  3) O usuário verifica a seção de comentários para visualizar as opiniões de outros usuários sobre o mesmo estabelecimento.
**Requisitos associados** | RF-012, RF-013 e RF-014
**Resultado esperado** |  A aplicação registra com sucesso a avaliação e o comentário do usuário, e os comentários de outros usuários são exibidos na seção correspondente.
**Dados de entrada** |Avaliação (pontuação) fornecida pelo usuário. <br>Comentário detalhando a experiência no local
**Resultado obtido** | O comentário e avaliação são registrados.

**Caso de Teste** | **CT09 - Navegação com Assistente Virtual**
 :--------------: | ------------
**Procedimento**  | 1) O usuário ativa o assistente virtual na página principal.<br> 2) O assistente virtual cumprimenta o usuário e pergunta como pode ajudar. <br> 3) O usuário faz uma solicitação ou pergunta relacionada à navegação na aplicação.
**Requisitos associados** | RF-015
**Resultado esperado** |  O assistente virtual fornece uma resposta relevante e útil, auxiliando o usuário na navegação da aplicação..
**Dados de entrada** | Ativação do assistente virtual e pergunta ou solicitação do usuário.
**Resultado obtido** |O assitente consegue auxiliar o usuário.

### Plano de Teste de Requisitos Não Funcionais (RNF) 

**Caso de Teste** | **RNF-001 - Responsividade**
 :--------------: | ------------
**Objetivo**  |  Verificar se o sistema é responsivo para rodar em dispositivos móveis.
**Procedimento** | Acessar o sistema por meio de diferentes dispositivos móveis (smartphones, tablets) e verificar se a interface se ajusta corretamente.

**Caso de Teste** | **RNF-002 - Tempo de Resposta**
 :--------------: | ------------
**Objetivo**  |  Garantir que o sistema processe requisições do usuário em no máximo 1.8 segundos.
**Procedimento** | Realizar diferentes tipos de requisições no sistema e medir o tempo de resposta. Verificar se todas as requisições atendem ao limite de 1.8 segundos.

**Caso de Teste** | **RNF-003 -  Acessibilidade para Leitores de Tela**
 :--------------: | ------------
**Objetivo**  |  Certificar-se de que o sistema é acessível para leitores de tela.
**Procedimento** | Utilizar um leitor de tela para navegar pelo sistema, verificando se todas as informações essenciais são adequadamente narradas.

**Caso de Teste** | **RNF-004 -  Navegação Facilitada**
 :--------------: | ------------
**Objetivo**  |  Avaliar se o sistema possui uma navegação facilitada.
**Procedimento** | Realizar testes de navegação pelo sistema, incluindo acesso a diferentes seções e funcionalidades. Verificar se a navegação é intuitiva e fácil de entender.

**Caso de Teste** | **RNF-005 -  Core Web Vital**
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

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.





# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é alguém que esta em busca de lugares que ofereçam acessibilidade para pessoas com deficiência física |
| 2             | Você visitou um lugar com bom atendimento e estrutura para pessoas com deficiência e gostaria de comentar e avaliar. |
| 3             | Você tem deficiência visual e gostaria de acessar o site para encontrar um restaurante com cardápio em braile. |



## Registro de Testes de Usabilidade

Cenário 1: Você é alguém que esta em busca de lugares que ofereçam acessibilidade para pessoas com deficiência física

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |

|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você visitou um lugar com bom atendimento e estrutura para pessoas com deficiência e gostaria de comentar e avaliar. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |                      |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.
    

Cenário 3: Você tem deficiência visual e gostaria de acessar o site para encontrar um restaurante com cardápio em braile.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |

|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



