//evento para crear nuevo prestamo
document.getElementById('formulario').addEventListener("submit", crear);

//funcion crear
function crear(){
    nombreObjeto = document.getElementById('objeto').value
    persona = document.getElementById('persona').value
    categoria = document.getElementById('categoria').value
    descripcion = document.getElementById('descripcion').value
    fecha = document.getElementById('fecha').value
    imagen = document.getElementById('img').value 

    let objeto = {
        nombreObjeto,
        persona,
        categoria,
        descripcion,
         fecha,
        imagen
    }
    if(localStorage.getItem("Objetos" === null)){
        let objetos = []
        objetos.push(objeto)
        localStorage.setItem("Objetos", JSON.stringify(objetos))
    }else{
        let objetos = localStorage.getItem(JSON.parse("Objetos"))
        objetos.push(objeto)
        localStorage.setItem("Objetos", JSON.stringify(objetos))

    }
    leer();
    e.preventDefault();
    console.log("Objeto guardado")
}
//funcion leer

function leer(){
    document.getElementById("tbody").innerHTML = ""
let objetos = JSON.parse(localStorage.getItem("Objetos"));

var i;
 for(i=0;i<objetos.length;i++){
 let nombreObjeto = objetos[i].nombreObjeto
 let persona = objetos[i].persona
 let categoria = objetos[i].categoria
 let descripcion = objetos[i].descripcion
 let fecha = objetos[i].fecha
 let imagen = objetos[i].imagen

 document.getElementById("tbody").innerHTML += `<tr>
 <td>${nombreObjeto}</td>
 <td>${persona}</td>
 <td>${categoria}</td>
 <td>${descripcion}</td>
 <td>${fecha}</td>
 <td>${imagen}</td>  
</tr>`

}

}

leer();