# Currículo mestre — Gabriel Camargo

> **Como usar este arquivo.** Ele não é o currículo final: é a fonte única de onde as
> versões saem. Cada bullet tem uma etiqueta. Para gerar uma versão, copie só o que estiver
> marcado com ela e apague o resto — nunca edite os PDFs em paralelo.

| Etiqueta | Significado |
| :---- | :---- |
| `[F]` | Entra na versão **frontend** |
| `[B]` | Entra na versão **backend ou fullstack** |
| `[F/B]` | Entra nas duas |
| `[—]` | Fica fora das duas por padrão; use só se sobrar espaço ou se a vaga pedir |

> **Máximo de 6 bullets por experiência**, os mais fortes primeiro. Nenhuma versão leva tudo
> o que está aqui — este arquivo é maior que qualquer currículo gerado a partir dele. Quando
> precisar cortar, sai primeiro o bullet que só descreve o que foi feito, sem número e sem
> escopo arquitetural.
>
> **Regra de geração: recorte, nunca redação.** Gerar uma versão é copiar texto daqui sem
> alterar uma palavra. Se algum trecho parecer que precisa ser reescrito, encurtado ou
> adaptado, a correção é editar o mestre primeiro e só depois gerar. Frase que aparece num
> PDF e não existe aqui é bug, não melhoria.
>
> **Trilha PT-BR.** Cada bullet tem a linha `**PT** —` logo abaixo, com a tradução
> congelada. A regra do recorte vale igual para os dois idiomas: currículo em português é
> cópia da linha `PT`, não tradução feita na hora. Traduzir no momento da geração produz uma
> redação nova a cada PDF, que é exatamente o que este arquivo existe para impedir.

---

## Contato

Gabriel Camargo
gabrielcamargo1409@gmail.com · +55 (17) 99126-7046
linkedin.com/in/gabriel-mcamargo · github.com/camargo1409

**Linha de localização (opcional):**
- Versão EN: `Novo Horizonte, São Paulo, Brazil`
- Versão PT: `Novo Horizonte, São Paulo`

→ *Na versão EN, usar em vagas remotas internacionais, onde fuso e jurisdição importam para
o recrutador. Omitir quando não fizer diferença. É opcional, mas o texto é este — não
inventar variação. Não abreviar para "São Paulo, Brazil": leitor estrangeiro entende como a
capital. Na versão PT, `Brazil` sai (o leitor é brasileiro) e o resto fica igual — não usar
`Novo Horizonte - SP` nem outra abreviação.*

---

## Summary

O parágrafo é o mesmo em todas as versões; só a **frase de especialização** muda.

**Abertura (comum a todas):**

> Full-Stack Engineer with 6+ years of experience building scalable, high-performance web
> applications end to end — from Next.js and React interfaces to Node.js and NestJS
> services, with hands-on experience in payments, authentication, background processing,
> and search systems.

**PT** — Full-Stack Engineer com mais de 6 anos de experiência construindo aplicações web
escaláveis e de alta performance de ponta a ponta — de interfaces em Next.js e React a
serviços em Node.js e NestJS, com experiência prática em pagamentos, autenticação,
processamento assíncrono e sistemas de busca.

**Frase de especialização — versão frontend `[F]`:**

> Deep specialization in Next.js rendering strategies (SSR, SSG, App Router), frontend
> performance optimization, and component architecture with TypeScript and Tailwind CSS.

**PT** — Especialização em estratégias de renderização do Next.js (SSR, SSG, App Router),
otimização de performance de frontend e arquitetura de componentes com TypeScript e
Tailwind CSS.

**Frase de especialização — versão backend `[B]`:**

> Deep specialization in Node.js and NestJS services, PostgreSQL (including vector and
> full-text search), queue-based processing, and payment-integrated systems.

**PT** — Especialização em serviços Node.js e NestJS, PostgreSQL (incluindo busca vetorial e
full-text), processamento baseado em filas e sistemas integrados a pagamento.

**Frase de especialização — versão fullstack `[F/B]`:**

> Comfortable owning a feature end to end — from rendering strategy and component
> architecture through API design, queue processing, and database-level search.

**PT** — Conduzo uma feature do início ao fim — da estratégia de renderização e da
arquitetura de componentes ao design de APIs, processamento em filas e busca no nível do
banco de dados.

**Frase de especialização — versão fullstack com IA no desenvolvimento `[F/B]`:**

> Comfortable owning a feature end to end — from rendering strategy and component
> architecture through API design, queue processing, and database-level search, using Claude
> Code daily to prototype, refactor, and ship production features.

