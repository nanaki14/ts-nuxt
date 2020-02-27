import Vue from 'vue'
import * as Vuex from 'vuex'
import { api } from '~/plugins/api'
import { delay } from '~/plugins/delay'
import environments from '~/utils/environments'

declare module 'vue/types/vue' {
  interface Vue {
    $exStore: Vuex.ExStore
    $state: Vuex.ExStore['state']
    $getters: Vuex.ExStore['getters']
    $commit: Vuex.ExStore['commit']
    $dispatch: Vuex.ExStore['dispatch']
    $delay: typeof delay
    $api: typeof api
    $env: typeof environments
  }
}
