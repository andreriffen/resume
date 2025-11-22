import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Meu Projeto'
    const theme = (searchParams.get('theme') || 'dark').toLowerCase()

    const background = theme === 'light' ? '#f6f8fa' : '#071019'
    const foreground = theme === 'light' ? '#0b1020' : '#ffffff'

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: 'Inter, -apple-system, system-ui, Roboto, "Segoe UI", Helvetica, Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
            background: background,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 48,
            boxSizing: 'border-box',
          }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            <div style={{
              color: foreground,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: '85%'
            }}>{title}</div>

            <div style={{
              marginTop: 18,
              display: 'flex',
              gap: 12,
              alignItems: 'center'
            }}>
              <div style={{
                color: theme === 'light' ? '#374151' : '#9CA3AF',
                fontSize: 20
              }}>andreriffen</div>
              <div style={{
                width: 4,
                height: 4,
                borderRadius: 9999,
                background: theme === 'light' ? '#9CA3AF' : '#374151'
              }} />
              <div style={{
                color: theme === 'light' ? '#374151' : '#9CA3AF',
                fontSize: 20
              }}>TypeScript</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    return new Response('Failed to generate the image', { status: 500 })
  }
}
