import { reactive } from "vue";
import api from "./axios.js";
export const products = reactive([]);
export const bestseller = reactive([]);
export const newProducts = reactive([]);
export const user = reactive({})

export async function registering(userData) {
    try {
        const response = await api.post("/auth/register", userData);
    }
    catch (error) {
        console.error("Registration failed:", error);
    }
}
export async function logging(userData) {
    try {
        const response = await api.post("/auth/login", userData);
    }
    catch (error) {
        console.error("logging failed:", error);
    }
}
export async function getuser(){
    try{
        const response = await api.get("/user");
        Object.assign(user, response.data);
    }
    catch(error){
        console.error(error);
    }
}

export async function getProducts(query="", object) {
    try {
        const response = await api.get(`/product${query}`);
        object.length = 0; // Clear the existing products
        object.push(...response.data.products); // Add new products
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}





