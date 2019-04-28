export type State = {
  counter: number
}

export type Context = {
  commit: (name: string, payload: object) => void
  dispatch: (name: string, payload?: any, options?: any) => void
}

export type Mutations = {
  [key: string]: (state: State, payload?: any) => void
}

export type Actions = {
  [key: string]: (this: any, context: Context, payload?: any) => void
}

export const state: () => State = () => ({
  counter: 0
})

export const mutations: Mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions: Actions = {
  increment({ commit }) {
    commit('increment', {})
  }
}
