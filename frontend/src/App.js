import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import { colorContext } from './context/ColorModeContext';
import { useContext } from 'react';

function App() {

  const {dark} = useContext(colorContext);
 
  
  return (
    <div className='w-screen h-screen  box-border block text-white font-[inter,sans-serif] leading-relaxed bg-gradient-135 dark:from-[#a38fb3] dark:to-[#dcd0f5] from-[#1e0533] to-[#1e0533] overflow-x-hidden' >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
