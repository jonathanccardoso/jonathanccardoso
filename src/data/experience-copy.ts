import type { Lang } from '../i18n';

export interface ExperienceCopy {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  current: string;
  viewCase: string;
  stackLabel: string;
  impactLabel: string;
  detailsLabel: string;
  education: { title: string; description: string };
  certifications: { title: string };
  languages: { title: string };
  cta: { text: string; contact: string };
}

export const experienceCopy: Record<Lang, ExperienceCopy> = {
  pt: {
    title: 'Experiência',
    description: 'Trajetória profissional completa de Jonathan Cardoso, em ordem cronológica, com ênfase na atuação atual na Getrak, além de formação, certificações e idiomas.',
    eyebrow: 'Experiência',
    heading: 'Experiência profissional',
    lead: 'Em ordem cronológica inversa, com ênfase na atuação atual. Detalhes de produtos de empregadores entram aqui apenas quando podem ser divulgados.',
    current: 'Atual',
    viewCase: 'Ver estudo de caso',
    stackLabel: 'Stack',
    impactLabel: 'Impacto',
    detailsLabel: 'O que fiz',
    education: { title: 'Formação', description: 'Formação acadêmica no IFRN.' },
    certifications: { title: 'Certificações' },
    languages: { title: 'Idiomas' },
    cta: { text: 'Vamos conversar sobre o seu projeto?', contact: 'Entrar em contato' },
  },
  en: {
    title: 'Experience',
    description: "Full professional timeline of Jonathan Cardoso, in chronological order, with emphasis on the current role at Getrak, plus education, certifications and languages.",
    eyebrow: 'Experience',
    heading: 'Professional experience',
    lead: 'In reverse chronological order, with emphasis on the current role. Details appear here only when they can be shared publicly.',
    current: 'Current',
    viewCase: 'View case study',
    stackLabel: 'Stack',
    impactLabel: 'Impact',
    detailsLabel: 'What I did',
    education: { title: 'Education', description: 'Academic background at IFRN.' },
    certifications: { title: 'Certifications' },
    languages: { title: 'Languages' },
    cta: { text: "Let's talk about your project?", contact: 'Get in touch' },
  },
};

export interface Position {
  id: string;
  company: string;
  /** Slug of the work case study, when one exists (same in pt and en). */
  caseKey?: string;
  current?: boolean;
  location?: Record<Lang, string>;
  /** One entry per role held at the company (most recent first). */
  roles: { title: string; period: Record<Lang, string> }[];
  /** Total time at the company, when worth showing. */
  total?: Record<Lang, string>;
  summary: Record<Lang, string>;
  /** Detailed list, shown on the Experience page. */
  details?: Record<Lang, string[]>;
  /** Short impact list, shown on the Experience page and the Home highlights. */
  impacts?: Record<Lang, string[]>;
  stack?: string[];
}

