const BASE_URL = "http://127.0.0.1:8000/api/account"

export const register = async(credentials)=> {
    try {
        console.log("running register service")
        const url = `${BASE_URL}/register`
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