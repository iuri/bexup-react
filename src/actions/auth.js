import { fetchToken } from '../helpers/fetch'
import { types } from '../types/types';

export const startLogin = ({ token, user },groupId) => {
    return async (dispatch) => {

        localStorage.setItem('token',`Bear ${token}`)
        localStorage.setItem('id-user', user.id)
        localStorage.setItem('token-init-date', new Date().getTime())
        dispatch(login({
            uid: user.id,
            firstNames: user.firstNames,
            lastName: user.lastName,
            email: user.email,
            isCheking:true
        }))
    }
}


export const startRegister = (firstName, lastName, email, password) => {
    return async () => {
       try {
        const resp = await fetchToken('register', { email, firstName, lastName, password }, 'POST');
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
        const token=localStorage.getItem('token') || '';
        console.log(token);
        if(token){
            try {
            
                    const resp = await (await fetchToken('login')).json();
                    if (Object.keys(resp).length>0) {
                        const { user }=resp;
                        dispatch(login({
                            uid: user.id,
                            firstNames: user.firstNames,
                            lastName: user.lastName,
                            email: user.email,
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
