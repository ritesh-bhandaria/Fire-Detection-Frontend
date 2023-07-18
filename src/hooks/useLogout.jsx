import React from 'react'

export default function useLogout() {
  const logoutCall = async()=>{
    console.log("logout")
    const res = await fetch('http://localhost:8000/api/logout/',
    {
      method:'POST',
    })
    const json = await res.json();
    console.log(json);
    localStorage.removeItem('user');
  }

  return {logoutCall};
}
