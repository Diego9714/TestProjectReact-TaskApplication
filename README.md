# Crear Tarea

Para crear nuestra lista de tareas creamos un formulario que se encargara de crear y almacenar todas y cada una de ellas. Dentro de dicho formulario tendremos que definir el valor del input donde escribiremos el nombre de la tarea en un useState , de modo que cada vez que creemos una nueva tarea esta estara actualizando el valor de dicho estado. Por ultimo definiremos un boton con el que enviaremos la tarea.

Dicho formulario ejecutara una funcion handleSubmit la cual se encargara de no recargar la página cada vez que enviemos una nueva tarea y que luego de ser enviada esta actualizara el valor del input a un valor nulo/vacio (para ello pondremos el setNewTaskName como un valor vacio) y almacenaremos en el localstorage el valor enviado por el input

Todo aquello se realizara dentro de una carpeta llamada components (y nuestro archivo se llamara TaskCreator) y lo que haremos es importar nuestro archivo en App.jsx

Tambien es importante recordar que:

* Generalmente se suele tener una carpeta dedicada en la que ubicaremos todos los componentes que creemos a lo largo del desarrollo de la aplicación.

* Es recomendable separar todo en componentes por separado, ya que de esa forma el codigo esta mas organizado y asi podemos saber con mayor exactitud donde realizar cada actividad.

