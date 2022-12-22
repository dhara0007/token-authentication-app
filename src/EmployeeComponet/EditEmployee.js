import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


function EditEmployee()
{
    const {id}=useParams();
    const [login, setlogin] = useState(false);
    const [token, settoken] = useState('');
    const[inputs,setInputs]=useState({});
        
    const [status, setstatus] = useState(undefined);
 
   
    useEffect(() => {

    
        if(localStorage.getItem('login')==null)
    {
      setlogin(false);
    }
    else{
          const{login, token} =JSON.parse( localStorage.getItem('login'));
          setlogin(login);
          settoken(token);
        const url="http://localhost:56456/api/user/GetUserById/"+id;
     
        axios.get(url,
          {
            headers: {
                Authorization: `Bearer ${token}`,
              },     
            })
            .then(function(response) {   
        // console.log(response.data)
          setInputs(response.data);
            }) 
            .catch(function(error) { 
            console.log(error);
            });
        }
    }
        ,[])


        const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          //console.log(name,value,inputs);
          setInputs(values => ({
              ...values, 
              [name]: value}))
        }
      
        
      const handleSubmit = (event) => {
          event.preventDefault();
     
  
          async function callAPI(){
              try{
            
              
              await axios.put('http://localhost:56456/api/user/EditDetail', 
              {
                ID:inputs.ID,
                  FirstName: inputs.FirstName,
                  LastName: inputs.LastName,
                  GenderID: inputs.GenderID,
          
               },{
                headers: {
                              Authorization: `Bearer ${token}`,
                          },   
               }
               //inputs
               )
                .then(function (response) {
                  console.log(response);
                  if(response.status==200)
                  {
                    console.log(response);
                      setstatus({ type: 'success' })
                  }
                  else{
                    console.log(response);
                      setstatus({ type: 'error', response });
                  }
                 
                })
            
              }
              catch(error)
              {
                  setstatus({ type: 'error', error });
                  console.log(error);
                  //console.log(error.message);
              }
          }
          callAPI()
      
      
        }
        const handleReset=(event)=>{
          setInputs('')
          event.preventDefault();
        }
 return(<>


   <p>Edit {id}</p>
{JSON.stringify(inputs)}

   <div className="row">
 <div className="col-md-4"></div>
     <div className="col-md-4 col-md-offset-1">
        <div className="well">
            <table className="table table-bordered">
                <thead>
                    <tr className="success">
                        <th >
                             User Edit
                        </th>
                       
                        
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>First Name</td>
                        <td><input type="text" name="FirstName" placeholder="FirstName" value={inputs.FirstName || ""}  onChange={handleChange}  /> </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" name="LastName" placeholder="LastName" value={inputs.LastName || ""}  onChange={handleChange}  /></td>
                    </tr>
                   
                  

                    <tr className="success">
                        <td> 
                            <input id="btnEdit" className="btn btn-success"
                                   type="button" value="Update"  onClick={handleSubmit}/>
                                   </td>
                                   <td>
                                 
                                     <input id="btnReset" className="btn btn-danger"
                                   type="button" value="Reset"  onClick={handleReset}/>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
            </div>
   
   

      </>
)}

export default EditEmployee;