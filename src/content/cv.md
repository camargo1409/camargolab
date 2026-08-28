---
name: Gabriel Camargo
title: Full-Stack Engineer
email: gabrielcamargo1409@gmail.com
phone: '+55 (17) 99126-7046'
location: 'Novo Horizonte, São Paulo, Brazil'
linkedin: linkedin.com/in/gabriel-mcamargo
github: github.com/camargo1409
---

<!--
  Fonte do CV renderizado em /cv.

  Formato que a página entende:
  - "## Título"  → seção do CV (Summary, Experience, Core Expertise, ...)
  - "### Empresa — Cargo" → experiência; a linha seguinte é "Período · contexto"
  - "- " → bullet. A página exibe SÓ OS 6 PRIMEIROS bullets de cada experiência;
    os demais ficam aqui como banco, em ordem de relevância para o cargo fullstack.
    Para trocar o que aparece no CV, basta reordenar os bullets.
  - Os textos vêm do currículo mestre (recorte, nunca redação) — se algo precisar
    mudar, edite o mestre primeiro e copie para cá.
  - Este arquivo é a visão FULLSTACK. O par dele é cv-frontend.md: mesmo conteúdo,
    outra ordem e outra frase de especialização no Summary.
-->

## Summary

Full-Stack Engineer with 6+ years of experience building scalable, high-performance web applications end to end — from Next.js and React interfaces to Node.js and NestJS services, with hands-on experience in payments, authentication, background processing, and search systems. Comfortable owning a feature end to end — from rendering strategy and component architecture through API design, queue processing, and database-level search, with automated testing (Playwright, Jest) and observability (PostHog, Sentry) across the stack.

## Experience

### Bytes & Pixels GmbH — Full-Stack Developer | Software Consultant

Oct 2025 – Present · Munich-based agency

- Raised the mobile Lighthouse performance score of a React sales funnel from 55 to 80 by auditing render behavior and eliminating redundant state, unnecessary `useEffect` hooks, and blocking operations on initial load.
- Built a React Native trading card collection app on Supabase (Postgres catalog, Auth, Edge Functions) covering 7 card games, 1,742 sets and 220,000+ card variants, integrating the Ximilar computer vision API for card identification and modeling variant identity as a deterministic composite key (game, set, collector number, finish), with the matching printing confirmed by the user at scan time.
- Replaced Algolia with Supabase Postgres-native search over a 40,000+ product catalog (weighted `tsvector` + `pg_trgm` typo tolerance), eliminating vendor cost with no regression in search quality.
- Built a RAG-based skincare recommendation system on Supabase over a 40,000+ product catalog, pairing deterministic retrieval (pgvector cosine similarity over embedded skin profile and face scan data, HNSW indexing, post-retrieval allergen exclusion by substring match against INCI ingredient lists, Skin Match scoring) with LLM curation via structured output, producing localized morning/evening routines.
- Built a React Native trading card collection app on Supabase (Postgres catalog, Auth, Edge Functions) covering 7 card games, 1,742 sets and 220,000+ card variants, integrating the Ximilar computer vision API for card identification and modeling variant identity as a deterministic composite key (game, set, collector number, finish), with the matching printing confirmed by the user at scan time.
- Integrated Stripe into a web sales funnel, enabling PayPal payments and configuring Stripe Managed Payments to simplify global tax compliance and international payment processing.
- Built a RAG-based skincare recommendation system on Supabase over a 40,000+ product catalog, pairing deterministic retrieval (pgvector cosine similarity over embedded skin profile and face scan data, HNSW indexing, post-retrieval allergen exclusion by substring match against INCI ingredient lists, Skin Match scoring) with LLM curation via structured output, producing localized morning/evening routines.
- Designed a background worker consuming product offer updates from Amazon SQS, normalizing and indexing over 1 million products into Elasticsearch to power real-time offers on a client-facing site, implemented with NestJS.
- Built an MCP server for ChatGPT apps with the OpenAI Apps SDK — React interactive widgets on a custom Vite multi-entry build producing independent bundles, backed by NestJS and Supabase with a Better Auth authentication server.
- Instrumented a React sales funnel and mobile apps with PostHog, tracking product events and frontend errors to monitor user behavior and surface production failures.
- Built the collection portfolio layer of the same app, tracking cost basis per acquisition (purchase date and price paid) against daily variant-level price data to report unrealized gain and loss per card and across the full collection.
- Designed the LLM layer of a skincare recommendation system to be non-authoritative on safety: model output is validated against a deterministically retrieved shortlist, hallucinated products discarded and under-filled routine steps backfilled by score — guaranteeing a top pick plus alternatives per step.
- Built automated end-to-end tests for a sales funnel with Playwright, covering the full path from onboarding to checkout, and integrated them with LambdaTest Real Device automation to run on physical iOS devices.
- Developed reusable components in a Storyblok headless CMS using Vue.js and Tailwind CSS.
- Redesigned a Flutter mobile app to extend its scanner from food products to cosmetics, restructuring the product model and scan flows to support a second category.
- Built a community feed in the trading card app where collectors publish posts and share their collections.

