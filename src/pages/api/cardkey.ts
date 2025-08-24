import type { APIRoute } from 'astro'

export const get: APIRoute = async(context) => {
  const response = await fetch(`${import.meta.env.API_URL}/plugin/freesite/gpt4cardkey?ip=${context.clientAddress}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
  const text = await response.text()
  return new Response(text)
}
