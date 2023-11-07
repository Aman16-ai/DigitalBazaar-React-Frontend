// const BASE_URL = "http://127.0.0.1:8000/api"
import { BASE_URL } from "../config"

export const placeOrderService = async(order) => {
    try {
        const url = `${BASE_URL}/order/userOrder/`
        const response = await fetch(url,{
            method:"POST",
            headers: {
                "content-type":"application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            },
            body: JSON.stringify(order)
        })
        if(response.status === 200) {
            const data = await response.json();
            return {success:true,data}
        }
        return {success:false,error:"Not placed"}
    }
    catch(err) {
        return {success:false,error:err.messge}
    }
}