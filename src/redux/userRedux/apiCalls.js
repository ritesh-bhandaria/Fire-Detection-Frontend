import { loginStart, loginSuccess, loginFailure } from "./userAcion"

export const Login = ({email,password})=>{
    return async (dispatch)=>{
        try {
            dispatch(loginStart())
                const data = await axios.post("http://localhost:5000/api/auth/login",{email,password}).then((res)=>res.data)
                console.log(data);
                dispatch(loginSuccess(data));
                navigate('/home')
        } catch (error) {
            dispatch(loginFailure())
        }
    }
}