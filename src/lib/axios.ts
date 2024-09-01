import axios from "axios";
import { env } from "./env";

export const API = axios.create({
  baseURL: env.VITE_API_URL,
});
