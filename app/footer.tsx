'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorCogIcon, MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useLocale, type LocalePreference } from '@/lib/locale'

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { messages } = useLocale()
  const themes = [
    {
      label: messages.theme.light,
      id: 'light',
      icon: <SunIcon className="h-4 w-4" />,
    },
    {
      label: messages.theme.dark,
      id: 'dark',
      icon: <MoonIcon className="h-4 w-4" />,
    },
    {
      label: messages.theme.system,
      id: 'system',
      icon: <MonitorIcon className="h-4 w-4" />,
    },
  ]

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {themes.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`${messages.theme.switchTo} ${theme.label} ${messages.theme.theme}`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

function LanguageSwitch() {
  const { locale, preference, setPreference, messages } = useLocale()
  const options: {
    id: LocalePreference
    label: string
    icon: React.ReactNode
  }[] = [
    {
      id: 'auto',
      label: messages.automatic,
      icon: <MonitorCogIcon className="h-4 w-4" aria-hidden="true" />,
    },
    {
      id: 'en',
      label: locale === 'en' ? 'English' : 'Inglês',
      icon: (
        <span className="text-base leading-none grayscale" aria-hidden="true">
          🇬🇧
        </span>
      ),
    },
    {
      id: 'pt-BR',
      label: locale === 'en' ? 'Brazilian Portuguese' : 'Português brasileiro',
      icon: (
        <span className="text-base leading-none grayscale" aria-hidden="true">
          🇧🇷
        </span>
      ),
    },
  ]

  return (
    <div
      className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800"
      role="group"
      aria-label={messages.language}
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-label={`${messages.language}: ${option.label}`}
          title={option.label}
          aria-pressed={preference === option.id}
          onClick={() => setPreference(option.id)}
          className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors focus-visible:outline-2 ${
            preference === option.id
              ? 'bg-white text-zinc-950 shadow-sm dark:bg-zinc-700 dark:text-white'
              : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
          }`}
        >
          {option.icon}
        </button>
      ))}
    </div>
  )
}

export function Footer() {
  const { messages } = useLocale()

  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <TextLoop className="text-xs text-zinc-500">
            <span>{messages.footer[0]}</span>
            <span>{messages.footer[1]}</span>
            <span>{messages.footer[2]}</span>
            <span>
              {messages.footer[3]}{' '}
              <a
                href="https://github.com/ibelick/nim"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ibelick
              </a>
              .
            </span>
          </TextLoop>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