**PT** — Conduzo uma feature do início ao fim — da estratégia de renderização e da
arquitetura de componentes ao design de APIs, processamento em filas e busca no nível do
banco de dados, usando Claude Code no dia a dia para prototipar, refatorar e entregar
features em produção.

→ *É a frase fullstack padrão com uma oração a mais no fim — não é uma redação nova. Use em
vaga que trate IA no desenvolvimento como requisito, não como diferencial. Quando esta
variante entra, a linha de Claude Code em Competências Técnicas **continua**: uma diz que é
prática diária, a outra diz qual é a ferramenta.*

**Frase de especialização — versão fullstack com peso em mobile `[F/B]`:**

> Comfortable owning a feature end to end across web and mobile — from React and React
> Native interfaces through API design, queue processing, and database-level search.

**PT** — Conduzo uma feature do início ao fim em web e mobile — de interfaces em React e
React Native ao design de APIs, processamento em filas e busca no nível do banco de dados.

→ *Use esta variante quando a vaga listar React Native como requisito principal. Ela troca a
menção a estratégia de renderização por mobile: é uma escolha, não um acréscimo.*

---

## Bytes & Pixels GmbH — Full-Stack Developer | Software Consultant
**Oct 2025 – Present** · Munich-based agency

**PT** — Bytes & Pixels GmbH — Full-Stack Developer | Consultor de Software ·
Out 2025 – Presente · Agência de tecnologia sediada em Munique

`[F/B]` Raised the mobile Lighthouse performance score of a React sales funnel from 55 to
80 by auditing render behavior and eliminating redundant state, unnecessary `useEffect`
hooks, and blocking operations on initial load.

**PT** — Elevei o score de performance do Lighthouse mobile de um funil de vendas em React
de 55 para 80, auditando o comportamento de renderização e eliminando estado redundante,
`useEffect` desnecessários e operações bloqueantes no carregamento inicial.

→ *topo na versão front; último ou cortado na versão back*

`[F/B]` Built a React Native trading card collection app on Supabase (Postgres catalog,
Auth, Edge Functions) covering 7 card games, 1,742 sets
and 220,000+ card variants, integrating the Ximilar computer vision API for card
identification and modeling variant identity as a deterministic composite key (game, set,
collector number, finish), with the matching printing confirmed by the user at scan time.

**PT** — Desenvolvi um app de coleção de cards em React Native sobre Supabase (catálogo em
Postgres, Auth e Edge Functions) cobrindo 7 jogos, 1.742
coleções e mais de 220 mil variantes de cards, integrando a API de visão computacional
Ximilar para identificação da carta e modelando a identidade da variante como uma chave
composta determinística (jogo, coleção, número do card, acabamento), com a impressão
correspondente confirmada pelo usuário no momento do scan.

→ *bullet obrigatório em qualquer vaga que peça React Native. O reconhecimento de imagem é
de terceiro (Ximilar) e o texto diz isso — não deixar sugerir que você treinou modelo de
visão.*

`[F/B]` Built the collection portfolio layer of the same app, tracking cost basis per
acquisition (purchase date and price paid) against daily variant-level price data to report
unrealized gain and loss per card and across the full collection.

**PT** — Desenvolvi a camada de portfólio do mesmo app, registrando o custo de aquisição por
compra (data e valor pago) contra a série diária de preços por variante para reportar ganho
e perda não realizados por carta e no total da coleção.

→ *é o mesmo produto do bullet acima. Se os dois entrarem, entram adjacentes — senão o
leitor lê como dois projetos. Bullet forte em vaga de fintech, onde conversa direto com os
4 anos de Mais Retorno.*

`[B]` Replaced Algolia with Supabase Postgres-native search over a 40,000+ product catalog
(weighted `tsvector` + `pg_trgm` typo tolerance), eliminating vendor cost with no
regression in search quality.

**PT** — Substituí o Algolia por busca nativa em Postgres no Supabase sobre um catálogo de mais de 40 mil
produtos (`tsvector` com pesos + `pg_trgm` tolerante a erro de digitação), eliminando o
custo do fornecedor sem regressão na qualidade da busca.

→ *topo na versão back*

`[B]` Built a RAG-based skincare recommendation system on Supabase over a 40,000+ product
catalog,
pairing deterministic retrieval (pgvector cosine similarity over embedded skin profile and
face scan data, HNSW indexing, post-retrieval allergen exclusion by substring match against
INCI ingredient lists, Skin Match scoring) with LLM curation via structured output,
producing localized morning/evening routines.

