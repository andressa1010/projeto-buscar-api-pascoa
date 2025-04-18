import axios from "axios";


const api = axios.create({
     baseURL:"https://api-pascoa.onrender.com"
})

export default api