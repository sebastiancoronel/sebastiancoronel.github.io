export interface MVPProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface MVPFeature {
  title: string;
  items: string[];
}

export interface MVPPricingTier {
  name: string;
  price: string;
  features: number;
  bullets: string[];
  popular: boolean;
}

export interface MVPFAQ {
  question: string;
  answer: string;
}

export interface MVPData {
  heroTitle: string;
  heroSubtitle: string;
  calendlyUrl: string;
  bookCallLabel: string;
  processTitle: string;
  steps: MVPProcessStep[];
  featuresTitle: string;
  features: MVPFeature[];
  pricingTitle: string;
  tiers: MVPPricingTier[];
  faqTitle: string;
  faqs: MVPFAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export const mvpEs: MVPData = {
  heroTitle: "Construyo tu MVP en 3 semanas",
  heroSubtitle:
    "Transformo tu idea en un producto funcional listo para validar en el mercado, con diseño pixel-perfect y stack moderno.",
  calendlyUrl: "https://calendly.com/sebastiancoronel/30min",
  bookCallLabel: "Agendar una scoping call",
  processTitle: "Cómo trabajo",
  steps: [
    {
      number: 1,
      title: "Discovery",
      description:
        "Entiendo tu idea, el problema que resuelve y el público objetivo. Definimos alcance, funcionalidades clave y métricas de éxito.",
    },
    {
      number: 2,
      title: "Blueprint",
      description:
        "Diseño la arquitectura técnica, el flujo de usuario y las pantallas clave. Recibes un prototipo navegable antes de escribir código.",
    },
    {
      number: 3,
      title: "Build",
      description:
        "Desarrollo el MVP en sprints cortos con entregas semanales. Trabajo con foco en calidad, rendimiento y pixel-perfect.",
    },
    {
      number: 4,
      title: "Launch",
      description:
        "Despliego el producto en producción con dominio propio, SSL, analytics y te entrego todo listo para compartir con inversores o primeros usuarios.",
    },
  ],
  featuresTitle: "Qué incluye",
  features: [
    {
      title: "Producto + Landing (SEO)",
      items: [
        "Landing page optimizada para conversión con SEO on-page",
        "MVP funcional con las funcionalidades core acordadas",
        "Copywriting orientado a tu público objetivo",
      ],
    },
    {
      title: "Ingeniería",
      items: [
        "Arquitectura escalable con TypeScript y stack moderno",
        "Base de datos relational optimizada",
        "API REST o GraphQL según necesidad",
      ],
    },
    {
      title: "Ship",
      items: [
        "Deploy en producción con dominio personalizado",
        "SSL, analytics y monitoreo básico configurados",
        "Documentación técnica y de usuario",
      ],
    },
    {
      title: "Handoff",
      items: [
        "Código fuente completo en tu repositorio",
        "Sesión de transferencia de conocimiento",
        "Soporte post-lanzamiento por 1 semana",
      ],
    },
  ],
  pricingTitle: "Precios",
  tiers: [
    {
      name: "Starter",
      price: "$1997 USD",
      features: 3,
      bullets: [
        "Feature 1 — descripción breve",
        "Feature 2 — descripción breve",
        "Feature 3 — descripción breve",
      ],
      popular: false,
    },
    {
      name: "Completo",
      price: "$3497 USD",
      features: 7,
      bullets: [
        "Feature 1 — descripción breve",
        "Feature 2 — descripción breve",
        "Feature 3 — descripción breve",
      ],
      popular: true,
    },
  ],
  faqTitle: "Preguntas frecuentes",
  faqs: [
    {
      question: "¿Qué es una feature?",
      answer:
        "Una feature es una funcionalidad o capacidad específica del producto. Por ejemplo: autenticación de usuarios, panel de administración, pasarela de pago, etc. En la llamada de discovery definimos juntos qué features incluye tu MVP.",
    },
    {
      question: "¿Qué stack tecnológico usas?",
      answer:
        "Trabajo con TypeScript como base, usando React o Astro para el frontend, Tailwind CSS para estilos, Node/Nest o Laravel para el backend, y PostgreSQL como base de datos. El stack exacto se define según las necesidades de tu proyecto.",
    },
    {
      question: "¿Qué pasa si no se construye en 3 semanas?",
      answer:
        "Trabajo con entregas semanales y comunicación constante para asegurar que el proyecto avance según lo planeado. Si por algún motivo se requiere más tiempo, lo conversamos y ajustamos el alcance. Mi objetivo es entregar valor real en el plazo acordado.",
    },
    {
      question: "¿Cómo puedo pagar?",
      answer:
        "Acepto transferencias bancarias internacionales (SWIFT), criptomonedas (USDT/USDC), y pagos vía PayPal o Wise. Trabajamos con un esquema de pagos por hitos para tu tranquilidad.",
    },
    {
      question: "¿Ofrecés garantía?",
      answer:
        "Sí. Incluyo 1 semana de soporte post-lanzamiento para corrección de bugs y ajustes menores. Además, todo el código te pertenece desde el día 1, sin bloqueos ni licencias ocultas.",
    },
  ],
  ctaTitle: "Agendemos una llamada hoy",
  ctaSubtitle:
    "Contame sobre tu idea y te cuento cómo puedo ayudarte a construir tu MVP en 3 semanas.",
};

export const mvpEn: MVPData = {
  heroTitle: "I build your MVP in 3 weeks",
  heroSubtitle:
    "I turn your idea into a functional product ready to validate in the market, with pixel-perfect design and a modern stack.",
  calendlyUrl: "https://calendly.com/sebastiancoronel/30min",
  bookCallLabel: "Book a scoping call",
  processTitle: "How I work",
  steps: [
    {
      number: 1,
      title: "Discovery",
      description:
        "I understand your idea, the problem it solves, and the target audience. We define scope, key functionalities, and success metrics.",
    },
    {
      number: 2,
      title: "Blueprint",
      description:
        "I design the technical architecture, user flow, and key screens. You receive a navigable prototype before any code is written.",
    },
    {
      number: 3,
      title: "Build",
      description:
        "I develop the MVP in short sprints with weekly deliveries. I work focused on quality, performance, and pixel-perfect detail.",
    },
    {
      number: 4,
      title: "Launch",
      description:
        "I deploy the product to production with a custom domain, SSL, analytics, and deliver everything ready to share with investors or early users.",
    },
  ],
  featuresTitle: "What's included",
  features: [
    {
      title: "Product + Landing (SEO)",
      items: [
        "Conversion-optimized landing page with on-page SEO",
        "Functional MVP with the agreed core features",
        "Copywriting tailored to your target audience",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Scalable architecture with TypeScript and modern stack",
        "Optimized relational database",
        "REST or GraphQL API as needed",
      ],
    },
    {
      title: "Ship",
      items: [
        "Production deploy with custom domain",
        "SSL, analytics, and basic monitoring configured",
        "Technical and user documentation",
      ],
    },
    {
      title: "Handoff",
      items: [
        "Complete source code in your repository",
        "Knowledge transfer session",
        "Post-launch support for 1 week",
      ],
    },
  ],
  pricingTitle: "Pricing",
  tiers: [
    {
      name: "Starter",
      price: "$1997 USD",
      features: 3,
      bullets: [
        "Feature 1 — brief description",
        "Feature 2 — brief description",
        "Feature 3 — brief description",
      ],
      popular: false,
    },
    {
      name: "Complete",
      price: "$3497 USD",
      features: 7,
      bullets: [
        "Feature 1 — brief description",
        "Feature 2 — brief description",
        "Feature 3 — brief description",
      ],
      popular: true,
    },
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      question: "What is a feature?",
      answer:
        "A feature is a specific functionality or capability of the product. For example: user authentication, admin dashboard, payment gateway, etc. During the discovery call we define together which features your MVP includes.",
    },
    {
      question: "What tech stack do you use?",
      answer:
        "I work with TypeScript as the foundation, using React or Astro for the frontend, Tailwind CSS for styling, Node/Nest or Laravel for the backend, and PostgreSQL as the database. The exact stack is defined based on your project needs.",
    },
    {
      question: "What if it isn't built in 3 weeks?",
      answer:
        "I work with weekly deliveries and constant communication to ensure the project stays on track. If more time is needed for any reason, we discuss it and adjust the scope. My goal is to deliver real value within the agreed timeframe.",
    },
    {
      question: "How can I pay?",
      answer:
        "I accept international bank transfers (SWIFT), cryptocurrencies (USDT/USDC), and payments via PayPal or Wise. We work with a milestone-based payment schedule for your peace of mind.",
    },
    {
      question: "Do you offer a guarantee?",
      answer:
        "Yes. I include 1 week of post-launch support for bug fixes and minor adjustments. Plus, all the code belongs to you from day 1 — no lock-ins or hidden licenses.",
    },
  ],
  ctaTitle: "Let's book a call today",
  ctaSubtitle:
    "Tell me about your idea and I'll explain how I can help you build your MVP in 3 weeks.",
};