**PT** — Desenvolvi um sistema de recomendação de skincare com arquitetura RAG no Supabase
sobre um catálogo de mais de 40 mil produtos, combinando retrieval determinístico (similaridade de
cosseno com pgvector sobre o perfil de pele e o resultado do face scan embedados, índice
HNSW, exclusão de alérgenos pós-recuperação por match de substring contra listas INCI e
score de Skin Match) com curadoria por LLM via structured output, gerando rotinas de manhã e
noite localizadas no idioma do usuário.

`[B]` Designed a background worker consuming product offer updates from Amazon SQS,
normalizing and indexing over 1 million products into Elasticsearch to power real-time
offers on a client-facing site, implemented with NestJS.

**PT** — Projetei um background worker que consome atualizações de ofertas de produtos de uma
fila Amazon SQS, normalizando e indexando mais de 1 milhão de produtos no Elasticsearch para
viabilizar ofertas em tempo real em um site voltado ao cliente, implementado com NestJS.

`[F/B]` Built end-to-end test coverage for a sales funnel with Playwright, integrated with
LambdaTest Real Device automation to validate critical flows on physical iOS devices.

**PT** — Implementei cobertura de testes end-to-end de um funil de vendas com Playwright,
integrado ao LambdaTest Real Device Automation para validar fluxos críticos em dispositivos
iOS físicos.

### Camada LLM não-autoritativa — duas redações. Use **uma**, conforme o bullet do RAG entrar ou não.

`[B]` **Redação acompanhada** — só quando o bullet do RAG estiver logo acima.

> Designed the LLM layer to be non-authoritative on safety: model output is validated
> against the vetted shortlist, hallucinated products discarded and under-filled steps
> backfilled by score — guaranteeing a top pick plus alternatives per step.

**PT** — Projetei a camada de LLM para não ser autoritativa em segurança: a saída do modelo é
validada contra a shortlist já vetada, produtos alucinados são descartados e etapas
incompletas são preenchidas por score — garantindo uma indicação principal e alternativas em
cada etapa.

`[B]` **Redação autônoma** — quando o bullet do RAG não entrar na versão.

> Designed the LLM layer of a skincare recommendation system to be non-authoritative on
> safety: model output is validated against a deterministically retrieved shortlist,
> hallucinated products discarded and under-filled routine steps backfilled by score —
> guaranteeing a top pick plus alternatives per step.

**PT** — Projetei a camada de LLM de um sistema de recomendação de skincare para não ser
autoritativa em segurança: a saída do modelo é validada contra uma shortlist recuperada
deterministicamente, produtos alucinados são descartados e etapas incompletas da rotina são
preenchidas por score — garantindo uma indicação principal e alternativas em cada etapa.

→ *A redação acompanhada depende do bullet do RAG para o leitor saber que shortlist e que
etapas são essas. Sem ele, vira referência órfã — daí a segunda redação. É a melhor prova
documental de "avaliar criticamente a saída de IA", então em vaga que peça isso ela entra
mesmo que o RAG saia.*

### MCP server — três redações do mesmo trabalho. Use **uma** por versão, nunca duas.

`[F]` Built an MCP server for ChatGPT apps with the OpenAI Apps SDK, developing React
interactive widgets and a custom Vite multi-entry build producing independent bundles
rendered inside ChatGPT.

**PT** — Desenvolvi um servidor MCP para apps do ChatGPT usando o OpenAI Apps SDK,
construindo widgets interativos em React e um build customizado multi-entry em Vite que gera
bundles independentes renderizados dentro do ChatGPT.

`[B]` Built an MCP server for ChatGPT apps with the OpenAI Apps SDK, backed by NestJS and
Supabase, with a Better Auth server handling authentication and authorization.

**PT** — Desenvolvi um servidor MCP para apps do ChatGPT usando o OpenAI Apps SDK, com
backend em NestJS e Supabase e um servidor Better Auth responsável por autenticação e
autorização.

`[F/B]` Built an MCP server for ChatGPT apps with the OpenAI Apps SDK — React interactive
widgets on a custom Vite multi-entry build producing independent bundles, backed by NestJS
and Supabase with a Better Auth authentication server.

**PT** — Desenvolvi um servidor MCP para apps do ChatGPT usando o OpenAI Apps SDK — widgets
interativos em React sobre um build customizado multi-entry em Vite que gera bundles
independentes, com backend em NestJS e Supabase e um servidor Better Auth para autenticação
e autorização.

---

`[F/B]` Integrated PayPal payments through Stripe, handling the full checkout flow.

