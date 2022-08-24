import { RealEstateProperty } from "./REProperty";

export interface RealEstatePropertyType {
    realEstatePropertyTypeID: Number;
    description: String;
    active: Number;
    realEstateProperty: RealEstateProperty[];
}
export interface REPropertyTypeDTO {
    realEstatePropertyTypeID: Number;
    description: String;    
}