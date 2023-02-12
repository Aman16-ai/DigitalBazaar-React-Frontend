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

export const getUser = async()=> {
    try {
        const url = `${BASE_URL}/getUser`
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1NTE1MjgzLCJpYXQiOjE2NzU1MDgwODMsImp0aSI6ImIxMmY0OWQ3NTJhODRkZDU5ZDA4ODAxYWY3NTY5NWY2IiwidXNlcl9pZCI6MTN9.X977cQcIHj92zxgnEscuDH-43QL-EaF_LyyaguK0hk4`
            }
        })
        const data = await response.json()
        console.log(data)
    }
    catch(err) {
        console.log(err)
    }
}