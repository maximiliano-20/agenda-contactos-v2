// Variables
const formulario = document.querySelector('#formulario');
const contactosHTML = document.querySelector('#contactos-lista')
const btnEnviar = document.querySelector('.enviar');
const contador = document.querySelector('.contador')
let editando;

// Eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarContactos();
    contarContactos();
});

formulario.addEventListener('submit',guardarContacto)
contactosHTML.addEventListener('click',editarContacto);
contactosHTML.addEventListener('click',confirmarContacto);

// Funciones
function guardarContacto (e){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;

    if(nombre == "" || apellido == "" || email == "" || telefono == ""){
        Swal.fire({
        	icon : 'error',
        	title : 'Campos Vacios',
        	text : 'Debes rellenar todos los campos'
        });

        return

   }else if (!isNaN(nombre)  || !isNaN(apellido)) {
        Swal.fire({
            icon : 'error',
            title : 'Caracteres no Validos',
            text : 'El nombre y apellido deben ser caracteres'
       });

       return
 } 

 if (editando) {
    actualizarContacto();
    btnEnviar.textContent = 'Agregar';
    editando = false;
    formulario.reset();

}else{
    agregarContacto();
}

  
}

async function agregarContacto () {

	try {
		const url = 'php/agregar-contacto.php';
		const datos = new FormData(formulario);
        const resultado = await fetch(url,{              
              method : 'POST',
              body : datos
        });

        const respuesta = await resultado.json();

         Swal.fire({
        	icon : 'success',
        	title : 'Correcto',
        	text : 'Contacto Agregado Correctamente'
        });

        formulario.reset();
        mostrarContactos();

	} catch(e) {
		console.log(e);
	}
}



async function mostrarContactos(){
    const url = "php/mostrar-contacto.php";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    contarContactos();
    traerContactos(resultado)

}


function traerContactos (resultado){


    let html = "";
    resultado.forEach(contacto => {
        
      const {id,nombre,apellido,email,telefono} = contacto;

        html+= `
            <tr>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${email}</td>
                <td>${telefono}</td>
                <td>
      	 		 <a class="btn btn-info text-white" data-id="${id}" >Editar</a>
      	 		 <a class="btn btn-danger " data-id="${id}">Borrar</a>
      	 	   </td>
            </tr>
        `
    });

    contactosHTML.innerHTML = html;
}


async function editarContacto(e) {
    if(e.target.classList.contains('btn-info')){
      const id = parseInt( e.target.dataset.id);
      const url = "php/editar-contacto.php";
      const datos = new FormData();
      datos.append('id',id);
      const respuesta = await fetch(url,{
         method:'POST',
         body:datos
      });
      const resultado = await respuesta.json();
      console.log(resultado)
      resultado.forEach((contacto)=>{
          const { id,nombre,apellido,email,telefono } = contacto;
          document.querySelector('#id').value = id;
          document.querySelector('#nombre').value = nombre;
          document.querySelector('#apellido').value = apellido;
          document.querySelector('#email').value = email;
          document.querySelector('#telefono').value = telefono;
          btnEnviar.textContent = 'Editar';
          editando = true;
      })
    }
    
}

async function actualizarContacto(){

    try {
        const url = "php/actualizar-contacto.php";
        const datos = new FormData(formulario);
        const respuesta = await fetch(url,{
               method:'POST',
               body:datos
        });
        const resultado = await respuesta.json();
    
        Swal.fire({
            icon : 'success',
            title : 'Correcto',
            text : 'Contacto Actualizado Correctamente'
        });
        mostrarContactos();   
    } catch (error) {
        console.log(error);
    }
   
}


function confirmarContacto (e) {
	if (e.target.classList.contains('btn-danger') ) {

		Swal.fire({
			title : 'Estas Seguro de eliminar el contacto',
			text : 'No podras revertir los cambios',
			icon : 'warning',
			showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si Eliminar!'

		}).then((result) => {
          if (result.isConfirmed) {
          	const idContacto = parseInt (e.target.dataset.id);
		    eliminarContacto(idContacto);
             Swal.fire(
            'Eliminado!',
            'El contacto se elimino correctamente',
            'success'

           )

         }

      });
		
	}
}

async function eliminarContacto(id){
       const url = "php/eliminar-contacto.php";
       const datos = new FormData();
       datos.append('id',id);
       const respuesta = await fetch(url,{
           method:'POST',
           body:datos
       });
       const resultado = respuesta.json();
       console.log(resultado);
       mostrarContactos();
}





async function contarContactos(){
    const url = "php/contar-contactos.php";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const numeroContactos = parseInt(resultado[0][0]);
    contador.textContent = `Contactos ${numeroContactos}`
}