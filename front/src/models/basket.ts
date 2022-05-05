import { makeAutoObservable } from "mobx";
import { IBasket } from "../interfaces/basket";
import user from "./user";
import { IBasketDevice } from "../interfaces/basket";


class Basket implements IBasket {
    basktetId: number;
    //deviceIds: number[];
    devices: IBasketDevice[]

    constructor() {
        this.basktetId = user.id;
        this.devices = []
        makeAutoObservable(this);
    }

    updateAmount(deviceId: number, basketId: number) {
        this.devices.forEach(device => {
            if (device.basketId == basketId && device.deviceId == deviceId) {
                device.amount +=1;
            }
        });
    }
    
    deleteDevice(basketId: number, deviceId: number) {
        this.devices = this.devices.filter(dev => !(dev.deviceId == deviceId && dev.basketId == basketId));
    }

    setDevices(val: IBasketDevice[]) {
        this.devices = val;
    }

    addDeviceId(val: IBasketDevice) {
        this.devices.push(val);
    }

    clearFields() {
        this.basktetId = -1;
        this.devices = []
    }
}

export default new Basket();