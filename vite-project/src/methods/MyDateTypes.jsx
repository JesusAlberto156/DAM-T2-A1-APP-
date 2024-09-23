function MyDataTypes() {
    
    let idNombre = 'Jesus';
    idNombre = 156;
    const Alias = "Chuy"
    const Nombre = "Jesus Alberto";
    const Apellidos = "Partida Michel";
    const NumControl = 645;
    const FechaReg = new Date();
    let Experiencia = 5;
    let Activo = true;

    console.log("IdNombre: ",idNombre);
    console.log("Alias: ",Alias);
    console.log("Nombres: ",Nombre);
    console.log("Apellidos: ",Apellidos);
    console.log("No Control: ",NumControl);
    console.log("Fecha de Registro: ",FechaReg.toString());
    console.log("Experiencia: ",Experiencia);
    console.log("Estatus: ",(Activo) ? 'Activo' : 'No Activo');
    
    let Pasatiempos = ['futbol, ','dibujar, ','musica, ','leer, '];
    let Libros = ['it, ','El resplandor, ','sangre de campeon, ']

    Pasatiempos.push('videojuegos, ');
    Pasatiempos.push('anime');

    Libros.push('el gamer');

    console.log("Pasatiempos: ",Pasatiempos);
    console.log("Libros: ",Libros);

    return (
        <>
            <div>
                <h2 style={{color:'white'}}>
                    Programa para conocer diferentes Tipos de de Datos
                </h2>
                <h3 style={{color:'white'}}>
                        Alias: {Alias}
                    <br/>
                        Id: {idNombre}
                    <br/>
                        Nombre: {Nombre},
                    <br/>
                        Apellidos: {Apellidos},
                    <br/>
                        No. Control: {NumControl},
                    <br/>
                        Fecha de Registro: {FechaReg.toString()},
                    <br/>
                        Años de Experiencia: {Experiencia},
                    <br/>
                        Estatus: {(Activo) ? 'Activo' : 'No Activo'}
                    <br/>
                        Pasatiempos: {Pasatiempos}
                    <br/>
                        Libros: {Libros}
                </h3>
            </div>
       
        </>
    );
};

export default MyDataTypes;