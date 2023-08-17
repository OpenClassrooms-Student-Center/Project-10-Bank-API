import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './home.css'
import { checkToken } from '../../utils/slices/authSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // verify token at the start
    dispatch(checkToken())
  }, [dispatch]);


  return (
    <div className="App"></div>
  );
}

export default App;
