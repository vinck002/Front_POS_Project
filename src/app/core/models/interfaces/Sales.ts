import { operartionType } from "./operacion";

export interface sales{
    salesID:number;
    entityID: number;
    userID:number;
    operartionTypeID: number;
    boxID: number | undefined;
    total: number;
    discount: number;
    created_At: Date;

}


export interface SalesDto{
    id:number;
    entityID: number;
    userID:number;
    operartionTypeID: number;
    operartionType: operartionType
    boxID: number | undefined;
    total: number;
    discount: number;
    created_At: Date;
}
