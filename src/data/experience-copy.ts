import type { Lang } from '../i18n';

export interface ExperienceCopy {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  current: string;
  viewCase: string;
  visit: string;
  employmentTitle: string;
  productTitle: string;
  otherTitle: string;
  otherDescription: string;
  cta: { text: string; contact: string };
}

export const experienceCopy: Record<Lang, ExperienceCopy> = {
  pt: {
    title: 'Experiência',
    description: 'Experiência profissional de Jonathan Cardoso, com ênfase na atuação atual na Getrak, e projetos anteriores.',
    eyebrow: 'Experiência',
    heading: 'Experiência profissional',
    lead: 'Em ordem cronológica inversa, com ênfase na atuação atual. Detalhes entram aqui apenas quando podem ser divulgados.',
    current: 'Atual',
    viewCase: 'Ver estudo de caso',
    visit: 'Visitar o site',
    employmentTitle: 'Empresas',
    productTitle: 'Produto próprio',
    otherTitle: 'Outros projetos e organizações',
    otherDescription: 'Projetos do meu portfólio anterior.',
    cta: { text: 'Vamos conversar sobre o seu projeto?', contact: 'Entrar em contato' },
  },
  en: {
    title: 'Experience',
    description: "Jonathan Cardoso's professional experience, with emphasis on the current role at Getrak, and earlier projects.",
    eyebrow: 'Experience',
    heading: 'Professional experience',
    lead: 'In reverse chronological order, with emphasis on the current role. Details appear here only when they can be shared publicly.',
    current: 'Current',
    viewCase: 'View case study',
    visit: 'Visit the website',
    employmentTitle: 'Companies',
    productTitle: 'Own product',
    otherTitle: 'Other projects and organizations',
    otherDescription: 'Projects from my previous portfolio.',
    cta: { text: "Let's talk about your project?", contact: 'Get in touch' },
  },
};

/** Legacy projects without a case page (source: src/data/legacy-portfolio.json, descriptions translated). */
export const otherProjects: { name: string; year: string; link: string; desc: Record<Lang, string> }[] = [
  {
    name: 'FacePonto',
    year: '2019',
    link: 'https://incubatech.faceponto.com.br/',
    desc: { pt: 'Gerenciador inteligente de ponto, otimizando o trabalho do departamento de recursos humanos.', en: 'Smart time manager, optimizing the work of your human resources department.' },
  },
  {
    name: 'DIATINF (IFRN)',
    year: '2019',
    link: 'https://diatinf.ifrn.edu.br/',
    desc: {
      pt: 'Um Conselho Acadêmico de Gestão e Tecnologia da Informação (DIATINF) com mais de 30 anos de existência.',
      en: 'An Academic Council for Management and Information Technology (DIATINF) with more than 30 years of existence.',
    },
  },
  {
    name: 'Mobister',
    year: '2018',
    link: 'https://www.mobister.com.br/',
    desc: {
      pt: 'Especialista em design e produção de soluções digitais, a Mobister desenvolve produtos com foco em UX.',
      en: 'Specialist in design and production of digital solutions, Mobister develops products focused on UX.',
    },
  },
];
