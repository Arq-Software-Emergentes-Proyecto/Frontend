import { publicShareOrigin } from '@/shared/infrastructure/envConfig.js'
/**
 * Absolute URL for the public guest-invite page (same origin + SPA path).
 * @param {string} token
 */
export function buildGuestInviteUrl(token) {
  const t = String(token ?? '').trim()
  if (!t) return ''
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '')
  const tail = `/invite/${encodeURIComponent(t)}`
  const path = base ? `${base}${tail}` : tail
  const origin = publicShareOrigin()
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}
