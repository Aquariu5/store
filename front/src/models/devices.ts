import { makeAutoObservable } from "mobx";
import {IDevices, IDevice, IType} from '../interfaces/device';



class Devices implements IDevices {
    type: number | null;
    brand: number | null;
    devices: IDevice[];
    types: IType[];
    brands: IType[];

    constructor() {
        this.type = null;
        this.brand = null;
        this.devices = [];
        this.types = [];
        this.brands = [];
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

    setBrands(val: IType[]) {
        this.brands = val;
    }

    setTypes(val: IType[]) {
        this.types =  val;
    }
}

export default new Devices();