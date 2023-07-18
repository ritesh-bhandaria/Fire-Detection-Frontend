import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    const signupCall = async(email, password)=>{
        setIsLoading(true);
        setError(null);


        const res = await fetch("http://localhost:8000/api/user/signup", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:email, password:password})
        })
        const json = await res.json();

        if(!res.ok)
        {
            setIsLoading(false);
            setError(json);
        }
        if(res.ok)  // if signup successful navigate to login page to login
        {
            // localStorage.setItem('user', JSON.stringify(json));
            setIsLoading(false);
            navigate('/login');
        }

        
    }
    return {signupCall, error, isLoading};
}
