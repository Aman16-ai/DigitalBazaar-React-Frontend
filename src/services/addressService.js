const BASE_URL = "http://127.0.0.1:8000/api";

export const getAllUserAddress = async() => {
    try {
       const url = `${BASE_URL}/account/address/userAddress/get_user_addresses`
        const response = await fetch(url,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        })
        if(response.status === 200) {
            const data = await response.json()
            console.log("user address ---------->",data)
            return {success:true,data:data.Response}
        }
        return {success:false,error:"Not fetched"}
    }
    catch(err) {
        return {success:true,error:err.message}
    }
}