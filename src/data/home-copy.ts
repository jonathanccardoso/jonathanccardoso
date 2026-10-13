import { readdirSync } from 'node:fs';
import type { Lang } from '../i18n';

/** Path of a resume PDF in /public named resume*.pdf, if the owner added one (otherwise the button is omitted). */
export const resumeHref: string | undefined = (() => {
  try {
    const file = readdirSync('public').find((f) => /^resume.*\.pdf$/i.test(f));
    return file ? `/${file}` : undefined;
  } catch {
    return undefined;
  }
})();

export interface HomeCopy {
  title: string;
  description: string;
  hero: { eyebrow: string; title: string; subtitle: string; work: string; resume: string; contact: string; status: string; photoAlt: string };
  proof: { label: string; items: { value: string; label: string }[] };
  tech: { eyebrow: string; title: string; description: string; groups: { name: string; items: string[] }[]; ai: string };
  experience: { eyebrow: string; title: string; description: string; cta: string; current: string };
  work: { eyebrow: string; title: string; description: string; cta: string };
  product: {
    eyebrow: string;
    title: string;
    text: string;
    aso: string;
    highlights: { title: string; text: string }[];
    note: string;
    case: string;
    visit: string;
  };
  blog: { eyebrow: string; title: string; description: string; cta: string };
  cta: { title: string; text: string; button: string };
}

