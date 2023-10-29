# Registro de Testes de Software

## Funcionalidade: login

### Caso de teste: login realizado com sucesso

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/52eb8e54-d90d-495f-9a7f-8ce4c0db5469)

### Caso de teste: senha incorreta

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/ea98a13d-65e2-4af9-95a7-041261b33e5c)

### Caso de teste: campos obrigatórios não enviados

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/e2e960f7-c011-4202-a266-86f3e0e8f991)

## Funcionalidade: cadastro de novo usuário

### Caso de teste: email já cadastrado

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/dc97f310-b99c-4bf3-be93-a7cd582c1e4e)

### Caso de teste: usuário criado com sucesso

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/70f9e3f9-9c14-4a48-b00d-4b70665fcc2b)

## Funcionalidade: mostrar hábitos do usuário

### Caso de teste: hábitos exibidos com sucesso

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/37807942-d38f-4c26-b0a5-53ae9c096f92)

### Caso de teste: hábitos não exibidos para usuário que não realizou o login

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/edf8f5a8-c188-4ec9-9895-cf7cf33f977c)

### Caso de teste: hábito não encontrado

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/963ca931-f417-430b-80c0-36196550dde5)

## Caso de teste: Lighthouse

### Registro

![Registro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/blob/main/docs/img/Tela%20Registro.png)

### Login

![Login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/blob/main/docs/img/Tela%20Login.png)

### Página Inicial

![Página Inicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/blob/main/docs/img/Tela%20Inicial.png)

### Hábitos

![Hábitos](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/blob/main/docs/img/Tela%20H%C3%A1bitos.png)

### Metas

![Metas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/blob/main/docs/img/Tela%20Meta.png)

### Perfil

![Perfil](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/blob/main/docs/img/Tela%20Perfil.png)

### Contato

![Contato](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/blob/main/docs/img/Tela%20Contato.png)


## Integração entre front e backend

Assista ao [vídeo](https://youtu.be/FYxm795AmrE) para visualizar as ações sendo realizadas no frontend e sendo refletidas no backend.

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


- O sistema deve exibir um ranking de categorias de hábitos sustentáveis com base no número de hábitos concluídos pelos usuários.
- Os usuários devem acessar um ranking pessoal que mostre suas categorias de hábitos mais e menos ativas.
- Com base no ranking pessoal, o sistema deve sugerir o foco em categorias menos exploradas para incentivar a diversificação dos hábitos sustentáveis dos usuários.

Nas imagens a seguir, é possível visualizar o funcionamento do ranking. 

![filterTable](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/81396458/e2494dde-7c51-4a37-99d8-2d917a983219)


No banco do usuário, este tem, até então, oito hábitos. Destes, três pertencentes à categoria 'Consumo Sustentável', três à categoria 'Conservação', um à categoria 'Conscientização' e, por fim, um à categoria 'Alimentação'. 


![ranking](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/81396458/2fd7a90a-5ddd-4bd2-88b3-27fe028e16e8)

Isso é refletido no componente de Ranking, que elenca as categorias 'Consumo Sustentável' e 'Conservação' como as mais utilizados e as categorias 'Conscientização' e 'Alimentação' como as menos utilizadas.
