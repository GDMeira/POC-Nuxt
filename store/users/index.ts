import { GetterTree, MutationTree } from 'vuex'

type User = { user: { token: String; username: String } }

const defaultState: User = localStorage.userNuxt
  ? JSON.parse(localStorage.userNuxt) as User
  : {
      user: {
        token: '' as String,
        username: '' as String,
      },
    }

export const state = () => defaultState

export type UserState = ReturnType<typeof state>

export const getters: GetterTree<UserState, UserState> = {
  user: (state) => state.user,
}

export const mutations: MutationTree<UserState> = {
  SET_USER(state, payload: { token: String; username: String }) {
    state.user = { ...payload }
    localStorage.userNuxt = JSON.stringify({ user: { ...payload } })
  },
}

export const actions = {}
