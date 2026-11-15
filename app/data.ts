type Project = {
  name: string
  description: Record<'en' | 'pt-BR', string>
  link: string
  video: string
  id: string
  image: string
  tech?: string
}

type WorkExperience = {
  company: string
  title: Record<'en' | 'pt-BR', string>
  start: Record<'en' | 'pt-BR', string>
  end: Record<'en' | 'pt-BR', string>
  link: string
  id: string
}

type BlogPost = {
  title: Record<'en' | 'pt-BR', string>
  description: Record<'en' | 'pt-BR', string>
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

const PROJECT_ASSET_BASE_PATH =
  process.env.NODE_ENV === 'production' ? '/resume' : ''

export const PROJECTS: Project[] = [
  {
    name: 'TallCMS',
    description: {
      en: 'CMS and project built with Laravel / PHP.',
      'pt-BR': 'CMS e projeto com Laravel / PHP.',
    },
    link: 'https://github.com/andreriffen/tallcms/',
    video: '',
    id: 'tallcms',
    image: `${PROJECT_ASSET_BASE_PATH}/projects/tallcms.webp`,
    tech: 'Laravel / PHP',
  },
  {
    name: 'Lavação',
    description: {
      en: 'Desktop application built with Java and JavaFX.',
      'pt-BR': 'Aplicação desktop com Java e JavaFX.',
    },
    link: 'https://github.com/andreriffen/lavacao',
    video: '',
    id: 'lavacao',
    image: `${PROJECT_ASSET_BASE_PATH}/projects/lavacao.webp`,
    tech: 'Java / JavaFX',
  },
  {
    name: 'PHP OOP Projects',
    description: {
      en: 'A collection of PHP OOP examples and concepts.',
      'pt-BR': 'Coleção de exemplos e conceitos de POO em PHP.',
    },
    link: 'https://github.com/andreriffen/PHP-OOP-Projects',
    video: '',
    id: 'php-oop-projects',
    image: `${PROJECT_ASSET_BASE_PATH}/projects/php-oop-projects.webp`,
    tech: 'PHP / OOP',
  },
  {
    name: 'Java OOP Concepts',
    description: {
      en: 'Examples and exercises on OOP in Java.',
      'pt-BR': 'Exemplos e exercícios de POO em Java.',
    },
    link: 'https://github.com/andreriffen/java-oop-concepts',
    video: '',
    id: 'java-oop-concepts',
    image: `${PROJECT_ASSET_BASE_PATH}/projects/java-oop-concepts.webp`,
    tech: 'Java / OOP',
  },
  {
    name: 'JavaFX MVC',
    description: {
      en: 'Sales system built with Java and JavaFX (MVC pattern).',
      'pt-BR': 'Sistema de vendas com Java e JavaFX (padrão MVC).',
    },
    link: 'https://github.com/andreriffen/javafx-mvc',
    video: '',
    id: 'javafx-mvc',
    image: `${PROJECT_ASSET_BASE_PATH}/projects/javafx-mvc.webp`,
    tech: 'Java / JavaFX',
  },
  {
    name: 'Daisy Vue',
    description: {
      en: 'Front-end boilerplate with Vite, Vue, Tailwind, and DaisyUI.',
      'pt-BR': 'Boilerplate front-end com Vite, Vue, Tailwind e DaisyUI.',
    },
    link: 'https://andreriffen.github.io/daisy-vue/',
    video: '',
    id: 'daisy-vue',
    image: `${PROJECT_ASSET_BASE_PATH}/projects/daisy-vue.webp`,
    tech: 'Vue / Vite / Tailwind / DaisyUI',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Assessoria Facilita',
    title: {
      en: 'Web Programmer (CLT)',
      'pt-BR': 'Programador Web (CLT)',
    },
    start: { en: 'May 2025', 'pt-BR': 'Mai. 2025' },
    end: { en: 'Jan 2026', 'pt-BR': 'Jan. 2026' },
    link: 'https://github.com/andreriffen',
    id: 'work1',
  },
  {
    company: 'Assessoria Facilita',
    title: {
      en: 'Freelance / Contract Developer',
      'pt-BR': 'Desenvolvedor Freelancer / Contratado',
    },
    start: { en: 'Oct 2024', 'pt-BR': 'Out. 2024' },
    end: { en: 'Apr 2025', 'pt-BR': 'Abr. 2025' },
    link: 'https://github.com/andreriffen',
    id: 'work2',
  },
  {
    company: 'IFSC Federal Institute Santa Catarina',
    title: {
      en: 'Web Developer & IT Student',
      'pt-BR': 'Desenvolvedor Web e estudante de TI',
    },
    start: { en: 'Jan 2022', 'pt-BR': 'Jan. 2022' },
    end: { en: 'Dec 2025', 'pt-BR': 'Dez. 2025' },
    link: 'https://github.com/andreriffen',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: {
      en: 'Building an App Isn’t Hard — Thinking It Through Is',
      'pt-BR': 'Criar um app não é difícil — difícil é pensar nele',
    },
    description: {
      en: 'Modern tooling makes development faster than ever, but real software quality comes from clear thinking and domain understanding.',
      'pt-BR':
        'Ferramentas modernas aceleram o desenvolvimento, mas a qualidade do software depende de pensamento claro e compreensão do domínio.',
    },
    link: '/blog/thinking-before-coding',
    uid: 'blog-1',
  },
  {
    title: {
      en: 'Why PHP Still Powers a Large Part of the Web',
      'pt-BR': 'Por que o PHP ainda sustenta boa parte da web',
    },
    description: {
      en: 'A measured look at PHP usage, supported releases, and its place in web development.',
      'pt-BR':
        'Uma análise do uso do PHP, das versões com suporte e do seu lugar no desenvolvimento web.',
    },
    link: '/blog/why-php-still-dominates',
    uid: 'blog-2',
  },
  {
    title: {
      en: 'Front-End Isn’t “Just” Front-End',
      'pt-BR': 'Front-end não é “só” front-end',
    },
    description: {
      en: 'A short thought on how front-end work connects deeply with the whole system — far from being “just visuals.”',
      'pt-BR':
        'Uma reflexão sobre como o front-end se conecta profundamente ao sistema todo — muito além do visual.',
    },
    link: '/blog/frontend-isnt-just-frontend',
    uid: 'blog-3',
  },
  {
    title: {
      en: 'Design, AI, and the Work of Making Things Real',
      'pt-BR': 'Design, IA e o trabalho de tirar ideias do papel',
    },
    description: {
      en: 'AI can suggest interface ideas; context, implementation, and accessibility still need human judgment.',
      'pt-BR':
        'A IA pode sugerir interfaces; contexto, implementação e acessibilidade ainda exigem julgamento humano.',
    },
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/andreriffen',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/andre-gbf',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/andreriffen',
  },
]

export const EMAIL = 'andreriffen6@gmail.com'
