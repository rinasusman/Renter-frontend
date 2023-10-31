import axios from "axios";
import { guestAPI } from "../constants/API";


const guestInstance = axios.create({
    baseURL: guestAPI,
    withCredentials: true,
});
export default guestInstance;