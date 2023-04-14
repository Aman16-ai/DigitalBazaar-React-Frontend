const BASE_URL = "http://127.0.0.1:8000/api/"

export const getUserCart = async () => {
    try {
        const url = BASE_URL + "cart"
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        })
        const data = await response.json()
        return { success: true, data }
    }
    catch (err) {
        return { success: false }
    }
}