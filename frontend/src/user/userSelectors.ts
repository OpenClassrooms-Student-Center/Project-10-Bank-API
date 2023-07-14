import { RootState } from '../../store.ts'

export const getFirstName = (state: RootState) => state.user.firstName
export const getLastName = (state: RootState) => state.user.lastName
