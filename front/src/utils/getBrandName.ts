import { getBrands } from "../api/apiBrands";
import devices from "../models/devices";
export default async function getBrandName(id: number) {

    if (devices.brands.length === 0) {
        let brands = await getBrands();
        devices.setBrands(brands);
    }
    let brandStr = 'NoBrand';
    const BreakException = {};
    try {
        devices.brands.forEach(brand => {
            //console.log('brandId, inputId', brand.id, id);
            if (brand.id === id) {
                brandStr = brand.name;
                throw BreakException;
      }
        })
    } catch(e: any) {
        if (e !== BreakException) {
            console.log(e.message);
        }
    }
    
    return brandStr;
}