const BASE_URL = "http://127.0.0.1:8000/api/product"

export const fetchAllCategroies = async()=> {
    try {
        const url = `${BASE_URL}/categories/`
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
        const url = !query?BASE_URL:BASE_URL+query
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