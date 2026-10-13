import type { Lang } from '../i18n';

export interface ContactCopy {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  support: string;
  labels: { name: string; email: string; company: string; message: string; optional: string; submit: string; sending: string };
  success: string;
  error: string;
  errors: Record<string, string>;
  mailtoIntro: string;
  mailtoLink: string;
  social: string;
  noscript: string;
}

export const contactCopy: Record<Lang, ContactCopy> = {
  pt: {
    title: 'Contato',
    description: 'Fale com Jonathan Cardoso: oportunidades remotas, projetos e parcerias.',
    eyebrow: 'Contato',
    heading: 'Vamos conversar',
    lead: 'Envie uma mensagem e eu respondo por e-mail.',
    support: 'Aberto a oportunidades remotas com times globais. Fuso horário: Brasil (UTC−3).',
    labels: { name: 'Nome', email: 'E-mail', company: 'Empresa', message: 'Mensagem', optional: '(opcional)', submit: 'Enviar mensagem', sending: 'Enviando...' },
    success: 'Mensagem enviada. Obrigado! Responderei em breve.',
    error: 'Não foi possível enviar a mensagem. Tente novamente em instantes.',
    errors: {
      invalid_name: 'Informe seu nome (até 100 caracteres).',
      invalid_email: 'Informe um e-mail válido.',
      invalid_company: 'O nome da empresa é muito longo.',
      invalid_message: 'A mensagem deve ter entre 10 e 5000 caracteres.',
      rate_limited: 'Muitas tentativas. Aguarde alguns minutos e tente de novo.',
      captcha_failed: 'Falha na verificação anti-spam. Tente novamente.',
    },
    mailtoIntro: 'Se o formulário falhar, escreva diretamente para',
    mailtoLink: 'Enviar e-mail',
    social: 'Redes e perfis',
    noscript: 'O envio do formulário requer JavaScript. Use os links abaixo para entrar em contato.',
  },
  en: {
    title: 'Contact',
    description: 'Get in touch with Jonathan Cardoso: remote opportunities, projects and partnerships.',
    eyebrow: 'Contact',
    heading: "Let's talk",
    lead: 'Send a message and I will reply by email.',
    support: 'Open to remote opportunities with global teams. Time zone: Brazil (UTC−3).',
    labels: { name: 'Name', email: 'Email', company: 'Company', message: 'Message', optional: '(optional)', submit: 'Send message', sending: 'Sending...' },
    success: 'Message sent. Thank you! I will reply soon.',
    error: 'Could not send your message. Please try again shortly.',
    errors: {
      invalid_name: 'Please enter your name (up to 100 characters).',
      invalid_email: 'Please enter a valid email address.',
      invalid_company: 'The company name is too long.',
      invalid_message: 'The message must be between 10 and 5000 characters.',
      rate_limited: 'Too many attempts. Please wait a few minutes and try again.',
      captcha_failed: 'Anti-spam check failed. Please try again.',
    },
    mailtoIntro: 'If the form fails, write directly to',
    mailtoLink: 'Send an email',
    social: 'Profiles',
    noscript: 'The contact form requires JavaScript. Use the links below to get in touch.',
  },
};
