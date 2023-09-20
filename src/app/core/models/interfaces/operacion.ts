import { Product } from "./product";

export interface OperationInOut {
    id: number;
    entidad_id: number;
    documentNumber: string;
    DocumentType:number;
    rnc: string;
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

export interface operationEntry{
    id:number;
    
}

export interface OperationInOutDTO {
    id: number;
    entidad_id: number;
    documentNumber:string;
    DocumentType:number;
    rnc: string;
    user_id: string;
    operation_type_id: number;
    box_id: number;
    total: number;
    totalITBIS:number;
    cash: number;
    discount: number;
    AplicationDate :Date;
    ExpeditionDate: Date| null;
    CurrencyTypeID: number|1;
    OperationDetailDTO:OperationDetailDTO[];
}
export interface OperationDetailDTO {
    id?: number;
    barcode:string;
    product_id: number;
    productName:string;
    qty: number;
    operation_type_id: number ;
    operationInOut_id: number ;
    itbisAplied:number;
    discount: number;
    price: number ;
    TotalLine:number ;
  
}



export interface TipoComprobante{
    id:number;
     names:string;
}