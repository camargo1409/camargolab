---
name: Gabriel Camargo
title: Engenheiro Full-Stack
email: gabrielcamargo1409@gmail.com
phone: '+55 (17) 99126-7046'
location: 'Novo Horizonte, São Paulo, Brasil'
linkedin: linkedin.com/in/gabriel-mcamargo
github: github.com/camargo1409
---

## Resumo

Full-Stack Engineer com mais de 6 anos de experiência construindo aplicações web escaláveis e de alta performance de ponta a ponta — de interfaces em Next.js e React a serviços em Node.js e NestJS, com experiência prática em pagamentos, autenticação, processamento assíncrono e sistemas de busca. Conduzo uma feature do início ao fim — da estratégia de renderização e da arquitetura de componentes ao design de APIs, processamento em filas e busca no nível do banco de dados, com testes automatizados (Playwright, Jest) e observabilidade (PostHog, Sentry) em toda a stack.

## Experiência

### Bytes & Pixels GmbH — Desenvolvedor Full-Stack | Consultor de Software

Out 2025 – Presente · Agência com sede em Munique

- Aumentei o score de performance Lighthouse móvel de um funil de vendas em React de 55 para 80 auditando o comportamento de renderização e eliminando estado redundante, hooks `useEffect` desnecessários e operações bloqueantes no carregamento inicial.
- Construí um app de coleção de cartas trading card em React Native com Supabase (catálogo em Postgres, Auth, Edge Functions) cobrindo 7 jogos de cartas, 1.742 coleções e 220.000+ variantes, integrando a API de visão computacional da Ximilar para identificação de cartas e modelando a identidade da variante como uma chave composta determinística (jogo, coleção, número do colecionador, acabamento), com a impressão correspondente confirmada pelo usuário no momento do scan.
- Substituí o Algolia por busca nativa em Postgres no Supabase em um catálogo de 40.000+ produtos (weighted `tsvector` + `pg_trgm` com tolerância a erros de digitação), eliminando custo de fornecedor sem regressão na qualidade da busca.
- Construí um sistema de recomendação de skincare baseado em RAG no Supabase sobre um catálogo de 40.000+ produtos, combinando recuperação determinística (similaridade cosseno pgvector sobre perfil de pele e dados de face scan, indexação HNSW, exclusão pós-recuperação por alérgenos via substring match nas listas de ingredientes INCI, pontuação Skin Match) com curadoria por LLM via structured output, produzindo rotinas de manhã/noite localizadas.
- Desenhei um worker em background consumindo atualizações de ofertas de produtos da Amazon SQS, normalizando e indexando mais de 1 milhão de produtos no Elasticsearch para alimentar ofertas em tempo real em site para clientes, implementado com NestJS.
- Construí um servidor MCP para aplicativos ChatGPT com OpenAI Apps SDK — widgets interativos em React em um build customizado Vite multi-entry produzindo bundles independentes, com backend NestJS e Supabase e autenticação via Better Auth.
- Instrumentei um funil de vendas em React e apps móveis com PostHog, rastreando eventos de produto e erros de frontend para monitorar comportamento do usuário e expor falhas em produção.
- Construí a camada de portfolio da coleção do mesmo app, rastreando custo base por aquisição (data da compra e preço pago) contra dados diários de preço por variante para reportar ganho e perda não realizado por carta e no conjunto da coleção.
- Desenhei a camada de LLM de um sistema de recomendação de skincare para não ser autoritativa em segurança: a saída do modelo é validada contra uma shortlist recuperada deterministically, produtos hallucinated descartados e passos subpreenchidos reabastecidos por score — garantindo um top pick mais alternativas por etapa.
- Construí testes end-to-end automatizados para um funil de vendas com Playwright, cobrindo o caminho completo de onboarding até checkout, e integrei com LambdaTest Real Device automation para rodar em dispositivos físicos iOS.
- Integrei pagamentos PayPal via Stripe, cuidando de todo o fluxo de checkout.
- Desenvolvi componentes reutilizáveis em um CMS headless Storyblok usando Vue.js e Tailwind CSS.
- Redesenhei um app móvel Flutter para estender seu scanner de produtos alimentícios para cosméticos, reestruturando o modelo do produto e os fluxos de scan para suportar uma segunda categoria.
- Construí um feed comunitário no app de trading card onde colecionadores publicam posts e compartilham suas coleções.

### Mais Retorno — Desenvolvedor Full-Stack

2021 – 2025 · Democratizando acesso a informações financeiras e ferramentas de investimento

