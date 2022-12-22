import axios from 'axios';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';


function Employee()
{
    const [login, setlogin] = useState(false);
    const [token, settoken] = useState('');
    const[data, setdata]=useState([{}]);
    useEffect(() => {
   
    //below code works
    if(localStorage.getItem('login')==null)
    {
      setlogin(false);
    }
    else{
          const{login, token} =JSON.parse( localStorage.getItem('login'));
          setlogin(login);
          settoken(token);
          //console.log(login);
          // console.log(token);
    
    const url="http://localhost:56456/api/user/GetDetails";
        
        axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`,
              },     
            })
            .then(function(response) {   
              setdata(response.data); 
         // console.log(response.data);   
            })
            
            .catch(function(error) {
            
            console.log(error);
            
            });
        }
      },[])
     

      const handleDelete=(id)=>{
        const url="http://localhost:56456/api/user/DeleteDetail/"+id;
        axios.delete(url,{
            headers: {
                Authorization: `Bearer ${token}`,
              },     
            })
            .then(function(response) {      
         console.log(response.data);   
            })
            .catch(function(error) {  
            console.log(error);
            });      
      }

    return(
        <>
        {data?
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item,index)=>
        <tr>
          <td>{index+1}</td>
          <td>{item.FirstName}</td>
          <td>{item.LastName}</td>
          <td>{item.GenderID == 1?'Male':'Female'}</td>
          <td>
            <Link to={`/EditEmployee/${item.ID}`}>Edit</Link>
          &nbsp; 
          <Link  onClick={()=>handleDelete(item.ID)}>Delete</Link></td>
        </tr>
)}
        </tbody>
        </Table>
:
<p>Loading...</p>
        }
        </>
    )

    }
 
export default Employee;