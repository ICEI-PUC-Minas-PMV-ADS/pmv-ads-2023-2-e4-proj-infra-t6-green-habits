# Plano de Testes de Software

## Histórico de Revisões 

<table>
  <tr>
   <td width="100" align="center"><strong>Data</strong></td>
   <td width="100" align="center"><strong>Versões</strong></td>
   <td width="350" align="center"><strong>Descrição</strong></td>
   <td width="250" align="center"><strong>Autor</strong></td>
  </tr>
  <tr>
   <td align="center">DD/MM/AAAA</td>
   <td align="center">DOC</td>
   <td align="left">Criação do documento</td>
   <td align="left">Green Habits</td>
  </tr>
 </table>

## Introdução 

`Objetivos` 

Esse documento do Plano de Testes da Green Habits compõe-se dos seguintes objetivos: 

-	Identificar informações de projeto existentes e os componentes de software que devem ser testados. 

-	Listar e testar os Requisitos funcionais (alto nível). 

-	Recomendar e descrever as estratégias de teste a serem empregadas. 

-	Identificar os recursos necessários e prover uma estimativa dos esforços de teste. 

- 	Listar os elementos resultantes do projeto de testes. 


## Escopo de Testes

O sistema Green Habits passará por testes funcionais direcionados ao nível de cumprimento de requisitos e testes de sistema sendo eles não-funcionais mensurando como a plataforma se comporta em determinados casos e situações. 
Os testes Funcionais validarão a qualidade funcional, das bases de dados, interface gráfica e fluxo de execução da aplicação; enquanto que os testes de sistema tratarão das questões de performance e usabilidade. 

Os testes de instalação e configuração não serão realizados uma vez que se trata de uma aplicação do tipo Web sendo desnecessária a preocupação com os mesmos. Pelo mesmo motivo excluem-se os testes de stress, de volume e de falha/recuperação por se considerar que o ambiente de implantação do sistema trata-se de um meio equilibrado em que essas situações não têm muito espaço para ocorrer sejam grandes cargas de stress ao hardware ou falhas que comprometam o funcionamento do dispositivo que acessar a aplicação. 

Para a execução dos testes serão utilizadas máquinas distintas, em termos de hardware e/ou software, a fim de garantir performance e compatibilidade nos mais variados ambientes de usuários e sistemas operacionais. 

Todos os testes serão observados e avaliados pela equipe responsável do começo ao fim não contendo nenhum tipo de interferência externa que atrapalhe o resultado dos mesmos. 


## Identificação do Projeto 

A tabela abaixo identifica a documentação e disponibilidade usados para desenvolver o plano de testes: 

<table>
 <tr>
  <td width="400" align="left">Documento</td>
  <td width="200" align="center">Criado ou Disponível</td>
  <td width="200" align="center">Recebido ou Revisado</td>
 </tr>
 <tr>
  <td align="left">Especificação de Requisitos</td>
  <td align="center">Sim</td>
  <td align="center">Não</td>
 </tr>
  <tr>
  <td align="left">Plano de Projeto</td>
  <td align="center">Sim</td>
  <td align="center">Sim</td>
 </tr>
  <tr>
  <td align="left">Modelo de Análise</td>
  <td align="center">Não</td>
  <td align="center">Não</td>
 </tr>
  <tr>
  <td align="left">Modelo de Projeto</td>
  <td align="center">Não</td>
  <td align="center">Não</td>
 </tr>
  <tr>
  <td align="left">Documento de Arquitetura</td>
  <td align="center">Sim</td>
  <td align="center">Sim</td>
 </tr>
  <tr>
  <td align="left">Protótipo</td>
  <td align="center">Não</td>
  <td align="center">Não</td>
 </tr>
 <tr>
  <td align="left">Manual do Usuário</td>
  <td align="center">Não</td>
  <td align="center">Não</td>
 </tr>
 <tr>
  <td align="left">Lista de Riscos</td>
  <td align="center">Sim</td>
  <td align="center">Sim</td>
 </tr>
</table>

## Requisitos a Testar

A lista abaixo identifica os requisitos funcionais e não-funcionais do projeto que serão testados:   

`TESTE DE BANCO DE DADOS `

- RF-01 O sistema deve permitir que os usuários se registrem com um nome de usuário e senha.
 
