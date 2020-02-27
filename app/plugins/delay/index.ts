export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

export default (context, inject) => {
  inject('delay', delay)
}
