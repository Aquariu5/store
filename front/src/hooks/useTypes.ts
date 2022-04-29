import useSWR from "swr";
import getFetcher from "../api/fetchers/getFetcher";


export default function useTypes() {
    const endpoint = `${process.env.REACT_APP_BACK_SITE}/api/type`;
    const {data, error} = useSWR(endpoint, getFetcher);
    return {
        types: data,
        errorTypes: error,
        loadingTypes: !data && !error
    }
}