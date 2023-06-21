
export interface Entity{
    id :number;
	identification: string;
	image:string | undefined;
	names:String  ;
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

	export interface EntityCreationDto {
		identification: number;
		image: string | null;
		names: string;
		lastname: string | null;
		company: string | null;
		address1: string | null;
		address2: string | null;
		phone1: string | null;
		phone2: string | null;
		email: string | null;
		kind: number;
		notes: string | null;
		created_at: string;
		status: boolean;
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

	