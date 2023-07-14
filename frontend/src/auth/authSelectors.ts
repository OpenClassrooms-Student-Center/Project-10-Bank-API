import { RootState } from '../../store.ts'

export const getToken = (state: RootState) => state.auth.token
