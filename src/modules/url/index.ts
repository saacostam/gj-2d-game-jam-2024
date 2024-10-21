export const UrlUtils = {
  getLostCount(): number {
    const num = new URL(window.location.href).searchParams.get('lost')
    return num ? (!Number.isNaN(Number(num)) ? Number(num) : 0) : 0
  },
}
