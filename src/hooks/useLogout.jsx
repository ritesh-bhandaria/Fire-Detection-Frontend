import React from 'react'

export default function useLogout() {
  const logout = ()=>{
    localStorage.removeItem('user');
  }
}
