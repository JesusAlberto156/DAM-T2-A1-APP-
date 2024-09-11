function MyPromises(){

    //function fcnSumarUno(numero,fcnResultadoCallBack){
    //    var promesa1 = new Promise(function(resolve,reject){
    //        setTimeout(function(){
    //            resolve(numero+1);
    //        },800);
    //    });
    //    return promesa1;
    //}

    function fcnSumarUno(numero,fcnResultadoCallBack){
        var promesa1 = new Promise(function(resolve,reject){
            if(numero >= 7){
                reject('El numero ya es muy alto');
            }
            setTimeout(function(){
                resolve(numero+1);
            },800);
        });
        return promesa1;
    }

    //fcnSumarUno(5).then(function(nuevoNumero){
    //    console.log(nuevoNumero);
    //});

    //fcnSumarUno(5).then(nuevoNumero => {
    //    console.log(nuevoNumero);
    //});

    //fcnSumarUno(5).then(nuevoNumero => {
    //    console.log("Resultado: ",nuevoNumero);
    //    return fcnSumarUno(nuevoNumero);
    //}).then(nuevoNumero =>{
    //    console.log("Resultado: ",nuevoNumero);
    //    return fcnSumarUno(nuevoNumero);
    //}).then(nuevoNumero =>{
    //    console.log("Resultado: ",nuevoNumero);
    //});

    //fcnSumarUno(5)
    //    .then(fcnSumarUno)
    //    .then(fcnSumarUno)
    //    .then(nuevoNumero =>{
    //    console.log("Resultado: ",nuevoNumero);
    //});

    fcnSumarUno(5)
        .then(fcnSumarUno)
        .then(fcnSumarUno)
        .then(nuevoNumero =>{
        console.log("Resultado: ",nuevoNumero);
    })
    .catch(error =>{
        console.log('Error en la Promesa',error);
    });
    
    return (
        <>
            <div>
                <h1>Programa de Funciones con Promesas</h1>
            </div>
        </>
    );
}

export default MyPromises;