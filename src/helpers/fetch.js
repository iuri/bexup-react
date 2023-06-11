// const baseUrl=process.env.REACT_APP_API_URL;
const baseUrl="http://localhost:8080/";



const fetchToken=(endpoint,data,method='GET')=>{
    console.log('running fetchToken...');
    
    const url=`${baseUrl}${endpoint}`;
    return fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}



export {
    fetchToken,
}