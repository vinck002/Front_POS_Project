import { categoryDTO } from "./category";
//'Name','Image','Descripcion','Min Stock','Precio/Mayor','Precio/Detalle','Und','Categoria','Estado'
export interface Product {
    id: number;
    image: string;
    barcode: string;
    name: string;
    description: string;
    inventary_min: number;
    price_in: number;
    price_out: number;
    UnitID: number;
    user_id: string;
    categoryId: number;
    category: categoryDTO;
    created_at: string;
    is_active: boolean;
    updated_at: string | null;
}

export interface productDTO{
    id: number;
    image: string;
    barcode: string;
    name: string;
    description: string;
    inventary_min: number ;
    price_in: number;
    price_out: number;
    UnitID: number|1;
    categoryId :number;
    categoryName: string;
    is_active: boolean; 
    updated_at: string | null;
}

export interface ProductoCreacionDTO {
    image: File|null;
    barcode: string | null;
    name: string|'';
    description: string|'';
    inventary_min: number| 1;
    price_in: number | 0;
    price_out: number|0;
    unitID: number|1;
    categoryId: number | 1;
    is_active: boolean|true|false;
    updated_at: string | null;
}


export interface UnitType{
    id: number;
    name: string;
}