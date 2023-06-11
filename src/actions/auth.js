<<<<<<< HEAD
import { fetchSinToken } from '../helpers/fetch'
=======
import { fetchToken } from '../helpers/fetch'
>>>>>>> login
import { types } from '../types/types';

export const startLogin = ({ token, user },groupId) => {
    return async (dispatch) => {

<<<<<<< HEAD
        localStorage.setItem('token-qonteo',`bear ${token}`)
        localStorage.setItem('id-user-qonteo', user._id)
        localStorage.setItem('group-id-qonteo',groupId.toString())
        localStorage.setItem('token-init-date-qonteo', new Date().getTime())
        dispatch(login({
            uid: user._id,
            firstNames: user.firstNames,
            lastName: user.lastName,
            email: user.email,
            phonenumber: user.phonenumber,
            portraitUrl: user.portrait_url,
            country: user.country,
            groups:user.groups,
            city: user.city,
=======
        localStorage.setItem('token',`Bear ${token}`)
        localStorage.setItem('id-user', user.id)
        localStorage.setItem('token-init-date', new Date().getTime())
        dispatch(login({
            uid: user.id,
            firstNames: user.firstNames,
            lastName: user.lastName,
            email: user.email,
>>>>>>> login
            isCheking:true
        }))
    }
}


export const startRegister = (firstName, lastName, email, password) => {
    return async () => {
       try {
<<<<<<< HEAD
        const resp = await fetchSinToken('register', { email, firstName, lastName, password }, 'POST');
=======
        const resp = await fetchToken('register', { email, firstName, lastName, password }, 'POST');
>>>>>>> login
        const body = await resp.json();
        if (!body.meta.status) {
            console.log("there was an error creating the user")
        }
       } catch (error) {
         console.log(error)  
       }
    }
}


export const startChecking = (dispatch) => {
    return async(dispatch) => {
<<<<<<< HEAD
        const token=localStorage.getItem('token-qonteo') || '';
=======
        const token=localStorage.getItem('token') || '';
>>>>>>> login
        console.log(token);
        if(token){
            try {
            
<<<<<<< HEAD
                    const resp = await (await fetchSinToken('token-renew')).json();
                    if (Object.keys(resp).length>0) {
                        const { user }=resp;
                        dispatch(login({
                            uid: user._id,
                            firstNames: user.firstNames,
                            lastName: user.lastName,
                            email: user.email,
                            phonenumber: user.phonenumber,
                            portraitUrl: user.portrait_url,
                            country: user.country,
                            city: user.city,
                            groups:user.groups,
=======
                    const resp = await (await fetchToken('login')).json();
                    if (Object.keys(resp).length>0) {
                        const { user }=resp;
                        dispatch(login({
                            uid: user.id,
                            firstNames: user.firstNames,
                            lastName: user.lastName,
                            email: user.email,
>>>>>>> login
                            isCheking:true
                        }))
                        
                    }
                } catch (error) {
                    dispatch(checkingStart())
                    console.log('error')
                }
        }else{
            console.log('no token')
            dispatch(checkingStart())
        }
    }
}
export const checkingStart = () => ({ type: types.authChecking })

export const checkingFinish = () => ({ type: types.authCheckingFinish })

export const logout = () => ({ type: types.authChecking });

const login = (user) => ({
    type: types.authLogin,
    payload: user
})
