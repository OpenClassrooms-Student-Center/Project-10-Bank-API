import Axios from "axios";


export default Axios.create({
    baseURL: "http://localhost:3001/api/v1/user"
})