**PT** — Integrei pagamentos via PayPal através do Stripe, cobrindo todo o fluxo de checkout.

`[F]` Developed reusable components in a Storyblok headless CMS using Vue.js and Tailwind
CSS.

**PT** — Desenvolvi componentes reutilizáveis em um CMS headless Storyblok usando Vue.js e
Tailwind CSS.

`[—]` Redesigned a Flutter mobile app to extend its scanner from food products to
cosmetics, restructuring the product model and scan flows to support a second category.

**PT** — Redesenhei um app mobile em Flutter para estender seu scanner de produtos
alimentícios para cosméticos, reestruturando o modelo de produto e os fluxos de scan para
suportar uma segunda categoria.

→ *desde que o bullet do app TCG existe, este virou redundante como prova de mobile: aquele
é React Native, este é Flutter. Só entra se a vaga pedir Flutter especificamente.*

`[—]` Built a community feed in the trading card app where collectors publish posts and
share their collections.

**PT** — Desenvolvi um feed de comunidade no app de cards onde colecionadores publicam posts
e compartilham suas coleções.

→ *o mais fraco dos três bullets do app: não tem número nem decisão arquitetural. Só entra
se a vaga for de produto social.*

---

## Mais Retorno — Full-Stack Developer
**2021 – 2025** · Democratizing access to financial information and investment tools

**PT** — Mais Retorno — Full-Stack Developer · 2021 – 2025 · Democratização do acesso a
informações e ferramentas de investimento

`[F]` Built a mutual fund screener in Next.js letting users filter and compare over 30,000
funds across dozens of criteria, architecting the shared filter state with Zustand and
optimizing render performance for large result sets.

**PT** — Desenvolvi um screener de fundos em Next.js que permite filtrar e comparar mais de
30 mil fundos por dezenas de critérios, arquitetando o estado compartilhado dos filtros com
Zustand e otimizando a performance de renderização para grandes volumes de resultados.

`[F]` Architected and developed interactive financial analysis platforms using Next.js,
supporting complex data visualization and dynamic routing.

**PT** — Arquitetei e desenvolvi plataformas interativas de análise financeira em Next.js,
com visualização de dados complexos e roteamento dinâmico.

`[F]` Architected and developed a financial news portal using Next.js Static Site
Generation to optimize content delivery and ensure fast page loads at scale.

**PT** — Arquitetei e desenvolvi um portal de notícias financeiras em Next.js com Static Site
Generation para otimizar a entrega de conteúdo e garantir carregamento rápido em escala.

`[F]` Built a unified asset search component in Next.js, consolidating multiple financial
asset types into a single search experience, leveraging SWR for client-side data fetching
and caching.

**PT** — Desenvolvi um componente unificado de busca de ativos em Next.js, consolidando
múltiplos tipos de ativo financeiro em uma única experiência de busca, com SWR para fetch e
cache no cliente.

`[F/B]` Designed and implemented a production-grade checkout and subscription system in
Next.js, integrating Pagar.me for secure payment processing and recurring billing flows.

**PT** — Projetei e implementei um sistema de checkout e assinaturas em produção com Next.js,
integrando o Pagar.me para processamento seguro de pagamentos e cobrança recorrente.

`[F/B]` Implemented authentication and session management using NextAuth integrated with
Keycloak, supporting secure multi-tenant access control.

**PT** — Implementei autenticação e gerenciamento de sessão com NextAuth integrado ao
Keycloak, com controle de acesso multi-tenant.

`[F]` Built a subscription management page using Next.js SSR to fetch subscription details
and Pagar.me invoices on the server, ensuring data integrity and optimized initial load.

**PT** — Desenvolvi uma página de gerenciamento de assinatura com SSR do Next.js para buscar
os dados da assinatura e as faturas do Pagar.me no servidor, garantindo integridade dos
dados e carregamento inicial otimizado.

`[F]` Consolidated front-end projects in Next.js into a monorepo using TurboRepo and npm
workspaces for better tool and component reuse.

**PT** — Consolidei projetos de front-end em Next.js em um monorepo com TurboRepo e npm
workspaces para melhorar o reuso de ferramentas e componentes.

`[F]` Configured Keycloak as an authentication provider and customized Babel and Webpack
settings to generate ReactJS templates.

**PT** — Configurei o Keycloak como provedor de autenticação e customizei configurações de
Babel e Webpack para gerar templates em ReactJS.

`[B]` Led the migration of a system from Python (Django) to Node.js (NestJS) to align with
the team's expertise in JavaScript.

