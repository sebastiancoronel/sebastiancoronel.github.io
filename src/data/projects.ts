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
      "RAG-Docs es una aplicación web construida con Python y Streamlit que implementa un sistema completo de Retrieval-Augmented Generation (RAG). Permite a los usuarios subir documentos propios —PDF, texto plano o Markdown— y preguntarle lo que quieran sobre su contenido. La IA responde únicamente con la información extraída de esos archivos, citando explícitamente la fuente de cada respuesta. No es un chatbot general: es un asistente contextual que evita alucinaciones restringiendo sus respuestas al contexto recuperado.\n\nEl pipeline técnico combina LangChain para la orquestación del flujo RAG, ChromaDB como base de datos vectorial efímera y embeddings calculados en tiempo real vía API de Google Gemini (gemini-embedding-001) o OpenAI (text-embedding-3-small). Los documentos se fragmentan con un splitter semántico de 1000 caracteres con overlap de 200, y cada chunk conserva metadatos de la fuente original para rastrear de qué archivo proviene la información. El retriever recupera los 5 fragmentos más relevantes por consulta y los entrega al LLM (Gemini o GPT-4o mini) para generar una respuesta fundamentada.\n\nLa arquitectura prioriza el aislamiento y la seguridad de datos. Cada visita genera una colección vectorial única identificada por UUID, almacenada en disco bajo ./vectordb_users/ y eliminada automáticamente tras 4 horas de inactividad (TTL configurable). El usuario puede borrar sus datos manualmente en cualquier momento. No se requiere registro, ni base de datos relacional, ni persistencia de API keys: todo viaja únicamente en memoria de sesión del servidor.\n\nEn cuanto a usabilidad, la interfaz de Streamlit ofrece una sidebar para configurar el proveedor y subir documentos, y un chat principal para interactuar con el RAG. Incluye validación de cuotas (máximo 3 archivos, 5 MB por archivo, 50.000 caracteres totales), detección de PDFs escaneados, y mensajes de error amigables. También expone una API REST opcional vía FastAPI para integraciones externas.\n\nEl proyecto está desplegado en Streamlit Community Cloud y es accesible desde cualquier navegador sin instalación. Incluye una suite de 12 tests automatizados con pytest que cubren parseo de archivos, gestión de cuotas, índices vectoriales y limpieza por TTL. La estructura modular (app.py, rag.py, user_kb.py, config.py) facilita el mantenimiento y la extensión del sistema.",
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
      "RAG-Docs is a web application built with Python and Streamlit that implements a full Retrieval-Augmented Generation (RAG) system. It allows users to upload their own documents —PDF, plain text or Markdown— and ask anything about their content. The AI responds exclusively with information extracted from those files, explicitly citing the source of each answer. It is not a general-purpose chatbot: it is a contextual assistant that avoids hallucinations by restricting its responses to the retrieved context.\n\nThe technical pipeline combines LangChain for RAG flow orchestration, ChromaDB as an ephemeral vector database, and embeddings computed in real time via the Google Gemini API (gemini-embedding-001) or OpenAI (text-embedding-3-small). Documents are split using a semantic splitter with 1000-character chunks and 200-character overlap, and each chunk retains source metadata to trace which file the information comes from. The retriever fetches the 5 most relevant fragments per query and passes them to the LLM (Gemini or GPT-4o mini) to generate a grounded response.\n\nThe architecture prioritizes data isolation and security. Each visit generates a unique vector collection identified by UUID, stored on disk under ./vectordb_users/ and automatically deleted after 4 hours of inactivity (configurable TTL). Users can manually delete their data at any time. No registration, relational database, or API key persistence is required: everything lives only in the server-side session memory.\n\nThe Streamlit interface provides a sidebar for configuring the AI provider and uploading documents, and a main chat for interacting with the RAG. It includes quota validation (max 3 files, 5 MB per file, 50,000 total characters), scanned PDF detection, and friendly error messages for common issues like invalid keys or exhausted quotas. An optional REST API via FastAPI is also exposed for external integrations.\n\nThe project is deployed on Streamlit Community Cloud and is accessible from any browser without installation. It includes a suite of 12 automated tests with pytest covering file parsing, quota management, vector indexes and TTL lifecycle. The modular structure (app.py, rag.py, user_kb.py, config.py) makes the system easy to maintain and extend.",
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
    architecturePoints: [
      "Full RAG pipeline with LangChain: semantic chunking (1000 chars / 200 overlap), embeddings via Gemini or OpenAI, and top-5 similarity retriever.",
      "Complete per-session data isolation: each user gets a unique ChromaDB collection identified by UUID, with zero risk of cross-visitor data leakage.",
      "Configurable 4-hour TTL with automatic on-disk vectordb cleanup and an instant manual deletion button available in the UI.",
      "Abuse-prevention quota validation: max 3 files, 5 MB per file, 50,000 total characters, with scanned PDF detection.",
      "Suite of 12 pytest tests covering file parsing, quota management, vector indexes and TTL lifecycle, plus an optional REST API via FastAPI.",
    ],
  },
];
