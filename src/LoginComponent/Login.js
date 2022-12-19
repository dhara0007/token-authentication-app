import { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login()
{
    const[inputs,setInputs]=useState({});
    const [error, seterror] = useState('');
    const [sucess, setsucess] = useState('');
    const [login, setLogin] = useState(false);
    const[token,setToken]=useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name,value,inputs);
        setInputs(values => ({
            ...values, 
            [name]: value}))
      }
    const handleSubmit = (event) => {
       // event.preventDefault();

        var details = {      
            'grant_type': 'password',
            'username': inputs.txtUserName,
            'password': inputs.txtPassword
         
        };
var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

        Axios({
   method: 'post',
   url: 'http://localhost:56456/token',
       data: (formBody),   

   headers: { 
     "Content-Type": "application/x-www-form-urlencoded",
   }
 }).then((response) =>{
    if(response.status=200)
    {
       
        localStorage.setItem('login', JSON.stringify({
            login:true,
            token:response.data.access_token
        }));
           navigate("/Dashboard");
    }
          
       }).catch((error) =>{
           console.log(error);
       })
    }
         
        
        
//Below code work fine:
        // const url="http://localhost:56456/api/test/resource1";
        // const accessToken="0uMMhigT4oTzQ4owWx-G4ZKmGNI7HyF9SY3plLeHaIUeww_Ge4WJ6o-opR4tK-Bs_tzNCA5RJ9kqk5aPaU1nLizqpevwmSwMYlIl-3vM8rZu5-Av81ORJ6o9XiN8gY7lUNsxYa1vrj89gtHB0laq5-xX7nZ7PVapjivbkV-uCzYN9451eH2Jb0XxFqWBN1-dNiSsdaQ5tR8Iw7MJERz2Ke9bz1BJ54gEcy_PeF5h5vzq63ovKyNbHy9QDMBPF-hxPvOa6LQxAhwz1mlkDxkwXJ4E3lShuQ0L2way3RLL6pJZdXL0JePQpSjTd17y0U7U"
       
        // axios.get(url,{
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`,
        //       },     
        //     })
        //     .then(function(response) {    
        //     console.log(response.data);   
        //     })
            
        //     .catch(function(error) {
            
        //     console.log(error);
            
        //     });
            
        //     };

//         var reqData = "grant_type=password&username=Anurag&password=123456";
//         Axios({
//    method: 'post',
//    url: 'http://localhost:56456/token',
//        data: (reqData),   

//    headers: { 
//      "Content-Type": "application/x-www-form-urlencoded",
//    }
//  }).then((response) =>{
//            console.log(response)
//        }).catch((error) =>{
//            console.log(error);
//        })
//     }
    


          
           
             
          
           
        
    
    
      
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
                        <th colSpan={2}>
                            User Login
                        </th>
                                           
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UserName</td>
                        <td><input type="text" name="txtUserName" placeholder="UserName" value={inputs.txtUserName || ""}  onChange={handleChange}  /> </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="txtPassword" placeholder="Password" value={inputs.txtPassword || ""}  onChange={handleChange}  /></td>
                    </tr>
                    
                    <tr className="success">
                        <td> 
                            <input id="btnLogin" className="btn btn-success"
                                   type="button" value="Login"  onClick={handleSubmit}/>
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
    <div className="col-md-4"></div>
    </div>
    </>
  )
}

export default Login;