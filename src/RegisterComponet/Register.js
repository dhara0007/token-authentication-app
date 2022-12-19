import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect, useState} from'react'
import axios from 'axios';

function Register() {
    const[inputs,setInputs]=useState({});
    const [error, seterror] = useState('');
    const [sucess, setsucess] = useState('');

    useEffect(() => {
  //below code works
        // const{login, token} =JSON.parse(localStorage.getItem('login'));
        // console.log(login);
        // console.log(token);
       
      });
   // useEffect()
   // {
        //const test=localStorage.getItem('token');
        //settokens(localStorage.getItem('token'))
   // }
    
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
            const apiResult= console.log(inputs);
            
            // await axios.post('/user', {
            //     email: inputs.txtEmail,
            //     password: inputs.txtPassword,
            //     confirmPassword: inputs.txtConfirmPassword
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //   })
          
            }
            catch(error)
            {
                seterror(error.message);
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
 
     <div className="col-md-10 col-md-offset-1">
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
                        <td>Email</td>
                        <td><input type="text" name="txtEmail" placeholder="Email" value={inputs.txtEmail || ""}  onChange={handleChange}  /> </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="txtPassword" placeholder="Password" value={inputs.txtPassword || ""}  onChange={handleChange}  /></td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td><input type="password" name="txtConfirmPassword" placeholder="Confirm Password"  value={inputs.txtConfirmPassword || ""}  onChange={handleChange} /></td>
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
           
            {/* <div className="modal fade" tabindex="-1" id="successModal"
                 data-keyboard="false" data-backdrop="static">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                &times;
                            </button>
                            <h4 className="modal-title">Success</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <h2 className="modal-title">Registration Successful!</h2>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success"
                                    data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
            <div id="divError" className="alert alert-danger collapse">
            <a id="linkClose" href="#" className="close">&times;</a>
                <div id="divErrorText"></div>
            </div> */}
        </div>
    </div>
  
    </>
    
  );
}

export default Register;