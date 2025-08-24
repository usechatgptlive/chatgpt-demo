import type { APIRoute } from 'astro'

export const get: APIRoute = async(context) => {
  const realIP = context.request.headers.get('CF-Connecting-IP') || context.clientAddress
  const response = await fetch(`${import.meta.env.API_URL}/plugin/freesite/getRemain?ip=${realIP}&url=claude.free2gpt.xyz`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
  const text = await response.text()
  return new Response(text)
}
