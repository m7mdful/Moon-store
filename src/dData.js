import { reactive } from "vue";
import api from "./axios.js";
export const products = reactive([]);
export const bestseller = reactive([]);
export const newProducts = reactive([]);
export const user = reactive({})





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

//change user password
export async function changePassword(passwordData) {
    try {
        const response = await api.put("/user/password", passwordData);
        console.log("Password changed successfully:", response.data);
    } catch (error) {
        console.error("Error changing password:", error);
    }
}





