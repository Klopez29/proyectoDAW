//evento para crear nuevo prestamo
document.getElementById('formulario').addEventListener('submit', saveTask);

function saveTask(e) {
  let objeto = newFunction();
  let persona = document.getElementById("persona").value;
  let categoria = document.getElementById('categoria').value;
  let descripcion = document.getElementById("descripcion").value;
  let fecha = document.getElementById("fecha").value;
  let img = document.getElementById("img").value;
  console.log(categoria)

  let task = {
    objeto,
    persona,
    categoria,
    descripcion,
    fecha,
    img
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formulario').reset();
  e.preventDefault();
}
function newFunction() {
    return document.getElementById('objeto').value;
}

//eliminar
function deleteTask(objeto) {
    console.log(objeto)
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].objeto == objeto) {
        tasks.splice(i, 1);
      }
    }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}
//funcion obtener
function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let objeto = tasks[i].objeto;
    let fecha = tasks[i].fecha;
    let persona = tasks[i].persona;
    let categoria = tasks[i].categoria;
    let descripcion = tasks[i].descripcion;
    let img = tasks[i].img;
    
    tasksView.innerHTML += `<tr>
    <td>${objeto}</td>
    <td>${persona}</td>
    <td>${categoria}</td>
    <td>${descripcion}</td>
    <td>${fecha}</td>
    <td>${img}</td>  
    <td><a href="#" onclick="deleteTask('${objeto}')" class="btn btn-danger ml-5">Eliminar</a></td>
    <td><a href="#" onclick="editar('${objeto}')" class="btn btn-success ml-5">Editar</a></td>
    </tr>`;
  
    const hoy = new Date() ;
  var fechaVec =  hoy.toLocaleDateString();
  if(fecha == fechaVec ){
   document.getElementById("alerta").innerHTML = "El prestamo de uno de tus objetos esta por vencerse";
  }
  }


}

function editar(objeto){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].objeto == objeto) {
      document.getElementById("body").innerHTML = `
      <div class="row">
    <div class="col-md-5">
        <div class="card">
            <div class="card-header">
                <h2>Editar Prestamo</h2>
            </div>
            <div class="card-body">
                <form autocomplete="off" >
                    <div class="form-group">
                        <!--Objeto-->
                        <label for="formGroupExampleInput">Objeto Prestado:</label>
                        <input type="text" id="newobjeto" class="form-control" placeholder="${tasks[i].objeto}" >
                    </div><br>
                   <!--Nombre-->
                    <div class="form-group">
                        <label for="formGroupExampleInput">¿A quien se lo prestas?</label>
                        <input type="text" id="newpersona" class="form-control" placeholder="${tasks[i].persona}">
                    </div><br>
                     <!--categoria-->
                   <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="inputGroupSelect01">Categoria</label>
                        </div>
                        <select class="form-control" id="newcategoria" placeholder="${tasks[i].categoria}">
                          <option selected>Seleccione</option>
                          <option >Peliculas</option>
                          <option >Libros, comics</option>
                          <option >Material Deportivo</option>
                          <option> Herramientas</option>
                          <option >Musica</option>
                          <option >Ropa</option>
                          <option >Dinero</option>
                          <option>Videojuegos </option>
                          <option >Otros </option>
                        </select>
                      </div>
                      <!-- detalle-->
                    <div class="form-group">
                        <label for="formGroupExampleInput">Detalle del prestamo:</label>
                        <textarea  id="newdescripcion" class="form-control" placeholder="${tasks[i].descripcion}"></textarea>
                    </div><br>
                    <!--fecha-->
                    <div class="form-group">
                        <label for="formGroupExampleInput">Fecha de devolución:</label>
                        <input type="date" id="newfecha" class="form-control"  min="2021-10-01" placeholder="${tasks[i].fecha}">
                    </div><br>
                    <!--imagen-->
                    <div class="form-group">
                        <label for="formGroupExampleInput">Imagen</label><br>
                          <input type="file"  id="newimg" class="form-control" >
                      </div><br>
                </form>
                <button  class="btn btn-success" onclick="actualizar(${i})">Guardar</button>
                
            </div>
        </div>
    </div>
    
      `;
      }
    }
}
//<button  class="btn btn-primary">Cancelar</button>
               
function actualizar(i){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks[i].objeto = document.getElementById("newobjeto").value;
  tasks[i].persona = document.getElementById("newpersona").value;
  tasks[i].categoria = document.getElementById("newcategoria").value;
  tasks[i].descripcion = document.getElementById("newdescripcion").value;
  tasks[i].fecha = document.getElementById("newfecha").value;
  tasks[i].img = document.getElementById("newimg").value;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  vistaPrincipal();
}

//funcion para  mostrar primera interfaz
function vistaPrincipal(){
  location.reload();
}

getTasks();