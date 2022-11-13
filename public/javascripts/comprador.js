const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});


const impresion1 = () =>{
    let expresionRegular =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let formularios = document.forms.formulario1;
    let correo1 = formularios.elements.correo1;
    let nombre = formularios.elements.usuario;
    let contra1 = formularios.elements.contraseña1;
    let apPaterno = formularios.elements.ap_paterno;
    let apMaterno = formularios.elements.ap_materno;
    if (
      !expresionRegular.test(correo1.value) ||
      nombre.value == "" ||
      contra1.value == "" ||
      apPaterno.value == "" ||
      apMaterno.value == ""
    ) {
      alert("Complete el formulario correctamnete");
    } else {
        alert("Registrado");
    }
}

const impresion = () => {
    let expresionRegular =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let formularios = document.forms.formulario;
    let correo = formularios.elements.correo;
    let contra = formularios.elements.contraseña;

    if (
      !expresionRegular.test(correo.value) ||
      contra.value == "" 
    ) {
      alert("Complete el formulario correctamnete");
    } else {
        alert("Bienvenido")
    }
};