import axios from "axios";
import { Restapi } from "./Restapi";

export const AppConfig = {
    API_URL: 'https://www.easyloantec.com/api/call/',
    // API_URL: 'http://localhost/easyloan/api/call/',
}

export const apiCall = async (module: string, data = {}) => {
    try {
        const url = AppConfig.API_URL + module
        const result = await axios.post(url, data);
        const resp: Restapi = await result.data;
        return resp;
    } catch (er) {
        console.log('api-call-error', er)
    }
}

export async function getOption(name: string) {
    const json = localStorage.getItem('_options');
    if (json != null) {
        const ab = JSON.parse(json);
        return ab[name];
    } else {
        return null;
    }
}