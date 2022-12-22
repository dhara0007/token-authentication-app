import { Routes, Route, Link } from 'react-router-dom';
import Register from '../RegisterComponet/Register';
import Login from '../LoginComponent/Login';
import Home from '../LayoutComponet/Home';
import {BrowserRouter}  from 'react-router-dom';
import NavbarLogin from '../LayoutComponet/NavbarLogin';
import Dashboard from '../LayoutComponet/Dashboard';
import Employee from '../EmployeeComponet/Employee';

import App from '../App';
import EditEmployee from '../EmployeeComponet/EditEmployee';
function Routing()
{
    return(<>

<Routes>
{/* 
<Route path=''  element={<Home/>}/>

<Route path='**' element={<Home/>} /> */}
      <Route path='' exact element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Employee' element={<Employee/>}></Route>
      <Route path='/EditEmployee/:id' element={<EditEmployee/>}></Route>

    </Routes>
 
    </>)
}

export default Routing;