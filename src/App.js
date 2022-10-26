import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthProvider/AuthProvider';

function App() {
  const {theme} = useContext(AuthContext)
  
  return (
    <div id={theme}>
      <RouterProvider router ={routes}></RouterProvider>
      <ToastContainer
          position="top-center"
          autoClose={2000} />
    </div>
  );
}

export default App;