- RF-02 Os usuários autenticados devem poder gerenciar seus hábitos sustentáveis, o que inclui a criação de novos hábitos, a visualização e edição de hábitos existentes, bem como a exclusão de hábitos indesejados. 
 
- RF-03 O sistema deve exibir uma lista de hábitos sustentáveis existentes para os usuários. 
 
- RF-06 Os hábitos sustentáveis devem ser categorizados com base em atributos como nome, descrição e categoria. 
 

`TESTE FUNCIONAL`

- RF-09 O sistema deve realizar uma verificação diária para determinar se uma meta já foi alcançada.

- RF-10 O sistema deve realizar o pareamento entre metas e hábitos, tornando cada meta relacionada a pelo menos um hábito.

- RF-11 O sistema deve exibir um ranking de categorias de hábitos sustentáveis com base no número de hábitos concluídos pelos usuários.

- RF-13 Com base no ranking pessoal, o sistema deve sugerir o foco em categorias menos exploradas para incentivar a diversificação dos hábitos sustentáveis dos usuários.


`TESTE DA INTERFACE DO USUÁRIO`

- RF-04 Os usuários devem poder definir metas pessoais para a quantidade de hábitos sustentáveis que desejam completar em um período específico.

- RF-05 Os usuários devem poder visualizar o progresso alcançado em cada meta definida.

- RF-07 Os usuários devem poder filtrar os hábitos por categorias específicas.

- RF-12 Os usuários devem acessar um ranking pessoal que mostre suas categorias de hábitos mais e menos ativas

 
`TESTE DE PERFORMANCE`

- RNF-01 A aplicação deve ser acessível, de acordo com as métricas da extensão Lighthouse.

- RNF-07 A aplicação deve ser otimizada para ter um desempenho rápido e responsivo

`TESTE DE CARGA` 
- Nehhum 

`TESTE DE STRESS`
 - Nenhum 

`TESTE DE VOLUME`
- Nenhum 

`TESTE DE FALHA/ RECUPERAÇÃO`
- Nenhum 

## Estratégia De Teste 

`TIPOS DE TESTE`

**Nota:** As informações abaixo se referem à uma simulação de funções específicas que um usuário final do sistema é suposto de executar ao usar a aplicação.

`TESTE DE INTEGRIDADE DE BANCOS DE DADOS`

| Objetivo do Teste: | Garantir que os métodos e processos de acesso a informações do banco de dados funcionam apropriadamente e sem corrupção dos dados. |
| ------------------- | --------------------- | 
|Técnica | - Invocar cada método e processo de acesso ao banco de dados, alimentando cada um com dados ou requisições de dados válidos e inválidos. <br> - Inspecionar o banco de dados para garantir que os dados foram executados como pretendido, que todos os eventos do banco de dados ocorreram apropriadamente, ou revisar os dados retornados para garantir que os dados corretos foram recuperados pelas razões corretas |
| Critério de Finalização | Todos os métodos e processos de acesso à base de dados funcionam como projetados e sem nenhuma corrupção de dados. |
| Considerações Especiais | Processos podem ser invocados manualmente |


`TESTE DE FUNÇÃO`

| Objetivo do Teste: |Garantir a funcionalidade apropriada do alvo do teste, incluindo navegação, entrada de dados, processamento e recuperação |
| ---- | --- | 
| Técnica | Executar cada caso de uso, fluxo de caso de uso, usando dados válidos e inválidos, para verificar o seguinte:<br>  Os resultados esperados ocorrem quando dados válidos são usados <br> As mensagens de erro ou aviso apropriadas são exibidas quando dados inválidos são usados.  |
| Critério de Finalização | Todos os testes planejados foram executados.<br> Todos os defeitos identificados foram tratados <br> | 
| Considerações Especiais |Nenhum|

`TESTE DA INTERFACE DO USUÁRIO`
| Objetivo do Teste: | Se a navegação através dos alvos do teste reflete de forma apropriada as funções e os requisitos estipulados, incluindo janela-a-janela, campo-a-campo, e o uso de métodos de acesso (tecla tab, movimentos do mouse, teclas aceleradoras) <br> Objetos e características da janela, tais como menus, tamanho, posição, estado e foco conformam-se aos padrões desktop e sua devida responsividade. |
| ---- | --- | 
| Técnica | Documentar os testes para cada tela alvo para verificar a navegação e a resposta da aplicação como resultado. |
| Critério de Finalização | É verificado que cada janela permanece consistente com a versão de comparação ou dentro de padrões aceitáveis. |
| Considerações Especiais | Nenhum| 

