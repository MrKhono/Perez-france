export function formatEventDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function formatShortDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function formatDateFr(iso: string): string {
  return formatShortDate(iso)
}
