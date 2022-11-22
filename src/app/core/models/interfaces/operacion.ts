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