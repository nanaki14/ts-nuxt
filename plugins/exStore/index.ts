import * as Vuex from 'vuex'

class ExStore {
  store: Vuex.ExStore
  constructor(store) {
    this.store = store
  }

  getStore() {
    return this.store
  }

  state() {
    return this.store.state
  }

  getters() {
    return this.store.getters
  }

  commit() {
    return this.store.commit
  }

  dispatch() {
    return this.store.dispatch
  }
}

export default (context, inject) => {
  // eslint-disable-next-line
  console.log(context)
  const store = new ExStore(context.store)
  // eslint-disable-next-line
  console.log(store.getStore())
  inject('exStore', store.getStore())
  inject('state', store.state())
  inject('getters', store.getters())
  inject('commit', store.commit())
  inject('dispatch', store.dispatch())
}
