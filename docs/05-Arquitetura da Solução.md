# Arquitetura da Solução

A arquitetura da aplicação consistirá em duas plataformas distintas: uma interface front-end construída usando as tecnologias React e Next.js para a web e uma aplicação mobile desenvolvida com React Native. Ambas as plataformas se conectarão a um único backend, que é uma API responsável por executar as operações básicas de um CRUD (Create, Read, Update, Delete) em dados de usuários e seus hábitos.

Esta API será implementada de modo a permitir que os usuários criem, leiam, excluam e editem seus hábitos pessoais. Tanto o backend quanto o front-end serão hospedados na plataforma Fly.io, garantindo escalabilidade e alta disponibilidade para a aplicação, além de simplificar o processo de implantação e manutenção da infraestrutura. Essa arquitetura modular e escalável permitirá que os usuários acessem a aplicação de forma eficiente tanto na web quanto em dispositivos móveis, mantendo uma experiência de usuário consistente em ambas as plataformas.

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
Por utilizarmos o MongoDB para a base de dados, o esquema dos dados não utiliza de artefatos como chaves primárias e estrangeiras, fazendo com que a aplicação seja flexível ao salvar dados de maneira não-relacional.
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-green-habits/assets/103083123/7a300dcb-6eb0-4e45-8987-034035841e6d)


### Diagrama de Fluxo UML


## Hospedagem
A hospedagem dessa aplicação seguirá uma abordagem moderna e escalável. Tanto o front-end desenvolvido com React e Next.js quanto o aplicativo mobile criado com React Native serão hospedados na mesma plataforma, que é o Fly.io. Esta escolha permite centralizar a infraestrutura e simplificar a implantação, facilitando a manutenção e escalabilidade da aplicação.

O backend da aplicação, uma API responsável pelo CRUD de usuários e hábitos, também será hospedado no Fly.io. Essa escolha proporciona um ambiente altamente disponível e eficiente para o processamento das requisições da API, garantindo que os usuários possam criar, ler, excluir e editar seus hábitos de forma rápida e confiável. O uso do Fly.io oferece flexibilidade na configuração de recursos e dimensionamento sob demanda, o que é essencial para acomodar potenciais picos de tráfego e garantir uma experiência consistente aos usuários. Em resumo, a hospedagem no Fly.io proporcionará um ambiente robusto e ágil para todas as partes da aplicação, permitindo um funcionamento eficaz em ambas as plataformas front-end e mobile.

## Qualidade de Software

A aplicação "Green Habits" visa promover hábitos sustentáveis e contribuir para um estilo de vida mais responsável ambientalmente. Para garantir o sucesso da aplicação, a equipe escolheu categorias e subcategorias da norma ISO/IEC 25010 para avaliar a qualidade do software:

1. Funcionalidade (Adequação funcional e Precisão)
2. Confiabilidade (Recuperabilidade)
3. Eficiência (Comportamento em relação ao desempenho e Utilização de recursos)
4. Usabilidade (Compreensibilidade, Atratividade e Conformidade)
5. Manutenibilidade (Modificabilidade e Testabilidade)
6. Portabilidade (Adaptabilidade)
7. Segurança (Integridade, Autenticidade e Responsabilidade)
8. Compatibilidade (Coexistência)
   
As métricas incluem taxas de sucesso na conclusão de desafios, tempo de resposta, consumo de recursos, taxa de retenção de usuários, conformidade com diretrizes, facilidade de modificação, cobertura de testes, compatibilidade com diferentes dispositivos e sistemas, segurança de dados, e conformidade com regulamentações de proteção de dados. Essas métricas ajudarão a equipe a avaliar e melhorar continuamente a qualidade da aplicação, permitindo que ela promova eficazmente hábitos sustentáveis e contribua para a preservação ambiental.
