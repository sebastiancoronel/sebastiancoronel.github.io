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
  {
    slug: "rag-docs",
    title: "RAG-Docs",
    shortDescription:
      "RAG-Docs es una aplicación web de Retrieval-Augmented Generation (RAG) que permite a los usuarios consultar documentos propios —PDF, TXT o Markdown— mediante inteligencia artificial. El sistema no responde con información genérica: se basa exclusivamente en el contenido que el usuario sube, citando la fuente de cada respuesta. Desplegada en Streamlit Community Cloud, incluye límites anti-abuso, limpieza automática tras 4 horas de inactividad y aislamiento total de datos por sesión.",
    fullDescription:
      "RAG-Docs es una aplicación web de Retrieval-Augmented Generation construida con Python y Streamlit que permite consultar documentos propios (PDF, TXT, Markdown) mediante IA. Utiliza LangChain y ChromaDB con embeddings de Gemini u OpenAI para responder estrictamente sobre el contenido cargado, citando fuentes exactas sin alucinaciones. Incluye aislamiento de datos por sesión con UUID, limpieza automática por TTL de 4 horas, cuotas anti-abuso y tests automatizados con pytest.",
    technologies: [
      "Python",
      "Streamlit",
      "LangChain",
      "ChromaDB",
      "Google Gemini API",
      "OpenAI API",
      "FastAPI",
      "pytest",
    ],
    githubUrl: "https://github.com/sebastiancoronel/rag-docs",
    liveUrl: "https://rag-docs.streamlit.app/",
    youtubeEmbedId: "i8XakkTRaJc",
    architecturePoints: [
      "Pipeline RAG completo con LangChain: fragmentación semántica (1000 chars / overlap 200), embeddings via Gemini o OpenAI, y retriever top-5 por similitud vectorial.",
      "Aislamiento total de datos por sesión: cada usuario obtiene una colección ChromaDB única identificada por UUID, sin riesgo de contaminación entre visitantes.",
      "TTL configurable de 4 horas con limpieza automática de vectordb en disco y opción de borrado manual instantáneo desde la interfaz.",
      "Validación de cuotas anti-abuso: máximo 3 archivos, 5 MB por archivo y 50.000 caracteres totales, con detección de PDFs escaneados.",
      "Suite de 12 tests con pytest cubriendo parseo de archivos, gestión de cuotas, índices vectoriales y ciclo de vida TTL, más API REST opcional vía FastAPI.",
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
  {
    slug: "rag-docs",
    title: "RAG-Docs",
    shortDescription:
      "RAG-Docs is a Retrieval-Augmented Generation (RAG) web application that lets users query their own documents —PDF, TXT or Markdown— using artificial intelligence. The system does not answer with generic information: it relies exclusively on the content the user uploads, citing the source of every response. Deployed on Streamlit Community Cloud, it includes abuse-prevention limits, automatic cleanup after 4 hours of inactivity, and full per-session data isolation.",
    fullDescription:
      "RAG-Docs is a full-stack Retrieval-Augmented Generation web application built with Python and Streamlit that lets users query their own documents (PDF, TXT, Markdown) via AI. Using LangChain and ChromaDB with Gemini/OpenAI embeddings, it answers strictly from uploaded content citing exact sources to eliminate hallucinations. Features per-session UUID data isolation with automatic 4-hour TTL cleanup, anti-abuse quotas, and an automated pytest test suite.",
    technologies: [
      "Python",
      "Streamlit",
      "LangChain",
      "ChromaDB",
      "Google Gemini API",
      "OpenAI API",
      "FastAPI",
      "pytest",
    ],
    githubUrl: "https://github.com/sebastiancoronel/rag-docs",
    liveUrl: "https://rag-docs.streamlit.app/",
    youtubeEmbedId: "i8XakkTRaJc",
    architecturePoints: [
      "Full RAG pipeline with LangChain: semantic chunking (1000 chars / 200 overlap), embeddings via Gemini or OpenAI, and top-5 similarity retriever.",
      "Complete per-session data isolation: each user gets a unique ChromaDB collection identified by UUID, with zero risk of cross-visitor data leakage.",
      "Configurable 4-hour TTL with automatic on-disk vectordb cleanup and an instant manual deletion button available in the UI.",
      "Abuse-prevention quota validation: max 3 files, 5 MB per file, 50,000 total characters, with scanned PDF detection.",
      "Suite of 12 pytest tests covering file parsing, quota management, vector indexes and TTL lifecycle, plus an optional REST API via FastAPI.",
    ],
  },
];