**PT** — Liderei a migração de um sistema de Python (Django) para Node.js (NestJS),
alinhando a stack à expertise do time em JavaScript.

`[B]` Built an invoice generation system with Node.js, Express, PostgreSQL and cron jobs,
replacing a manual process that took over an hour of issuing and reviewing per cycle with a
fully automated one.

**PT** — Desenvolvi um sistema de geração de faturas com Node.js, Express, PostgreSQL e cron
jobs, substituindo um processo manual que levava mais de uma hora de emissão e revisão por
ciclo por um fluxo totalmente automatizado.

`[B]` Developed a payment system using RabbitMQ and WebSockets for better financial control
and reduced dependency on third-party providers.

**PT** — Desenvolvi um sistema de pagamentos com RabbitMQ e WebSockets para melhorar o
controle financeiro e reduzir a dependência de fornecedores terceiros.

`[B]` Implemented a multi-tenant subscription management system tailored for investment
advisory firms.

**PT** — Implementei um sistema multi-tenant de gerenciamento de assinaturas voltado para
escritórios de assessoria de investimentos.

`[B]` Developed a PDF generation system leveraging AWS S3 and ReactPDF to create
standardized reports across different tools.

**PT** — Desenvolvi um sistema de geração de PDFs com AWS S3 e ReactPDF para criar relatórios
padronizados entre diferentes ferramentas.

`[B]` Created an automatic news summary system in PHP to improve journalist efficiency.

**PT** — Criei um sistema automático de resumo de notícias em PHP para aumentar a eficiência
dos jornalistas.

`[B]` Resolved infrastructure issues such as HTTPS certificate problems and large payload
handling in Nginx.

**PT** — Resolvi problemas de infraestrutura como falhas de certificado HTTPS e tratamento de
payloads grandes no Nginx.

---

## Nimbus — Web/Mobile Developer
**2020 – 2021** · Data-driven solutions for the energy sector

**PT** — Nimbus — Desenvolvedor Web/Mobile · 2020 – 2021 · Soluções baseadas em dados para o
setor de energia

`[F/B]` Developed and maintained web tools for the NIMBUS platform using Django on the
backend and HTML, jQuery, and Bootstrap on the frontend.

**PT** — Desenvolvi e mantive ferramentas web da plataforma NIMBUS com Django no backend e
HTML, jQuery e Bootstrap no frontend.

`[F/B]` Worked on the development of tools for analyzing and visualizing energy market data,
focusing on price information and weather and hydrological conditions.

**PT** — Atuei no desenvolvimento de ferramentas de análise e visualização de dados do
mercado de energia, com foco em informações de preço e em condições meteorológicas e
hidrológicas.

`[F]` Developed a React Native mobile training application for sugarcane mill employees,
together with a web dashboard for tracking employee progress.

**PT** — Desenvolvi um aplicativo mobile de treinamento em React Native para funcionários de
usinas de cana-de-açúcar, junto de um dashboard web para acompanhar o progresso dos
colaboradores.

→ *em vaga de React Native, este bullet vai para o primeiro lugar da Nimbus*

`[F]` Built a JavaScript-based weather map animation player, allowing users to navigate
through time-series image sequences and facilitating weather condition analysis.

**PT** — Desenvolvi um player de animação de mapas meteorológicos em JavaScript, permitindo
ao usuário navegar por sequências de imagens em série temporal e facilitando a análise das
condições do tempo.

→ *os quatro bullets da Nimbus foram reescritos de uma vez: os antigos diziam o que foi
feito sem dizer sobre o quê. Nomear a plataforma e o domínio (mercado de energia, preço,
condições hidrológicas) é o que dá peso a um cargo de 2020. Pela regra do recorte, a
reescrita mora aqui — nenhum PDF anterior a esta edição bate com o mestre nesta seção.*

---

## Etec Marines Teodoro de Freitas Almeida — IT Intern
**2017 – 2018**

`[—]` Computer and device maintenance, structured cabling, IT process documentation, and
mass hard drive cloning with Clonezilla for lab deployment.

**PT** — Manutenção de computadores e dispositivos, cabeamento estruturado, documentação de
processos de TI e clonagem em massa de discos com Clonezilla para implantação de
laboratórios.

→ *só use se a página parecer vazia; com 6 anos de experiência esse cargo já não agrega*

---

## Core Expertise

**PT** — Competências principais

### Versão frontend `[F]`
- Next.js (SSR, SSG, App Router, API Routes, Middleware)
- React & TypeScript architecture
- React Native & mobile development
- Performance optimization (Lighthouse, Core Web Vitals)
- Scalable frontend systems design
- Component architecture & design systems
- State management (Zustand, Context, SWR)
- End-to-end testing (Playwright, Cypress)

