import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess,logoutStart,googleFailure,googleStart } from "./userRedux";
import axios from "axios";

import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
}
export const googleLogin = async (dispatch) => {
    dispatch(googleStart());
    try {
        const res = await axios.get("http://localhost:5000/auth/google/ecommerce")
        console.log(res);
        // dispatch(googleSuccess(res.data));
    } catch (error) {
        dispatch(googleFailure())
    }
}

export const logoutS = async (dispatch) => {
    try {
        axios.post("http://localhost:5000/auth/logout");
        dispatch(logoutStart());
    } catch (error) {
        
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await axios.post("http://localhost:5000/auth/register", user)
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure())
    }
}

export const getProduct = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await axios.post("http://localhost:5000/products")
        dispatch(getProductSuccess(res.data));
    } catch (error) {
        dispatch(getProductFailure());
    }
}

// export const createOrder = async (orderDetail) => {
//     const res = await axios.post("http://localhost:5000/orders", orderDetail);
//     if(res.status === 200) {
//         redirect("/success");
//     }
// }