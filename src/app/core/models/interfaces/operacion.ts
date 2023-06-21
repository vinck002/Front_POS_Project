export interface operartion{
    id: number;
    ProductID:number;
    operartionTypeID: number;
    Qty: number;
    value:number;
    saleID:number;
    createdAt:Date;
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
    product_id: number ;
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
    user_id: string;
    operation_type_id: number;
    box_id: number;
    total: number;
    totalITBIS:number;
    cash: number;
    discount: number;
    created_at: string;
    operationDetail: OperationDetailDTO[];
}