const userName = document.querySelector(".userName");
const socket = io();

Swal.fire({
  title: "Ingrese su Nombre",
  input: "text",
  inputAttributes: {
    autocapitalize: "off",
  },
  showCancelButton: false,
  confirmButtonText: "Ingresar",
}).then((result) => {
  userName.innerHTML = result.value;
});