/** Full chronological timeline (most recent first). Source: owner's LinkedIn. */
export const positions: Position[] = [
  {
    id: 'getrak',
    company: 'Getrak',
    caseKey: 'getrak',
    current: true,
    roles: [{ title: 'Software Engineer', period: { pt: 'Mar 2024 – Atual', en: 'Mar 2024 – Present' } }],
    summary: {
      pt: 'Participação na reestruturação arquitetural de uma plataforma de rastreamento veicular em tempo real, que tinha limites de escalabilidade e de design de sistema.',
      en: 'Took part in the architectural restructuring of a real-time vehicle tracking platform that had scalability and system-design limits.',
    },
    details: {
      pt: [
        'Reestruturação para microsserviços com Node.js, API gateway em Java e micro frontends em React.js.',
        'Otimização de APIs REST para reduzir o tempo de resposta e melhorar a estabilidade sob alta concorrência.',
        'Serviços de integração com sistemas externos, incluindo sistemas bancários, gateways de pagamento e APIs de terceiros.',
        'Dashboards interativos construídos junto com designers.',
        'Apoio a melhorias de infraestrutura com Docker, pipelines de CI/CD e AWS.',
      ],
      en: [
        'Restructuring into microservices with Node.js, a Java API gateway and React.js micro frontends.',
        'Optimized REST APIs to reduce response time and improve stability under high concurrency.',
        'Integration services with external systems, including banking systems, payment gateways and third-party APIs.',
        'Interactive dashboards built together with designers.',
        'Supported infrastructure improvements with Docker, CI/CD pipelines and AWS.',
      ],
    },
    impacts: {
      pt: [
        'Melhor tempo de resposta das APIs e maior estabilidade geral',
        'Melhor experiência de uso com dashboards e relatórios intuitivos',
        'Mais escalabilidade para um número crescente de usuários simultâneos',
      ],
      en: [
        'Better API response time and overall stability',
        'Better user experience with intuitive dashboards and reports',
        'Increased scalability for a growing number of concurrent users',
      ],
    },
    stack: ['Node.js', 'Java', 'React', 'Micro Frontends', 'REST', 'Docker', 'CI/CD', 'AWS'],
  },
  {
    id: 'solarmarket',
    company: 'SolarMarket Brasil',
    caseKey: 'solarmarket',
    roles: [
      { title: 'Full Stack Developer', period: { pt: 'Jan 2022 – Mar 2024', en: 'Jan 2022 – Mar 2024' } },
      { title: 'Frontend Web Developer', period: { pt: 'Jun 2021 – Jan 2022', en: 'Jun 2021 – Jan 2022' } },
    ],
    total: { pt: '2 anos e 10 meses', en: '2 years 10 months' },
    summary: {
      pt: 'Construção e escala de uma plataforma intensiva em dados, com grande volume de dados financeiros e de usuários em tempo real.',
      en: 'Built and scaled a data-intensive platform handling large volumes of financial and user data in real time.',
    },
    details: {
      pt: [
        'APIs escaláveis com NestJS e GraphQL, com MongoDB.',
        'Crawlers em AWS Lambda para automatizar a coleta de dados financeiros e de usuários.',
        'Melhorias de desempenho e usabilidade do frontend com Vue.js.',
        'Integração com provedores de dados financeiros e automação de fluxos de processamento de dados.',
      ],
      en: [
        'Scalable APIs with NestJS and GraphQL, plus MongoDB.',
        'AWS Lambda crawlers to automate the collection of financial and user data.',
        'Frontend performance and usability improvements with Vue.js.',
        'Integration of financial data providers and automated data-processing workflows.',
      ],
    },
    impacts: {
      pt: [
        'Escalou para suportar mais de 5.000 usuários simultâneos',
        'Integrações financeiras automatizadas, com menos tempo de processamento e menos erros manuais',
        'Melhor desempenho, confiabilidade e consistência de dados',
      ],
      en: [
        'Scaled to support 5,000+ concurrent users',
        'Automated financial integrations, reducing processing time and manual errors',
        'Improved performance, reliability and data consistency',
      ],
    },
    stack: ['NestJS', 'GraphQL', 'MongoDB', 'AWS Lambda', 'Vue.js'],
  },
  {
    id: 'ifrn-fullstack',
    company: 'IFRN',
    caseKey: 'ifrn-placas',
    location: { pt: 'Natal e região', en: 'Natal and region' },
    roles: [{ title: 'Full Stack Developer', period: { pt: 'Mar 2021 – Mar 2022', en: 'Mar 2021 – Mar 2022' } }],
    summary: {
      pt: 'Sistema de placas de formatura para estudantes do campus, desenvolvido com Django (front-end e back-end), com otimização, segurança e responsividade conforme o escopo.',
      en: 'A graduation plaque system for campus students, built with Django (frontend and backend), with optimization, security and responsiveness per scope.',
    },
    stack: ['Django'],
  },
  {
    id: 'incubatech',
    company: 'Incubatech',
    caseKey: 'incubatech',
    location: { pt: 'Natal, Brasil', en: 'Natal, Brazil' },
    roles: [{ title: 'Full Stack Developer', period: { pt: 'Fev 2019 – Jun 2021', en: 'Feb 2019 – Jun 2021' } }],
    summary: {
      pt: 'Sistemas web e landing pages com Django, React e WordPress.',
      en: 'Web systems and landing pages with Django, React and WordPress.',
    },
    details: {
      pt: [
        'Identificação de limites de desempenho e escalabilidade e migração de aplicações Django do Heroku para a DigitalOcean.',
        'Melhorias de UX/UI com templates Django, em conjunto com designers.',
        'Integração de pagamentos de planos de assinatura via API da Hotmart.',
        'Trabalho com stakeholders em requisitos e priorização.',
      ],
      en: [
        'Identified performance and scalability limits and migrated Django applications from Heroku to DigitalOcean.',
        'UX/UI improvements with Django templates, together with designers.',
        'Integrated payments for subscription plans through the Hotmart API.',
        'Worked with stakeholders on requirements and prioritisation.',
      ],
    },
    impacts: {
      pt: [
        'Carregamento de páginas cerca de 40% mais rápido',
        '10% a mais de adoção de usuários após melhorias de desempenho e UX',
        'Monetização viabilizada por planos de assinatura e integrações de pagamento',
      ],
      en: [
        'Page loads about 40% faster',
        '10% more user adoption after performance and UX improvements',
        'Monetization enabled through subscription plans and payment integrations',
      ],
    },
    stack: ['Django', 'React', 'WordPress', 'Hotmart API', 'DigitalOcean'],
  },
  {
    id: 'mobister',
    company: 'Mobister',
    caseKey: 'mobister',
    roles: [{ title: 'Web Developer Jr', period: { pt: 'Jan 2018 – Abr 2018', en: 'Jan 2018 – Apr 2018' } }],
    total: { pt: '4 meses', en: '4 months' },
    summary: {
      pt: 'Sites de captação de leads para empresas de diversos segmentos, com desenvolvimento, manutenção e relacionamento com o cliente para analisar e filtrar demandas.',
      en: 'Lead-capture websites for companies in many segments, with development, maintenance and client relationship to analyse and filter demands.',
    },
    stack: ['WordPress', 'Bootstrap', 'AWS', 'JavaScript', 'SASS', 'Photoshop'],
  },
  {
    id: 'ifrn-web',
    company: 'IFRN',
    location: { pt: 'Natal e região', en: 'Natal and region' },
    roles: [{ title: 'Web Development', period: { pt: 'Mar 2017 – Jan 2018', en: 'Mar 2017 – Jan 2018' } }],
    total: { pt: '11 meses', en: '11 months' },
    summary: { pt: 'Desenvolvimento web no IFRN.', en: 'Web development at IFRN.' },
  },
];

export interface EducationItem {
  name: Record<Lang, string>;
  institution: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    name: { pt: 'Graduação em Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)', en: 'Degree in Systems Analysis and Development (TADS)' },
    institution: 'IFRN',
    period: '2018 – 2022',
  },
  {
    name: { pt: 'Técnico em Informática para Internet', en: 'Technician in Internet Computing' },
    institution: 'IFRN',
    period: '2014 – 2017',
  },
];

/** Course titles are kept in their original language. */
export const certifications: string[] = ['Aprenda NextJS, GraphQL/GraphCMS e Leaflet na prática!', 'Curso de Inglês para Tecnologia da Informação'];

export const languages: { name: Record<Lang, string>; level: Record<Lang, string> }[] = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Profissional (B1/B2)', en: 'Professional working proficiency (B1/B2)' } },
];
