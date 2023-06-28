import { Product } from "./product";

export interface OperationInOut {
    id: number;
    entidad_id: number;
    documentNumber: string;
    user_id: string;
    operation_type_id: number;
    box_id: number;
    total: number;
    cash: number;
    discount: number;
    totalITBIS: number;
    currencyTypeID: number;
    currencyValue: number;
    created_at: string;
    AplicationDate :Date;
    ExpeditionDate: Date| null;
    operationDetail: OperationDetailDTO[];
}


export interface OperationDetail {
    id: number;
    product_id: number;
    qty: number;
    operation_type_id: number;
    operationInOut_id: number;
    created_at: string;
    discount: number;
    price: number;
    itbis_included: boolean;
    itbisAplied: number;
    product: Product;
    operationInOut: OperationInOut;
    operationType: OperationType;
}
export interface OperationType {
    id: number;
    name: string;
    operationDetail: OperationDetail[];
    operationInOut: OperationInOut[];
}
export interface OperationTypeDTO {
    id: number;
    name: string;
}
// valores de entrada o de salida   IN/OUT
export interface operartionType{
    id: number;
    Description:string;
} 

export interface operationEntry{
id:number;

}
export interface OperationDetailDTO {
    id?: number;
    product_id: number;
    documentNumber:string;
    qty: number;
    operation_type_id: number ;
    operationInOut_id: number ;
    itbis_included: boolean ;
    itbisAplied:number;
    discount: number;
    price: number ;
  
}


export interface OperationInOutDTO {
    id: number;
    entidad_id: number;
    documentNumber:string;
    user_id: string;
    operation_type_id: number;
    box_id: number;
    total: number;
    totalITBIS:number;
    cash: number;
    discount: number;
    AplicationDate :Date;
    ExpeditionDate: Date| null;
    created_at: string;
  
}


export interface TipoComprobante{
    id:number;
     names:string;
}