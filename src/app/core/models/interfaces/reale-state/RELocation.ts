import { RealEstateProperty } from "./REProperty";

export interface RealEstateLocation {
    realEstateLocationID: Number;
    description: String;
    active: Number;
    realEstateProperty: RealEstateProperty[];
}
export interface RealEstateLocationDTO {
    realEstateLocationID: Number;
    description: String;
}