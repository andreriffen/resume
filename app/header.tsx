'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { useLocale } from '@/lib/locale'

export function Header() {
  const { messages } = useLocale()

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-2xl font-semibold text-black md:text-3xl dark:text-white"
        >
          Andre GB Farias
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {messages.subtitle}
        </TextEffect>
      </div>
    </header>
  )
}
