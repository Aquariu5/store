import axios from "axios";

export default  async function getFetcher(endpoint: string, params?: Object) {
    const res = (await axios.get(endpoint, {params})).data;
    return res;
}   
