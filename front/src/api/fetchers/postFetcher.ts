import axios from "axios";

export default  async function oostFetcher(endpoint: string, body: Object) {
    const res = (await axios.post(endpoint, body)).data;
    return res;
}   
