# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>


## Personas

![Maria Júlia é uma mulher em seus 30 anos, trabalha 6 horas por dia, 5 dias por semana, como consultora em uma agência publicitária e possui um pequeno negócio, que gerencia remotamente de sua casa. Ela quer ser mais sustentável, mas acha difícil encontrar tempo e motivação. O objetivo de Maria Júlia é acrescentar em sua rotina hábitos sustentáveis, especificamente hábitos voltados para a redução do consumo de plástico e economia de energia. Como frustração, Maria Júlia considera o excesso de informações que consome sobre o tema sustentabilidade, mas não sente que essa quantidade a ajuda a colocar em prática o que almeja.](img/personas/mj.png)

![Lucas é um estudante de Geologia apaixonado por questões ambientais. Com seus 22 anos, ele quer inspirar os outros, de forma abrangente, e mostrar que as ações individuais importam. O objetivo de Lucas é criar desafios e metas ambiciosas na aplicação, desafiando-se a liderar iniciativas de sustentabilidade em sua comunidade e a compartilhar seu progresso online para incentivar seus colegas a participar. Muitas pessoas ao seu redor não estão demonstrando o mesmo nível de comprometimento ou preocupação com o meio ambiente, o que pode ser frustrante. Assim sendo, o ato de compartilhar seus hábitos pode contribuir para essa mudança no nível de comprometimento de seus pares.](img/personas/ls.png)

![Ana tem 39 anos, é formada em Direito, é mãe de dois filhos e busca criar um ambiente saudável e consciente para sua família. Ela deseja ensinar hábitos sustentáveis desde cedo. No entanto, percebe que há uma dificuldade em manter a motivação e o engajamento constante de todos os membros da família nos desafios e hábitos sustentáveis ao longo do tempo. Seu objetivo seria usar a aplicação para criar desafios que envolvem toda a família, como reduzir o desperdício de alimentos ou usar menos plástico, de forma efetiva, sem que todos percam o foco. Ela estabelece metas mensuráveis para que seus filhos possam aprender sobre responsabilidade ambiental.](img/personas/as.png)

![Bruno, 27 anos, é um jovem desenvolvedor de sistemas que vive na cidade de Florianópolis e prefere usar transporte público ou bicicleta para reduzir sua pegada de carbono. Ele busca maneiras de aprimorar seu estilo de vida sustentável. Assim sendo, pode sentir uma dificuldade em encontrar maneiras criativas e envolventes de manter sua motivação e compromisso com hábitos sustentáveis ao longo do tempo. Bruno, nesse sentido, deseja criar desafios que se concentram na sua rotina de transporte sustentável, como aumentar a frequência de uso da bicicleta, reduzir viagens de carro, entre outros.](img/personas/bs.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Eu, Maria Júlia, como consultora e empresária remota | quero ter informações filtradas e relevantes, sem excesso de detalhes	| para evitar sobrecarga de informações e tomar ações mais eficazes |
| Eu, Maria Júlia, sinto dificuldade em encontrar tempo e motivação | e preciso acompanhar um plano de ação personalizado e adaptável	 | para alcançar metas sustentáveis de maneira realista e motivadora |
| Eu, Lucas, como estudante de Geologia	| quero criar desafios e metas ambiciosas para liderar iniciativas de sustentabilidade	| para inspirar e motivar outras pessoas a agirem pelo meio ambiente |
| Eu, Lucas, desejando impactar a comunidade	| quero verificar o progresso das metas e desafios	| para manter-me responsável pelo meu próprio comprometimento |
| Eu, Ana, como mãe de dois filhos | quero criar desafios sustentáveis envolvendo toda a família	| para fomentar hábitos sustentáveis desde cedo e manter o engajamento |
| Eu, Ana, buscando ambiente saudável	| preciso estabelecer metas mensuráveis e práticas	| para ensinar responsabilidade ambiental aos filhos de forma eficaz |
| Eu, Bruno, como desenvolvedor	| quero criar desafios que incentivem meu estilo de vida sustentáve	| para encontrar maneiras criativas de manter o compromisso com a sustentabilidade |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir que os usuários se registrem com um nome de usuário e senha | ALTA | 
|RF-002| Os usuários autenticados devem poder criar novos hábitos sustentáveis  | ALTA |
|RF-003| Os usuários devem ter a capacidade de visualizar e editar hábitos existentes  | ALTA |
|RF-004| Os usuários devem poder excluir hábitos que não desejam mais acompanhar   | ALTA |
|RF-005| O sistema deve exibir uma lista de hábitos sustentáveis existentes para os usuários   | ALTA |
|RF-006| Os usuários devem poder definir metas pessoais para a quantidade de hábitos sustentáveis que desejam completar em um período específico   | ALTA |
|RF-007| Os hábitos sustentáveis devem ser categorizados com base em atributos como nome, descrição e categoria   | MÉDIA |
|RF-008| Os usuários devem poder filtrar os hábitos por categorias específicas  | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser acessível, de acordo com as métricas da extensão Lighthouse | ALTA | 
|RNF-002| A interface de usuário da aplicação deve ser documentada usando o Storybook, facilitando o entendimento dos componentes e fluxos |  ALTA | 
|RNF-003| O frontend web deve ser desenvolvido usando o framework Next.js |  ALTA | 
|RNF-004| O frontend móvel deve ser desenvolvido usando o framework React Native, permitindo a criação de aplicativos para iOS e Android a partir de um único código-base |  ALTA | 
|RNF-005| O backend da aplicação será desenvolvido em Typescript |  ALTA | 
|RNF-006| O banco de dados utilizado será o MongoDB, um banco de dados NoSQL orientado a documentos |  ALTA | 
|RNF-007| A aplicação deve ser otimizada para ter um desempenho rápido e responsivo |  ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Proibida a terceirização de desenvolvimento do sistema em sua totalidade ou de módulos isolados     |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)
