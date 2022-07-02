//'{"first_prop":"Una cadena de texto","second_prop":125.30,"third_prop":[{"sub_prop_1":"Descripción - 1","sub_prop_2" :200},{"sub_prop_1":"Descripción-2","sub_prop_2":100}],"forth_prop" : true,"fifth_prop":null}';


const textual = '{"first_prop":"Una cadena de texto","second_prop":125.30,"third_prop":200}';

function parsear(x){
        
//creación del JSON
const jason = {};

//limpiar corchetes y llaves
const y = x.slice(0, -1)     
    
//Primera División por ","
const firstPars = y.split(',');

//Recorrer objetos dividiendo por ":" en clave Valor y carga al JSON
for (let i = 0; i < (firstPars.length); i++){

    const seconPars = firstPars[i].split(':');
    let key = seconPars[0];
    let value = seconPars[1];
    jason[key]=value;
    
}   

return jason;
}

parsear(textual);









/* 
//'{"first_prop":"Una cadena de texto","second_prop":125.30,"third_prop":[{"sub_prop_1":"Descripción - 1","sub_prop_2" :200},{"sub_prop_1":"Descripción-2","sub_prop_2":100}],"forth_prop" : true,"fifth_prop":null}';

const ejemplo4 = '{"first_prop":"Una cadena de texto","second_prop":125.30,"third_prop":{"sub_prop_1":"Descripción - 1","sub_prop_2" :200}}';


function parsear3(string){
        
    //Crear Objeto
    const objeto ={};

    //limpiar corchetes y llaves
    const y = string.slice(0, -1) 

    //recorrer el string
    for (let i = 0; i < (y.length); i++){
        
        //indice de corte
        let initSlice = 0;

        // Banderas de sub-objetos
        let objetcOpen = False;
        let objectClose = False;
        let arrayOpen = False;
        let arrayClose = False;

        if (i == '{'){ objetcOpen = True}
        const aperturaObject = i;
        if (i == '}'){ objectClose = True};
        const cierreObject = i;
        if (i == '['){ arrayOpen = True};
        const aperturaArray = i;
        if (i == ']'){ arrayClose = True};
        const cierreArray = i;

        //Si las banderas son simetricas, se hace split en llave valor y se devuelve.
        if (i === ','){ 
           
            if (objetcOpen == False && arrayOpen == False){
            
                const subString = y.slice(initSlice,i);
                const seconPars = subString.split(':');
                let key = seconPars[0];
                let value = seconPars[1];
                objeto[key]=value;
                initSlice = i+1;     
                

            }else if(arrayOpen == True || objetcOpen== True){
                let corteSiguiente = 0;
                let recSubString = y.slice(initSlice,i);
                parsear3(recSubString);
            
        };
        
      
        };
        return objeto;
    };
};

//parsear3(ejemplo4); */


const ejemplo4 = '{"first_prop":"Una cadena de texto","second_prop":125.30,"third_prop":{"sub_prop_1":"Descripción - 1","sub_prop_2" :200}}';


function parsear3(string){
        
    //Crear Objeto
    const objeto ={};

    //limpiar corchetes y llaves
    const y = string.slice(0, -1) 

    //recorrer el string
    for (let i = 0; i < (y.length); i++){
        
        //indice de corte
        let initSlice = 0;

        const objectOpen = 0;
        const arrayOpen = 0;

        if (i == '{'){ objectOpen = + 1}
        if (i == '}'){ objectOpen = -1};
        if (i == '['){ arrayOpen = +1 };
        if (i == ']'){ arrayOpen = -1};
        

        if (i === ','){ 
           
            if (objectOpen == 0 && arrayOpen == 0){
            
                const subString = y.slice(initSlice,i);
                const seconPars = subString.split(':');
                let key = seconPars[0];
                let value = seconPars[1];
                objeto[key]=value;
                initSlice = i+1;     
                

            }else if(arrayOpen == True || objetcOpen== True){
                let corteSiguiente = 0;
                let recSubString = y.slice(initSlice,i);
                parsear3(recSubString);
            
        };
        
      
        };
        return objeto;
    };
};





















