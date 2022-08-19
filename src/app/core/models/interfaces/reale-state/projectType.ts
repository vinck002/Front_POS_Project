export interface REProjectType {
   RealEstateProjectTypeID: Number;
    Description:String;
    Active:Number;
    select: Boolean | true;
    RealEstateCompanyID :Number;
   
}

export interface REProjectTypeDTO {
    RealEstateProjectTypeID: Number;
     Description:String;
     RealEstateCompanyID :Number | undefined;
 }