export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  youtubeEmbedId?: string;
  architecturePoints?: string[];
}

export const projectsEs: Project[] = [
  {
    slug: "meriendapp",
    title: "Meriendapp",
    shortDescription: `Plataforma "offline-first" para el descubrimiento de personas similares a vos, nada de swipe left o swipe right de las apps comunes, todos los dias a las 11 AM mi algoritmo DFPL (Decidir Primero, Presentar Después) te presenta una persona nueva en base a tu perfil y te da la posibilidad de chatear por un periodo de tiempo limitado.`,
    fullDescription:
      "Meriendapp es una plataforma full-stack diseñada para conectar usuarios. Un proyecto mobile first con una arquitectura desacoplada, un algoritmo basado en inteligencia artificial y comparación de perfiles donde a cada usuario se le presenta a las 11AM de cada dia una persona nueva para conocer. Con funcionalidades como chat en tiempo real, con persistencia de datos y una interfaz fluida para el usuario final.",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "Tailwind CSS",
      "PostgreSQL",
      "GraphQL",
      "Google Gemini API",
      "Websockets",
      "Serverless process",
    ],
    githubUrl: "https://github.com/sebastiancoronel",
    liveUrl: "https://meriendapp.com",
    youtubeEmbedId: "dNmyWMA73yU?si=zr4_CBGLcsNBnUFW", // ID de ejemplo o marcador de posición para el video de YouTube
    architecturePoints: [
      "Arquitectura modular con NestJS y React 18, separando claramente frontend, backend, IA e infraestructura.",
      "Comunicación en tiempo real mediante GraphQL, Apollo Client/Server y WebSockets para una experiencia interactiva.",
      "Motor de matchmaking impulsado por IA utilizando Gemini AI, pgvector y búsqueda por similitud semántica.",
      "Infraestructura escalable basada en Supabase (PostgreSQL, Auth y Storage) y procesos serverless con Upstash QStash.",
    ],
  },
];

export const projectsEn: Project[] = [
  {
    slug: "meriendapp",
    title: "Meriendapp",
    shortDescription: `An "offline-first" platform for discovering people who are similar to you. No more swiping left or right like in conventional apps. Every day at 11 AM, my DFPL (Decide First, Present Later) algorithm presents you with a new person based on your profile and gives you the opportunity to chat with them for a limited period of time.`,
    fullDescription:
      "MeriendApp is a full-stack platform designed to connect users. A mobile-first project built with a decoupled architecture, an AI-powered algorithm, and profile matching, where each user is presented with a new person to meet every day at 11 AM. It features real-time chat with data persistence and a smooth, seamless user experience.",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "Tailwind CSS",
      "PostgreSQL",
      "GraphQL",
      "Google Gemini API",
      "Websockets",
      "Serverless process",
    ],
    githubUrl: "https://github.com/sebastiancoronel",
    liveUrl: "https://meriendapp.com",
    youtubeEmbedId: "dNmyWMA73yU?si=zr4_CBGLcsNBnUFW", // Placeholder YouTube video ID
    architecturePoints: [
      "Modular architecture with NestJS and React 18, clearly separating the frontend, backend, AI, and infrastructure.",
      "Real-time communication using GraphQL, Apollo Client/Server, and WebSockets for an interactive experience.",
      "AI-powered matchmaking engine using Gemini AI, pgvector, and semantic similarity search.",
      "Scalable infrastructure built on Supabase (PostgreSQL, Auth, and Storage) and serverless processes powered by Upstash QStash.",
    ],
  },
];
