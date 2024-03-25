import { normalize } from "node:path"

export function normalizePath(path) {
	return normalize(import.meta.env.BASE_URL + path)
}
