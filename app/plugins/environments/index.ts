import environments from '~/utils/environments'

export default (context, inject) => {
  inject('env', environments)
}
