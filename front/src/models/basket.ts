import { makeAutoObservable } from "mobx";
import { IBasket } from "../interfaces/basket";
import { IDevice } from "../interfaces/device";
import user from "./user";
import { IBasketDevice } from "../interfaces/basket";

class Basket implements IBasket {
    basktetId: number;
    //deviceIds: number[];
    devices: IBasketDevice[]
    amount: number;
    constructor() {
        this.amount = 1;
        this.basktetId = user.id;
        this.devices = []

    }
    
    setDevices(val: IBasketDevice[]) {
        this.devices = val;
    }

    addDeviceId(val: IBasketDevice) {
        this.devices.push(val);
    }

    clearFields() {
        this.amount = -1;
        this.basktetId = -1;
        this.devices = []
    }
}

export default new Basket();