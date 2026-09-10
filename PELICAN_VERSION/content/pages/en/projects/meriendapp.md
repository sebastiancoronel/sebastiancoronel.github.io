Title: Meriendapp
Date: 2026-09-09
Lang: en
Slug: meriendapp-en
Template: project
Save_as: en/projects/meriendapp/index.html
Summary: An "offline-first" platform for discovering people similar to you, no swiping. Every day at 11 AM, the DFPL algorithm presents you with a new person based on your profile to chat with for a limited time.
Github_url: https://github.com/sebastiancoronel
Live_url: https://meriendapp.com
Youtube: dNmyWMA73yU?si=zr4_CBGLcsNBnUFW
Technologies: React · TypeScript · NestJS · Tailwind CSS · PostgreSQL · GraphQL · Google Gemini API · Websockets · Serverless process

MeriendApp is a full-stack platform designed to connect users. A *mobile-first* project built with a decoupled architecture, an AI-powered algorithm, and profile matching, where each user is presented with a new person to meet every day at 11 AM. It features real-time chat with data persistence and a smooth, seamless user experience.

## Architecture

- Modular architecture with NestJS and React 18, clearly separating the frontend, backend, AI, and infrastructure.
- Real-time communication using GraphQL, Apollo Client/Server, and WebSockets for an interactive experience.
- AI-powered matchmaking engine using Gemini AI, pgvector, and semantic similarity search.
- Scalable infrastructure built on Supabase (PostgreSQL, Auth, and Storage) and serverless processes powered by Upstash QStash.
