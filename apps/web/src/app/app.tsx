import React, { useEffect, useState } from 'react';
import { Message } from '@mintit/api-interfaces';
import{useAppDispatch, useAppSelector} from '@mintit/redux-provider'
import { incremented } from '@mintit/redux-provider';
import Login from '../feature/login/Login';
export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);
  const count = useAppSelector((state)=>state.counter.value)
  const dispatch = useAppDispatch()
  const onSuccess = ()=>{
    console.log('success')
  }
  const onError = ()=>{
    console.log('error')
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to web!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
        <p>
          <button type="button" 
          // onClick={() =>{console.log()} }
          onClick={() => dispatch(incremented())}
          >
            count is: {count}
          </button>
        </p>
<Login></Login>
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
