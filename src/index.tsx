/** @jsxImportSource hono/jsx */
import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Layout } from './views/Layout'
import { Home } from './views/components/Home'

const app = new Hono()

// Middleware
app.use('*', logger())
app.use('/dist/*', serveStatic({ path: './dist' }))
app.use('*', jsxRenderer(({ children }) => {
  return <Layout>{children}</Layout>
}))

app.get('/', (c) => {
  return c.render(<Home />)
})

app.get('/api/time', (c) => {
  return c.text(`Current time: ${new Date().toLocaleTimeString()}`)
})

export default app