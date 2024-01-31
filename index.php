<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tareas pendientes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/b96b78234f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="static/css/styles.css">
</head>
<body>    
    <div id="contenido">
        <div class="container">
            <h1>Tareas pendientes</h1>
            <div class="seccionTareas row">
                <div class="col-5">
                    <h2 class="text-center">Agregar tarea</h2>
                    <form  id="formulario">
                            <label for="tarea"></label>
                            <textarea id="tarea" class="form-control"></textarea><br>
                            <div class="text-center">                            
                                <input type="submit" class="btnAgregar" value="Agregar">
                            </div>
                    </form><br>
                </div>
                <div class="col-7   ">
                    <h2>Mis tareas:</h2>
                    <div id="listaTareas" style="font-size:25px;"></div>
                </div>
            </div>

        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title" id="exampleModalLabel">Editar tarea</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form action="" id="formularioModal">
                <textarea id="tarea" class="form-control"></textarea>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
        </div>
        </div>
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="static/js/scripts.js"></script>
</body>
</html>