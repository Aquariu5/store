import { makeAutoObservable } from "mobx";

export interface IDevice {
    id: number,
    name: string,
    price: number,
    img: string
}

export interface IDevices {
    type: number | null 
    brand: number | null
    devices: IDevice[]
}


class Devices implements IDevices {
    type: number | null;
    brand: number | null;
    devices: IDevice[];
    constructor() {
        this.type = null;
        this.brand = null;
        this.devices = [];
        makeAutoObservable(this);
    }

    setType(val: number) {
        this.type = val;
    }

    setBrand(val: number) {
        this.brand = val;
    }

    setDevices(vals: IDevice[]) {
        this.devices = vals;
    }
}

export default new Devices();