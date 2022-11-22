export interface product{
    id:number;
    image:string;
    barcode:string;
    name:string;
    description:string;
    inventaryMIn:number;
    price_in: number;
    price_out:number;
    unit: string;
    presentatiom:string;
    userD:number;
    categoryID:number;
    created_at:Date;
    is_active:number
}

export interface category{
    id:number;
    image:string;
    name:string;
    description:string;
    created_at:Date;
}