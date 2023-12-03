# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>


Em relação aos requisitos funcionais, assista ao [vídeo](https://youtu.be/FYxm795AmrE) para visualizar as ações sendo realizadas no frontend e sendo refletidas no backend.

Cabe ressaltar que o vídeo cobre os CRUDs da aplicação, de acordo com os seguintes requisitos:

- O sistema deve permitir que os usuários se registrem com um nome de usuário e senha.
- Os usuários autenticados devem poder gerenciar seus hábitos sustentáveis, o que inclui a criação de novos hábitos, a visualização e edição de hábitos existentes, bem como a exclusão de hábitos indesejados.
- O sistema deve exibir uma lista de hábitos sustentáveis existentes para os usuários.
- Os usuários autenticados devem poder gerenciar metas para atingir seus hábitos sustentáveis, o que inclui a criação de novas metas, a visualização e a edição de metas existentes, bem como a exclusão de metas indesejadas.
- Os usuários devem poder visualizar o progresso alcançado em cada meta definida.
- Os hábitos sustentáveis devem ser categorizados com base em atributos como nome, descrição e categoria.
- Os usuários devem poder alterar os hábitos existentes, mudando atributos como categoria, descrição e título.


Os demais requisitos, listados a seguir, foram registrados em prints.

- Os usuários devem poder filtrar os hábitos por categorias específicas.
  
Ao clicar em "Consumo Sustentável", por exemplo, apenas os hábitos desta categoria são renderizados.


| <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/81396458/11ad3c21-1ff4-46a6-a2d9-a0bddfaca313" width="500" height="500"> | <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/81396458/54e1e3cb-0524-4a06-b800-9b92144db440" width="500" height="500"> |
|:--:|:--:|
| Clique em 'Consumo Sustentável" | Renderização de hábitos da categoria clicada |


- O sistema deve exibir um ranking de categorias de hábitos sustentáveis com base no número de hábitos adicionados pelos usuários.
- Os usuários devem acessar um ranking pessoal que mostre suas categorias de hábitos mais e menos adicionadas.
- Com base no ranking pessoal, o sistema deve sugerir o foco em categorias menos adicionadas para incentivar a diversificação dos hábitos sustentáveis dos usuários.

Nas imagens a seguir, é possível visualizar o funcionamento do ranking. 

![filterTable](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/81396458/e2494dde-7c51-4a37-99d8-2d917a983219)


No banco do usuário, este tem, até então, oito hábitos. Destes, três pertencentes à categoria 'Consumo Sustentável', três à categoria 'Conservação', um à categoria 'Conscientização' e, por fim, um à categoria 'Alimentação'. 


![ranking](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/81396458/2fd7a90a-5ddd-4bd2-88b3-27fe028e16e8)

Isso é refletido no componente de Ranking, que elenca as categorias 'Consumo Sustentável' e 'Conservação' como as mais utilizados e as categorias 'Conscientização' e 'Alimentação' como as menos utilizadas.
