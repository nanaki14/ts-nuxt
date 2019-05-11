import * as Vuex from 'vuex'

class ExStore {
  store: Vuex.ExStore
  constructor(store) {
    this.store = store
  }

  getStore() {
    return this.store
  }
}

export default (context, inject) => {
  // eslint-disable-next-line
  console.log(context)
  const store = new ExStore(context.store)
  // eslint-disable-next-line
  console.log(store.getStore())
  inject('exStore', store.getStore())
}
