function MyObjects() {
    
    const persona = {
        nombre: 'Jesus',
        edad: 23,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Lo de Marcos',
            direccion: 'Luis echeverria No. 22'
        }

    }

    console.log("JSON Persona: ", JSON.stringify(persona,null,2));

    return (
        <>
            <div>
                <h2 style={{color:'white'}}>
                    Programa de Objetos Literales
                </h2>
                <h3 style={{color:'white'}}>
                    <code>
                        <pre>
                            {/*JSON.stringify(persona)*/}
                            {JSON.stringify(persona,null,2)}
                        </pre>
                    </code>
                </h3>
            </div>
       
        </>
    );
};

export default MyObjects;