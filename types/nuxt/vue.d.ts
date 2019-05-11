import Vue from 'vue'
import * as Vuex from 'vuex'

declare module 'vue/types/vue' {
  interface Vue {
    $exStore: Vuex.ExStore
  }
}
