function MyFunctions(){
    
    //function fcnSumarUno(numero){
    //  return numero + 1;
    //};

    function fcnSumarUno(numero,fcnResultadoCallBack){
        setTimeout(function(){
            //return numero + 1;
            fcnResultadoCallBack(numero+1);
        },800);
    }

    console.log("Programa de funciones");

    //let Resultado = fcnSumarUno(5);
    //console.log(Resultado);

    //fcnSumarUno(5, function(nuevoValor1){
        //console.log("Resultado: ",nuevoValor1);
    //});

    //fcnSumarUno(5, function(nuevoValor1){
        //console.log("Resultado: ",nuevoValor1);
    //    fcnSumarUno(nuevoValor1,function(nuevoValor2){
            //console.log("Resultado: ", nuevoValor2);
    //    });
    //});

    fcnSumarUno(5, function(nuevoValor1){
        //console.log("Resultado: ",nuevoValor1);
        fcnSumarUno(nuevoValor1,function(nuevoValor2){
            //console.log("Resultado: ", nuevoValor2);
            fcnSumarUno(nuevoValor2,function(nuevoValor3){
                console.log("Resultado: ", nuevoValor3);
            });
        });
    });

    return (
        <>
            <div>
                <h2 style={{ color:'white'}}>Programa de Funciones</h2>
            </div>
        </>
    );
}

export default MyFunctions;