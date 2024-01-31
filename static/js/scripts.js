const listaTareas = document.querySelector('#listaTareas');
const formulario = document.querySelector('#formulario');
let tareas = [];

eventListeners();

function eventListeners() {
     formulario.addEventListener('submit', agregarTarea);

     document.addEventListener('DOMContentLoaded', () => {
          tareas = JSON.parse( localStorage.getItem('tareas') ) || []  ;
          console.log(tareas);
          crearHTML();
     });
}

function agregarTarea(e) {
     e.preventDefault();
     const tarea = document.querySelector('#tarea').value;
     
     if(tarea === '') {
          mostrarError('Un mensaje no puede ir vacio');
          return;
     }

     const tareaObj = {
          id: Date.now(),
          texto: tarea,
          completada: false
     }

     tareas = [...tareas, tareaObj];

     registrarLog('Agregada', tareaObj.id);
     
     crearHTML();

     formulario.reset();
}

function mostrarError(error) {
     const mensajeEerror = document.createElement('p');
     mensajeEerror.textContent = error;
     mensajeEerror.classList.add('error');

     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeEerror);

     setTimeout(() => {
          mensajeEerror.remove();
     }, 3000);
}

function crearHTML() {
     limpiarHTML();
     
     if(tareas.length > 0 ) {
          tareas.forEach( tarea =>  {
               const botonBorrar = document.createElement('a');
               botonBorrar.classList = 'borrarTarea';
               botonBorrar.innerHTML = '<i class="fa-solid fa-circle-xmark" onclick="borrarTarea(this)"></i>';

               const botonEditar = document.createElement('a');
               botonEditar.classList = 'editarTarea';
               botonEditar.innerHTML = '<i class="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-id="' + tarea.id + '" onclick="editarTarea(this)"></i>';
     
               const li = document.createElement('li');

               li.innerHTML = `<input class="form-check-input" type="checkbox" id="${tarea.id}" onclick="completarTarea(this)" ${tarea.completada ? 'checked' : ''}> ${tarea.texto}`;

               li.appendChild(botonBorrar);
               li.appendChild(botonEditar);

               li.dataset.tareaId = tarea.id;
               li.dataset.completada = tarea.completada;

               listaTareas.appendChild(li);
          });
     }

     sincronizarStorage();
}

function borrarTarea(e) {
     const id = e.parentElement.parentElement.dataset.tareaId;
     tareas = tareas.filter( tarea => tarea.id != id  );
     registrarLog('Eliminada', id);
     crearHTML();
}

function editarTarea(e) {
     const id = e.dataset.bsId;
     const tareaEditar = tareas.find(tarea => tarea.id == id);
 
     if (tareaEditar) {
         const modalTextarea = document.querySelector('#exampleModal textarea');
         modalTextarea.value = tareaEditar.texto;
 
         const guardarBoton = document.querySelector('#exampleModal .btn-primary');
         guardarBoton.onclick = function () {
             tareaEditar.texto = modalTextarea.value;
             registrarLog('Editada', id);
             crearHTML();
         };
     }
 }

function completarTarea(e){
     const id = e.parentElement.dataset.tareaId;

     const tareaCompleta = tareas.find(tarea => tarea.id == id);
     if (tareaCompleta) {
        if (tareaCompleta.completada) {
            registrarLog('Desmarcada como completada', id);
            tareaCompleta.completada = false;
        } else {
            registrarLog('Marcada como completada', id);
            tareaCompleta.completada = true;
        }
        crearHTML();
    }
}

function sincronizarStorage() {
     localStorage.setItem('tareas', JSON.stringify(tareas));
}

function limpiarHTML() {
     while(listaTareas.firstChild) {
          listaTareas.removeChild(listaTareas.firstChild);
     }
}

async function registrarLog(action, taskId) {
     const logEntry = {
         action: action,
         taskId: taskId
     };
 
     try {
         await fetch('log.php', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(logEntry),
         });
     } catch (error) {
         console.error('Error al escribir en el archivo de logs:', error);
     }
 }