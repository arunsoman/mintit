import React, { useEffect, useState } from 'react';
import { Message } from '@mintit/api-interfaces';

import{useAppDispatch, useAppSelector} from '@mintit/redux-provider'
import { incremented } from '@mintit/redux-provider';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);
  const count = useAppSelector((state)=>state.counter.value)
  const dispatch = useAppDispatch()

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
          onClick={() => dispatch(incremented())}
          >
            count is: {count}
          </button>
        </p>
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
