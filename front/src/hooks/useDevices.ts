
import useSWR from "swr";
import getFetcher from "../api/fetchers/getFetcher";
import deviceModel from "../models/devices";

export default function useDevices() {
    const devicesEndpoint = `${process.env.REACT_APP_BACK_SITE}/api/device?brandId=${deviceModel.brand || ''}&typeId=${deviceModel.type || ''}`;
    const {data, error} = useSWR(devicesEndpoint, getFetcher);
    return {
        devices: data?.rows,
        count: data?.count,
        error,
        loading: !data && !error
    }
}