//Primer Intento

// const parsearText = () => { 


// const textual = document.getElementById("text");

//     console.log(textual)



//     function parsear(x){
    
//             //creación del JSON
//         const jason = {};
    
//             //Primera División por ","
//         const firstPars = x.split(',');

//             //Recorrer objetos dividiendo por ":" en clave Valor y carga al JSON
//         for (let i = 0; i < (firstPars.length); i++){

//             const seconPars = firstPars[i].split(':');
//             let key = seconPars[0];
//             let value = seconPars[1];
//             jason[key]=value;
            
//         }   
  
//     return jason;
//     }

// //parsear(parrafo);

// }













// //Segundo intento

// const parsearText2 = () => { 


//     const textual = document.getElementById("text");
    
//         console.log(textual)
    
    
    
    
    
//         function parsear(x){
        
//                 //creación del JSON
//             const jason = {};

//             //limpiar corchetes y llaves
//             const y = x.slice(0, -1)     
                
//                 //Primera División por ","
//             const firstPars = y.split(',');
    
//                 //Recorrer objetos dividiendo por ":" en clave Valor y carga al JSON
//             for (let i = 0; i < (firstPars.length); i++){
    
//                 const seconPars = firstPars[i].split(':');
//                 let key = seconPars[0];
//                 let value = seconPars[1];
//                 jason[key]=value;
                
//             }   
      
//         return jason;
//         }
    
//     //parsear(parrafo);
    
//     }







//'{"first_prop":"Una cadena de texto","second_prop":125.30,"third_prop":[{"sub_prop_1":"Descripción - 1","sub_prop_2" :200},{"sub_prop_1":"Descripción-2","sub_prop_2":100}],"forth_prop" : true,"fifth_prop":null}';

//tomar como argumento el objeto a poblar y el string
//le quitamos la primera y ultima "{}"
//buscamos las llaves interiores cullos valores sean objetos encontrando la primera "{" y la última "}"
//asignamos valores a las propiedades y usamos recursividad sobre la substring que encontramos definida a partir de las llaves
//asignamos los valores que no sean objetos a las propiedades correspondientes
//usamos recursividad sobre las llaves y valores que si sean objetos
//retornamos el objeto

// function recursiveParse(obj, st){
//     var subString = "";
//     var subString2 = "";
//     st = st.substring(1, st.length - 1);
//     var start = st.indexOf("{");
//     if(start != -1){
//     subString = st.substring(0, start);
//     //obtenemos una substring a partir de la última coma de "subString"
//     var lastComma = subString.lastIndexOf(",");
//     var lastProp = subString.substring(lastComma + 1, subString.length - 1 );
//     console.log("lastProp" + lastProp);

//     //removemos lastProp de subString
//     subString = subString.substring(0, lastComma);
//     console.log("subString" + subString);

//     //buscamos donde se cierra este objeto
//     var bracketCount = 0;
//     for(var i = 0; i < st.substring(start, st.length).length; i++){
//         if(st.substring(start, st.length)[i] === "{"){
//             bracketCount++;
//         }
//         if(st.substring(start, st.length)[i] === "}"){
//             bracketCount--;
//         }
//         if(st.substring(start, st.length)[i] === "}" && bracketCount == 0){
//             var end = i + start + 1 ;
//             break;
//         }
//     }
//     //fin de la búsqueda del objeto
    
//     subString2 = st.substring(start, end);
//     console.log("subString2" +subString2);
    
//     }else{
//         //En caso de que no haya objetos interiores
//         var subString = st;
//     }
//     var properties = subString.split(",");
//     for(var i = 0; i < properties.length; i++){
//         //separamos por ":" y obtenemos el valor
//         var value = properties[i].split(":")[1];
//         //obtenemos el nombre de la propiedad
//         var prop = properties[i].split(":")[0];
//         //quitamos """  de las keys
//         prop = prop.substring(1, prop.length - 1);
//         //asignamos el valor a la propiedad
//         obj[prop] = value;
//     }
//     if(subString2.length != 0){
//         console.log('recursive:' + subString2)
//         //quitamos """ de lastProp
//         lastProp = lastProp.substring(1, lastProp.length - 1);
//         obj[lastProp] = recursiveParse({}, subString2);
//     }
//     if(st.substring(end, st.length).length && subString2 != ""){
//         console.log(end + ' ' + st.length);
//         console.log('recursive to do:' + '{' + st.substring(end + 1, st.length) + '}') 
//         recursiveParse(obj, '{' + st.substring(end + 1, st.length) + '}') 
//     }
//     return obj;
// }

