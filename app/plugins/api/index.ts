import * as sample from './lib/sample'

export const api = { sample }

export default (context, inject) => {
  inject('api', api)
}
