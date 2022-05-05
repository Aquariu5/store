export interface IDevice {
    id: number,
    name: string,
    price: number,
    img: string,
    typeId: number,
    brandId: number,
    brand: IBrand
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