**PT** —
- Next.js (SSR, SSG, App Router, API Routes, Middleware)
- Arquitetura React & TypeScript
- Desenvolvimento React Native & mobile
- Otimização de performance (Lighthouse, Core Web Vitals)
- Design de sistemas frontend escaláveis
- Arquitetura de componentes & design systems
- Gerenciamento de estado (Zustand, Context, SWR)
- Testes end-to-end (Playwright, Cypress)

### Versão backend `[B]`
- Node.js & NestJS development
- Object-oriented programming
- REST API development
- Authentication & authorization
- Payment & subscription systems
- PostgreSQL & relational databases (pgvector, full-text search)
- Background jobs & queue processing
- Vector search & LLM integration
- Git workflows & deployment pipelines
- Cloud & web infrastructure

**PT** —
- Desenvolvimento com Node.js & NestJS
- Programação orientada a objetos
- Desenvolvimento de APIs REST
- Autenticação & autorização
- Sistemas de pagamento & assinatura
- PostgreSQL & bancos relacionais (pgvector, full-text search)
- Processamento assíncrono & filas
- Busca vetorial & integração com LLM
- Versionamento com Git & pipelines de deploy
- Infraestrutura cloud & web

### Versão fullstack `[F/B]`
- Next.js (SSR, SSG, App Router, API Routes)
- React & TypeScript architecture
- React Native & mobile development
- Node.js & NestJS development
- Object-oriented programming
- REST API development
- Authentication & authorization
- Payment & subscription systems
- Background jobs & queue processing
- PostgreSQL & relational databases (pgvector, full-text search)
- Performance optimization (Lighthouse, Core Web Vitals)
- End-to-end testing (Playwright, Cypress)
- Git workflows & deployment pipelines

**PT** —
- Next.js (SSR, SSG, App Router, API Routes)
- Arquitetura React & TypeScript
- Desenvolvimento React Native & mobile
- Desenvolvimento com Node.js & NestJS
- Programação orientada a objetos
- Desenvolvimento de APIs REST
- Autenticação & autorização
- Sistemas de pagamento & assinatura
- Processamento assíncrono & filas
- PostgreSQL & bancos relacionais (pgvector, full-text search)
- Otimização de performance (Lighthouse, Core Web Vitals)
- Testes end-to-end (Playwright, Cypress)
- Versionamento com Git & pipelines de deploy

---

## Technical Skills

**PT** — Competências técnicas

*A ordem das linhas muda por versão: na front, Frontend vem primeiro; na back, Backend e
Databases vêm primeiro. Na fullstack, mantém a ordem abaixo. Em vaga com peso em mobile,
Mobile sobe para logo depois de Frontend.*

- **Frontend:** Next.js, React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS
- **Mobile:** React Native, Flutter
- **State management:** Zustand, React Context, SWR
- **Backend:** Node.js, NestJS, Django, Express, PHP (Laravel)
- **Databases:** PostgreSQL (pgvector, tsvector, pg_trgm), MySQL, Supabase, Firebase
- **DevOps & Infrastructure:** Git, Docker, GitHub Actions, Nginx, AWS S3, AWS SQS, RabbitMQ,
  Elasticsearch, Render
- **Testing & Automation:** Playwright, Cypress, Jest, Vitest, LambdaTest
- **AI-assisted development:** Claude Code
- **Tools & Workflows:** TurboRepo, npm workspaces, WebSockets, cron jobs

**PT** —
- **Frontend:** Next.js, React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS
- **Mobile:** React Native, Flutter
- **Gerenciamento de estado:** Zustand, React Context, SWR
- **Backend:** Node.js, NestJS, Django, Express, PHP (Laravel)
- **Bancos de dados:** PostgreSQL (pgvector, tsvector, pg_trgm), MySQL, Supabase, Firebase
- **DevOps & Infraestrutura:** Git, Docker, GitHub Actions, Nginx, AWS S3, AWS SQS, RabbitMQ,
  Elasticsearch, Render
- **Testes & Automação:** Playwright, Cypress, Jest, Vitest, LambdaTest
- **Desenvolvimento assistido por IA:** Claude Code
- **Ferramentas & Workflows:** TurboRepo, npm workspaces, WebSockets, cron jobs