// const textual = '{"first_prop":"Una cadena de texto","second_prop":125.30,"third_prop":[{"sub_prop_1":"Descripción - 1","sub_prop_2" :200},{"sub_prop_1":"Descripción-2","sub_prop_2":100}],"forth_prop" : true,"fifth_prop":null}';
// const objeto = recursiveParse({}, textual);
// delete objeto[""];

// console.log(objeto)



















function parsearText (){
    let text = document.getElementById("text").value;
    console.log(text)
};



/**
 * 
 * 
 * 
 * Fución con Recursividadd
 * 
 * 
 *  
 *  
 */


//const textual = '{"first_prop":"Una cadena de texto","second_prop":125.30,"third_prop":200}';

function parsear(stringJson){
        
    //creación del JSON
    const json = {};
    //limpiar corchetes y llaves
    const stringLimpio = stringJson.slice(1, -1) 

    if (stringLimpio.indexOf("{") == -1 && stringLimpio.indexOf("[") == -1){
    
        //Primera División por ","
        const arregloStringPorComa = stringLimpio.split(',');
        //Recorrer objetos dividiendo por ":" en clave Valor y carga al JSON
        for (let i = 0; i < (arregloStringPorComa.length); i++){

            const arregloClaveValor = arregloStringPorComa[i].split(':');
            let key = arregloClaveValor[0];
            let value = arregloClaveValor[1];
            json[key]=value;
            
        }   
        return json;
        
    }else{


        // si hay "{".
        if(stringLimpio.indexOf("{") != -1){
            
            let desdeLlaveString = stringLimpio.indexOf("{");
            let llaveStringDesde = stringLimpio.substring(desdeLlaveString);


            // si no hay otro "{", cortar hasta indexof."}", y mandar el nuevo string a parsear.
            if( (llaveStringDesde.slice(1)).indexOf("{") == -1 ){
             
                let hastaLlaveString = (stringLimpio.indexOf("}") + 1);
                let nuevoLlaveString = stringLimpio.slice(desdeLlaveString,hastaLlaveString);
                parsear(nuevoLlaveString);           



            //SI HAY OTRO {, tomo el nuevo como indice y corto hasta el final, y 
            // volver a llamar la función mandando el string desde ese nuevo { 
            }else{

            let nuevoDesde = (llaveStringDesde.slice(1)).indexOf("{");
            let nuevoLlavesStringDesde = stringLimpio.substring(nuevoDesde);

            parsear(nuevoLlavesStringDesde); 
                
            }

        // hay"[".
        }else{ 

            let desdeCorcheteString = stringLimpio.indexOf("[");
            let corcheteStringDesde = stringLimpio.substring(desdeCorcheteString);


            // si no hay otro "[", cortar hasta indexof."]", y mandar el nuevo string a parsear.
            if( (corcheteStringDesde.slice(1)).indexOf("[") == -1 ){
             
                let hastaCorcheteString = (stringLimpio.indexOf("]") + 1);
                let nuevoCorcheteString = stringLimpio.slice(desdeCorcheteString,hastaCorcheteString);
                parsear(nuevoCorcheteString);           



            //SI HAY OTRO "[", tomo el nuevo como indice y corto hasta el final, y 
            // volver a llamar la función mandando el string desde ese nuevo [ 
            }else{

            let nuevoDesde = (corcheteStringDesde.slice(1)).indexOf("[");
            let nuevoCorcheteStringDesde = stringLimpio.substring(nuevoDesde);
            parsear(nuevoCorcheteStringDesde); 

            }

        }

    } 
    
}

parsear(textual);



