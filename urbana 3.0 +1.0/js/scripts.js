function comprar() {
    Swal.fire(
        'Compra realizada!',
        'Dale al boton para terminar!',
        'success'
    )
}

/* ---------- FUNCIONES PARA REGISTER Y LOGIN ---------- */
    /* ---------- FUNCIONES PARA REGISTER ---------- */
    var reName, reLastName, reDocument, reEmail, rePassword, reComfirPassword;

        function enviarRegister() {
            reName = $("#reName").val();
            reLastName = $("#reLastName").val();
            reDocument = $("#reDocument").val();
            reNumber = $("#reNumber").val();
            reEmail = $("#reEmail").val();
            rePassword = $("#rePassword").val();
            reComfirPassword = $("#reComfirPassword").val();

            if(reName == "" || reLastName == "" || reDocument == "" || reNumber == "" || reEmail == "" || rePassword == "" || reComfirPassword == ""){
                Swal.fire(
                    'Error!',
                    'Llena los campos!',
                    'error'
                )
            }else{
                Swal.fire(
                    'Registro correcto!',
                    'Dale al boton para terminar!',
                    'success'
                )
                
                location.href = "../html/login.html";
            }
        }

        $(document).ready(function(){
            $("#form").validate({
                rules: {
                    reName: {required: true, minlength: 3, maxlength: 10},
                    reLastName: {required: true, minlength: 3, maxlength: 10},
                    reDocument: {required: true, minlength: 10, maxlength: 10},
                    reNumber: {required: true, minlength: 10, maxlength: 10},
                    reEmail: {required: true},
                    rePassword: {required: true, minlength: 8},
                    reComfirPassword: {required: true},
                    terminos: {required: true},
                },
                messages: {
                    reName: {
                        required: "El campo es obligatorio",
                        minlength: "La longitu del campo debe ser minimo de 3 caracteres",
                        maxlength: "La longitu del campo debe ser maximo de 10 caracteres",
                    },
                    reLastName: {
                        required: "El campo es obligatorio",
                        minlength: "La longitu del campo debe ser minimo de 3 caracteres",
                        maxlength: "La longitu del campo debe ser maximo de 10 caracteres",
                    },
                    reDocument:{
                        required: "El campo es obligatorio",
                        minlength: "La longitu del campo debe ser minimo de 10 caracteres",
                        maxlength: "La longitu del campo debe ser maximo de 10 caracteres",
                    },
                    reNumber: {
                        required: "El campo es obligatorio",
                        minlength: "La longitu del campo debe ser minimo de 10 caracteres",
                        maxlength: "La longitu del campo debe ser maximo de 10 caracteres",
                    },
                    reEmail: {
                        required: "El campo es obligatorio",
                    },
                    rePassword: {
                        required: "El campo es obligatorio",
                        minlength: "La longitu del campo debe ser minimo de 8 caracteres",
                    },
                    reComfirPassword: {
                        required: "El campo es obligatorio",
                    },
                    terminos: {
                        required: "El campo es obligatorio",
                    },
                }
            })
        })
    /* ---------------------------------------- */
    /* ---------- FUNCIONES PARA LOGIN ---------- */
        var document, password;

        function enviar() {
            document = $("#document").val();
            password = $("#password").val();

            if(document == "" || password == ""){
                Swal.fire(
                    'Error!',
                    'Llena los campos!',
                    'error'
                )
            }else{
                if(reDocument == document && rePassword == password){
                    Swal.fire(
                        'Iniciando cuenta!',
                        'Dale al boton para terminar!',
                        'success'
                    )
                }else{
                    Swal.fire(
                        'Error!',
                        'Dale al boton para terminar!',
                        'error'
                    )
                }
            }
        }

        $(document).ready(function(){
            $("#form").validate({
                rules: {
                    document: {required: true, minlength: 10, maxlength: 10},
                    password: {required: true},
                    remenber: {required: true},
                },
                messages: {
                    document:{
                        required: "El campo es obligatorio",
                        minlength: "La longitu del campo debe ser minimo de 10 caracteres",
                        maxlength: "La longitu del campo debe ser maximo de 10 caracteres",
                    },
                    password: {
                        required: "El campo es obligatorio",
                    },
                    remenber: {
                        required: "El campo es obligatorio",
                    },
                }
            })
        })
    /* ---------------------------------------- */
/* ---------------------------------------- */