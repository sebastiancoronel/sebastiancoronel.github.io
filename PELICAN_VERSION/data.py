# Single source of truth for content, mirroring src/data/{cv,projects,mvp}.ts

SITE = {
    "name": "Sebastian Coronel",
    "url": "https://sebastiancoronel.github.io",
}

PROFILE_IMAGE = "profile-image.jpg"
github_url = "https://github.com/sebastiancoronel"

cv_es = {
    "name": "Sebastian Coronel",
    "title": "Full-Stack Engineer",
    "address": "Argentina (Remoto)",
    "contacts": [
        {
            "text": "LinkedIn",
            "link": "https://www.linkedin.com/in/sebastian-alejandro-coronel/",
        },
        {
            "text": "sebastiancoronel.work@gmail.com",
            "link": "mailto:sebastiancoronel.work@gmail.com",
        },
    ],
    "about_me": (
        "Full-Stack Engineer con más de 5 años de experiencia construyendo plataformas "
        "escalables de Fintech, Proptech y B2B. Experto en el ecosistema de Javascript y "
        "PHP incluyendo Laravel, Codeigniter, React, Node, Nest y TypeScript. Asumo un "
        "fuerte sentido de propiedad sobre todo el ciclo de vida del desarrollo, "
        "asegurando que cada funcionalidad esté arquitecturalmente diseñada para resolver "
        "problemas reales del usuario, manteniendo siempre una interfaz pixel-perfect y "
        "cuidando el rendimiento."
    ),
    "experience": [
        {
            "position": "Full-Stack Engineer",
            "institution": "Syon Creative Limited",
            "location": "London - Remote",
            "date": "2024 - Presente",
            "technologies": ["React", "Vue", "Laravel"],
            "description": [
                "Desarrollé dashboards B2B utilizados por equipos internos, entregando "
                "features específicas para clientes con React, Vue y Laravel, reduciendo el "
                "esfuerzo de mantenimiento en un ~20% mediante refactors y una mejora en la "
                "componentización.",
                "Diagnostiqué y resolví un problema crítico en producción que afectaba a "
                "jobs programados de web-scraping, restaurando la estabilidad del sistema y "
                "previniendo fallos en la data pipeline.",
                "Implementé y optimicé visualizaciones de mapas interactivos, renderizando "
                "más de 11,000 registros geolocalizados por vista y reduciendo los tiempos "
                "de carga de varios segundos a respuestas casi instantáneas mediante el "
                "pre-procesamiento de datos históricos.",
            ],
        },
        {
            "position": "Full-Stack Engineer",
            "institution": "Autoscraping Inc.",
            "location": "USA - Remote",
            "date": "2021 - 2023",
            "technologies": ["JavaScript", "PHP"],
            "description": [
                "Desarrollé funcionalidades core de Fintech y contribuí al design system "
                "para un producto de más de 60,000 usuarios activos, impulsando el 70–90% de "
                "la actividad de los usuarios en authentication, onboarding y transacciones "
                "durante la etapa de early-stage y Seed funding.",
                "Lideré delivery de flujos de transacciones y usuarios de alta frecuencia, "
                "soportando miles de operaciones diarias con releases de producción "
                "semanales.",
                "Desarrollé un marketplace de Proptech, mantuve una app de apuestas y "
                "dashboards operativos que procesan más de 35,000 propiedades, integrando "
                "data pipelines.",
            ],
        },
        {
            "position": "Full-Stack Engineer",
            "institution": "Data Center Juan Felipe Ibarra",
            "location": "Argentina - Remote",
            "date": "2020 - 2021",
            "technologies": ["Laravel", "Pusher", "JavaScript"],
            "description": [
                "Desarrollé funcionalidades de front-end, visualizaciones de datos y "
                "gráficos interactivos que mejoraron la usabilidad y apoyaron la toma de "
                "decisiones basada en datos para equipos internos. También desarrollé un "
                "sistema de notificaciones utilizando websockets con Laravel Pusher.",
                "Construí e integré una pasarela de pagos (payment railway), incrementando "
                "la finalización exitosa de transacciones en un 20%, reduciendo el abandono "
                "del checkout en un ~15% y desplazando el ~80% de las transacciones de "
                "procesos manuales a automated payment rails.",
            ],
        },
    ],
    "skills": [
        {
            "title": "Front-end",
            "description": (
                "Construcción de interfaces de usuario con React, Tailwind y Shadcn para "
                "productos de Fintech, Proptech y B2B con foco en pixel-perfect y rendimiento."
            ),
            "items": ["React", "TypeScript", "Shadcn", "Tailwind"],
        },
        {
            "title": "Back-end",
            "description": (
                "Desarrollo de APIs, backend con Laravel y Nest e integraciones de pasarelas "
                "de pago."
            ),
            "items": ["Laravel", "Nest", "PostgreSQL", "REST", "GraphQL"],
        },
        {
            "title": "Arquitectura",
            "description": (
                "Aplicación de patrones SOLID, DRY, KISS, Layered Architecture, MVC y "
                "refactorización orientada a la mantenibilidad."
            ),
            "items": ["SOLID", "DRY", "KISS", "Layered Architecture", "MVC"],
        },
        {
            "title": "DevOps / Herramientas",
            "description": "Uso de entornos con Docker y DDEV",
            "items": ["DDEV", "Docker"],
        },
    ],
    "education": [
        {
            "institution": "Universidad Catolica de Santiago del Estero",
            "major": "Ingeniería en Informática",
            "date": "2021",
            "location": "Argentina",
            "link": "https://registrograduados.siu.edu.ar/consulta.php?ah=st6a29ae19a13282.27458775",
        },
    ],
    "labels": {
        "about_me": "Sobre mí",
        "experience": "Experiencia",
        "skills": "Skills & Tools",
        "education": "Educación",
        "contact": "Contacto",
        "available_for_work": "Disponible para trabajar",
        "show_details": "Ver detalles",
        "portfolio": "Portfolio",
    },
}

