export interface Contact {
  text: string;
  link: string;
}

export interface Job {
  position: string;
  institution: string;
  location: string;
  date: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  major: string;
  date: string;
  location: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
}

export interface CVData {
  name: string;
  title: string;
  address: string;
  contacts: Contact[];
  aboutMe: string;
  experience: Job[];
  skills: SkillCategory[];
  education: Education[];
  labels: {
    aboutMe: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    availableForWork: string;
  };
}

export const cvEs: CVData = {
  name: "Sebastian Coronel",
  title: "Full-Stack Engineer",
  address: "Argentina (Remoto)",
  contacts: [
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/sebastian-alejandro-coronel/",
    },
    {
      text: "sebastiancoronel.work@gmail.com",
      link: "mailto:sebastiancoronel.work@gmail.com",
    },
  ],
  aboutMe:
    "Full-Stack Engineer con más de 5 años de experiencia construyendo plataformas escalables de Fintech, Proptech y B2B. Experto en el ecosistema de Javascript y PHP incluyendo Laravel, Codeigniter, React, Node, Nest y TypeScript. Asumo un fuerte sentido de propiedad sobre todo el ciclo de vida del desarrollo, asegurando que cada funcionalidad esté arquitecturalmente diseñada para resolver problemas reales del usuario, manteniendo siempre una interfaz pixel-perfect y cuidando el rendimiento.",
  experience: [
    {
      position: "Full-Stack Engineer",
      institution: "Syon Creative Limited",
      location: "London - Remote",
      date: "2024 - Presente",
      technologies: ["React", "Vue", "Laravel"],
      description: [
        "Desarrollé dashboards B2B utilizados por equipos internos, entregando features específicas para clientes con React, Vue y Laravel, reduciendo el esfuerzo de mantenimiento en un ~20% mediante refactors y una mejora en la componentización.",
        "Diagnostiqué y resolví un problema crítico en producción que afectaba a jobs programados de web-scraping, restaurando la estabilidad del sistema y previniendo fallos en la data pipeline.",
        "Implementé y optimicé visualizaciones de mapas interactivos, renderizando más de 11,000 registros geolocalizados por vista y reduciendo los tiempos de carga de varios segundos a respuestas casi instantáneas mediante el pre-procesamiento de datos históricos.",
      ],
    },
    {
      position: "Full-Stack Engineer",
      institution: "Autoscraping Inc.",
      location: "USA - Remote",
      date: "2021 - 2023",
      technologies: ["JavaScript", "PHP"],
      description: [
        "Desarrollé funcionalidades core de Fintech y contribuí al design system para un producto de más de 60,000 usuarios activos, impulsando el 70–90% de la actividad de los usuarios en authentication, onboarding y transacciones durante la etapa de early-stage y Seed funding.",
        "Lideré delivery de flujos de transacciones y usuarios de alta frecuencia, soportando miles de operaciones diarias con releases de producción semanales.",
        "Desarrollé un marketplace de Proptech, mantuve una app de apuestas y dashboards operativos que procesan más de 35,000 propiedades, integrando data pipelines.",
      ],
    },
    {
      position: "Full-Stack Engineer",
      institution: "Data Center Juan Felipe Ibarra",
      location: "Argentina - Remote",
      date: "2020 - 2021",
      technologies: ["Laravel", "Pusher", "JavaScript"],
      description: [
        "Desarrollé funcionalidades de front-end, visualizaciones de datos y gráficos interactivos que mejoraron la usabilidad y apoyaron la toma de decisiones basada en datos para equipos internos. También desarrollé un sistema de notificaciones utilizando websockets con Laravel Pusher.",
        "Construí e integré una pasarela de pagos (payment railway), incrementando la finalización exitosa de transacciones en un 20%, reduciendo el abandono del checkout en un ~15% y desplazando el ~80% de las transacciones de procesos manuales a automated payment rails.",
      ],
    },
  ],
  skills: [
    {
      title: "Front-end",
      description:
        "Construcción de interfaces de usuario con React, Tailwind y Shadcn para productos de Fintech, Proptech y B2B con foco en pixel-perfect y rendimiento.",
      items: ["React", "TypeScript", "Shadcn", "Tailwind"],
    },
    {
      title: "Back-end",
      description:
        "Desarrollo de APIs, backend con Laravel y Nest e integraciones de pasarelas de pago.",
      items: ["Laravel", "Nest", "PostgreSQL", "REST", "GraphQL"],
    },
    {
      title: "Arquitectura",
      description:
        "Aplicación de patrones SOLID, DRY, KISS, Layered Architecture, MVC y refactorización orientada a la mantenibilidad.",
      items: ["SOLID", "DRY", "KISS", "Layered Architecture", "MVC"],
    },
    {
      title: "DevOps / Herramientas",
      description: "Uso de entornos con Docker y DDEV",
      items: ["DDEV", "Docker"],
    },
  ],
  education: [
    {
      institution: "Universidad Catolica de Santiago del Estero",
      major: "Ingeniería en Informática",
      date: "2021",
      location: "Argentina",
      link: "https://registrograduados.siu.edu.ar/consulta.php?ah=st6a29ae19a13282.27458775&ai=registro_dngu%7C%7C92000001&tcm=popup&cGFyYW1ldHJv=eyJpZF90cmFtaXRlIjoiNjI2MTM1Iiwic2lzdGVtYSI6InNpZGNlciIsImlkX3RpcG9fZG9jdW1lbnRvIjoiRE5JIiwiZG9jdW1lbnRvIjoiMzgzNjUyMjkiLCJ0aXBvX3lfZG9jdW1lbnRvIjoiRG9jdW1lbnRvIE5hY2lvbmFsIGRlIElkZW50aWRhZCAzODM2NTIyOSIsImZlY2hhX2VncmVzbyI6IjIwMjEtMDQtMTkiLCJub21icmVfYXBlbGxpZG8iOiJDT1JPTkVMLCBTRUJBU1RJQU4gQUxFSkFORFJPIiwiYXBlbGxpZG8iOiJDT1JPTkVMLCBtdW5kbyIsIm5vbWJyZSI6IlNFQkFTVElBTiBBTEVKQU5EUk8iLCJuYWNpb25hbGlkYWQiOiJBUkdFTlRJTkEiLCJpbnN0aXR1Y2lvbiI6IlVuaXZlcnNpZGFkIENhdFx1MDBmM2xpY2EgZGUgU2FudGlhZ28gZGVsIEVzdGVybyIsInRpdHVsbyI6IkluZ2VuaWVybyBlbiBJbmZvcm1cdTAwZTF0aWNhIiwiYmxvY2tjaGFpbiI6ImJsb2NrY2hhaW5fbG9nb19jb2xvci5wbmcifQ==&tm=1",
    },
  ],
  labels: {
    aboutMe: "Sobre mí",
    experience: "Experiencia",
    skills: "Skills & Tools",
    education: "Educación",
    contact: "Contacto",
    availableForWork: "Disponible para trabajar",
  },
};