### Mais Retorno — Full-Stack Developer

2021 – 2025 · Democratizing access to financial information and investment tools

- Built a mutual fund screener in Next.js letting users filter and compare over 30,000 funds across dozens of criteria, architecting the shared filter state with Zustand and optimizing render performance for large result sets.
- Designed and implemented a production-grade checkout and subscription system in Next.js, integrating Pagar.me for secure payment processing and recurring billing flows.
- Led the migration of a system from Python (Django) to Node.js (NestJS) to align with the team's expertise in JavaScript.
- Built an invoice generation system with Node.js, Express, PostgreSQL and cron jobs, replacing a manual process that took over an hour of issuing and reviewing per cycle with a fully automated one.
- Wrote automated unit tests with Jest for the use cases of a NestJS API, covering their business rules.
- Implemented authentication and session management using NextAuth integrated with Keycloak, supporting secure multi-tenant access control.
- Architected and developed a financial news portal using Next.js Static Site Generation to optimize content delivery and ensure fast page loads at scale.
- Monitored API errors in production with Sentry, using captured stack traces and request context to triage failures and prioritize fixes.
- Built a unified asset search component in Next.js, consolidating multiple financial asset types into a single search experience, leveraging SWR for client-side data fetching and caching.
- Built accessible interface components in Next.js, pairing Material UI primitives with semantic HTML and explicit ARIA roles and labels, following WCAG guidance for custom interactive elements.
- Architected and developed interactive financial analysis platforms using Next.js, supporting complex data visualization and dynamic routing.
- Built a subscription management page using Next.js SSR to fetch subscription details and Pagar.me invoices on the server, ensuring data integrity and optimized initial load.
- Developed a payment system using RabbitMQ and WebSockets for better financial control and reduced dependency on third-party providers.
- Implemented a multi-tenant subscription management system tailored for investment advisory firms.
- Developed a PDF generation system leveraging AWS S3 and ReactPDF to create standardized reports across different tools.
- Consolidated front-end projects in Next.js into a monorepo using TurboRepo and npm workspaces for better tool and component reuse.
- Configured Keycloak as an authentication provider and customized Babel and Webpack settings to generate ReactJS templates.
- Created an automatic news summary system in PHP to improve journalist efficiency.
- Resolved infrastructure issues such as HTTPS certificate problems and large payload handling in Nginx.

### Nimbus — Web/Mobile Developer

2020 – 2021 · Data-driven solutions for the energy sector

- Developed and maintained web tools for the NIMBUS platform using Django on the backend and HTML, jQuery, and Bootstrap on the frontend.
- Worked on the development of tools for analyzing and visualizing energy market data, focusing on price information and weather and hydrological conditions.
- Developed a React Native mobile training application for sugarcane mill employees, together with a web dashboard for tracking employee progress.
- Built a JavaScript-based weather map animation player, allowing users to navigate through time-series image sequences and facilitating weather condition analysis.

## Core Expertise

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
- Observability & error monitoring (PostHog, Sentry)
- Automated testing (Playwright, Jest, Cypress)
- Web accessibility (WCAG, semantic HTML, ARIA)
- Git workflows & deployment pipelines

## Technical Skills

- **Frontend:** Next.js, React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Material UI
- **Mobile:** React Native, Flutter
- **State management:** Zustand, React Context, SWR
- **Accessibility:** WCAG guidelines, semantic HTML, ARIA
- **Backend:** Node.js, NestJS, Django, Express, PHP (Laravel)
- **Databases:** PostgreSQL (pgvector, tsvector, pg_trgm), MySQL, Supabase, Firebase
- **DevOps & Infrastructure:** Git, Docker, GitHub Actions, Nginx, AWS S3, AWS SQS, RabbitMQ, Elasticsearch, Render
- **Automated testing:** Playwright, Cypress, Jest, Vitest, LambdaTest
- **Observability:** PostHog, Sentry
- **AI-assisted development:** Claude Code
- **Tools & Workflows:** TurboRepo, npm workspaces, WebSockets, cron jobs

## Education

- **Associate Degree in Systems Analysis and Development** — IFSP Catanduva, 2019–2022
- **Technical Course in Computer Science** — Etec Marines Teodoro de Freitas Almeida, 2016–2018

## Languages

- **English:** Professional Working Proficiency
- **Portuguese:** Native
