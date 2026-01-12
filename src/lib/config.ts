const isProd = process.env.NODE_ENV === 'production'
const repoName = 'portefolio' // Doit correspondre à next.config.js

export const basePath = isProd ? `/${repoName}` : ''

export function getAssetPath(path: string): string {
  return `${basePath}${path}`
}
