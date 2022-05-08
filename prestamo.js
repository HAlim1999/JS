let capturar = function () {
    let importe= document.getElementById("importe").value;
    let sistema= document.getElementById("sistema").value;


    capital= importe
    i=(0.165*30)/365
    n=5
    cuota = (capital*i)/(1-(1/((1+i)**n)))
    t=cuota-(capital*i)

    if(capital<=0){
        alert("No ingreso ningun importe o el mismo no es válido")
    }else{
    switch(sistema){
        /*SISTEMA FRANCES*/

        case "Fances":
            alert("La simulacion se realizara por la suma de "+importe+" calculado segun el sistema de amortizacion "+sistema)
            for(j=1;j<=n;j++){

                cuotaAmort=t*((1+i)**(j-1))
                cuotaInteres=cuota-cuotaAmort
                saldo = capital-t*((((1+i)**j)-1)/i)

                insertarFila(j);
                insertarFila(cuotaAmort);
                insertarFila(cuotaInteres);
                insertarFila(saldo);


                console.log(cuota)
                console.log(cuotaAmort)
                console.log(cuotaInteres)
                console.log(saldo)}
            break;

        /*SISTEMA ALEMAN*/
        case"Aleman":
        alert("La simulacion se realizara por la suma de "+importe+" calculado segun el sistema de amortizacion "+sistema)
            cuotaAleman = capital/n
            for(k=0;k<n;k++){
                saldo = capital-(cuotaAleman*k)
                cuotaInt = saldo*i

                console.log(saldo)
                console.log(cuotaInt)
            }
        break;
        /*SISTEMA AMERICANO*/
        case "Americano":
            alert("La simulacion se realizara por la suma de "+importe+" calculado segun el sistema de amortizacion "+sistema)
            cuotaAme = capital*i
            for(g=1;g<=n;g++){
                if(g==5){
                    console.log(capital*(1+i));
                } else{
                    console.log(cuotaAme);}
                }
            break;
        };
}
}

function insertarFila(){
    let tbDatos = document.getElementById("tablaMarcha").insertRow(-1);
    let col1 = tbDatos.insertCell(-1);
    let col2 = tbDatos.insertCell(-1);
    let col3 = tbDatos.insertCell(-1);
    let col4 = tbDatos.insertCell(-1);

    col1.innertHTML = "sdsdsd";
    col2.innertHTML = "Nueva Celda";
    col3.innertHTML = "Nueva Celda";
    col4.innertHTML = "Nueva Celda";

}
