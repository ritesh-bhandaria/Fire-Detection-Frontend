import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./userAcion";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isError: false,
    isFetching: false
}
const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                isError: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isError: true
            }
        case LOGOUT_SUCCESS:
            return {
                user: null,
                isError:false,
                isFetching:false
            }
        default:
            return state
    }

}

export default UserReducer