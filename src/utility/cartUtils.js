export const updateUserCart = (user_cart, product,isIncrement) => {
    user_cart.getCartTotalItems = isIncrement ? user_cart.getCartTotalItems + 1 : user_cart.getCartTotalItems - 1;
    user_cart.getCartTotal = isIncrement ? user_cart.getCartTotal + product.getFinalPrice : user_cart.getCartTotal - product.getFinalPrice;
    user_cart.getCartOriginalPrice = isIncrement ? user_cart.getCartOriginalPrice + product.price :  user_cart.getCartOriginalPrice - product.price;
    return user_cart
}
