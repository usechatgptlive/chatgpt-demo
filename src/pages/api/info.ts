import type { APIRoute } from 'astro'

export const get: APIRoute = async() => {
  const response = await fetch(`${import.meta.env.API_URL}/plugin/freesite/info`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
  const text = await response.text()
  return new Response(text)
}
