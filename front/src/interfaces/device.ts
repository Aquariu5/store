import { ICharDevice } from "./chars"

export interface IDevice {
    id: number,
    name: string,
    price: number,
    img: string,
    typeId: number,
    brandId: number,
    brand: IBrand,
    deviceChar: ICharDevice
}

export interface IDeviceAdd {
    name: string,
    price: number,
    img: File,
    type: IType,
    brand: IBrand,
    chars: Object[]
}

export interface IDevices {
    type: number | null 
    brand: number | null
    //devices: IDevice[]
    types: IType[]
    brands: IType[]
}

export interface IType {
    id: number,
    name: string
}

export interface IBrand {
    id: number,
    name: string
}