# Crear Tarea

Para crear nuestra lista de tareas creamos un formulario que se encargara de crear y almacenar todas y cada una de ellas. Dentro de dicho formulario tendremos que definir el valor del input donde escribiremos el nombre de la tarea en un useState , de modo que cada vez que creemos una nueva tarea esta estara actualizando el valor de dicho estado. Por ultimo definiremos un boton con el que enviaremos la tarea.

Dicho formulario ejecutara una funcion handleSubmit la cual se encargara de no recargar la página cada vez que enviemos una nueva tarea y que luego de ser enviada esta actualizara el valor del input a un valor nulo/vacio (para ello pondremos el setNewTaskName como un valor vacio) y almacenaremos en el localstorage el valor enviado por el input

Todo aquello se realizara dentro de una carpeta llamada components (y nuestro archivo se llamara TaskCreator) y lo que haremos es importar nuestro archivo en App.jsx

Tambien es importante recordar que:

* Generalmente se suele tener una carpeta dedicada en la que ubicaremos todos los componentes que creemos a lo largo del desarrollo de la aplicación.

* Es recomendable separar todo en componentes por separado, ya que de esa forma el codigo esta mas organizado y asi podemos saber con mayor exactitud donde realizar cada actividad.

# Listar Tareas

En nuestro archivo App.js haremos uso del useState para crear un estado que se va a encargar de almacenar en una variable nuestra lista de tareas, ademas de establecer por defecto una lista con ciertos valores la cual ira creciendo a medida que vayamos creando e integrando nuevas tareas.

Luego crearemos una funcion (esta se llamada createNewTask) que se encargara de añadir a nuestra lista de tareas los nuevas tareas que queremos agregar. Dicha función es creada en nuestro archivo App.jsx y es enviada mediante un prop a nuestro archivo taskCreator , luego la incluimos dentro de nuestra funcion handleSubmit y le enviamos el valor de la nueva tarea que acabamos de crear. Una vez recibido dicho valor lo que hacemos es crear un nuevo array con los valores que ya teniamos establecidos por defecto y le añadimos el valor que recien creamos.

IMPORTANTE: Recordemos que en react cuando queremos añadir un elemento a un array no lo sobreescribimos directamente, si no que se crea una copia de dicho array y se le añade los valores que queremos agregar.

Dentro de createNewTask validaremos que el valor que estemos ingresando no este previamente registrado en nuestra lista, en caso de estarlo no nos dejara ingresarlo, pero en caso de que no este si nos dejara agregarlo.