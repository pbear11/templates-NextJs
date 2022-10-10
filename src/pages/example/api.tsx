import type { NextPage } from 'next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNameAsync, setNameLenght } from '../../store/slices/userSlice';
import { nameSelector, nameLength } from '../../store/slices/userSlice';

const Api: NextPage = () => {
  const name = useSelector(nameSelector);
  const length = useSelector(nameLength);
  const [yourName , setYourname] = useState('');
  const dispatch = useDispatch();

  function handleChange(e: any) {
    const value = e.target.value;
    setYourname(value);
  }


  return (
    <div className="w-screen flex flex-col justify-center items-center mt-4">
      This page is calling (http://localhost:3000/api/hello) to get Name information.
      <span className="text-xl m-2">Do you wanna know my name ? then click below button</span>
      <button onClick={() => dispatch(setNameAsync())} className="w-1/2 h-10 bg-green">Name?</button>
      { name && <span className="text-xl mt-2"> My name is { name }</span> }
      This page is calling (http://localhost:3000/api/hello) to get Name information.
      <div className="text-xl mt-8 mb-2">
        <div>How long is your name ? please input your name and click check button</div>
      </div>
      <input className="mb-4" onChange={handleChange} type="text"/>
      <button onClick={() => dispatch(setNameLenght(yourName))} className="w-1/2 h-10 bg-green">Check</button>
      { length && <span className="text-xl mt-2">Your name length is { length }</span> }
    </div>
  )
}

export default Api