const techGroups = (lang: Lang) => [
  { name: lang === 'pt' ? 'Front-end' : 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
  { name: 'Back-end', items: ['Node.js', 'NestJS', 'Python', 'Django'] },
  { name: lang === 'pt' ? 'APIs' : 'APIs', items: ['REST', 'GraphQL', 'gRPC'] },
  { name: lang === 'pt' ? 'Arquitetura' : 'Architecture', items: ['Microservices', 'Micro Frontends', 'System Design', 'RabbitMQ'] },
  { name: lang === 'pt' ? 'Nuvem e DevOps' : 'Cloud and DevOps', items: ['AWS', 'Docker', 'CI/CD'] },
  { name: lang === 'pt' ? 'Dados' : 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { name: lang === 'pt' ? 'Práticas' : 'Practices', items: ['Clean Code', 'SOLID', 'TDD', 'Code review'] },
];

export const homeCopy: Record<Lang, HomeCopy> = {
  pt: {
    title: 'Senior Full Stack Software Engineer',
    description:
      'Jonathan Cardoso: mais de 7 anos transformando produtos complexos em sistemas confiáveis com React, Node.js, TypeScript e Python. Criador do ASO360 e Software Engineer na Getrak.',
    hero: {
      eyebrow: 'Jonathan Cardoso',
      title: 'Senior Full Stack Software Engineer',
      subtitle:
        'Mais de 7 anos transformando produtos complexos em sistemas confiáveis com React, Node.js, TypeScript e Python. Criador do ASO360, um SaaS para clínicas de medicina ocupacional que construí e opero. Software Engineer na Getrak desde março de 2024, participando da reestruturação arquitetural de uma plataforma de rastreamento veicular em tempo real, com microsserviços e micro frontends.',
      work: 'Ver projetos',
      resume: 'Currículo',
      contact: 'Entrar em contato',
      status: 'Aberto a oportunidades remotas com times globais. Fuso horário: Brasil (UTC−3).',
      photoAlt: 'Foto de Jonathan Cardoso',
    },
    proof: {
      label: 'Números',
      items: [
        { value: '7+', label: 'anos de experiência' },
        { value: '5.000+', label: 'usuários simultâneos (SolarMarket)' },
        { value: '13.100+', label: 'ASOs gerados no meu próprio SaaS' },
        { value: '~40%', label: 'carregamento de páginas mais rápido (Incubatech)' },
      ],
    },
    tech: {
      eyebrow: 'Tecnologias',
      title: 'Tecnologias principais',
      description: 'O que uso profissionalmente, do front-end à infraestrutura.',
      groups: techGroups('pt'),
      ai: 'Desenvolvimento assistido por IA com GitHub Copilot e Claude Code, sempre com revisão humana.',
    },
    experience: {
      eyebrow: 'Experiência',
      title: 'Experiência profissional',
      description: 'Onde atuei e o impacto do trabalho, da posição mais recente à mais antiga.',
      cta: 'Ver experiência completa',
      current: 'Atual',
    },
    work: {
      eyebrow: 'Projetos',
      title: 'Projetos e estudos de caso',
      description: 'Produtos e plataformas em que trabalhei, com o que pode ser divulgado publicamente.',
      cta: 'Ver todos os projetos',
    },
    product: {
      eyebrow: 'Além do dia a dia',
      title: 'Além do trabalho: meu próprio produto',
      text: 'O ASO360 é um SaaS que construí e opero para gerir clínicas de medicina ocupacional: atestados, exames, fichas de atendimento e faturamento, com geração automática de PDFs e verificações alinhadas à regulamentação.',
      aso: 'ASO é o Atestado de Saúde Ocupacional, exigido pela legislação trabalhista brasileira.',
      highlights: [
        { title: 'Em produção', text: 'Um produto real, em uso, com planos por assinatura e avaliação gratuita.' },
        { title: 'Números públicos', text: '13.100+ ASOs, 13.000+ exames e 14.000+ vidas cadastradas, segundo o site do produto.' },
        { title: 'Dados sensíveis', text: 'Armazenamento criptografado com backups na nuvem, construído com a conformidade com a LGPD em mente.' },
      ],
      note: 'Números divulgados no site do produto, sujeitos a atualização.',
      case: 'Ler o estudo de caso',
      visit: 'Visitar aso360.com.br',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Artigos recentes',
      description: 'Notas sobre engenharia de software, arquitetura e produto.',
      cta: 'Ver todos os artigos',
    },
    cta: {
      title: 'Vamos conversar?',
      text: 'Aberto a oportunidades remotas com times globais. Fuso horário: Brasil (UTC−3).',
      button: 'Entrar em contato',
    },
  },
  en: {
    title: 'Senior Full Stack Software Engineer',
    description:
      'Jonathan Cardoso: 7+ years turning complex products into reliable systems with React, Node.js, TypeScript and Python. Creator of ASO360 and Software Engineer at Getrak.',
    hero: {
      eyebrow: 'Jonathan Cardoso',
      title: 'Senior Full Stack Software Engineer',
      subtitle:
        '7+ years turning complex products into reliable systems with React, Node.js, TypeScript and Python. Creator of ASO360, a SaaS for occupational health clinics that I built and operate. Software Engineer at Getrak since March 2024, taking part in the architectural restructuring of a real-time vehicle tracking platform with microservices and micro frontends.',
      work: 'View projects',
      resume: 'Resume',
      contact: 'Get in touch',
      status: 'Open to remote opportunities with global teams. Time zone: Brazil (UTC−3).',
      photoAlt: 'Photo of Jonathan Cardoso',
    },
    proof: {
      label: 'Numbers',
      items: [
        { value: '7+', label: 'years of experience' },
        { value: '5,000+', label: 'concurrent users (SolarMarket)' },
        { value: '13,100+', label: 'occupational health certificates generated on my own SaaS' },
        { value: '~40%', label: 'faster page loads (Incubatech)' },
      ],
    },
    tech: {
      eyebrow: 'Technologies',
      title: 'Main technologies',
      description: 'What I use professionally, from the frontend to infrastructure.',
      groups: techGroups('en'),
      ai: 'AI-assisted development with GitHub Copilot and Claude Code, always with human review.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Professional experience',
      description: 'Where I worked and the impact of the work, most recent first.',
      cta: 'See full experience',
      current: 'Current',
    },
    work: {
      eyebrow: 'Work',
      title: 'Selected work and case studies',
      description: 'Products and platforms I worked on, with what can be shared publicly.',
      cta: 'View all projects',
    },
    product: {
      eyebrow: 'Beyond the day job',
      title: 'Beyond the day job: my own product',
      text: 'ASO360 is a SaaS I built and operate to manage occupational health clinics: certificates, exams, patient forms and billing, with automated PDF generation and regulation-aware checks.',
      aso: 'ASO is the Occupational Health Certificate, required by Brazilian labor regulation.',
      highlights: [
        { title: 'In production', text: 'A real product in use, with subscription plans and a free trial.' },
        { title: 'Public numbers', text: '13,100+ certificates, 13,000+ exams and 14,000+ registered lives, according to the product website.' },
        { title: 'Sensitive data', text: 'Encrypted storage with cloud backups, built with LGPD compliance in mind.' },
      ],
      note: 'Numbers published on the product website, subject to change.',
      case: 'Read the case study',
      visit: 'Visit aso360.com.br',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Latest articles',
      description: 'Notes on software engineering, architecture and product.',
      cta: 'View all articles',
    },
    cta: {
      title: "Let's talk",
      text: 'Open to remote opportunities with global teams. Time zone: Brazil (UTC−3).',
      button: 'Get in touch',
    },
  },
};
