const BASE_URL = "http://127.0.0.1:8000/api"
// import { BASE_URL } from "../config"
export const register = async(credentials)=> {
    try {
        console.log("running register service")
        const url = `${BASE_URL}/account/register`
        const response = await fetch(url,{
            method:'POST',
            headers: {
                'content-Type':'application/json'
            },
            body:JSON.stringify(credentials)
        })
        const data = await response.json()
        console.log(data)
        return {success:true,...data}
    }
    catch(err) {
        return {success:false}
    }
}

export const loginUser = async(credentials) => {
    try {
        const url = `${BASE_URL}/account/login`
        const response = await fetch(url,{
            method:"POST",
            headers : {
                "content-Type":"application/json"
            },
            body : JSON.stringify(credentials)
        })
        const data = await response.json()
        console.log("login data")
        if("token" in data) {
            return {success:true,data}
        }
        else {
            throw Error("Credentials Errors")
        }
    }
    catch(err) {
        return {success:false,message:err}
    }
}

export const getUser = async()=> {
    try {
        const url = `${BASE_URL}/account/getUser`
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        })
        const data = await response.json()
        console.log(data)
        return {success:true,data}
    }
    catch(err) {
        console.log(err)
        return {success:false}
    }
}