
var modal = document.getElementById("modalRegister");

var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// (function ($, Drupal) {

//     //Se agrega el checkmark desde js
//     $("label[for='edit-tyc']").prepend('<span class="checkmark"></span>');
//     $("label[for='edit-marketing']").prepend('<span class="checkmark"></span>');
 
//    $('form').validate({
//      ignore: [],
//      rules: {
//        "first_name": {
//          required: true,
//          spanish_words: true,
//        },
//        "last_name": {
//          required: true,
//          spanish_words: true,
//        },
//        "email": {
//          required: true,
//          email: true,
//          emailname: true,
//          email_exists: true,
//          emailDomainRestriction: true,
//        },
//        "phone": {
//          required: true,
//          phone_exists: true,
//          maxlength: 9,
//          //rangelength: [9,9],
          
//        },
//        "gender": {
//          required: true,
//          //validatemyselect: true,
//        },
//        "month": {
//          required: true,
//        },
//        "day": {
//          required: true,
//        },
//        "year": {
//          required: true,
//          agecheck: true,
//          validdate: true,
//        },
//        "city": {
//          required: true,
//        },
//        "DNI": {
//          required: true,
//          dni_exists: true,
//          //maxlength: 11, 
//          //minlength: 8,
//          rangelength: [8,11],
//        },
//        "tyc": {
//          required: true,
//        }
//      },
 
//      messages: {
//          "first_name": {
//            required: "Nombre inválido, debes ingresar un nombre válido",
//          },
//          "last_name": {
//            required: "Apellido inválido, debes ingresar un apellido válido",
//          },
//          "email": {
//            required: "Dirección de correo electrónico no válida",
//            email: "Dirección de correo electrónico no válida",
//            email_exists: "La dirección de correo que ingresaste ya fue registrada",
//          },
//          "phone": {
//            required: "Debes ingresar tu número de teléfono",
//            maxlength: "Maximo 9 Caracteres ",
//            //rangelength: "Debe ingresar 9 Caracteres",
//          },
//          "gender": {
//            required: "Debes seleccionar tu género",
//          },
//          "month": {
//            required: "Ingresar mes de nac",
//          },
//          "day": {
//            required: "Ingresar día de nac",
//          },
//          "year": {
//            required: "Ingresar año de nac",
//          },   
//          "DNI": {
//            required: "Debes ingresar un DNI/carnet extranjería válido",
//            maxlength: "Maximo 11 Caracteres",
//            minlength: "Minimo 8 Caracteres",
//            rangelength: "Debe ingresar Un nuemero entre 8 y 11 caracteres",
//          },
//          "city": {
//            required: "Debes seleccionar ciudad de residencia",
//          },
//          "tyc": {
//            required: "Debes aceptar términos y condiciones para continuar",
//          },
//          "question1": {
//            required: "Debes seleccionar una respuesta",
//          },
//          "question2": {
//            required: "Debes seleccionar una respuesta",
//          }
//        },
 
//       /* errorPlacement: function(error, element) {
//          if (element.is('gender:hidden')) {
//              error.insertAfter(element.next('.nice-select'));
//          } else {
//              error.insertAfter(element);
//          }
//      }*/
              
//    });
 
//  }) (jQuery, Drupal);