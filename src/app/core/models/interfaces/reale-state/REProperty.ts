export interface RealEstatePropertymodel {
    realEstatePropertyID: Number;
    description: string;
    active: number;
    realEstateLocationID: number;
    realEstateProjectTypeID: number;
    realEstatePropertyTypeID: number;
    rooms: number;
    bathrooms: number;
    buildingSize: number;
    landSize: number;
    lotePrice: number | null;
    unitPrice: number | null;
    minPrice: number | null;
    maxPrice: number | null;
}


export interface PropertyMangamentGridDto {
    Status: string;
    Company: string;
    ProjectType: string;
    PropertyType: string;
    Location: string;
    Description: string;
    BedRooms: number;
    BathRooms: number;
    BuildingSize: number;
    RealEstatePropertyID: number;
    Active: number;
}