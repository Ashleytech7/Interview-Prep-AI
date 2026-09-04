import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/input';
import { validateEmail } from '../../utils/helper';

const Login = ({setCurrentPage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  //Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    if (!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!password){
      setError("Please enter the password");
      return;
    }

    setError("");

    //Login API call
    try{
      
    }catch(error){
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  };

  return <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify center">
    <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
    <p className="text-xs text-slate-700 mt-[5px] mb-6">
      Please enter your details to login 
    </p>

    <form onSubmit={handleSubmit} >
      <Input 
        value={email}
        onChange={({target}) => setEmail(target.value)}
        label="Email address"
        placeholder="john@example.com"
        type="text"
      />
      <Input 
        value={password}
        onChange={({target}) => setPassword(target.value)}
        label="Password"
        placeholder="Min 8 Characters"
        type="password"
      />


      {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

      <button type="submit" className="btn-primary">
        LOGIN
      </button> 

      <p className="text-[13px] text-slate-800 mt-3">
        Don't have an account?{" "}
        <button
          className="font-medium text-primary underline cursor-pointer"
          onClick={() => setCurrentPage("signup")}
        >
          Sign Up
        </button>
      </p>
    </form>
  </div>
}

export default Login