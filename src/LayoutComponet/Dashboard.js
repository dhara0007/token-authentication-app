import NavbarLogin from './NavbarLogin';
import React,{useEffect, useState} from'react'
import { useNavigate } from "react-router-dom";

function Dashboard()
{
    const [login, setlogin] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    //below code works
    if(localStorage.getItem('login')==null)
    {
      setlogin(false);
    }
    else{
          const{login} =JSON.parse( localStorage.getItem('login'));
          setlogin(login);
          // console.log(login);
          // console.log(token);
    }
        });
  return(
    <>
  {!login?

navigate("/Home")
  :
  <h1>Sucessfull login</h1>
  }
    </>
  )
}

export default Dashboard;