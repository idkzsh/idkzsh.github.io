import app from './index'

export default {
  port: process.env.PORT || 3000,
  fetch: (request: Request) => {
    return app.fetch(request)
  }
}
