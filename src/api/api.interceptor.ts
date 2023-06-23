import axios from "axios";
import { getContentType } from "./api.helper";

export const instance = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: getContentType()

})
