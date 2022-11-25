const botonAlert = document.getElementById('sweetAlert')
const inputNombre = document.getElementById('nombre')
const botonToastify = document.getElementById('toastify')
const {DateTime} = luxon
botonAlert.onclick = () => {

const ahora = DateTime.now().setLocale('es').toLocaleString(DateTime.DATETIME_HUGE)

Swal.fire({
    title: 'BIENVENIDO',
    text: `${ahora}`,
    icon: 'error',
    //position: 'bottom-end',
    confirmButtonText: 'Continuar',
    showConfirmButton: false,
    //timer: 3000,
    background:'lightblue'
})
}

botonToastify.onclick = () => {
Toastify({
text: `Bienvenido ${inputNombre.value}`,
duration: 3000,
position: "left",
style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
}).showToast()
}

//const {DateTime} = luxon
//const DateTime = luxon.DateTime
//luxon.DateTime

//const ahora = DateTime.now()
//console.log(ahora.setLocale('es').toLocaleString(DateTime.DATETIME_HUGE))