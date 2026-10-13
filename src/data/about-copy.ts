import type { Lang } from '../i18n';

export interface AboutCopy {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  summary: { title: string; paragraphs: string[] };
  trajectory: { title: string; items: { year: string; text: string }[] };
  philosophy: { title: string; items: { title: string; text: string }[] };
  architecture: { title: string; paragraphs: string[]; tags: string[] };
  product: { title: string; text: string };
  cta: { text: string; experience: string; contact: string };
}

export const aboutCopy: Record<Lang, AboutCopy> = {
  pt: {
    title: 'Sobre',
    description:
      'Quem é Jonathan Cardoso: engenheiro de software full stack sênior, trajetória desde 2018, filosofia de desenvolvimento e experiência com arquitetura, escalabilidade e qualidade.',
    eyebrow: 'Sobre',
    heading: 'Engenheiro de software full stack, focado em sistemas confiáveis',
    lead: 'Mais de 7 anos construindo produtos web, de aplicações e microsserviços a plataformas em produção.',
    summary: {
      title: 'Resumo profissional',
      paragraphs: [
        'Sou Jonathan Cardoso, Engenheiro de Software Full Stack Sênior. Trabalho com React, Next.js, TypeScript, Node.js, NestJS, Python e Django, e já atuei com aplicações e microsserviços integrados a APIs de pagamento e crawlers.',
        'Desde março de 2024 sou Software Engineer na Getrak, onde participo da reestruturação arquitetural de uma plataforma de rastreamento veicular em tempo real, com microsserviços e micro frontends. Antes, passei pela SolarMarket Brasil, Incubatech, IFRN e Mobister, com foco em desempenho, escalabilidade e qualidade de código.',
        'Participo de code reviews e discussões técnicas, faço mentoria e escrevo artigos. Uso desenvolvimento assistido por IA (GitHub Copilot e Claude Code) no dia a dia, com foco em qualidade, segurança e arquitetura. Moro em Extremoz, no Rio Grande do Norte, e trabalho remotamente.',
      ],
    },
    trajectory: {
      title: 'Trajetória desde 2018',
      items: [
        { year: '2014', text: 'Início dos estudos em TI, com o curso Técnico em Informática para Internet no IFRN (2014 a 2017).' },
        { year: '2017', text: 'Desenvolvimento web no IFRN (mar 2017 a jan 2018).' },
        { year: '2018', text: 'Primeiro emprego como desenvolvedor: Web Developer Jr na Mobister (jan a abr 2018). Início da graduação em Análise e Desenvolvimento de Sistemas (TADS) no IFRN, concluída em 2022.' },
        { year: '2019', text: 'Full Stack Developer na Incubatech (fev 2019 a jun 2021): Django, React e WordPress, migração de Heroku para DigitalOcean, integração de pagamentos de assinatura com a Hotmart e carregamento de páginas cerca de 40% mais rápido.' },
        { year: '2021', text: 'Full Stack Developer no IFRN (mar 2021 a mar 2022) e Frontend Web Developer na SolarMarket (jun 2021), depois Full Stack Developer (jan 2022 a mar 2024), em uma plataforma que escalou para mais de 5.000 usuários simultâneos.' },
        { year: '2024', text: 'Software Engineer na Getrak (desde mar 2024), na reestruturação arquitetural de uma plataforma de rastreamento veicular em tempo real.' },
        { year: 'Hoje', text: 'Getrak, e ASO360, meu SaaS próprio.' },
      ],
    },
    philosophy: {
      title: 'Filosofia de desenvolvimento e decisões técnicas',
      items: [
        { title: 'Resultados verificáveis', text: 'Priorizo resultados reais e exemplos verificáveis, sem inflar números.' },
        { title: 'Código limpo e sustentável', text: 'Clean Code, SOLID, TDD e code reviews como prática de equipe, para que o sistema continue evoluindo.' },
        { title: 'Decisões arquiteturais explícitas', text: 'Dou atenção a desempenho, estabilidade e evolução de plataformas, e a colaboração técnica ao decidir.' },
        { title: 'IA com responsabilidade', text: 'Uso GitHub Copilot e Claude Code para acelerar, com revisão humana: a responsabilidade pelo que é entregue continua sendo de quem entrega.' },
      ],
    },
    architecture: {
      title: 'Arquitetura, escalabilidade e qualidade',
      paragraphs: [
        'Minha experiência inclui microsserviços, micro frontends e system design, com APIs REST, GraphQL e gRPC, em ambientes com AWS, Docker e CI/CD, e bancos como PostgreSQL, MongoDB e Redis.',
        'Na Getrak, otimizei APIs REST para melhorar o tempo de resposta e a estabilidade sob alta concorrência. Na SolarMarket, trabalhei em uma plataforma que escalou para mais de 5.000 usuários simultâneos. Na Incubatech, o carregamento de páginas ficou cerca de 40% mais rápido.',
      ],
      tags: ['Microservices', 'Micro Frontends', 'System Design', 'REST', 'GraphQL', 'gRPC', 'AWS', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
    },
    product: {
      title: 'Um produto próprio',
      text: 'O ASO360 é um SaaS que construí e opero. Operar um produto em produção significa lidar, além do código, com suporte, faturamento, conformidade e evolução do produto.',
    },
    cta: { text: 'Quer saber mais sobre onde atuei?', experience: 'Ver experiência', contact: 'Entrar em contato' },
  },
  en: {
    title: 'About',
    description:
      'About Jonathan Cardoso: senior full stack software engineer, career since 2018, development philosophy and experience in architecture, scalability and quality.',
    eyebrow: 'About',
    heading: 'Full stack software engineer focused on reliable systems',
    lead: '7+ years building web products, from applications and microservices to platforms in production.',
    summary: {
      title: 'Professional summary',
      paragraphs: [
        "I'm Jonathan Cardoso, a Senior Full Stack Software Engineer. I work with React, Next.js, TypeScript, Node.js, NestJS, Python and Django, and I have worked on applications and microservices integrated with payment APIs and crawlers.",
        'Since March 2024 I have been a Software Engineer at Getrak, taking part in the architectural restructuring of a real-time vehicle tracking platform, with microservices and micro frontends. Before that I worked at SolarMarket Brasil, Incubatech, IFRN and Mobister, focused on performance, scalability and code quality.',
        'I take part in code reviews and technical discussions, mentor other developers and write articles. I use AI-assisted development (GitHub Copilot and Claude Code) daily, with a focus on quality, security and architecture. I live in Extremoz, Rio Grande do Norte, and work remotely.',
      ],
    },
    trajectory: {
      title: 'Career since 2018',
      items: [
        { year: '2014', text: 'Started studying IT, with the Internet Computing Technician course at IFRN (2014 to 2017).' },
        { year: '2017', text: 'Web development at IFRN (Mar 2017 to Jan 2018).' },
        { year: '2018', text: 'First job as a developer: Web Developer Jr at Mobister (Jan to Apr 2018). Started the Systems Analysis and Development (TADS) degree at IFRN, completed in 2022.' },
        { year: '2019', text: 'Full Stack Developer at Incubatech (Feb 2019 to Jun 2021): Django, React and WordPress, Heroku to DigitalOcean migration, subscription payments with Hotmart and page loads about 40% faster.' },
        { year: '2021', text: 'Full Stack Developer at IFRN (Mar 2021 to Mar 2022) and Frontend Web Developer at SolarMarket (Jun 2021), then Full Stack Developer (Jan 2022 to Mar 2024), on a platform that scaled to 5,000+ concurrent users.' },
        { year: '2024', text: 'Software Engineer at Getrak (since Mar 2024), on the architectural restructuring of a real-time vehicle tracking platform.' },
        { year: 'Today', text: 'Getrak, and ASO360, my own SaaS.' },
      ],
    },
    philosophy: {
      title: 'Development philosophy and technical decisions',
      items: [
        { title: 'Verifiable results', text: 'I prioritize real results and verifiable examples, without inflating numbers.' },
        { title: 'Clean, sustainable code', text: 'Clean Code, SOLID, TDD and code reviews as a team practice, so the system keeps evolving.' },
        { title: 'Explicit architectural decisions', text: 'I pay attention to performance, stability and platform evolution, and to technical collaboration when deciding.' },
        { title: 'Responsible AI use', text: 'I use GitHub Copilot and Claude Code to move faster, with human review: responsibility for what ships stays with whoever ships it.' },
      ],
    },
    architecture: {
      title: 'Architecture, scalability and quality',
      paragraphs: [
        'My experience includes microservices, micro frontends and system design, with REST, GraphQL and gRPC APIs, on AWS, Docker and CI/CD, and databases such as PostgreSQL, MongoDB and Redis.',
        'At Getrak, I optimized REST APIs to improve response time and stability under high concurrency. At SolarMarket, I worked on a platform that scaled to 5,000+ concurrent users. At Incubatech, page loads became about 40% faster.',
      ],
      tags: ['Microservices', 'Micro Frontends', 'System Design', 'REST', 'GraphQL', 'gRPC', 'AWS', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
    },
    product: {
      title: 'A product of my own',
      text: 'ASO360 is a SaaS I built and operate. Running a product in production means dealing with support, billing, compliance and product evolution on top of the code.',
    },
    cta: { text: 'Want to know more about where I have worked?', experience: 'See experience', contact: 'Get in touch' },
  },
};