`TESTE DE PERFORMACE`
| Objetivo do Teste: | Verificar que os comportamentos de performance para as funções da plataforma ao cumprir os objetivos do usuário. |
| ---- | --- | 
| Técnica | Usar procedimentos de teste desenvolvidos/automatizados para teste da aplicação. |
| Critério de Finalização |Retorno do conteúdo buscado pela plataforma dentro do tempo esperado para critério de êxito. |
| Considerações Especiais |Um teste abrangente de performance inclui ter uma carga de trabalho ou ação na base de dados da aplicação. <br>  Há vários métodos que podem ser usados para executar isso, incluindo: <br> O teste de performance deve ser executado em uma máquina dedicada ou em um tempo dedicado. Isso permite controle total e mensuração precisa <br> As bases de dados usadas para o Teste de Performance devem ser ou do tamanho real ou proporcionalmente iguais. <br>|


## Sistema 

A tabela seguinte expõe os recursos do sistema para o projeto de teste e desenvolvimento da aplicação. 

| Recursos do sistema|
| ------------------|
| Servidor de Banco de Dados |
| Terminais Clientes<br> 7 PCs (disponíveis para desenvolvimento e testes da aplicação)| 
|Repositorio de Testes <br>  Git/Github para integração/controle de versão do código (desenvolvimento e testes) <br> — 7 PCs de Desenvolvimento de Teste integrados por meio dos repositórios|

| Milestone | Data no Início | Data de Término|
| ---------- | ------------ | -------------  |
| Planejar Teste |  |  |
| Implementar Teste |  |  |
| Executar Teste|  |  |
| Avaliar Teste |  |  | 

## Lighthouse

O Lighthouse é uma ferramenta de código aberto desenvolvida pelo Google para avaliar e melhorar o desempenho, acessibilidade, boas práticas, SEO (Search Engine Optimization) e a experiência do usuário de um site da web. Ele é amplamente utilizado por desenvolvedores e profissionais de marketing digital para analisar a qualidade e o desempenho de um site, bem como para identificar áreas que precisam de otimização.

O Lighthouse opera como uma extensão do navegador ou como uma CLI (Command Line Interface), permitindo que os usuários avaliem sites diretamente em seus navegadores. Quando uma avaliação é executada, o Lighthouse analisa várias métricas e critérios importantes. Vamos abordar brevemente cada um deles:

Desempenho: O Lighthouse mede o desempenho do site, incluindo o tempo de carregamento da página, a eficiência do uso de recursos, a compressão de imagens, o carregamento assíncrono de recursos e outros fatores que afetam a velocidade de carregamento.

Acessibilidade: Essa métrica avalia a acessibilidade do site para pessoas com deficiências. Ela verifica se o site segue as diretrizes de acessibilidade, como as estabelecidas pelas Diretrizes de Acessibilidade para Conteúdo da Web (WCAG).

Boas Práticas: O Lighthouse avalia se o site segue as melhores práticas de desenvolvimento web. Isso inclui a utilização de HTTPS, a definição de tamanhos de fontes legíveis, a correta utilização de tags HTML, entre outros.

SEO (Search Engine Optimization): Essa métrica avalia o quão bem o site está otimizado para mecanismos de busca. O Lighthouse verifica se as tags de título, meta descrições, cabeçalhos e outros elementos são configurados corretamente.

Experiência do Usuário (UX): O Lighthouse também avalia a experiência do usuário, levando em consideração fatores como a interatividade da página, o uso de boas práticas de design e a responsividade do site em diferentes dispositivos.

Após a análise, o Lighthouse gera um relatório com pontuações e sugestões específicas para melhorar o site com base nos critérios mencionados. As pontuações são normalmente divididas em categorias, permitindo que os desenvolvedores identifiquem áreas que precisam de atenção e melhoria.

Em resumo, o Lighthouse é uma ferramenta abrangente que fornece uma visão detalhada do desempenho e da qualidade de um site da web, com o objetivo de ajudar os desenvolvedores e profissionais de marketing a otimizá-lo para proporcionar a melhor experiência possível aos usuários e melhorar seu posicionamento nos mecanismos de busca.
