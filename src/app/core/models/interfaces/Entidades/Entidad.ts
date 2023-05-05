
export interface Entity{
    id :number;
	identification: string;
	image:string | undefined;
	name:string  ;
	lastname:string;
	company:string;
	address1:string;
	address2:string | undefined;
	phone1:string | undefined;
	phone2:string | undefined;
	email1:string | undefined;
	email2:string | undefined;
	kind:number; // proveedor o cliente
	notes:String
	created_at:Date;
	status:boolean;
    }

	export interface EntityCreationDto{
	identification: String;
	image:string | undefined;
	name:string  ;
	lastname:string;
	company:string;
	address1:string;
	address2:string | undefined;
	phone1:string | undefined;
	phone2:string | undefined;
	email:string | undefined;
	kind:number; // proveedor o cliente
	notes:String
	created_at:Date;
	status:boolean;
		}

    export interface TipoEntidad{
        ID:number;
        Description:string;

    }

	export interface user{

		userName: string;
		email:string| undefined;
		password:string;
		role:string;

	}
	
	

	export interface role{
		id:string;
		description:string;
	}

	