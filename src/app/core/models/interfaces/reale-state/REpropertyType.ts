import { RealEstatePropertymodel } from "./REProperty";

export interface RealEstatePropertyType {
    realEstatePropertyTypeID: Number;
    description: String;
    active: Number;
    realEstateProperty: RealEstatePropertymodel[];
}
export interface REPropertyTypeDTO {
    realEstatePropertyTypeID: Number;
    description: String;    
}