<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>Agenda de Contactos</title>
</head>

<body>

    <div class="container py-4 rounded" style=" background-color: #9a35dc;">
        <h1 class="text-center text-white">Agenda de Contactos</h1>
        <h2 class="text-white contador"></h2> 
        <form  method="POST" return="true" id="formulario">
            <div class="row">
                <div class="col-md-3">
                <input type="hidden" name="id" id="id">

                    <label for="" class="text-white">Nombre</label>
                    <input class="form-control" type="text" name="nombre" id="nombre">
                </div>

                <div class="col-md-3">
                    <label for="" class="text-white">Apellido</label>
                    <input class="form-control" type="text" name="apellido" id="apellido">

                </div>
                <div class="col-md-3">
                    <label for="" class="text-white">Email</label>
                    <input class="form-control" type="email" name="email" id="email">
                </div>
                <div class="col-md-3">
                <label for="" class="text-white">Telefono</label>
                    <input class="form-control" type="text" name="telefono" id="telefono">
               </div>
                <div class="col-md-6">
                    <button type="submit" class="btn btn-dark mt-3 enviar">Agregar</button>
                </div>
                
            </div>
        </form>
    </div>

    <div class="container py-4">
        <h2>Lista de Contactos</h2>
        <div class="table-responsive">
        <table class="table table-bordered">
            <tr style=" background-color: #9a35dc;">
                <th class="text-white">Nombre</th>
                <th class="text-white">Apellido</th>
                <th class="text-white">Email</th>
                <th class="text-white">Telefono</th>
                <th class="text-white">Acciones</th>
            </tr>
           <tbody id="contactos-lista"></tbody>
        </table>
        </div>
      
    </div>
<script src="js/app.js"></script>
<script type="text/javascript" src="sweet-alert/sweetalert2@9.js"></script>

</body>

</html>