→ *A linha de IA aparece **uma vez**, aqui. Você usa Claude Code em todos os projetos da
Bytes & Pixels, e é justamente por isso que ela não vira bullet: o que vale para todo
projeto não é característica de nenhum. Repetir a ferramenta bullet a bullet vira ruído e o
leitor desconta. A exceção é a frase de especialização com IA no desenvolvimento: ali a
menção é ao hábito, não ao projeto, e por isso não colide com esta linha. Duas menções no
currículo inteiro é o teto.*

---

## Education

**Associate Degree in Systems Analysis and Development** — IFSP Catanduva, 2019–2022
**Technical Course in Computer Science** — Etec Marines Teodoro de Freitas Almeida,
2016–2018

**PT** — Formação
**Tecnólogo em Análise e Desenvolvimento de Sistemas** — IFSP Catanduva, 2019–2022
**Curso Técnico em Informática** — Etec Marines Teodoro de Freitas Almeida, 2016–2018

## Languages

- **English:** Professional Working Proficiency
- **Portuguese:** Native

**PT** — Idiomas
- **Inglês:** Profissional
- **Português:** Nativo

---

# Receitas de geração

Combinações já definidas, para não refazer a escolha toda vez.

### Versão fullstack (perfil do LinkedIn, candidatura genérica)
- **Summary:** abertura + frase fullstack
- **Bytes & Pixels:** Lighthouse · app TCG · Algolia · RAG · worker SQS · MCP `[F/B]`
- **Mais Retorno:** screener · checkout Pagar.me · migração Django→NestJS · faturas ·
  NextAuth/Keycloak · portal de notícias SSG
- **Nimbus:** os quatro bullets
- **Etec:** fora
- **Core Expertise:** lista fullstack
- **Localização:** incluir

→ *O bullet do Playwright saiu quando o app TCG entrou: pela regra de corte, ele é o único
dos sete sem número nem decisão arquitetural. Testes continuam visíveis em Core Expertise e
em Competências Técnicas. Se a vaga tiver peso em QA, o swap de volta é Playwright no lugar
do Algolia.*

### Versão frontend
- **Summary:** abertura + frase frontend
- Recorte por `[F]` e `[F/B]`, 6 bullets por experiência, MCP na redação `[F]`

### Versão backend
- **Summary:** abertura + frase backend
- Recorte por `[B]` e `[F/B]`, 6 bullets por experiência, MCP na redação `[B]`

### Versão fullstack Supabase + IA no desenvolvimento
Usada primeiro na vaga Thaloz / GR8 Global (Senior Full Stack: React, Next.js, TypeScript,
Postgres e Supabase, com IA no desenvolvimento como requisito).
- **Summary:** abertura + frase fullstack com IA no desenvolvimento
- **Bytes & Pixels:** Lighthouse · app TCG · Algolia · RAG · worker SQS · MCP `[F/B]`
- **Mais Retorno:** screener · checkout Pagar.me · migração Django→NestJS · faturas ·
  NextAuth/Keycloak · portal de notícias SSG
- **Nimbus:** os quatro bullets
- **Etec:** fora
- **Core Expertise:** lista fullstack
- **Localização:** incluir

→ *É a versão fullstack padrão com duas trocas, não um currículo novo: a frase de
especialização ganha a oração do Claude Code, e os três bullets que rodam em Supabase
passaram a dizer isso. Nenhum bullet foi reescrito para a vaga. O que a vaga pede e o
currículo não prova — RLS, Storage, Realtime, Azure Container Apps — fica de fora até
existir projeto que sustente; ver notas para entrevista.*

### Versão mobile-fullstack (React Native como requisito principal)
Usada primeiro na vaga Free Flow (fullstack com peso em front, React Native, Java e
microsserviços, IA no desenvolvimento).
- **Summary:** abertura + frase fullstack com peso em mobile
- **Bytes & Pixels:** app TCG · Lighthouse · MCP `[F/B]` · worker SQS · camada LLM
  (**redação autônoma**) · Playwright
- **Mais Retorno:** screener · checkout Pagar.me · migração Django→NestJS ·
  NextAuth/Keycloak · faturas · portal de notícias SSG
- **Nimbus:** React Native primeiro, depois plataforma NIMBUS, depois dados de mercado de
  energia, depois player de mapas
- **Etec:** fora
- **Core Expertise:** lista fullstack (React Native já está na posição 3)
- **Technical Skills:** Mobile logo depois de Frontend
- **Localização:** incluir

→ *O RAG sai, apesar de ser o bullet mais impressionante do currículo: nesta vaga ele não
marca nenhum requisito, e a camada LLM marca um requisito principal inteiro. Por isso a
redação autônoma existe.*

