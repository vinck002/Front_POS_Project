import { RealEstatePropertymodel } from "./REProperty";

export interface RealEstateLocation {
    realEstateLocationID: Number;
    description: String;
    active: Number;
    realEstateProperty: RealEstatePropertymodel[];
}
export interface RealEstateLocationDTO {
    realEstateLocationID: Number;
    description: String;
}