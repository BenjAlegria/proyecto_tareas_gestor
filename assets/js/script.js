// ===== GESTOR DE TAREAS =====

// Array para guardar las tareas
let tareas = [];
let contadorId = 1;

// Obtener elementos del formulario
let form = document.getElementById("form-tarea");
let inputDescripcion = document.getElementById("descripcion");
let inputPrioridad = document.getElementById("prioridad");
let inputFecha = document.getElementById("fecha");

// Escuchar el envío del formulario
form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Validación: campos no vacíos
    if (inputDescripcion.value.trim() === "") {
        alert("Por favor escribe una descripción.");
        return;
    }
    if (inputPrioridad.value === "") {
        alert("Por favor selecciona una prioridad.");
        return;
    }
    if (inputFecha.value === "") {
        alert("Por favor selecciona una fecha límite.");
        return;
    }

    // Crear objeto tarea
    let nuevaTarea = {
        id: contadorId,
        descripcion: inputDescripcion.value.trim(),
        prioridad: inputPrioridad.value,
        fecha: inputFecha.value,
        estado: "pendiente"
    };

    contadorId++;

    // Agregar tarea al array
    tareas.push(nuevaTarea);

    // Limpiar formulario
    form.reset();

    // Actualizar el tablero
    mostrarTareas();
});

// Función para mostrar todas las tareas en el tablero
function mostrarTareas() {
    // Limpiar los contenedores
    document.getElementById("container-pendientes").innerHTML = "";
    document.getElementById("container-progreso").innerHTML = "";
    document.getElementById("container-completadas").innerHTML = "";

    let cantPendientes = 0;
    let cantProgreso = 0;
    let cantCompletadas = 0;

    // Recorrer el array de tareas y mostrar cada una
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i];
        let tarjetaHTML = crearTarjeta(tarea);

        if (tarea.estado === "pendiente") {
            document.getElementById("container-pendientes").innerHTML += tarjetaHTML;
            cantPendientes++;
        } else if (tarea.estado === "progreso") {
            document.getElementById("container-progreso").innerHTML += tarjetaHTML;
            cantProgreso++;
        } else if (tarea.estado === "completada") {
            document.getElementById("container-completadas").innerHTML += tarjetaHTML;
            cantCompletadas++;
        }
    }

    // Actualizar contadores
    document.getElementById("contador-pendientes").textContent = cantPendientes;
    document.getElementById("contador-progreso").textContent = cantProgreso;
    document.getElementById("contador-completadas").textContent = cantCompletadas;
}

// Función para crear el HTML de una tarjeta
function crearTarjeta(tarea) {
    let botones = "";

    if (tarea.estado === "pendiente") {
        botones = '<button class="btn-progreso"  onclick="cambiarEstado(' + tarea.id + ', \'progreso\')">En Progreso</button>' +
                  '<button class="btn-completar" onclick="cambiarEstado(' + tarea.id + ', \'completada\')">Completar</button>' +
                  '<button class="btn-eliminar"  onclick="eliminarTarea(' + tarea.id + ')">Eliminar</button>';
    } else if (tarea.estado === "progreso") {
        botones = '<button class="btn-completar" onclick="cambiarEstado(' + tarea.id + ', \'completada\')">Completar</button>' +
                  '<button class="btn-eliminar"  onclick="eliminarTarea(' + tarea.id + ')">Eliminar</button>';
    } else if (tarea.estado === "completada") {
        botones = '<button class="btn-reabrir"  onclick="cambiarEstado(' + tarea.id + ', \'pendiente\')">Reabrir</button>' +
                  '<button class="btn-eliminar" onclick="eliminarTarea(' + tarea.id + ')">Eliminar</button>';
    }

    let html = '<div class="tarjeta">' +
                   '<p>' + tarea.descripcion + '</p>' +
                   '<span class="prioridad ' + tarea.prioridad + '">' + tarea.prioridad.toUpperCase() + '</span>' +
                   '<p class="fecha">Fecha: ' + tarea.fecha + '</p>' +
                   '<div class="tarjeta-botones">' + botones + '</div>' +
               '</div>';

    return html;
}

// Función para cambiar el estado de una tarea
function cambiarEstado(id, nuevoEstado) {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            tareas[i].estado = nuevoEstado;
            break;
        }
    }
    mostrarTareas();
}

// Función para eliminar una tarea
function eliminarTarea(id) {
    let nuevaLista = [];
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id !== id) {
            nuevaLista.push(tareas[i]);
        }
    }
    tareas = nuevaLista;
    mostrarTareas();
}
