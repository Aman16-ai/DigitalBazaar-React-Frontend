const BASE_URL = "http://127.0.0.1:8000/api/";

export const getUserCart = async () => {
  try {
    const url = BASE_URL + "cart";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    const data = await response.json();
    return { success: true, data };
  } catch (err) {
    return { success: false };
  }
};

export const addItemToCart = async (item) => {
  try {
    const url = `${BASE_URL}cart/addItemToCart/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();
    console.log("add item service data", data);
    return { success: true, data: data?.Response };
  } catch (err) {
    return { success: false };
  }
};

export const getCartItems = async () => {
  try {
    const url = `${BASE_URL}cart/getUserCartItems/`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });

    const data = await response.json();
    console.log("get cart item service data", data);
    return { success: true, data };
  } catch (err) {
    return { success: false };
  }
};

export const incrementCartItemQuantity = async(cartItemId,quantity) => {
  try {
    const url = `${BASE_URL}cart/incrementQuantity/${cartItemId}/`
    const response = await fetch(url,{
      method:"POST",
      headers : {
        "content-type":"application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body : JSON.stringify({"quantity":quantity})
    })
    const data = await response.json()
    console.log("CartItem increment ---->",data)
    return {success:true,data}
  }
  catch(err) {
    return {success:false}
  }
}
