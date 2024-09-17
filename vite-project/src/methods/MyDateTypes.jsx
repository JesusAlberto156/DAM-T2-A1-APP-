function MyDataTypes() {
    
    let idNombre = 'Jesus';
    idNombre = 706;

    console.log("IdNombre: ",idNombre);

    const Nombre = "Jesus Alberto";
    const FicNumControl = 645;
    const FicFechaReg = new Date();
    let FicExperiencia = 5;
    let FicActivo = true;

    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                </h1>
                <h1>
                    {idNombre}
                    <br/> 
                        {FicIdNombre},
                    <br/>
                        {FicNombre},
                    <br/>
                        {FicApellidos},
                    <br/>
                        {FicNumControl},
                    <br/>
                        {FicNumControl2},
                    <br/>
                        {FicFechaReg.toString()},
                    <br/>
                        {FicExperiencia},
                    <br/>
                        {(FicActivo) ? 'Activo' : 'No Activo'}
                </h1>
            </div>
       
        </>
    );
};

export default MyDataTypes;