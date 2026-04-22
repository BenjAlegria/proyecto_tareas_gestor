# Documentación de Uso de Inteligencia Artificial

## Modelos utilizado
**Claude Sonnet 4**
Use Cloude para ayudarme con los codigos de la actividad
**Copilot**
Use Copilot para preguntarle sobre codigos que no entendia 

---

## Prompts utilizados

### Prompt 1

**Lo que escribí:**
> "necesito hacer un proyecto de gestor de tareas en html css y javascript es para la u. tiene que tener un formulario para agregar tareas y un tablero kanban con 3 columnas ayudame con la estructura del html"

**Lo que me respondió:**
Me explico como armar el HTML con etiquetas semanticas como header, main y footer. Me mostro como poner el formulario con los campos de descripción, prioridad y fecha, y las tres columnas del tablero con divs como lo indicaban los codigos de las intrucciones. Tambien me dijo que usara atributos id para poder acceder a los elementos desde javascript despues.

**Qué cambié yo:**
Tuve que cambiar los nombres de los id porque la evaluacion pedia unos especificos como `en-progreso` y `completadas`. También agregue los span con la clase contador dentro de cada h3 de las columnas porque la IA no los había puesto.

---

### Prompt 2

**Lo que escribí:**
> "necesito que al enviar el formulario se agregue la tarea en la columna pendientes q cada tarjeta tenga botones para cambiar de estado y uno para eliminarla y que los numeros de cada columna se actualicen solos"

**Lo que me respondió:**
Me dio el codigo con un array para guardar las tareas, una funcion para mostrarlas en el tablero y funciones para cambiar el estado y eliminar. Usaba metodos como `filter` y `forEach` que yo no entendia bien `por lo que tambien me ayude con la IA para preguntarle cosas que no sabia y que me explicara`.

**Qué cambié yo:**
Cambie los metodos que no entendia por `for`. Tambien cambie todos los `var` por `let` ya que no entendia la diferencia de var y let por lo que opte por usar let ya que es lo que hemos usado mas en clases y actividades. Agregue las validaciones con `alert()` para cada campo del formulario porque la IA los habia puesto todos juntos en una sola condicion y asi era mas claro.

### Prompt 3

**Lo que escribí:**
> "como hago el responsive? el profe pide 3 breakpoints para que se vea bien en distintos tamaños de pantalla"

**Lo que me respondió:**
Me explico que con `@media (max-width: ...)` puedo cambiar los estilos segun el tamaño de la pantalla. Me dijo que para el tablero lo mas importante era cambiar las columnas de flex-direction row a column en pantallas chicas para que no se vean aplastadas.

**Qué cambié yo:**
Le pregunte especificamente que tamaños usar y me recomendo 900px, 600px y 400px. Agregue los estilos que me faltaban para el header y los botones en pantallas muy pequeñas.