cv_en = {
    "name": "Sebastian Coronel",
    "title": "Full-Stack Engineer",
    "address": "Argentina (Remote)",
    "contacts": [
        {
            "text": "LinkedIn",
            "link": "https://www.linkedin.com/in/sebastian-alejandro-coronel/",
        },
        {
            "text": "sebastiancoronel.work@gmail.com",
            "link": "mailto:sebastiancoronel.work@gmail.com",
        },
    ],
    "about_me": (
        "Full-Stack Engineer with over 5 years of experience building scalable Fintech, "
        "Proptech, and B2B platforms. Expert in the JavaScript and PHP ecosystems "
        "including Laravel, Codeigniter, React, Node, Nest, and TypeScript. I assume a "
        "strong sense of ownership over the entire development lifecycle, ensuring each "
        "functionality is architecturally designed to solve real user problems, always "
        "maintaining a pixel-perfect interface and optimizing performance."
    ),
    "experience": [
        {
            "position": "Full-Stack Engineer",
            "institution": "Syon Creative Limited",
            "location": "London - Remote",
            "date": "2024 - Present",
            "technologies": ["React", "Vue", "Laravel"],
            "description": [
                "Developed B2B dashboards used by internal teams, delivering client-specific "
                "features with React, Vue, and Laravel, reducing maintenance effort by ~20% "
                "through refactoring and improved componentization.",
                "Diagnosed and resolved a critical production issue affecting scheduled "
                "web-scraping jobs, restoring system stability and preventing failures in "
                "the data pipeline.",
                "Implemented and optimized interactive map visualizations, rendering over "
                "11,000 geolocalized records per view and reducing load times from several "
                "seconds to near-instantaneous responses through historical data "
                "pre-processing.",
            ],
        },
        {
            "position": "Full-Stack Engineer",
            "institution": "Autoscraping Inc.",
            "location": "USA - Remote",
            "date": "2021 - 2023",
            "technologies": ["JavaScript", "PHP"],
            "description": [
                "Developed core Fintech features and contributed to the design system for a "
                "product with over 60,000 active users, driving 70–90% of user activity in "
                "authentication, onboarding, and transactions during the early-stage and "
                "Seed funding phases.",
                "Led the delivery of high-frequency transaction and user flows, supporting "
                "thousands of daily operations with weekly production releases.",
                "Developed a Proptech marketplace, maintained a betting app, and operational "
                "dashboards processing over 35,000 properties, integrating data pipelines.",
            ],
        },
        {
            "position": "Full-Stack Engineer",
            "institution": "Data Center Juan Felipe Ibarra",
            "location": "Argentina - Remote",
            "date": "2020 - 2021",
            "technologies": ["Laravel", "Pusher", "JavaScript"],
            "description": [
                "Developed front-end features, data visualizations, and interactive charts "
                "that improved usability and supported data-driven decision-making for "
                "internal teams. Also developed a notification system using websockets with "
                "Laravel Pusher.",
                "Built and integrated a payment gateway (payment railway), increasing "
                "successful transaction completion by 20%, reducing checkout abandonment by "
                "~15%, and shifting ~80% of transactions from manual processes to automated "
                "payment rails.",
            ],
        },
    ],
    "skills": [
        {
            "title": "Front-end",
            "description": (
                "Building Fintech dashboards, Proptech marketplaces, and high-performance "
                "interactive maps with a focus on pixel-perfect UI and performance "
                "optimization."
            ),
            "items": ["React", "TypeScript", "Shadcn", "Tailwind"],
        },
        {
            "title": "Back-end",
            "description": (
                "Development of high-frequency transactional backends, scalable APIs, payment "
                "gateway integrations, and stable web-scraping data pipelines."
            ),
            "items": [
                "PHP",
                "Laravel",
                "Node",
                "Nest",
                "PostgreSQL",
                "MySQL",
                "REST",
                "GraphQL",
                "Python",
            ],
        },
        {
            "title": "Architecture",
            "description": (
                "Applying design patterns and maintenance-oriented refactoring, reducing "
                "maintenance effort by up to 20% with structured code."
            ),
            "items": ["SOLID"],
        },
        {
            "title": "DevOps / Tools",
            "description": (
                "Using dockerized local environments and advanced tooling to optimize and "
                "ensure reproducible development workflows."
            ),
            "items": ["DDEV"],
        },
    ],
    "education": [
        {
            "institution": "University of Santiago del Estero",
            "major": "Informatics Engineering",
            "date": "2021",
            "location": "Argentina",
            "link": "https://registrograduados.siu.edu.ar/consulta.php?ah=st6a29ae19a13282.27458775",
        },
    ],
    "labels": {
        "about_me": "About me",
        "experience": "Experience",
        "skills": "Skills & Tools",
        "education": "Education",
        "contact": "Contact",
        "available_for_work": "Available for work",
        "show_details": "Show details",
        "portfolio": "Portfolio",
    },
}

