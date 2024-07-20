import { createStore } from 'zustand/vanilla'

type AuthUser = {
    id: any
    name: string
    email: string
    role: 'admin'|'player'
}

export type AppState = {
    loading: boolean
    user?: AuthUser
}

export type appReducers = {
    isLoading: (value: boolean) => void
    setIsConnected: (user: AuthUser) => void
}

export type AppStore = AppState & appReducers

export const defaultInitState: AppState = {
    loading: false,
    user: undefined,
}

export const createAppStore = (
    initState: AppState = defaultInitState,
) => {
    return createStore<AppStore>((set) => ({
        ...initState,
        isLoading: (payload) => set(() => ({loading: payload})),
        setIsConnected: (payload: any) => set(() => ({user: payload}))
    }))
}