import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api", 
    params:{
        key: "ee825f927dc04346a9db63a79a2d9ad9"
    }
})