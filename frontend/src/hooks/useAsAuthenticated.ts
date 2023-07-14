import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { useEffect } from 'react'
import { getToken } from '../auth/authSelectors.ts'
import { checkToken } from '../auth/authActions.ts'
import { useFetchUser } from './fetchUser.ts'

export default function useAsAuthenticated() {
  const navigate = useNavigate()
  const token = useSelector(getToken)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  useEffect(() => {
    dispatch(checkToken())
  }, [])

  useEffect(() => {
    if (token === null) {
      navigate('/login')
    }
  }, [token])

  useFetchUser()
}
