import { IDevice } from "./device"

export interface IBasketDevice {
    amount: number
    basketId: number
    deviceId: number
    device: IDevice
}

export interface IBasket {
    basktetId: number
    devices: IBasketDevice[]
    amount: number
}
