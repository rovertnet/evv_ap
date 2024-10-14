
import { createContext } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom'
import Login from '../components/authentic/SignUp';

const MyContext = createContext();

export default function Inscris() {

  const values = {};

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Routes path="/login" exact={true} element={<Login />} />
      </MyContext.Provider>
    </BrowserRouter>
  );
}
