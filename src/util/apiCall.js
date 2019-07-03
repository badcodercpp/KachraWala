export const FETCH = (type,url,header={
    "Content-Type": "application/json"
},body) =>{
    return fetch(url,{
        method: type, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: header,
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer",// body data type must match "Content-Type" header
        body:body!==undefined?body:null
    });
}