<<<<<<< HEAD
import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" });

async function getLivros() {
    const response = await livrosAPI.get("/");
    return response.data
}


export {
    getLivros
}
=======
import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" });

async function getLivros() {
    const response = await livrosAPI.get("/");
    return response.data
}


export {
    getLivros
}
>>>>>>> 9db4eebfa7495377fd28c7c40613a549e2f9d5e3
