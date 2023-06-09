// const baseUrl=process.env.REACT_APP_API_URL;                                                                                                                      
const baseUrl="http://localhost:8080/";

const fetchNoToken=(endpoint,data,method='GET')=>{
    const token = localStorage.getItem('token') || '';
    const url=`${baseUrl}/${endpoint}`;
    if(method==='GET'){
        return fetch(url,{
            headers:{
                Authorization:token
            }
	})
    }else{
        return fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
    }
}

const fetchToken=(endpoint,data,method='GET')=>{

    const url=`${baseUrl}${endpoint}`;
    const token=localStorage.getItem('token') || '';
    if(method==='GET'){
        return fetch(url,{
            method,
	    headers:{
	        'Authorization':token
	    }
        })
    }else if(method==='POST'){
        return fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':token
            },
            body: JSON.stringify(data)
        })
    }else{
	return fetch(url,{
	    method:'POST',
	    headers:{
                'Authorization':token
            },
            body:data
        })
    }
}
