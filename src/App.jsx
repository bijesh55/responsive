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
   
  <BrowserRouter>
   <Routes>
    
     <Route path='/dashboard' element={<DashboardLayout/>}>

     <Route path='' element={<Dashboard/>}/>
      <Route path='store' element={<Store/>}/>
      <Route path='supervisor' element={<Supervisor/>}/>


     </Route>
   </Routes>
  </BrowserRouter>

    </main>
    
  
  );
}

export default App;
