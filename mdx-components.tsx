import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption?: string
    }) => {
      return (
        <figure>
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <img src={src} alt={alt} className="w-full h-full object-cover rounded-t-xl" />
          </div>
          {caption ? <figcaption className="text-center mt-2">{caption}</figcaption> : null}
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
