import { makeAutoObservable } from "mobx";
import {IDevices, IDevice, IType} from '../interfaces/device';



class Devices implements IDevices {
    type: number | null;
    brand: number | null;
    page: number;
    limit: number;
    //devices: IDevice[];
    types: IType[];
    brands: IType[];

    constructor() {
        this.type = null;
        this.brand = null;
        //this.devices = [];
        this.page = 1;
        this.limit = 4;
        this.types = [];
        this.brands = [];
        makeAutoObservable(this);
    }

    setType(val: number| null) {
        this.type = val;
    }

    setBrand(val: number| null) {
        this.brand = val;
    }

    // setDevices(vals: IDevice[]) {
    //     this.devices = vals;
    // }

    setBrands(val: IType[]) {
        this.brands = val;
    }

    setTypes(val: IType[]) {
        this.types =  val;
    }

    setPage(val: number) {
        this.page = val;
    }
}

export default new Devices();