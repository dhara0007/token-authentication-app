import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect, useState} from'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";



function Register() {
    const[inputs,setInputs]=useState({});
    
    const [status, setstatus] = useState(undefined);
 const [roleData, setroleData] = useState([]);
   
 const navigate = useNavigate();
//  const roleData = [{id:1, role:'Badminton'}, 
//  {id:2, role:'Cricket'}, 
//  {id:3, role:'Football'}];

    useEffect(() => {
        //setrole(roleData);
     
        async function callAPI(){
            try{                    
            await axios.get('http://localhost:56456/api/user/GetRoles',                    
             )
              .then(function (response) {
                if(response.status=200)
                {
                setroleData(response.data);
               // console.log(response);
                }
                else{
                    setroleData([]);
                   // setstatus({ type: 'error', response });
                  //  console.log("Else");
                }
              })
          
            }
            catch(error)
            {
               // setstatus({ type: 'error', error });
                //console.log(error);
                //console.log(error.message);
            }
        }
        callAPI()
       
      },[]);
const handleClose=()=>{
  navigate("/Register", { replace: true });
}
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
        //console.log(inputs);

        async function callAPI(){
            try{
            //const apiResult= console.log(inputs);
            
            await axios.post('http://localhost:56456/api/user/SubmitDetails', 
            {
                UserName: inputs.txtUserName,
                UserPassword: inputs.txtUserPassword,
                UserRoleID: inputs.drpUserRoles,
                UserEmail:inputs.txtUserEmailID
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

    
  return (
    <>
       <div className="row">
 <div className="col-md-4"></div>
     <div className="col-md-4 col-md-offset-1">
        <div className="well">
            <table className="table table-bordered">
                <thead>
                    <tr className="success">
                        <th >
                            New User Registration
                        </th>
                       
                        
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>UserName</td>
                        <td><input type="text" name="txtUserName" placeholder="UserName" value={inputs.txtUserName || ""}  onChange={handleChange}  /> </td>
                    </tr>
                    <tr>
                        <td>UserPassword</td>
                        <td><input type="password" name="txtUserPassword" placeholder="UserPassword" value={inputs.txtUserPassword || ""}  onChange={handleChange}  /></td>
                    </tr>
                    <tr>
                        <td>UserRoles</td>
                        {/* <td><input type="text" name="txtUserRoles" placeholder="UserRoles"  value={inputs.txtUserRoles || ""}  onChange={handleChange} /></td> */}
                    <td> 
                        <select value={inputs.drpUserRoles||""} name="drpUserRoles" onChange={handleChange}>    
                        {roleData.map(key=>
                              <option value={key.ID}>{key.Role1}</option>
                            )}   
  {/* <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option> */}
</select>
</td>
                    </tr>
                    <tr>
                        <td>UserEmailID</td>
                        <td><input type="text" name="txtUserEmailID" placeholder="UserEmailID"  value={inputs.txtUserEmailID || ""}  onChange={handleChange} /></td>
                    </tr>

                    <tr className="success">
                        <td> 
                            <input id="btnRegister" className="btn btn-success"
                                   type="button" value="Register"  onClick={handleSubmit}/>
                                   </td>
                                   <td>
                                 
                                     <input id="btnReset" className="btn btn-danger"
                                   type="button" value="Reset"  onClick={handleReset}/>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
           
            
          
             {status?.type === 'success' &&
        
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header >
          
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>Registration Successful</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={handleReset}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
              }
      {status?.type === 'error' && (
        <Modal.Dialog>
        <Modal.Header >
        
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{status == undefined ? 'Registration UnSuccessful': status}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
      )}
           
          
        
           
        </div>
    </div>
    <div className="col-md-4"></div>
    </div>
    </>
    
  );
}

export default Register;