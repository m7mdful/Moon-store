import { reactive } from "vue";
import api from "./axios.js";
export const products = reactive([]);
export const bestseller = reactive([]);
export const newProducts = reactive([]);
export const user = reactive({})
export const product = reactive({})





//register user
export async function registering(userData) {
    try {
        const response = await api.post("/auth/register", userData);
    }
    catch (error) {
        console.error("Registration failed:", error);
    }

}

//log in user
export async function logging(userData) {
    try {
        const response = await api.post("/auth/login", userData);
    }
    catch (error) {
        console.error("logging failed:", error);
    }
}

//get information about user
export async function getuser(){
    try{
        const response = await api.get("/user");
        Object.assign(user, response.data);
    }
    catch(error){
        console.error(error);
    }
}
//change user password
export async function changePassword(passwordData) {
    try {
        const response = await api.put("/user/password", passwordData);
        console.log("Password changed successfully:", response.data);
    } catch (error) {
        console.error("Error changing password:", error);
    }
}
// remove from cart
export async function removeFromCart(productId) {
    try {
        const response = await api.put("/user/remove-from-cart", { productId });
        Object.assign(user, response.data);
        console.log("Item removed from cart successfully:", response.data);
    } catch (error) {
        console.error("Error removing item from cart:", error);
    }
}
// update cart item quantity 
export async function updateCartQuantity(productId, quantity) {
    try {
        const response = await api.put("/user/update-cart-quantity", { productId, quantity });
        Object.assign(user, response.data);
        console.log("Cart quantity updated successfully:", response.data);
    } catch (error) {
        console.error("Error updating cart quantity:", error);
    }
}

//delete an item from the whishlist
export async function removeFromWhishlist(productId) {
    try {
        const response = await api.put("/user/remove-from-whishlist", { productId });
        Object.assign(user, response.data); 
        console.log("Item removed from whishlist successfully:", response.data);
    } catch (error) {
        console.error("Error removing item from whishlist:", error);
    }
}
// move item from wishlist to cart
export async function moveToCart(productId) {
    try {
        const response = await api.put("/user/move-to-cart", { productId });
        Object.assign(user, response.data);
        console.log("Item moved to cart successfully:", response.data);
    } catch (error) {
        console.error("Error moving item to cart:", error);
    }
}
//add to cart
export async function addToCart(productId, quantity) {
    try {
        const response = await api.put("/user/add-to-cart", { productId, quantity });
        Object.assign(user, response.data);
        console.log("Item added to cart successfully:", response.data);
    } catch (error) {
        console.error("Error adding item to cart:", error);
    }
}

//save user information
export async function updateUserInfo(userData) {
    try {
        const response = await api.put("/user", userData);
        Object.assign(user, response.data);
        console.log("User information saved successfully:", response.data);
    } catch (error) {
        console.error("Error saving user information:", error);
    }
}

//get products by query
export async function getProducts(query="", object) {
    try {
        const response = await api.get(`/product${query}`);
        object.length = 0; // Clear the existing products
        object.push(...response.data.products); // Add new products
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

//get product by id
export async function getProductById(id) {
    try {
        const response = await api.get(`/product/${id}`);
        Object.assign(product, response.data);
        console.log("Product fetched successfully:", response.data);
    } catch (error) {
        console.error("Error fetching product:", error);
    }
}




