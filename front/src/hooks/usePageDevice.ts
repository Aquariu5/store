import useSWR from "swr";
import getFetcher from "../api/fetchers/getFetcher";


export default function usePageDevice(id: string | undefined) {
    const endpoint = `${process.env.REACT_APP_BACK_SITE}/api/device/${id}`;
    const {data, error} = useSWR(endpoint, getFetcher);
    console.log(data);
    return {
        device: data,
        errorDevice: error,
        loadingDevice: !data && !error
    }
}