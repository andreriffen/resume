'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Locale = 'en' | 'pt-BR'
export type LocalePreference = Locale | 'auto'

const STORAGE_KEY = 'resume-locale'

export function detectLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const baseLanguage = language.toLowerCase().split('-')[0]

    if (
      baseLanguage === 'pt' ||
      baseLanguage === 'es' ||
      baseLanguage === 'ca'
    ) {
      return 'pt-BR'
    }

    if (baseLanguage === 'en') {
      return 'en'
    }
  }

  return 'en'
}

const messages = {
  en: {
    subtitle: 'Web Developer',
    intro:
      'Trying to solve real problems — the everyday kind. Rocket science and quantum magic can stay with the experts.',
    selectedProjects: 'Selected Projects',
    workExperience: 'Work Experience',
    blog: 'Blog',
    connect: 'Connect',
    contact: 'Feel free to contact me at',
    openProject: 'Open project',
    projectPreview: 'Project preview',
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
      switchTo: 'Switch to',
      theme: 'theme',
    },
    language: 'Language',
    automatic: 'Auto',
    footer: [
      "© 2026 Andre GB Farias' Resume.",
      'With great powers, comes great responsibility.',
      'Built with Motion Primitives ™',
      'Original template made by:',
    ],
  },
  'pt-BR': {
    subtitle: 'Desenvolvedor Web',
    intro:
      'Tentando resolver problemas reais — os do dia a dia. Ciência de foguetes e magia quântica ficam para os especialistas.',
    selectedProjects: 'Projetos em destaque',
    workExperience: 'Experiência profissional',
    blog: 'Blog',
    connect: 'Contato',
    contact: 'Entre em contato pelo e-mail',
    openProject: 'Abrir projeto',
    projectPreview: 'Prévia do projeto',
    theme: {
      light: 'Claro',
      dark: 'Escuro',
      system: 'Sistema',
      switchTo: 'Mudar para o tema',
      theme: '',
    },
    language: 'Idioma',
    automatic: 'Automático',
    footer: [
      '© 2026 Currículo de Andre GB Farias.',
      'Com grandes poderes, vêm grandes responsabilidades.',
      'Feito com Motion Primitives ™',
      'Template original criado por:',
    ],
  },
} as const

type LocaleContextValue = {
  locale: Locale
  preference: LocalePreference
  messages: (typeof messages)[Locale]
  setPreference: (preference: LocalePreference) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function getBrowserLocale(): Locale {
  const languages =
    navigator.languages.length > 0 ? navigator.languages : [navigator.language]

  return detectLocale(languages)
}

function getSavedPreference(): LocalePreference {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'en' || saved === 'pt-BR' ? saved : 'auto'
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const [preference, setPreferenceState] = useState<LocalePreference>('auto')

  useEffect(() => {
    const savedPreference = getSavedPreference()
    setPreferenceState(savedPreference)
    setLocale(savedPreference === 'auto' ? getBrowserLocale() : savedPreference)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function setPreference(nextPreference: LocalePreference) {
    if (nextPreference === 'auto') {
      localStorage.removeItem(STORAGE_KEY)
      setLocale(getBrowserLocale())
    } else {
      localStorage.setItem(STORAGE_KEY, nextPreference)
      setLocale(nextPreference)
    }

    setPreferenceState(nextPreference)
  }

  return (
    <LocaleContext.Provider
      value={{ locale, preference, messages: messages[locale], setPreference }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }

  return context
}