export const cvEn: CVData = {
  name: "Sebastian Coronel",
  title: "Full-Stack Engineer",
  address: "Argentina (Remote)",
  contacts: [
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/sebastian-alejandro-coronel/",
    },
    {
      text: "sebastiancoronel.work@gmail.com",
      link: "mailto:sebastiancoronel.work@gmail.com",
    },
  ],
  aboutMe:
    "Full-Stack Engineer with over 5 years of experience building scalable Fintech, Proptech, and B2B platforms. Expert in the JavaScript and PHP ecosystems including Laravel, Codeigniter, React, Node, Nest, and TypeScript. I assume a strong sense of ownership over the entire development lifecycle, ensuring each functionality is architecturally designed to solve real user problems, always maintaining a pixel-perfect interface and optimizing performance.",
  experience: [
    {
      position: "Full-Stack Engineer",
      institution: "Syon Creative Limited",
      location: "London - Remote",
      date: "2024 - Present",
      technologies: ["React", "Vue", "Laravel"],
      description: [
        "Developed B2B dashboards used by internal teams, delivering client-specific features with React, Vue, and Laravel, reducing maintenance effort by ~20% through refactoring and improved componentization.",
        "Diagnosed and resolved a critical production issue affecting scheduled web-scraping jobs, restoring system stability and preventing failures in the data pipeline.",
        "Implemented and optimized interactive map visualizations, rendering over 11,000 geolocalized records per view and reducing load times from several seconds to near-instantaneous responses through historical data pre-processing.",
      ],
    },
    {
      position: "Full-Stack Engineer",
      institution: "Autoscraping Inc.",
      location: "USA - Remote",
      date: "2021 - 2023",
      technologies: ["JavaScript", "PHP"],
      description: [
        "Developed core Fintech features and contributed to the design system for a product with over 60,000 active users, driving 70–90% of user activity in authentication, onboarding, and transactions during the early-stage and Seed funding phases.",
        "Led the delivery of high-frequency transaction and user flows, supporting thousands of daily operations with weekly production releases.",
        "Developed a Proptech marketplace, maintained a betting app, and operational dashboards processing over 35,000 properties, integrating data pipelines.",
      ],
    },
    {
      position: "Full-Stack Engineer",
      institution: "Data Center Juan Felipe Ibarra",
      location: "Argentina - Remote",
      date: "2020 - 2021",
      technologies: ["Laravel", "Pusher", "JavaScript"],
      description: [
        "Developed front-end features, data visualizations, and interactive charts that improved usability and supported data-driven decision-making for internal teams. Also developed a notification system using websockets with Laravel Pusher.",
        "Built and integrated a payment gateway (payment railway), increasing successful transaction completion by 20%, reducing checkout abandonment by ~15%, and shifting ~80% of transactions from manual processes to automated payment rails.",
      ],
    },
  ],
  skills: [
    {
      title: "Front-end",
      description:
        "Building Fintech dashboards, Proptech marketplaces, and high-performance interactive maps with a focus on pixel-perfect UI and performance optimization.",
      items: ["React", "TypeScript", "Shadcn", "Tailwind"],
    },
    {
      title: "Back-end",
      description:
        "Development of high-frequency transactional backends, scalable APIs, payment gateway integrations, and stable web-scraping data pipelines.",
      items: [
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
      title: "Architecture",
      description:
        "Applying design patterns and maintenance-oriented refactoring, reducing maintenance effort by up to 20% with structured code.",
      items: ["SOLID"],
    },
    {
      title: "DevOps / Tools",
      description:
        "Using dockerized local environments and advanced tooling to optimize and ensure reproducible development workflows.",
      items: ["DDEV"],
    },
  ],
  education: [
    {
      institution: "University of Santiago del Estero",
      major: "Informatics Engineering",
      date: "2021",
      location: "Argentina",
      link: "https://registrograduados.siu.edu.ar/consulta.php?ah=st6a29ae19a13282.27458775&ai=registro_dngu%7C%7C92000001&tcm=popup&cGFyYW1ldHJv=eyJpZF90cmFtaXRlIjoiNjI2MTM1Iiwic2lzdGVtYSI6InNpZGNlciIsImlkX3RpcG9fZG9jdW1lbnRvIjoiRE5JIiwiZG9jdW1lbnRvIjoiMzgzNjUyMjkiLCJ0aXBvX3lfZG9jdW1lbnRvIjoiRG9jdW1lbnRvIE5hY2lvbmFsIGRlIElkZW50aWRhZCAzODM2NTIyOSIsImZlY2hhX2VncmVzbyI6IjIwMjEtMDQtMTkiLCJub21icmVfYXBlbGxpZG8iOiJDT1JPTkVMLCBTRUJBU1RJQU4gQUxFSkFORFJPIiwiYXBlbGxpZG8iOiJDT1JPTkVMIiwibm9tYnJlIjoiU0VCQVNUSUFOIEFMRUpBTkRSTyIsIm5hY2lvbmFsaWRhZCI6IkFSR0VOVElOQSIsImluc3RpdHVjaW9uIjoiVW5pdmVyc2lkYWQgQ2F0XHUwMGYzbGljYSBkZSBTYW50aWFnbyBkZWwgRXN0ZXJvIiwidGl0dWxvIjoiSW5nZW5pZXJvIGVuIEluZm9ybVx1MDBlMXRpY2EiLCJibG9ja2NoYWluIjoiYmxvY2tjaGFpbl9sb2dvX2NvbG9yLnBuZyJ9&tm=1",
    },
  ],
  labels: {
    aboutMe: "About me",
    experience: "Experience",
    skills: "Skills & Tools",
    education: "Education",
    contact: "Contact",
    availableForWork: "Available for work",
  },
};
