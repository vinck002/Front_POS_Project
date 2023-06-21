export interface category {
    id: number;
    name: string;
    image: string;
    description: string;
    created_at: string;
}

export interface productCategory{
    id: number;
    name: string;
}

export interface categoryDTO {

    name: string;
    image: string;
    description: string;
}
export interface categoryCreacionDTO {
    name: string;
    image: File;
    description: string;

}