projects_es = [
    {
        "slug": "meriendapp",
        "title": "Meriendapp",
        "short_description": (
            'Plataforma "offline-first" para el descubrimiento de personas similares a vos, '
            "nada de swipe left o swipe right de las apps comunes, todos los dias a las 11 "
            "AM mi algoritmo DFPL (Decidir Primero, Presentar Después) te presenta una "
            "persona nueva en base a tu perfil y te da la posibilidad de chatear por un "
            "periodo de tiempo limitado."
        ),
        "full_description": (
            "Meriendapp es una plataforma full-stack diseñada para conectar usuarios. Un "
            "proyecto mobile first con una arquitectura desacoplada, un algoritmo basado en "
            "inteligencia artificial y comparación de perfiles donde a cada usuario se le "
            "presenta a las 11AM de cada dia una persona nueva para conocer. Con "
            "funcionalidades como chat en tiempo real, con persistencia de datos y una "
            "interfaz fluida para el usuario final."
        ),
        "technologies": [
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
        "github_url": "https://github.com/sebastiancoronel",
        "live_url": "https://meriendapp.com",
        "youtube_embed_id": "dNmyWMA73yU?si=zr4_CBGLcsNBnUFW",
        "architecture_points": [
            "Arquitectura modular con NestJS y React 18, separando claramente frontend, "
            "backend, IA e infraestructura.",
            "Comunicación en tiempo real mediante GraphQL, Apollo Client/Server y WebSockets "
            "para una experiencia interactiva.",
            "Motor de matchmaking impulsado por IA utilizando Gemini AI, pgvector y búsqueda "
            "por similitud semántica.",
            "Infraestructura escalable basada en Supabase (PostgreSQL, Auth y Storage) y "
            "procesos serverless con Upstash QStash.",
        ],
    },
    {
        "slug": "rag-docs",
        "title": "RAG-Docs",
        "short_description": (
            "RAG-Docs es una aplicación web de Retrieval-Augmented Generation (RAG) que "
            "permite a los usuarios consultar documentos propios —PDF, TXT o Markdown— "
            "mediante inteligencia artificial. El sistema no responde con información "
            "genérica: se basa exclusivamente en el contenido que el usuario sube, citando "
            "la fuente de cada respuesta. Desplegada en Streamlit Community Cloud, incluye "
            "límites anti-abuso, limpieza automática tras 4 horas de inactividad y "
            "aislamiento total de datos por sesión."
        ),
        "full_description": (
            "RAG-Docs es una aplicación web de Retrieval-Augmented Generation construida con "
            "Python y Streamlit que permite consultar documentos propios (PDF, TXT, "
            "Markdown) mediante IA. Utiliza LangChain y ChromaDB con embeddings de Gemini u "
            "OpenAI para responder estrictamente sobre el contenido cargado, citando fuentes "
            "exactas sin alucinaciones. Incluye aislamiento de datos por sesión con UUID, "
            "limpieza automática por TTL de 4 horas, cuotas anti-abuso y tests automatizados "
            "con pytest."
        ),
        "technologies": [
            "Python",
            "Streamlit",
            "LangChain",
            "ChromaDB",
            "Google Gemini API",
            "OpenAI API",
            "FastAPI",
            "pytest",
        ],
        "github_url": "https://github.com/sebastiancoronel/rag-docs",
        "live_url": "https://rag-docs.streamlit.app/",
        "youtube_embed_id": "i8XakkTRaJc",
        "architecture_points": [
            "Pipeline RAG completo con LangChain: fragmentación semántica (1000 chars / "
            "overlap 200), embeddings via Gemini o OpenAI, y retriever top-5 por similitud "
            "vectorial.",
            "Aislamiento total de datos por sesión: cada usuario obtiene una colección "
            "ChromaDB única identificada por UUID, sin riesgo de contaminación entre "
            "visitantes.",
            "TTL configurable de 4 horas con limpieza automática de vectordb en disco y "
            "opción de borrado manual instantáneo desde la interfaz.",
            "Validación de cuotas anti-abuso: máximo 3 archivos, 5 MB por archivo y 50.000 "
            "caracteres totales, con detección de PDFs escaneados.",
            "Suite de 12 tests con pytest cubriendo parseo de archivos, gestión de cuotas, "
            "índices vectoriales y ciclo de vida TTL, más API REST opcional vía FastAPI.",
        ],
    },
]

projects_en = [
    {
        "slug": "meriendapp",
        "title": "Meriendapp",
        "short_description": (
            'An "offline-first" platform for discovering people who are similar to you. No '
            "more swiping left or right like in conventional apps. Every day at 11 AM, my "
            "DFPL (Decide First, Present Later) algorithm presents you with a new person "
            "based on your profile and gives you the opportunity to chat with them for a "
            "limited period of time."
        ),
        "full_description": (
            "MeriendApp is a full-stack platform designed to connect users. A mobile-first "
            "project built with a decoupled architecture, an AI-powered algorithm, and "
            "profile matching, where each user is presented with a new person to meet every "
            "day at 11 AM. It features real-time chat with data persistence and a smooth, "
            "seamless user experience."
        ),
        "technologies": [
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
        "github_url": "https://github.com/sebastiancoronel",
        "live_url": "https://meriendapp.com",
        "youtube_embed_id": "dNmyWMA73yU?si=zr4_CBGLcsNBnUFW",
        "architecture_points": [
            "Modular architecture with NestJS and React 18, clearly separating the frontend, "
            "backend, AI, and infrastructure.",
            "Real-time communication using GraphQL, Apollo Client/Server, and WebSockets for "
            "an interactive experience.",
            "AI-powered matchmaking engine using Gemini AI, pgvector, and semantic "
            "similarity search.",
            "Scalable infrastructure built on Supabase (PostgreSQL, Auth, and Storage) and "
            "serverless processes powered by Upstash QStash.",
        ],
    },
    {
        "slug": "rag-docs",
        "title": "RAG-Docs",
        "short_description": (
            "RAG-Docs is a Retrieval-Augmented Generation (RAG) web application that lets "
            "users query their own documents —PDF, TXT or Markdown— using artificial "
            "intelligence. The system does not answer with generic information: it relies "
            "exclusively on the content the user uploads, citing the source of every "
            "response. Deployed on Streamlit Community Cloud, it includes abuse-prevention "
            "limits, automatic cleanup after 4 hours of inactivity, and full per-session "
            "data isolation."
        ),
        "full_description": (
            "RAG-Docs is a full-stack Retrieval-Augmented Generation web application built "
            "with Python and Streamlit that lets users query their own documents (PDF, TXT, "
            "Markdown) via AI. Using LangChain and ChromaDB with Gemini/OpenAI embeddings, "
            "it answers strictly from uploaded content citing exact sources to eliminate "
            "hallucinations. Features per-session UUID data isolation with automatic 4-hour "
            "TTL cleanup, anti-abuse quotas, and an automated pytest test suite."
        ),
        "technologies": [
            "Python",
            "Streamlit",
            "LangChain",
            "ChromaDB",
            "Google Gemini API",
            "OpenAI API",
            "FastAPI",
            "pytest",
        ],
        "github_url": "https://github.com/sebastiancoronel/rag-docs",
        "live_url": "https://rag-docs.streamlit.app/",
        "youtube_embed_id": "i8XakkTRaJc",
        "architecture_points": [
            "Full RAG pipeline with LangChain: semantic chunking (1000 chars / 200 overlap), "
            "embeddings via Gemini or OpenAI, and top-5 similarity retriever.",
            "Complete per-session data isolation: each user gets a unique ChromaDB collection "
            "identified by UUID, with zero risk of cross-visitor data leakage.",
            "Configurable 4-hour TTL with automatic on-disk vectordb cleanup and an instant "
            "manual deletion button available in the UI.",
            "Abuse-prevention quota validation: max 3 files, 5 MB per file, 50,000 total "
            "characters, with scanned PDF detection.",
            "Suite of 12 pytest tests covering file parsing, quota management, vector "
            "indexes and TTL lifecycle, plus an optional REST API via FastAPI.",
        ],
    },
]

mvp_es = {
    "hero_title": "Construyo tu MVP en 3 semanas",
    "hero_subtitle": (
        "Transformo tu idea en un producto funcional listo para validar en el mercado, con "
        "diseño pixel-perfect y stack moderno."
    ),
    "calendly_url": "https://calendly.com/sebastiancoronel/30min",
    "book_call_label": "Agendar una scoping call",
    "process_title": "Cómo trabajo",
    "steps": [
        {
            "number": 1,
            "title": "Discovery",
            "description": (
                "Entiendo tu idea, el problema que resuelve y el público objetivo. Definimos "
                "alcance, funcionalidades clave y métricas de éxito."
            ),
        },
        {
            "number": 2,
            "title": "Blueprint",
            "description": (
                "Diseño la arquitectura técnica, el flujo de usuario y las pantallas clave. "
                "Recibes un prototipo navegable antes de escribir código."
            ),
        },
        {
            "number": 3,
            "title": "Build",
            "description": (
                "Desarrollo el MVP en sprints cortos con entregas semanales. Trabajo con "
                "foco en calidad, rendimiento y pixel-perfect."
            ),
        },
        {
            "number": 4,
            "title": "Launch",
            "description": (
                "Despliego el producto en producción con dominio propio, SSL, analytics y te "
                "entrego todo listo para compartir con inversores o primeros usuarios."
            ),
        },
    ],
    "features_title": "Qué incluye",
    "features": [
        {
            "title": "Producto + Landing (SEO)",
            "items": [
                "Landing page optimizada para conversión con SEO on-page",
                "MVP funcional con las funcionalidades core acordadas",
                "Copywriting orientado a tu público objetivo",
            ],
        },
        {
            "title": "Ingeniería",
            "items": [
                "Arquitectura escalable con TypeScript y stack moderno",
                "Base de datos relational optimizada",
                "API REST o GraphQL según necesidad",
            ],
        },
        {
            "title": "Ship",
            "items": [
                "Deploy en producción con dominio personalizado",
                "SSL, analytics y monitoreo básico configurados",
                "Documentación técnica y de usuario",
            ],
        },
        {
            "title": "Handoff",
            "items": [
                "Código fuente completo en tu repositorio",
                "Sesión de transferencia de conocimiento",
                "Soporte post-lanzamiento por 1 semana",
            ],
        },
    ],
    "pricing_title": "Precios",
    "tiers": [
        {
            "name": "Starter",
            "price": "$1997 USD",
            "features": 3,
            "bullets": [
                "Feature 1 — descripción breve",
                "Feature 2 — descripción breve",
                "Feature 3 — descripción breve",
            ],
            "popular": False,
        },
        {
            "name": "Completo",
            "price": "$3497 USD",
            "features": 7,
            "bullets": [
                "Feature 1 — descripción breve",
                "Feature 2 — descripción breve",
                "Feature 3 — descripción breve",
            ],
            "popular": True,
        },
    ],
    "faq_title": "Preguntas frecuentes",
    "faqs": [
        {
            "question": "¿Qué es una feature?",
            "answer": (
                "Una feature es una funcionalidad o capacidad específica del producto. Por "
                "ejemplo: autenticación de usuarios, panel de administración, pasarela de "
                "pago, etc. En la llamada de discovery definimos juntos qué features incluye "
                "tu MVP."
            ),
        },
        {
            "question": "¿Qué stack tecnológico usas?",
            "answer": (
                "Trabajo con TypeScript como base, usando React o Astro para el frontend, "
                "Tailwind CSS para estilos, Node/Nest o Laravel para el backend, y "
                "PostgreSQL como base de datos. El stack exacto se define según las "
                "necesidades de tu proyecto."
            ),
        },
        {
            "question": "¿Qué pasa si no se construye en 3 semanas?",
            "answer": (
                "Trabajo con entregas semanales y comunicación constante para asegurar que "
                "el proyecto avance según lo planeado. Si por algún motivo se requiere más "
                "tiempo, lo conversamos y ajustamos el alcance. Mi objetivo es entregar "
                "valor real en el plazo acordado."
            ),
        },
        {
            "question": "¿Cómo puedo pagar?",
            "answer": (
                "Acepto transferencias bancarias internacionales (SWIFT), criptomonedas "
                "(USDT/USDC), y pagos vía PayPal o Wise. Trabajamos con un esquema de pagos "
                "por hitos para tu tranquilidad."
            ),
        },
        {
            "question": "¿Ofrecés garantía?",
            "answer": (
                "Sí. Incluyo 1 semana de soporte post-lanzamiento para corrección de bugs y "
                "ajustes menores. Además, todo el código te pertenece desde el día 1, sin "
                "bloqueos ni licencias ocultas."
            ),
        },
    ],
    "cta_title": "Agendemos una llamada hoy",
    "cta_subtitle": (
        "Contame sobre tu idea y te cuento cómo puedo ayudarte a construir tu MVP en 3 "
        "semanas."
    ),
}

mvp_en = {
    "hero_title": "I build your MVP in 3 weeks",
    "hero_subtitle": (
        "I turn your idea into a functional product ready to validate in the market, with "
        "pixel-perfect design and a modern stack."
    ),
    "calendly_url": "https://calendly.com/sebastiancoronel/30min",
    "book_call_label": "Book a scoping call",
    "process_title": "How I work",
    "steps": [
        {
            "number": 1,
            "title": "Discovery",
            "description": (
                "I understand your idea, the problem it solves, and the target audience. We "
                "define scope, key functionalities, and success metrics."
            ),
        },
        {
            "number": 2,
            "title": "Blueprint",
            "description": (
                "I design the technical architecture, user flow, and key screens. You "
                "receive a navigable prototype before any code is written."
            ),
        },
        {
            "number": 3,
            "title": "Build",
            "description": (
                "I develop the MVP in short sprints with weekly deliveries. I work focused "
                "on quality, performance, and pixel-perfect detail."
            ),
        },
        {
            "number": 4,
            "title": "Launch",
            "description": (
                "I deploy the product to production with a custom domain, SSL, analytics, "
                "and deliver everything ready to share with investors or early users."
            ),
        },
    ],
    "features_title": "What's included",
    "features": [
        {
            "title": "Product + Landing (SEO)",
            "items": [
                "Conversion-optimized landing page with on-page SEO",
                "Functional MVP with the agreed core features",
                "Copywriting tailored to your target audience",
            ],
        },
        {
            "title": "Engineering",
            "items": [
                "Scalable architecture with TypeScript and modern stack",
                "Optimized relational database",
                "REST or GraphQL API as needed",
            ],
        },
        {
            "title": "Ship",
            "items": [
                "Production deploy with custom domain",
                "SSL, analytics, and basic monitoring configured",
                "Technical and user documentation",
            ],
        },
        {
            "title": "Handoff",
            "items": [
                "Complete source code in your repository",
                "Knowledge transfer session",
                "Post-launch support for 1 week",
            ],
        },
    ],
    "pricing_title": "Pricing",
    "tiers": [
        {
            "name": "Starter",
            "price": "$1997 USD",
            "features": 3,
            "bullets": [
                "Feature 1 — brief description",
                "Feature 2 — brief description",
                "Feature 3 — brief description",
            ],
            "popular": False,
        },
        {
            "name": "Complete",
            "price": "$3497 USD",
            "features": 7,
            "bullets": [
                "Feature 1 — brief description",
                "Feature 2 — brief description",
                "Feature 3 — brief description",
            ],
            "popular": True,
        },
    ],
    "faq_title": "Frequently asked questions",
    "faqs": [
        {
            "question": "What is a feature?",
            "answer": (
                "A feature is a specific functionality or capability of the product. For "
                "example: user authentication, admin dashboard, payment gateway, etc. "
                "During the discovery call we define together which features your MVP "
                "includes."
            ),
        },
        {
            "question": "What tech stack do you use?",
            "answer": (
                "I work with TypeScript as the foundation, using React or Astro for the "
                "frontend, Tailwind CSS for styling, Node/Nest or Laravel for the backend, "
                "and PostgreSQL as the database. The exact stack is defined based on your "
                "project needs."
            ),
        },
        {
            "question": "What if it isn't built in 3 weeks?",
            "answer": (
                "I work with weekly deliveries and constant communication to ensure the "
                "project stays on track. If more time is needed for any reason, we discuss "
                "it and adjust the scope. My goal is to deliver real value within the agreed "
                "timeframe."
            ),
        },
        {
            "question": "How can I pay?",
            "answer": (
                "I accept international bank transfers (SWIFT), cryptocurrencies "
                "(USDT/USDC), and payments via PayPal or Wise. We work with a "
                "milestone-based payment schedule for your peace of mind."
            ),
        },
        {
            "question": "Do you offer a guarantee?",
            "answer": (
                "Yes. I include 1 week of post-launch support for bug fixes and minor "
                "adjustments. Plus, all the code belongs to you from day 1 — no lock-ins or "
                "hidden licenses."
            ),
        },
    ],
    "cta_title": "Let's book a call today",
    "cta_subtitle": (
        "Tell me about your idea and I'll explain how I can help you build your MVP in 3 "
        "weeks."
    ),
}


def label(lang, key, fallback=""):
    cvs = cv_es if lang == "es" else cv_en
    return cvs["labels"].get(key, fallback)


def cv_for(lang):
    return cv_es if lang == "es" else cv_en


def projects_for(lang):
    return projects_es if lang == "es" else projects_en


def project_for(lang, slug):
    projects = projects_es if lang == "es" else projects_en
    for project in projects:
        if project["slug"] == slug:
            return project
    return None


def mvp_for(lang):
    return mvp_es if lang == "es" else mvp_en


def switch_url(lang, url):
    """Return the URL of the same page in the other language.

    English lives at the site root and Spanish under /es.
    """
    url = url or "/"
    if not url.startswith("/"):
        url = "/" + url
    if lang == "en":
        # English page -> Spanish counterpart under /es
        return "/es" + url
    # Spanish page -> English counterpart at the root
    if url == "/es":
        return "/"
    if url.startswith("/es/"):
        return url[3:]
    return url


def current_year():
    from datetime import date

    return date.today().year
