export const PRODUCTION_API_BASE_URL = ""
export const DEVELOPMENT_API_BASE_URL = "http://localhost:3001"
export const API_BASE_URL = DEVELOPMENT_API_BASE_URL
// change API base url to ternary including -- process.env.NODE_ENV ? PRODUCTION_API_BASE_URL : 