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

| Indicador              | Objetivos                                         | Descrição                                                  | Cálculo                                   | Fonte de Dados                                 | Perspectiva          |
|------------------------|--------------------------------------------------|------------------------------------------------------------|-------------------------------------------|------------------------------------------------|----------------------|
| Taxa de Registro       | Medir a eficácia do processo de registro de usuários | Avaliar a taxa de sucesso no registro de usuários       | (Número de registros bem-sucedidos / Total de tentativas de registro) * 100 | Logs de registro de usuário                  | Interna               |
| Taxa de Criação de Hábitos Sustentáveis | Avaliar a adoção de hábitos sustentáveis pelos usuários | Acompanhar a criação de novos hábitos sustentáveis     | (Número de hábitos sustentáveis criados / Número total de usuários autenticados) * 100 | Registro de hábitos sustentáveis             | Interna               |
| Taxa de Cumprimento de Metas | Medir o sucesso dos usuários em alcançar suas metas pessoais | Avaliar o progresso em relação às metas definidas     | (Número de metas alcançadas / Número total de metas definidas) * 100 | Registro de progresso das metas           | Interna               |
| Taxa de Edição de Hábitos | Avaliar a interação dos usuários com os hábitos existentes | Medir a frequência de edição de hábitos existentes    | (Número de hábitos editados / Número total de hábitos existentes) * 100 | Registro de atividade de edição de hábitos | Interna               |
| Taxa de Cumprimento Semanal de Metas | Medir o cumprimento semanal das metas estabelecidas | Avaliar o quão regularmente os usuários cumprem suas metas semanalmente | (Número de metas cumpridas semanalmente / Número total de metas definidas para a semana) * 100 | Registro de progresso das metas           | Interna               |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir que os usuários se registrem com um nome de usuário e senha | ALTA | 
|RF-002 | Os usuários autenticados devem poder gerenciar seus hábitos sustentáveis, o que inclui a criação de novos hábitos, a visualização e edição de hábitos existentes, bem como a exclusão de hábitos indesejados | ALTA |
|RF-003| O sistema deve exibir uma lista de hábitos sustentáveis existentes para os usuários | ALTA |
|RF-004| Os usuários devem poder definir metas pessoais para a quantidade de hábitos sustentáveis que desejam completar em um período específico | ALTA |
|RF-005| Os usuários devem poder visualizar o progresso alcançado em cada meta definida | ALTA |
|RF-006| Os hábitos sustentáveis devem ser categorizados com base em atributos como nome, descrição e categoria   | MÉDIA |
|RF-007| Os usuários devem poder filtrar os hábitos por categorias específicas  | MÉDIA |
|RF-008| Os usuários devem poder alterar os hábitos existentes, mudando atributos como categoria, descrição e título | MÉDIA |
|RF-009| O sistema deve realizar uma verificação diária para determinar se uma meta já foi alcançada  | MÉDIA |
|RF-010| O sistema deve realizar o pareamento entre metas e hábitos, tornando cada meta relacionada a pelo menos um hábito | MÉDIA |
|RF-011| O sistema deve exibir um ranking de categorias de hábitos sustentáveis com base no número de hábitos concluídos pelos usuários | BAIXA |
|RF-012| Os usuários devem acessar um ranking pessoal que mostre suas categorias de hábitos mais e menos ativas | BAIXA |
|RF-013| Com base no ranking pessoal, o sistema deve sugerir o foco em categorias menos exploradas para incentivar a diversificação dos hábitos sustentáveis dos usuários | BAIXA |


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

(img/Casos-de-Uso.jpg)

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

## Gerenciamento de Tempo

![Cronograma 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103225086/55555bae-98d1-4559-a75a-ac2b4e92f9a1)
![Cronograma 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103225086/d67c33d0-4fe6-4fd4-82e6-2286c879991c)
![Cronograma 3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103225086/3962588c-65a6-4e91-a6c3-1564551b6175)

Utilizando o Project do GitHub, junta-se o cronograma e a divisão de tarefas da equipe.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103225086/1d7a11f6-eeab-4cfc-ae8b-dda277e895f2



## Gerenciamento de Equipe

O gerenciamento da equipe é realizado pelo Kanban dentro do próprio GitHub, utilizando a ferramenta Projects. Atrvés dessa ferramenta, as tarefas são designadas para cada colaborador da equipe, cada uma com um prazo limite.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103225086/74832524-a58c-4bb5-bc94-3acccf9d8989

![Gráfico Evolução](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103225086/92f1eb03-69fb-415b-a874-56aec131017f)

## Gerenciamento de Custos

![Custos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103225086/0a9fcea9-b4e3-4cd8-8cc1-88c8aadbe772)



