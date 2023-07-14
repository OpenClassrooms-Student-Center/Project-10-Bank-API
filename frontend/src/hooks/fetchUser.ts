import { useCallback, useEffect, useState } from 'react'
import { fetchUser } from '../user/userActions.ts'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getFirstName } from '../user/userSelectors.ts'
import { ThunkDispatch } from 'redux-thunk'
import { getToken } from '../auth/authSelectors.ts'
import { useNavigate } from 'react-router'
import { isLoading } from '../loading/loadingActions.ts'

export const useFetchUser = () => {
  const firstName = useSelector(getFirstName, shallowEqual)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const token = useSelector(getToken)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      navigate('/login')
    }
  }, [error])

  const fetchUserCallback = useCallback(async () => {
    try {
      await dispatch(fetchUser(token as string)).unwrap()
    } catch (error: any) {
      setError(error.message)
    }
  }, [token])

  useEffect(() => {
    if (token !== null && token !== undefined && firstName === '') {
      fetchUserCallback().then()
    }

    const delay = 1000

    const timeout = setTimeout(() => {
      dispatch(isLoading(false))
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [token, firstName, fetchUserCallback])
}
