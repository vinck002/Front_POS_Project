export function toBase64(file: File){
    return new Promise<string>((resolve, reject) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(String(reader.result));
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

export function parsearFecha(fecha: Date){
    const formato = new Intl.DateTimeFormat('en',{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const [
        {value: month},,
        {value: day},,
        {value: year}
    ]= formato.formatToParts(fecha);
    return `${year}-${month}-${day}`;
} 