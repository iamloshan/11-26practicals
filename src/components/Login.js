import { useNavigate } from "react-router-dom";
export default function Login(){
        const navigate = useNavigate();
        const authenticate=()=>{ 
            navigate('/dashboard')
    }
  
    return(
        <div>
            <h1>Login here</h1>
            UserName: <input type="text" /> <br /> <br />
            
            Password: <input type="password" /> <br /> <br />

            <button onClick={authenticate}>Login</button>
        </div>
    ); 
}