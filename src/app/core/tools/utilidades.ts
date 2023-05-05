export function toBase64(file: File){
    return new Promise((resolve, reject) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

export function parsearerrorAPI(response:any): String[]{
    const resultado: String[] = [];
    if(response.error) {
    if(typeof response.error === 'string')
    resultado.push(response.error)
    }else{
        console.log('in parse function');
        const mapError = response.error.errors;
        const entradas = Object.entries(mapError);
        entradas.forEach((arreglo:any[]) =>{
            const campo = arreglo[0];
            arreglo[1].forEach((mensajeError: String) => {
                resultado.push(mensajeError)
            })
        });
    }
    return resultado;
}