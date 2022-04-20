import { makeAutoObservable } from "mobx";

interface IDevices {
    type: number | null
    brand: number | null
}
class Devices implements IDevices {
    type: number | null;
    brand: number | null;

    constructor() {
        this.type = null;
        this.brand = null;
    }

    setType(val: number) {
        this.type = val;
    }

    setBrand(val: number) {
        this.brand = val;
    }
}

export default new Devices();