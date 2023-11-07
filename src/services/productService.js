// const BASE_URL = "http://127.0.0.1:8000/api/product"
import { BASE_URL } from "../config"
export const fetchAllCategroies = async()=> {
    try {
        const url = `${BASE_URL}/product/categories/`
        const response =await fetch(url)
        const data = await response.json();
        console.log(data)
        return {success:true,categories:data}
    }
    catch(err) {
        return {success:false,err}
    }
}

export const getProducts = async(query)=> {
    try {
        const url = !query?BASE_URL + '/product':BASE_URL +"/product"+query
        console.log("get products url",url)
        const response = await fetch(url);
        const data = await response.json();
        console.log("product data",data)
        return {success:true,data}
    }
    catch(err) {
        return {success:false,err}
    }
}