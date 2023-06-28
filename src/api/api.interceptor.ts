import { getContentType } from "./api.helper";
import axios from "axios";
import process from "process";

export const instance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
})