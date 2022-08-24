export interface RealEstateProperty {
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
export interface REPropertyCreacionDTO {
      
        Description: string;
        Active: number;
        RealEstateLocationID: number;
        RealEstateProjectTypeID: number;
        RealEstatePropertyTypeID: number;
        Rooms: number;
        Bathrooms: number;
        BuildingSize: number;
        LandSize: number;
        LotePrice: number | null;
        UnitPrice: number | null;
        MinPrice: number | null;
        MaxPrice: number | null;
    }


export interface PropertyMangamentGridDto {
    RealEstatePropertyID: number;
    Status: string;
    Company: string;
    ProjectType: string;
    PropertyType: string;
    Location: string;
    Description: string;
    BedRooms: number;
    BathRooms: number;
    BuildingSize: number;
}