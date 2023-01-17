import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';

function App() {
  
  const darkMode=localStorage.getItem('darkMode');

  return (
    <div className={darkMode==='true'?'darkMode':'lightMode'}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
