import React from 'react';
import Sidebar from './Component/partials/sidebar';
import Dashboard from './pages/Dashboard';
import Store from './pages/store';
import Supervisor from './pages/supervisor';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
function App() {
  return (
    <main className='flex'>

{/* <Sidebar/> */}
   <MantineProvider theme={{
          colors: {
            "ocean-blue": [
              "#7AD1DD",
              "#5FCCDB",
              "#44CADC",
              "#2AC9DE",
              "#1AC2D9",
              "#11B7CD",
              "#09ADC3",
              "#0E99AC",
              "#128797",
              "#147885",
            ],
            "bright-pink": [
              "#F0BBDD",
              "#ED9BCF",
              "#EC7CC3",
              "#ED5DB8",
              "#F13EAF",
              "#F71FA7",
              "#FF00A1",
              "#E00890",
              "#C50E82",
              "#AD1374",
            ],
            "light-gray": ["#cbd5e1"],
          },
        }}>

  <BrowserRouter>
   <Routes>
    
     <Route path='/dashboard' element={<DashboardLayout/>}>

     <Route path='' element={<Dashboard/>}/>
      <Route path='store' element={<Store/>}/>
      <Route path='supervisor' element={<Supervisor/>}/>


     </Route>
   </Routes>
  </BrowserRouter>
  </MantineProvider>

    </main>
    
  
  );
}

export default App;
