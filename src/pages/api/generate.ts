// #vercel-disable-blocks
import { ProxyAgent, fetch } from 'undici'
// #vercel-end
import { generatePayload, parseOpenAIStream } from '@/utils/openAI'
import { verifySignature } from '@/utils/auth'
import type { APIRoute } from 'astro'

const apiKey = import.meta.env.OPENAI_API_KEY
const httpsProxy = import.meta.env.HTTPS_PROXY
const baseUrl = ((import.meta.env.OPENAI_API_BASE_URL) || 'https://api.openai.com').trim().replace(/\/$/, '')
const sitePassword = import.meta.env.SITE_PASSWORD || ''
const passList = sitePassword.split(',') || []

export const post: APIRoute = async(context) => {
  const body = await context.request.json()
  const { sign, time, messages, pass } = body
  if (!messages) {
    return new Response(JSON.stringify({
      error: {
        message: 'No input text.',
      },
    }), { status: 400 })
  }
  if (sitePassword && !(sitePassword === pass || passList.includes(pass))) {
    return new Response(JSON.stringify({
      error: {
        message: 'Invalid password.',
      },
    }), { status: 401 })
  }
  if (import.meta.env.PROD && !await verifySignature({ t: time, m: messages?.[messages.length - 1]?.content || '' }, sign)) {
    return new Response(JSON.stringify({
      error: {
        message: 'Invalid signature.',
      },
    }), { status: 401 })
  }
  const initOptions = generatePayload(apiKey, messages)
  // #vercel-disable-blocks
  if (httpsProxy)
    initOptions.dispatcher = new ProxyAgent(httpsProxy)
  // #vercel-end

  const realIP = context.request.headers.get('CF-Connecting-IP') || context.clientAddress
  const resp1 = await fetch(`${import.meta.env.API_URL}/plugin/freesite/accesslog?ip=${realIP}&url=free2gpt.xyz`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  const res = await resp1.text()
  const resJson1 = JSON.parse(res)
  if (resJson1.code !== 200)
    return new Response(resJson1.message)

  fetch(`${import.meta.env.API_URL}/plugin/freesite/saveMessage`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      ip: realIP,
      message: messages,
      site: 'free2gpt',
    }),
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const response = await fetch(`${baseUrl}/v1/chat/completions`, initOptions).catch((err: Error) => {
    console.error(err)
    return new Response(JSON.stringify({
      error: {
        code: err.name,
        message: err.message,
      },
    }), { status: 500 })
  }) as Response

  return parseOpenAIStream(response) as Response
}
