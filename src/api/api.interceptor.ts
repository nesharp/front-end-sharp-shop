import { getContentType } from "./api.helper";
import axios from "axios";
const server_url = 'http://localhost:4200/api'
export const instance = axios.create({
	baseURL: server_url,
	headers: getContentType()
})