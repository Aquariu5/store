import useSWR from "swr";
import getFetcher from "../api/fetchers/getFetcher";


export default function useBrands() {
    const endpoint = `${process.env.REACT_APP_BACK_SITE}/api/brand`;
    const {data, error} = useSWR(endpoint, getFetcher);
    return {
        brands: data,
        errorBrands: error,
        loadingBrands: !data && !error
    }
}