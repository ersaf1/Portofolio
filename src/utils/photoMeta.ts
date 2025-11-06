export type PhotoMeta = {
  title?: string
  description?: string
}

const KEY = 'photoMeta'

function loadAll(): Record<string, PhotoMeta> {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function saveAll(map: Record<string, PhotoMeta>) {
  try {
    localStorage.setItem(KEY, JSON.stringify(map))
  } catch {}
}

export function getMeta(src: string): PhotoMeta | undefined {
  const map = loadAll()
  return map[src]
}

export function setMeta(src: string, meta: PhotoMeta) {
  const map = loadAll()
  map[src] = { ...map[src], ...meta }
  saveAll(map)
}

export function clearAllMeta() {
  try { localStorage.removeItem(KEY) } catch {}
}