---

# Notas para entrevista

Coisas boas demais para caber no currículo, mas que valem estar na ponta da língua.

**Exclusão de alérgenos.** O `searchSimilar` até suporta filtro in-query
(`NOT (inci && $n::text[])`), mas nenhum caller de produção usa. O fluxo real busca um
buffer extra (`RETRIEVE_BUFFER = 16`) e filtra em memória no `#rankAndFilter`. **A escolha
é deliberada, não descuido:** o filtro in-query faz overlap exato de arrays, enquanto o em
memória faz match por substring case-insensitive — então "parfum" no perfil do usuário pega
"Parfum/Fragrance" na lista INCI. O filtro menos elegante é o mais seguro, e segurança
ganha. Saber justificar isso vale mais que a otimização que você não fez.

**Variante confirmada pelo usuário.** No app de cards, a Ximilar identifica a carta e o app
apresenta as variantes disponíveis para o usuário escolher — o sistema não adivinha o
acabamento. Foil e normal são frequentemente indistinguíveis numa foto ruim, e chutar errado
corrompe o valor do portfólio inteiro, não só daquela carta. **É o mesmo raciocínio da
exclusão de alérgenos:** a solução menos automática é a mais segura. Se perguntarem por que
não automatizar, essa é a resposta, e ela é melhor que "não deu tempo".

**Chave composta da variante.** `mtg:sds:11:foil` — jogo, coleção, número do card,
acabamento. O ponto forte é que ela é determinística e vale igual para 7 jogos com
convenções de numeração completamente diferentes (Pokémon, Magic, Yu-Gi-Oh!, One Piece,
Lorcana, Dragon Ball Super, Digimon). 1.742 coleções e 220.167 variantes de card. Vale ter
na ponta da língua como resolveu os jogos que fogem do padrão, e o que acontece quando uma
coleção nova entra no catálogo.

**Portfólio de coleção.** Custo de aquisição por compra contra série diária de preço é P&L
não realizado — o mesmo problema dos 4 anos de Mais Retorno, em outro domínio. Se
perguntarem sobre experiência com dado financeiro, a ponte é essa.

**Lighthouse 55 → 80 em mobile.** Provavelmente LCP ou TBT puxando o score. Vale recuperar
qual métrica estava travando e o que exatamente a destravou — é a primeira pergunta que um
entrevistador técnico faz depois de ler esse bullet.

**RAG.** O batching dos embeddings numa única chamada, o uso obrigatório do mesmo modelo
(`text-embedding-3-small`) para query e produto, o índice HNSW, e o fallback por categoria
quando o lote vem incompleto — a rotina degrada em vez de falhar inteira.

**Screener.** 30 mil fundos com dezenas de filtros interdependentes é um problema real de
performance de render. Vale lembrar o que você fez para segurar isso: virtualização,
memoização, debounce, paginação no servidor.

**Redux.** Você nunca usou, e não listou — está certo. Se perguntarem, a resposta forte é
descrever o screener: 30 mil fundos, dezenas de filtros interdependentes, estado
compartilhado entre rotas. O padrão arquitetural é o mesmo; a biblioteca é detalhe.

**Java e microsserviços.** A vaga Free Flow pede Java como requisito principal e você não
tem — não invente. O que é defensável: você liderou uma migração de stack inteira
(Django→NestJS), e o worker SQS→Elasticsearch é serviço distribuído de verdade. A palavra
"microsserviços" **não está em nenhum bullet do mestre de propósito** — se a arquitetura em
que aquele worker rodava era de fato de microsserviços, edite o bullet aqui primeiro. Não
acrescente no PDF.

**Supabase e RLS.** Os bullets provam catálogo em Postgres, Auth, Edge Functions e busca —
não provam Row Level Security, Storage nem Realtime. A vaga Thaloz cita RLS duas vezes, e é
a lacuna mais visível do currículo nessa candidatura. Se as tabelas do app de cards têm
policies de RLS de verdade, **edite o bullet do app aqui primeiro** — é uma palavra em cada
idioma e vira o item mais valioso da versão. Se não têm, a resposta na entrevista é o
modelo de acesso que você de fato implementou e por quê; não improvise policy que não
escreveu.

**Claude Code.** Se perguntarem como você usa (e essa vaga vai perguntar), o que conta não é
a ferramenta, é o critério de revisão: o que você rejeita do agente, que convenção de
arquitetura ele precisa seguir, o que os testes barram antes de entrar. Sem esse critério
articulado, a linha em Competências Técnicas vira passivo na entrevista.
