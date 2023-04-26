
export interface Entity{
    id :number;
	identification: string;
	Rnc:string;
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
	created_at:Date;
	status:boolean;
    }

	export interface EntityCreationDto{
		identification: string;
		Rnc:string;
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
		created_at:Date;
		status:boolean;
		}

    export interface TipoEntidad{
        ID:number;
        Description:string;

    }

	export interface user{

		username: string;
		email:string;
		pass:string;
		role:number;

	}
	export interface userGridDto{
		id:number;
		name: string;
		lastname:string;
		pass:string;
		creationDate:Date;
		status:boolean;
		role:string;
		image:string;
	}

	

	export interface role{
		id:number;
		description:string;
	}

	