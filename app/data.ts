type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  tech?: string
  og?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'TallCMS',
    description: 'CMS e projeto com Laravel / PHP.',
    link: 'https://github.com/andreriffen/tallcms/',
    video: '',
    id: 'tallcms',
    tech: 'Laravel / PHP',
    og: 'https://og-image.vercel.app/TallCMS.png?theme=dark&md=1&fontSize=80px',
  },
  {
    name: 'Lavação',
    description: 'Aplicação desktop com Java e JavaFX.',
    link: 'https://github.com/andreriffen/lavacao',
    video: '',
    id: 'lavacao',
    tech: 'Java / JavaFX',
    og: 'https://og-image.vercel.app/Lavacao.png?theme=dark&md=1&fontSize=80px',
  },
  {
    name: 'PHP OOP Projects',
    description: 'Coleção de exemplos e conceitos OOP em PHP.',
    link: 'https://github.com/andreriffen/PHP-OOP-Projects',
    video: '',
    id: 'php-oop-projects',
    tech: 'PHP / OOP',
    og: 'https://og-image.vercel.app/PHP%20OOP%20Projects.png?theme=dark&md=1&fontSize=80px',
  },
  {
    name: 'Java OOP Concepts',
    description: 'Exemplos e exercícios de OOP em Java.',
    link: 'https://github.com/andreriffen/java-oop-concepts',
    video: '',
    id: 'java-oop-concepts',
    tech: 'Java / OOP',
    og: 'https://og-image.vercel.app/Java%20OOP%20Concepts.png?theme=dark&md=1&fontSize=80px',
  },
  {
    name: 'JavaFX MVC',
    description: 'Sistema de vendas com Java e JavaFX (padrão MVC).',
    link: 'https://github.com/andreriffen/javafx-mvc',
    video: '',
    id: 'javafx-mvc',
    tech: 'Java / JavaFX',
    og: 'https://og-image.vercel.app/JavaFX%20MVC.png?theme=dark&md=1&fontSize=80px',
  },
  {
    name: 'Daisy Vue',
    description: 'Boilerplate front-end com Vite, Vue, Tailwind e DaisyUI.',
    link: 'https://andreriffen.github.io/daisy-vue/',
    video: '',
    id: 'daisy-vue',
    tech: 'Vue / Vite / Tailwind / DaisyUI',
    og: 'https://og-image.vercel.app/Daisy%20Vue.png?theme=dark&md=1&fontSize=80px',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Assessoria Facilita',
    title: 'Web Programmer (CLT)',
    start: 'May 2025',
    end: 'Present',
    link: 'https://github.com/andreriffen',
    id: 'work1',
  },
  {
    company: 'Assessoria Facilita',
    title: 'Freelance / Contracted Developer',
    start: 'Oct 2024',
    end: 'Apr 2025',
    link: 'https://github.com/andreriffen',
    id: 'work2',
  },
  {
    company: 'IFSC Federal Institute Santa Catarina',
    title: 'Web Developer & IT Student',
    start: 'Jan 2022',
    end: 'Set 2024',
    link: 'https://github.com/andreriffen',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [

  {
    title: 'Building an App Isn’t Hard — Thinking It Through Is',
    description:
      'Modern tooling makes development faster than ever, but real software quality comes from clear thinking and domain understanding.',
    link: '/blog/thinking-before-coding',
    uid: 'blog-1',
  },
  {
    title: 'Why PHP Still Dominates the Internet — and Is More Relevant Than Ever',
    description:
      'PHP powers most of the modern web — not by accident. Its stability, ecosystem, and evolution make it more relevant today than ever.',
    link: '/blog/why-php-still-dominates',
    uid: 'blog-2',
  },
  {
    title: 'Front-End Isn’t “Just” Front-End',
    description:
      'A short thought on how front-end work connects deeply with the whole system — far from being “just visuals.”',
    link: '/blog/frontend-isnt-just-frontend',
    uid: 'blog-3',
  },
    {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design.',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-4',
  },
];


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
