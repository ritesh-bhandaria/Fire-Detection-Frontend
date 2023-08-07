import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from "../redux/userRedux/userAcion"

export default function useLogin() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    const loginCall = async(email ,password)=>{
        setIsLoading(true);
        setError(null);

        
        console.log(email, password);

        const res = await fetch("http://localhost:5000/api/auth/login/", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:email, password:password})
        })
        const json = await res.json();

        if(!res.ok)  // is login fail set error 
        {
            setIsLoading(false);
            setError(json);
        }
        if(res.ok) // if login ok set localstorage item 'user' :'user details' , we can decide in backend what details to send. and after that navigate to '/' (landing) page.
        {
            localStorage.setItem('user', JSON.stringify(json));
            setIsLoading(false);
            navigate('/');
        }

        
    }
    return {loginCall, error, isLoading};
}
