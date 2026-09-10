Title: Meriendapp
Date: 2026-09-09
Lang: es
Slug: meriendapp-es
Template: project
Save_as: projects/meriendapp/index.html
Summary: Plataforma "offline-first" para el descubrimiento de personas similares a vos, sin swipe. Todos los días a las 11 AM, el algoritmo DFPL te presenta una persona nueva según tu perfil para chatear por tiempo limitado.
Github_url: https://github.com/sebastiancoronel
Live_url: https://meriendapp.com
Youtube: dNmyWMA73yU?si=zr4_CBGLcsNBnUFW
Technologies: React · TypeScript · NestJS · Tailwind CSS · PostgreSQL · GraphQL · Google Gemini API · Websockets · Serverless process

Meriendapp es una plataforma full-stack diseñada para conectar usuarios. Un proyecto *mobile first* con una arquitectura desacoplada, un algoritmo basado en inteligencia artificial y comparación de perfiles donde a cada usuario se le presenta a las 11 AM de cada día una persona nueva para conocer. Incluye chat en tiempo real, persistencia de datos y una interfaz fluida para el usuario final.

## Arquitectura

- Arquitectura modular con NestJS y React 18, separando claramente frontend, backend, IA e infraestructura.
- Comunicación en tiempo real mediante GraphQL, Apollo Client/Server y WebSockets para una experiencia interactiva.
- Motor de matchmaking impulsado por IA utilizando Gemini AI, pgvector y búsqueda por similitud semántica.
- Infraestructura escalable basada en Supabase (PostgreSQL, Auth y Storage) y procesos serverless con Upstash QStash.
