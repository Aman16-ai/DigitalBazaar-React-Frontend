const BASE_URL = "http://127.0.0.1:8000/api/product"

export const fetchAllCategroies = async()=> {
    try {
        const url = `${BASE_URL}/categories/`
        const response =await fetch(url)
        const data = await response.json();
        return {success:true,categories:data?.allCategories}
    }
    catch(err) {
        return {success:false,err}
    }
}

export const getAllProducts = async()=> {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data)
        return {success:true,data}
    }
    catch(err) {
        return {success:false,err}
    }
}