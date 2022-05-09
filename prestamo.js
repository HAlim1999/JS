let capturar = function () {
    let importe= document.getElementById("importe").value;
    let sistema= document.getElementById("sistema").value;
    let plazo = document.getElementById("plazo").value;


    let capital= importe
    let i=(0.165*30)/365
    let n=plazo
    let cuota = (capital*i)/(1-(1/((1+i)**n)))
    let t=cuota-(capital*i)

    if(capital<=0){
        alert("No ingreso ningun importe o el mismo no es válido")
    }else{
    switch(sistema){
        /*SISTEMA FRANCES*/

        case "Fances":
            alert("La simulacion se realizara por la suma de "+importe+" calculado segun el sistema de amortizacion "+sistema)

            let j = 1;

            for(j=1;j<=n;j++){

                let cuotaAmort=t*((1+i)**(j-1))
                let cuotaInteres=cuota-cuotaAmort
                let saldo = capital-t*((((1+i)**j)-1)/i)

                let cicloArray = [null, j, cuotaAmort, cuotaInteres, saldo]
                let tbDatos = document.getElementById('tablaMarcha').insertRow(-1)
                for (let d = 1; d <= 4; d++) {
                    insertarCelda(tbDatos, cicloArray[d])
                }
            }

            break;

        /*SISTEMA ALEMAN*/
        case"Aleman":
        alert("La simulacion se realizara por la suma de "+importe+" calculado segun el sistema de amortizacion "+sistema)
            let cuotaAleman = capital/n
            for(k=0;k<n;k++){
                let saldo = capital-(cuotaAleman*k)
                let cuotaInt = saldo*i

                let cicloArray = [null, k, cuotaAleman, cuotaInt, saldo]
                let tbDatos = document.getElementById('tablaMarcha').insertRow(-1)
                for (let d = 1; d <= 4; d++) {
                    insertarCelda(tbDatos, cicloArray[d])
                }
                console.log(saldo)
                console.log(cuotaInt)
            }
        break;
        /*SISTEMA AMERICANO*/
        case "Americano":
            alert("La simulacion se realizara por la suma de "+importe+" calculado segun el sistema de amortizacion "+sistema)
            let cuotaAme = capital*i
            for(g=1;g<=n;g++){
                if(g==n){
                    let cuotaEnd = capital*(1+i)

                    let cicloArray = [null, g, capital, cuotaAme, 0]
                    let tbDatos = document.getElementById('tablaMarcha').insertRow(-1)
                    for (let d = 1; d <= 4; d++) {
                        insertarCelda(tbDatos, cicloArray[d])
                    }


                    console.log(cuotaEnd);
                } else{

                    let cicloArray = [null, g, 0, cuotaAme, capital]
                    let tbDatos = document.getElementById('tablaMarcha').insertRow(-1)
                    for (let d = 1; d <= 4; d++) {
                        insertarCelda(tbDatos, cicloArray[d])
                    }


                    console.log(cuotaAme);}
                }
            break;
        };
}
}



function insertarCelda(row, content) {
    stringContent = toString(content)
    let col = row.insertCell(-1)
    let newText = document.createTextNode(content)
    col.appendChild(newText)
  }