- Construí um screener de fundos mútuos em Next.js permitindo filtrar e comparar mais de 30.000 fundos em dezenas de critérios, arquitetando o estado compartilhado de filtros com Zustand e otimizando a performance de render para grandes conjuntos de resultados.
- Desenhei e implementei um sistema de checkout e assinatura de produção em Next.js, integrando Pagar.me para processamento seguro de pagamento e fluxo recorrente.
- Lideramos a migração de um sistema de Python (Django) para Node.js (NestJS) para alinhar com a expertise da equipe em JavaScript.
- Construí um sistema de geração de faturas com Node.js, Express, PostgreSQL e cron jobs, substituindo um processo manual que levava mais de uma hora de emissão e revisão por ciclo por um totalmente automatizado.
- Escrevi testes unitários com Jest para os casos de uso de uma API em NestJS, cobrindo regras de negócio.
- Implementei autenticação e gerenciamento de sessão usando NextAuth integrado ao Keycloak, suportando controle de acesso multi-tenant seguro.
- Arquitetei e desenvolvi um portal de notícias financeiras usando Next.js Static Site Generation para otimizar entrega de conteúdo e garantir carregamento rápido em escala.
- Monitorei erros de API em produção com Sentry, usando stack traces capturados e contexto de request para triagem de falhas e priorização de correções.
- Construí um componente unificado de busca de ativos em Next.js, consolidando múltiplos tipos de ativos financeiros em uma única experiência de busca, aproveitando SWR para fetching e cache no cliente.
- Construí componentes acessíveis em Next.js, combinando primitivas do Material UI com HTML semântico e roles/labels ARIA explícitas, seguindo diretrizes WCAG para elementos interativos customizados.
- Arquitetei e desenvolvi plataformas interativas de análise financeira em Next.js, suportando visualização complexa de dados e roteamento dinâmico.
- Construí uma página de gestão de assinatura usando Next.js SSR para buscar detalhes da assinatura e faturas Pagar.me no servidor, garantindo integridade dos dados e carregamento inicial otimizado.
- Desenvolvi um sistema de pagamento com RabbitMQ e WebSockets para melhor controle financeiro e menor dependência de provedores externos.
- Implementei um sistema de gestão de assinatura multi-tenant adaptado para consultorias de investimentos.
- Desenvolvi um sistema de geração de PDF usando AWS S3 e ReactPDF para criar relatórios padronizados em diferentes ferramentas.
- Consolidei projetos front-end em Next.js em um monorepo usando TurboRepo e npm workspaces para melhor reaproveitamento de ferramentas e componentes.
- Configurei Keycloak como provedor de autenticação e customizei configurações do Babel e Webpack para gerar templates ReactJS.
- Criei um sistema automático de resumos de notícias em PHP para melhorar a eficiência dos jornalistas.
- Resolvi problemas de infraestrutura como certificados HTTPS e manipulação de payloads grandes em Nginx.

### Nimbus — Desenvolvedor Web/Mobile

2020 – 2021 · Soluções orientadas a dados para o setor energético

- Desenvolvi e mantive ferramentas web para a plataforma NIMBUS usando Django no backend e HTML, jQuery e Bootstrap no frontend.
- Trabalhei no desenvolvimento de ferramentas para análise e visualização de dados do mercado de energia, focando em informações de preços e condições climáticas e hidrológicas.
- Desenvolvi um app de treinamento mobile em React Native para funcionários de usinas de cana-de-açúcar, junto com um dashboard web para acompanhar o progresso dos funcionários.
- Construí um player de animação de mapa climático em JavaScript, permitindo navegar por sequências de imagens em série temporal e facilitar a análise de condições climáticas.

## Competências principais

- Next.js (SSR, SSG, App Router, API Routes)
- Arquitetura em React & TypeScript
- Desenvolvimento mobile com React Native
- Desenvolvimento em Node.js & NestJS
- Programação orientada a objetos
- Desenvolvimento de APIs REST
- Autenticação e autorização
- Sistemas de pagamento e assinaturas
- Jobs em background e processamento de filas
- Bancos de dados relacionais em PostgreSQL (pgvector, full-text search)
- Otimização de performance (Lighthouse, Core Web Vitals)
- Observabilidade e monitoramento de erros (PostHog, Sentry)
- Testes automatizados (Playwright, Jest, Cypress)
- Acessibilidade web (WCAG, HTML semântico, ARIA)
- Fluxos de Git e pipelines de deploy

## Habilidades técnicas

- **Frontend:** Next.js, React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Material UI
- **Mobile:** React Native, Flutter
- **Gerenciamento de estado:** Zustand, React Context, SWR
- **Acessibilidade:** diretrizes WCAG, HTML semântico, ARIA
- **Backend:** Node.js, NestJS, Django, Express, PHP (Laravel)
- **Bancos de dados:** PostgreSQL (pgvector, tsvector, pg_trgm), MySQL, Supabase, Firebase
- **DevOps e infraestrutura:** Git, Docker, GitHub Actions, Nginx, AWS S3, AWS SQS, RabbitMQ, Elasticsearch, Render
- **Testes automatizados:** Playwright, Cypress, Jest, Vitest, LambdaTest
- **Observabilidade:** PostHog, Sentry
- **Desenvolvimento com IA:** Claude Code
- **Ferramentas e fluxos de trabalho:** TurboRepo, npm workspaces, WebSockets, cron jobs

## Educação

- **Tecnólogo em Análise e Desenvolvimento de Sistemas** — IFSP Catanduva, 2019–2022
- **Curso Técnico em Informática** — Etec Marines Teodoro de Freitas Almeida, 2016–2018

## Idiomas

- **Inglês:** Proficiência profissional
- **Português:** Nativo
