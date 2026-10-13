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
        'Tenho experiência em agências de publicidade, instituições acadêmicas e empresas de desenvolvimento. Atualmente trabalho na Getrak, reestruturando uma plataforma de rastreamento veicular em tempo real.',
        'Encaro cada obstáculo como aprendizado profissional, em aprendizado contínuo.',
      ],
    },
    trajectory: {
      title: 'Trajetória desde 2018',
      items: [
        { year: '2014', text: 'Início dos estudos em TI, com o curso de Técnico em Informática para Internet.' },
        { year: '2018', text: 'Início da trajetória profissional em desenvolvimento, com projetos como o da Mobister.' },
        { year: '2019', text: 'Incubatech, EasyDiet, FacePonto e DIATINF (IFRN).' },
        { year: '2021', text: 'SolarMarket: gerador de propostas comerciais para energia solar, com mais de 5.000 usuários simultâneos.' },
        { year: 'Hoje', text: 'Getrak, na reestruturação de uma plataforma de rastreamento veicular em tempo real, e ASO360, meu SaaS próprio.' },
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
        'Na SolarMarket, trabalhei em uma plataforma que atende mais de 5.000 usuários simultâneos. Na Incubatech, o carregamento de páginas ficou cerca de 40% mais rápido.',
      ],
      tags: ['Microservices', 'Micro Frontends', 'System Design', 'REST', 'GraphQL', 'gRPC', 'AWS', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Redis'],
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
        'I have experience in advertising agencies, academic institutions and development companies. I currently work at Getrak, re-architecting a real-time vehicle tracking platform.',
        'I face every obstacle as professional learning, in continuous learning.',
      ],
    },
    trajectory: {
      title: 'Career since 2018',
      items: [
        { year: '2014', text: 'Started studying IT, with an Internet Computing Technician course.' },
        { year: '2018', text: 'Started my professional development career, with projects such as Mobister.' },
        { year: '2019', text: 'Incubatech, EasyDiet, FacePonto and DIATINF (IFRN).' },
        { year: '2021', text: 'SolarMarket: a commercial proposal generator for solar energy, serving 5,000+ concurrent users.' },
        { year: 'Today', text: 'Getrak, re-architecting a real-time vehicle tracking platform, and ASO360, my own SaaS.' },
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
        'At SolarMarket, I worked on a platform serving 5,000+ concurrent users. At Incubatech, page loads became about 40% faster.',
      ],
      tags: ['Microservices', 'Micro Frontends', 'System Design', 'REST', 'GraphQL', 'gRPC', 'AWS', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    product: {
      title: 'A product of my own',
      text: 'ASO360 is a SaaS I built and operate. Running a product in production means dealing with support, billing, compliance and product evolution on top of the code.',
    },
    cta: { text: 'Want to know more about where I have worked?', experience: 'See experience', contact: 'Get in touch' },
  },
};
