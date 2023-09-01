# Arquitetura da Solução

A arquitetura da aplicação consistirá em duas plataformas distintas: uma interface front-end construída usando as tecnologias React e Next.js para a web e uma aplicação mobile desenvolvida com React Native. Ambas as plataformas se conectarão a um único backend, que é uma API responsável por executar as operações básicas de um CRUD (Create, Read, Update, Delete) em dados de usuários e seus hábitos. Esta API será implementada de modo a permitir que os usuários criem, leiam, excluam e editem seus hábitos pessoais. Tanto o backend quanto o front-end serão hospedados na plataforma Fly.io, garantindo escalabilidade e alta disponibilidade para a aplicação, além de simplificar o processo de implantação e manutenção da infraestrutura. Essa arquitetura modular e escalável permitirá que os usuários acessem a aplicação de forma eficiente tanto na web quanto em dispositivos móveis, mantendo uma experiência de usuário consistente em ambas as plataformas.

## Diagrama de Classes

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/d0b56bd1-d83e-4a2a-90a7-0d16f63fcc57)


## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

- Base de dados: MongoDB
- Linguagem: Typescript (backend e frontend)
- Backend: Express.js, Mongoose
- Frontend (web): React, Next.js, Storybook
- Frontend (mobile): React Native

O backend armazenará os dados em um banco NoSQL (MongoDB) baseado em nuvem (Atlas). As principais entidades da aplicação serão os usuários e hábitos, que serão estruturados da seguinte forma:

### Estrutura da base de dados

A API terá como principais rotas:
- `POST /users/`
  - Rota que cria novos usuários a partir de email, nome e senha
  
- `POST /users/{id}/habits`
  - Rota que adiciona um hábito a lista de hábitos do usuário

- `DELETE /users/{id}/habits/{id}`
  - Rota que deleta um hábito do usuário

- `GET /users/{id}/habits/`
  - Rota que lista os hábitos do usuário

- `UPDATE /users/{id}/habits/{id}`
  - Rota que atualiza informações de um hábito do usuário
 
### Diagrama de Fluxo UML


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
