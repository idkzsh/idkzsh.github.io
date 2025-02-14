import type { FC } from 'hono/jsx'

export const Layout: FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bun + Hono + HTMX</title>
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
        <link href="/styles.css" rel="stylesheet" />
      </head>
      <body class="flex flex-col items-center justify-center min-h-[100dvh] bg-black text-white plex-thin">
        {children}
      </body>
    </html>
  )
}
